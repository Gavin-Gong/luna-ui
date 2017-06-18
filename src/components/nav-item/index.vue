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
      link: {
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
        if (this.link) {
          if (typeof this.link === 'string' && /https?:\/\//g.test(this.link)) {
            // external link
            window.open(this.link)
            return
          }
          try {
            // TODO: add opt to choose push/replace
            this.$router.replace(this.link)
          } catch (e) {
            console.log(e)
          }
        }
      },
      routeActive () {
        if (this.$route && this.link) {
          if (typeof this.link === 'string') {
            return this.link.path === this.$route.path
          } else if (typeof this.link === 'object' && this.link !== null) {
            if (this.link.name !== undefined) {
              return this.link.name === this.$route.name
            }
            if (this.link.path !== undefined) {
              return this.link.path === this.$route.path
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
      }
    }
  }
</script>

<style lang="scss">
.is-active {
  color: #fff;
}
</style>
