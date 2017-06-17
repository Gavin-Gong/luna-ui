<template>
  <li
    class="ln-nav-item"
    :class="{'is-active': isActive, 'is-disable': isDisable}"
    @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import navMixin from '../_utils/mixins/navMixin'
  import emitter from '../_utils/mixins/emitter'

  export default {
    name: 'ln-nav-item',
    componentName: 'ln-nav-item',
    props: {
      route: {
        type: [String, Object],
        default: null
      },
      index: {
        type: [Number, String],
        required: true
      }
    },
    mixins: [navMixin, emitter],
    computed: {
      isActive () {
        console.log(this.rootNav)
        return this.rootNav.activeIndex === this.index
      },
      isDisable () {
        return null
      }
    },
    methods: {
      handleClick () {
        // select actived item, pass index
        this.dispatch('ln-nav', 'item-click', this.index)
        // this.$emit('item-click', this.index)
        if (this.route) {
          try {
            // TODO: add opt to choose push/replace
            this.$router.replace(this.route)
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
</script>

<style lang="scss">
.is-active {
  color: #fff;
}
</style>
