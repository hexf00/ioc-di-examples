# FAQ

## Q: Error Injection does not have constructor

方案1: 需要在`tsconfig.json`开启`emitDecoratorMetadata`。
方案2: `@Inject() service!: Service1` 改为 `@Inject(Service1) service!: Service1`

原因：未开启 `emitDecoratorMetadata` 时, `@Inject() service!: Service1` 中装饰器无法读取到 `Service1` 的类型元数据，无法正确识别需要构造的类。


## TypeError: Cannot read property of undefined (reading 'method')

看一下读取 method 的地方，注入是在构造函数之后的，不能在构造函数里读取注入的内容，
需要 @Already ，然后调用 init 。

```ts
constructor () {
  // this.foo.method() // ❌无法在构造函数内访问注入属性
  this.init() //✔️使用 @Already 装饰器可以在对应函数内第一时间访问注入属性
}

@Already
init () {
  this.foo.method()
}
```

## Q: 一个项目中 Root 需要有多个吗？

一个就够了，如果有其他生命周期 用 Container 就可以，
如果跟 Root 共享生命周期不需要 Container ，
如果你有不需要共享的地方，用多个也是可以，但是 root 之间不能互相注入。


## Q:其它建议？

你要注入的核心是要把逻辑都分离在 service 里，或者说让 service 有能操作一切的能力。
