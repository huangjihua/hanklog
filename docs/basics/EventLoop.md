# EventLoop

## Event loop如何理解
 面试的经常会被问到，什么事Event loop，面试官想知道什么呢，我们又该如何回答呢？

 Event Loop顾名思义就是事件循环，为什么要用事件循环？因为V8是`单线程`的，即同一时间只能干一件事情，但是文件的读取和网络IO处理会很慢，并且时间不确定的，如果同步等待它们的响应，估计用户早飞了，于是我们就把这个事件加入到一个`事件队里（task）`,等到事件完成时，event loop再执行一个事件队列。

## Event loop执行顺序
 注意：每种异步事件加入的事件队列是不一样的，唯一的2个限制是同一个任务源中的事件必须属于同一个队列，并且必须在每个队列中按照插入顺序处理任务。也就是说由系统提供的执行task的方法，如 setTimeout/setInterval/setImmediate 会在一个task，网络IO会在一个task,用户事件会在一个task,event loop将会按照以下顺序执行：

- 1.update_time
    在事件循环的开头，这一步的作用实际上是为了获取以下系统时间，以保证之后的timer触发的准确性。（好像也不太准确...）
- 2.timer
    事循环跑到这个阶段的时候，要检查是否有到期的timer,其实也就是setTimeout和setInterval这种类型的timer,到期了，就会执行他们的回调。
- 3.I/O callbacks
    处理异步事件的回调，比如网络I/O,比如文件读取I/O。当这些I/O动作都结束的时候，这个阶段会触发他们的回调。
- 4.idle,prepare
    这个阶段内部做一些动作，与理解事件循环没啥关系
- 5.I/O poll阶段
    这个阶段相当有意思，也是事件循环设计的一个有趣的点，这个阶段是`选择运行`（不一定会运行，后续详解）的。 
- 6.check
    执行setImmediate操作
- 7. Close callbacks
    关闭I/O 的动作，比如文件描述符的关闭，链接断开，等等
    ![Event loop执行顺序](/hanklog/images/eventloop-1.jpg)

除了task还有一个`microtask`（微任务），这一个概念是ES6提出`Promise`以后出现的。这个`microtask queue`只有一个。并且会在且一定会在每一个task后执行，且执行是按顺序的。加入到`microtask`的事件类型有`Promise.resolve().then()`, `process.nextTick()` 值得注意的是，event loop一定会在执行完`microtask`以后才会寻找新的可执行的task队列。而`microtask`事件内部又可以产生新的`microtask`事件比如

``` javascript
(function microtask() {
    process.nextTick(() => microtask())
})()
```
这样就会不断的在`microtask queue`添加事件，导致整个eventloop堵塞

最后就是一个渲染的事件队列，这个队列只出现在浏览器上，并且执行环境会根据情况决定执行与否(可能执行很多task queue也不执行渲染队列)。它如果执行则一定会在microtask后执行，通过`requestAnimationFrame(handle)` 方法,能够保证中间的代码一定能在下一次执行渲染函数前执行

补充常见的产生`microtask`和`task`事件的方法
**microtasks:**
- process.nextTick
- promise
- Object.observe
- MutationObserver
**tasks:**
- setTimeout
- setInterval
- setImmediate
- I/O
- UI渲染
- Tips

我们通过node运行一个js文件，如果没有可执行事件的事件队列，进程就会退出，那么怎么不让它退出呢？
setInterval方法，这货会一直循环建立新的事件，这样能够保证node进程不退出

监听 beforeExit 事件，通过process.on('beforeExit', handle) 这个事件在node进程退出前会触发，但是如果这里面的handle包含了一个可以生成异步事件的操作，则node进程也不会退出。手动触发process.exit(EXIT_CODE)不会触发该事件

setInterval会导致node进程不能正常退出，但是如果希望即使有setInterval也能正常退出怎么办(有一些循环并不希望挂起node进程)？
const timer = process.setInterval(handle, deley) 调用setInterval方法会返回一个timer，调用 timer.unref() 则event-loop判断除它以外，没有可进行的事件队列后也会推出

process.on('exit', handle)中，handle里的异步事件不能执行
exit事件在手动执行process.exit(EXIT_CODE)后，或者event loop中没有可执行的事件队列 时触发。触发 exit 事件后，执行环境就不会再生成新的 事件队列了，因此这里面的异步事件都会被强制队列