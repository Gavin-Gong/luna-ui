<template>
  <ul
    :class="{'ln-nav--vertical': mode === 'vertical'}"
    class="ln-nav">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ln-nav',
    componentName: 'ln-nav',
    props: {
      theme: {
        default: null
      },
      mode: {
        default: null
      },
      defaultActive: {
        type: [Number, String]
      },
      uniqueOpen: {
        default: false
      }
    },
    data () {
      return {
        activeIndex: this.defaultActive
      }
    },
    methods: {
      handleClick (index) {
        console.log('emit')
        console.log(index)
        this.activeIndex = index
      }
    },
    mounted () {
      this.$on('item-click', this.handleClick)
    }
  }
</script>

<style lang="scss">
@import "../_styles/vars";
.ln-nav {
  list-style: none;
  padding: 0px;
  margin: 0;
  background: #f44336;
  .ln-nav-item {
    display: inline-block;
    padding-left: 0;
    margin-left: 0;
    padding: 20px;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #fff;
      cursor: pointer;
    }
  }
}
// vertical mode
.ln-nav--vertical {
  >li.ln-nav-item {
    display: block;
    border: none;
    &:hover {
      background: darken(#f44336, 5%);
      border: none;
    }
  }
}
// dark theme
.ln-nav--dark{

}
</style>
