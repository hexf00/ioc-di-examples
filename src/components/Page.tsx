
import { Entry } from '@/demo-abstract';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './HelloWorld';

@Component
export default class Page extends Vue {
  created () {
    const entry = new Entry()
  }

  render () {
    return <div>
      <HelloWorld />
    </div>
  }
}
