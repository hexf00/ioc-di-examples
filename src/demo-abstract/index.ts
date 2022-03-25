import { Already, Container, Inject, InjectRef, Root, Service } from "ioc-di";


// @ts-ignore
@Container()
@Service()
abstract class Abs { className = 'Abs' }

@Service()
class AA {
  @InjectRef(() => Abs) a!: A
  className = 'AA'
  constructor () { console.log('constructor AA'); this.init() }
  @Already init () { console.log('init AA', this); }
}

@Service()
class A extends Abs {
  @Inject() aa!: AA
  className = 'A'
  constructor () { console.log('constructor A'); super(); this.init(); }
  @Already init () { console.log('init a', this); }
}


@Root()
@Service()
export class Entry {
  @Inject() a!: A;
  constructor () { console.log('constructor Entry'); this.init() }
  @Already init () { console.log('init Entry', this); }
}

