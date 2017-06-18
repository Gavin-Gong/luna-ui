<template>
  <li
    class="ln-nav-item"
    :class="{'is-active': isActive, 'is-disable': isDisable}"
    @click="handleClick">
    <slot></slot>
    {{ routeActive() ? 'true' : 'false'}}
  </li>
</template>

<script>
  import navMixin from '../_utils/mixins/navMixin'
  import emitter from '../_utils/mixins/emitter'

  export default {
    name: 'ln-nav-item',
    componentName: 'ln-nav-item',
    props: {
      // TODO: add support for http, https link
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
        this.$emit('item-click', this.index)
        if (this.route) {
          try {
            // TODO: add opt to choose push/replace
            this.$router.replace(this.route)
          } catch (e) {
            console.log(e)
          }
        }
      },
      routeActive () {
        if (this.$route && this.route) {
          if (typeof this.route === 'string') {
            return this.route.path === this.$route.path
          } else if (typeof this.route === 'object' && this.route !== null) {
            if (this.route.name !== undefined) {
              return this.route.name === this.$route.name
            }
            if (this.route.path !== undefined) {
              return this.route.path === this.$route.path
            }
            return false
          } else {
            console.log('err route type')
            return false
          }
        }
      }
    },
    mounted () {
      if (this.routeActive()) {
        console.log('dispatch')
        /*
          REVIEW: 不用 setTimeout/$nextTick 无法更新事件
        */
        // setTimeout(() => {
        // }, 0)
        this.$nextTick(() => {
          this.dispatch('ln-nav', 'item-click', this.index)
        })
        console.log(this.rootNav.activeIndex)
        console.log(this.index)
      }
    }
  }
</script>

<style lang="scss">
.is-active {
  color: #fff;
}
</style>
