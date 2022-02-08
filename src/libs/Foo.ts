import { InjectRef, Service } from 'ioc-di'
import { Foo2 } from './Foo2'

@Service()
export class Foo {
  @InjectRef(() => Foo2) foo2!: Foo2

  method () {
    console.log(this.foo2)
  }
}
