
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './HelloWorld';

@Component
export default class Page extends Vue {
  render () {
    return <div>
      <HelloWorld />
    </div>
  }
}
