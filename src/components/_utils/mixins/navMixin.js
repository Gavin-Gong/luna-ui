/*
  https://github.com/ElemeFE/element/blob/dev/packages/menu/src/menu-mixin.js
*/
export default {
  computed: {
    rootNav () {
      // 递归获取根导航元素
      let parent = this.$parent
      while (parent && parent.name === 'ln-nav') {
        parent = parent.$parent
      }
      return parent
    }
  }
}
