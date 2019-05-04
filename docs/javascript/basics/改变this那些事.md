# 改变 `this` 的那些事

## 改变`this` 的指向方法有哪些?

- 在函数内部使用 `_this = this`
- 使用 `apply`、`call`、`bind`
- `new` 实例化一个对象
- 使用 `ES6` 的箭头函数

## 在函数内部使用`_this = this`

在函数内部利用`_this`变量将调用函数对象保存,然后在函数内使用它,这样`_this`就不会被改变了.

实例:

```js
function obj() {}

function fn() {
  let _this = this
  setTimeout(function() {
    console.log('1:', _this)
    console.log('2:', this)
  }, 1000)
}
fn() //1:window ,2:window
//node: 1:global,2:Timeout{...}

fn.call(obj) // 1.:obj ,2:window
//node: 1:obj,2:Timeout{...}
```

## 使用 `apply`、`call`、`bind`

### call,apply,bind 语法

> `call()` 方法在使用一个指定的`this`值和若干个指定的参数值的前提下调用某个函数或方法。

当调用一个函数时，可以赋值一个不同的`this`对象。`this`引用当前对象，即`call` 方法的第一个参数。

通过`call`方法，你可以在一个对象上借用另一个对象上的方法，比如 `Object.prototype.toString.call([])`，就是一个 Array 对象借用了 Object 对象上的方法。

```js
//语法
fun.call(thisArg, arg1, arg2,...)
```

- `thisArg`:在
  `fun`函数运行时指定的`this` 值。需要注意的是下面几种情况

  - 不传，或者传 `null`，`undefined`， 函数中的 `this` 指向 `window` 对象;
  - 传递另一个函数的函数名，函数中的 `this` 指向这个函数的引用，并不一定是该函数执行时真正的 `this` 值;
  - 值为原始值(数字，字符串，布尔值)的 `this`会指向该原始值的自动包装对象，如 String、`Number`、`Boolean`
  - 传递一个对象，函数中的`this`指向这个对象

- 参数: 可选的,多个参数用','分隔,如 arg1,arg2....

- 返回值: 调用函数的返回值。若该函数没有返回值，则返回`undefined`。

  > `apply()` 方法调用一个函数, 其具有一个指定的 `this` 值，以及作为一个数组（或类似数组的对象）提供的参数

```js
//语法
fun.apply(thisArg, [argsArray])
```

- `thisArg`：可选的,在 fun 函数运行时指定的`this` 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 `this` 值，如果这个函数处于非严格模式下，则指定为 `null` 或 `undefined` 时会自动指向全局对象（浏览器中就是 `window` 对象），同时值为原始值（数字，字符串，布尔值）的 `this` 会指向该原始值的自动包装对象。
- `argsArray`：可选的, 一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 fun 函数。如果该参数的值为 `null` 或 `undefined`，则表示不需要传入任何参数。从 ECMAScript 5 开始可以使用类数组对象。[浏览器兼容性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Browser_compatibility)请参阅本文底部内容。
- 返回值: 调用函数的返回值。若该函数没有返回值，则返回`undefined`。

> `bind()` 函数会创建一个新函数（称为绑定函数）

- `bind` 是 ES5 新增的一个方法
- 传参和 `call` 或 `apply` 类似
- 不会执行对应的函数，`call` 或 `apply` 会自动执行对应的函数
- 返回值: 返回一个原函数的拷贝，并拥有指定的 `this` 值和初始参数。

```js
  // 语法
  fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

### call,apply,bind 作用

**作用**: 改变函数运行时的 this 指向

### call、apply 与 bind 的差别

- call、apply 的区别

  - 他们的差别在于参数的传入形式不同，`call` 和 `aplly` 的第一个参数都是要改变上下文的对象，而 `call`从第二个参数开始以`参数列表`的形式展现，`apply` 则是把除了改变上下文对象的参数放在一个`数组`里面作为它的第二个参数。

- `call` 和 `apply` 改变了函数的 `this` 上下文后便执行该函数,而`bind` 则是返回改变了上下文后的一个函数。

### 应用

- 数组中的最大和最小值

  ```js
  var arr = [8, 2, 3, -2, 5, 32, 46, 343, 32]
  Math.max.apply(Math, arr) // 343
  Math.max.call(Math, 8, 2, 3, -2, 5, 32, 46, 343, 32) //343
  Math.min.apply(Math, arr) //-2
  Math.min.call(Math, 8, 2, 3, -2, 5, 32, 46, 343, 32) //-2
  ```

- 数组追加(`apply`,`bind`)

  ```js
  var arr1 = [1,2,3,4],arr2=[5,6,7];
    [].push.apply(arr1,,arr2);
    console.log(arr1) // [1,2,3,4,5,6,7]
    console.log(arr2) // [5,6,7]
  //bind
    [].push.bind(arr1,arr2)(...arr2,[22,333,222]);// [ 1, 2, 3, 4, [ 5, 6, 7 ], 5, 6, 7, [ 22, 333, 222 ] ]

  ```

- 将伪数组转化为数组

  ```js
  //伪数组
    let obj = {
      0:'a',
      1;'b',
      2,'c',
      length:3
    }

    Array.prototype.slice.call(obj); // 转成真正的数组

    Array.prototype.slice.apply(arguments);
  ```

- 判断变量类型

  ```js
  function isArray(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]'
  }
  isArray([]) // true
  isArray('hank') // false
  ```

- 利用 call 和 apply 做继承

  ```js
  function Animat(name, age) {
    this.name = name
    this.age = age
  }

  function Cat(name, age) {
    Animat.call(this, name, age)
  }
  function Dog(name, age) {
    Animat.apply(this, arguments)
  }
  let cat = new Cat('cat', 23)
  let dog = new Dog('dog', 2)
  console.log(cat) // Cat { name: 'cat', age: 23 }
  console.log(dog) // Dog { name: 'dog', age: 2 }
  ```

### call、apply 及 bind 函数内部实现是怎么样的？

#### `call`的实现

```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function!')
  }
  //首先 context 为可选参数，如果不传的话默认上下文为 window
  context = context || window
  //临时保存this(需要调用函数)
  context.fn = this
  //由于call可以传入多个参数(args1,args2...),剥离除this对象外的其他参数
  const args = [...arguments].slice(1)
  const result = context.fn(...args) //参数给制定
  delete context.fn // 删除临时属性
  return result
}
```

```js
// 测试实例
function fn1() {}
fn1.prototype.name = 'fn1'

function fn2() {
  console.log(this) //指向传入的函数对象
  console.log([...arguments]) //
  console.log(this.prototype.name) //传入函数的原型属性
  return 'fn2'
}
fn2.myCall(fn1, 2, 3, 4) // 输出结果: this=> fn1  ; [ 23, 2, 3 ] ; fn1  函数返回值:fn2
Math.max.myCall(null, 2, 3, 54, 3) //54
```

#### `apply`的实现

```js
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not a function!')
  }
  if (arguments[1]) {
    //apply第二个参数以数组形式传入的,如参数不是数组形式传入,则输出异常
    if (!(arguments[1] instanceof Array)) {
      throw new TypeError('the second params is not a array')
    }
  }
  //指向上下文
  context = context || window
  context.fn = this
  let result
  //此处与call不同
  if (argument[1]) {
    result = context.fn(...arguments[1])
  } else {
    //参数非数组/无参数数
    result = context.fn()
  }
  delete context.fn
  return result
}
```

```js
// 测试
function fn1() {}

function fn2() {
  console.log(this) //
  return 'fn2'
}

fn2.myApply(fn1) //this= >  fn1   返回值'fn2'
fn2.myApply(null) //this=> window   返回值'fn2'
```

#### `bind`的实现

`bind`实现关键至于返回值处理 å

```js
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('context is not function')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 对于直接调用来说，这里选择了 apply 的方式实现，但是对于参数需要注意以下情况：
    // 因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，
    // 所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(...arguments)
    if (this instanceof F) {
      //实例化myBind返回函数,进入到这个
      return new _this(...args, ...arguments)
    } else {
      // console.log('apply')
      return _this.apply(context, args.concat(...arguments))
    }
  }
}
```

```js
//实例
function fn1() {}

function fn2() {
  console.log(this) //
  return 'fn2...'
}
let f = fn2.bind(fn1, 23)
console.log(f) //function () { [native code] }
console.log(f()) // fn2...
console.log(new f(123)) // fn2 {}
fn2.myBind(1) // this => Number {1}  自动包装基础类型
console.log(fn2.myBind(null)) //[Function: F]
```

## new 实例化一个对象

::: tip
new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？new 是怎么样改变 this 指向的?
:::

在调用 `new` 的过程中会发生以上 4 件事情：

- 新生成了一个对象
- 链接到原型
- 绑定 this
- 返回新对象
  根据以上几个过程，我们也可以试着来自己实现一个`new`

  ```js
  function create() {
    let obj = {} //创建一个空对象
    let constructor = [].shift.call(arguments) // 获取第一个参数:需获取构造函数
    obj.__proto_ = constructor.prototype //设置空对象的原型
    let result  = constructor,apply(obj,arguments); // 绑定this并执行构造函数
    // new 通过call/apply 来改变this指向
    return result instanceof Object ? result : obj //保障返回值 是对象
  }
  ```

  对于对象来说，其实都是通过`new`产生的，无论是`function Foo()` 还是`字面量`方式 `let a = { b : 1 }` 。
  但是，这里更推荐使用字面量的方式创建对象（无论性能上还是可读性）。因为你使用`new Object()`的方式创建对象需要通过`作用域链`一层层找到 `Object`，但是你使用字面量的方式就没这个问题。

  ```js
  function Fn() {}
  // function 就是个语法糖
  // 内部等同于 new Function()
  let a = { b: 1 } // 这个字面量内部也是使用了 new Object()
  ```

## 使用 `ES6` 的箭头函数 =>

::: tip

- 在 ES5 中: **this 永远指向最后调用它的那个对象**;
- 在 ES6 中:**`箭头函数`的`this`始终指向函数定义时的`this`,而非执行时**;
  **箭头函数**：“箭头函数中没有`this`绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的`this`，否则`this` 为 `undefined`”。

:::
接下来看个例子:

```js
let arrow = {
  name: 'arrow',
  fn1: function() {
    //ES6 箭头函数
    setTimeout(() => {
      console.log(this.name) // this=> arrow
    }, 1000)
  },
  fn2: function() {
    //ES5
    setTimeout(function() {
      console.log(this.name) //this=> window
    }, 1000)
  }
}
arrow.fn1() // arrow
arrow.fn2() // undefine
```

## 参考文档

[Java​Script 标准库 Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)
