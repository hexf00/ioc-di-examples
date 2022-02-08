import { Root, Inject, Service } from 'ioc-di'
import { Service1 } from './Service1'

@Root()
@Service()
export class Entry {
  @Inject() service!: Service1
}
