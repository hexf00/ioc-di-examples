import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode { }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue { }
    interface IntrinsicElements {
      [elem: string]: any
    }


    // tsx组件引入 tsx组件 时候提供attr的类型校验
    interface ElementAttributesProperty {
      $props: any // 配置JSX中属性类型检查
    }
  }
}
