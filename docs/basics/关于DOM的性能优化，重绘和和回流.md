# 关于DOM性能的优化


## 重绘与回流的关系？

首先在网页里面的DOM应该是静态的，每一个节点长什么样，里面写的什么，都是静态的不会改变的，会在第一次加载的时候根据一些信息进行绘制，之所以会发生改变是因为js脚本里改变了dom结构或者css里触发了一些变化，在js修改dom之后，网页会重新渲染这个网页，这就触发了回流，比如改变了一个元素的宽高，这个宽高影响了其他元素的位置，所以浏览器需要对视图进行变化，而当某个元素没有发生影响其他元素以及只对自身样式做出改变的话只会触发重绘不会回流。 
可以这么理解，回流是画骨架，重绘是上色，骨架变化了之后对应地方的颜色也需要重新画，但只是变了个颜色，就不用改变骨架位置。 

> 回流一定会导致重绘，重绘不一定会回流。 



回流触发的几种情况： 
1. dom结构变化，增减node节点等 
2. 位置信息发生变化，宽高边距等 
3. 初始化的时候 
4. 浏览器大小发生改变需要适应的时候 onresize事件触发的时候 
5. 数据获取的时候

到这里就可以说，更改元素位置就会出发回流，重绘，改变元素样式只会重绘，不会回流。还要一种情况就是获取元素信息的时候，会触发回流，就是上面说的第5种情况，数据获取的时候，因为浏览器要返回给你一个最新正确的数据，所以会重新绘制。 
以下几种情况：

offsetTop, offsetLeft, offsetWidth, offsetHeight

scrollTop/Left/Width/Height

clientTop/Left/Width/Height

width,height

请求了getComputedStyle(), 或者 IE的 currentStyle

所以为了更好的性能，在获取不会频繁改变的元素的位置信息时，最好进行一个变量缓存。 
在运行一个动画的时候最好把元素脱离文档流，以免它的变化影响其他元素导致多个元素参与回流。 
需要频繁更改元素的时候（比如增减多个子节点）可以把display改成none，完成之后再次恢复，这样只会触发两次回流。 
还有就是下面要说的使用documentFragment


## documentFragment,requestAnimationFrame的应用
ocumentFragment是一个虚拟的Dom列表，可以储存待处理的xml片段（el元素），因为他不在真实的Dom结构中，所以对它所做的操作不会触发浏览器的回流，只会在他插入dom的时候触发一次而已。 
用法：

``` js
const fragment=document.createDocumentFragment();
for(let i=0;i<100;i++){
    let div=document.createElement('div');
    div.innerText="Hello "+ i;
    fragment.appendChild(div);
}
document.querySelector('#app').appendChild(fragment);
```
上面把多个动态生成的div插入到了虚拟节点里，在最后完成之后只做了一次插入，这样就只会触发一次回流。 
但是在数量太多的时候，哪怕是一次插入，也会因为浏览器渲染不过来导致失去响应，这时候就需要增加一定的时间间隔，可以使用setTimeout，也可以使用一个api 
requestAnimationFrame.

requestAnimationFrame()方法是为了动画专门使用的api，在通常的动画中会定义一个定时器来几秒几秒的发生变化，但是为了性能和更加方便，它提供了这个可以在1秒钟运行大约60次(≈16.7ms)回调的api。 
而且会把这一刻所有的dom操作缓存起来，在一次回流重绘中完成操作，它的每次调用并不是指定时间的，而是跟紧浏览器的刷新频率，所以可以做到：在浏览器的刷新频率时进行回流，保证性能效率。 
当页面不是激活状态的情况下，这个函数将会停止回调，进行暂停来节省cpu操作。激活时再继续。 
在元素隐藏时不会进行重绘回流。

它的返回值为一个long的标识符，和settimeout一样，可以调用cancelAnimationFrame()传入这个标识符来取消这个回调。 
使用这个可以在浏览器下一次’刷新’的时候运行指定的回调，在这里来插入这多个节点。

``` js
      const wapper=document.querySelector('#wapper');
      let all=100000,num=20,duration=all/num,count=0;
      function add(){
          let fragment=document.createDocumentFragment();
          //创建虚拟dom
          for(let i=0;i<num;i++){
              let div=document.createElement('div');
              div.innerText='我是'+(num*count+i);
              fragment.appendChild(div);
          }
          wapper.appendChild(fragment)
          count++;
          if(count<duration){
              requestAnimationFrame(add);//在浏览器
          }
      }
      add();
```
使用这样可以大批量插入很多数据 页面也不会失去响应卡住，可以保证比较好的性能.

 
