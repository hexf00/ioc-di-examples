import { InjectRef, Service } from 'ioc-di'
import { Foo } from './Foo'

@Service()
export class Foo2 {
  @InjectRef(() => Foo) foo!: Foo

  method () {
    console.log(this.foo)
  }
}