
import { Entry } from '@/libs/Entry';
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './HelloWorld';

@Component
export default class Page extends Vue {
  root = new Entry();

  render () {
    return <div>
      <HelloWorld />
    </div>
  }
}
