<template>
  <div class="ln-affix" :style="bindStyle">
    <slot></slot>
  </div>
</template>

<script>
  /*
    style
  */

  import throttle from '../_utils/throttle'

  export default {
    name: 'ln-affix',
    props: {
      offsetTop: {
        type: Number,
        default: null
      },
      offsetBottom: {
        // TODO: fix this
        type: Number,
        default: null
      }
    },
    data () {
      return {
        isFixed: false,
        originOffsetY: null,
        bindStyle: {}
      }
    },
    computed: {
      affixStyle () {
        return {
          position: 'fixed',
          top: this.offsetTop + 'px',
          bottom: this.offsetBottom + 'px'
        }
      }
    },
    mounted () {
      // listen scoll event
      // TODO: Try @Decorator
      this.originOffsetY = this.$el.getBoundingClientRect().top
      document.addEventListener('scroll', throttle(this.updatePosition, 100))
    },
    beforeDestroy () {
      // remove event listener
      document.removeEventListener('scroll', this.updatePosition)
    },
    methods: {
      updatePosition () {
        const currentPosition = this.$el.getBoundingClientRect()
        /* eslint no-unused-vars: 0 */
        const pageYoffset = this.offsetTop + window.scrollY
        console.log(currentPosition, this.offsetTop, pageYOffset)
        if (currentPosition.top <= this.offsetTop) {
          // set fixed style
          if (!this.isFixed) {
            this.bindStyle = this.affixStyle
            this.isFixed = true
            this.$emit('onChange', this.isFixed)
          }
        } else {
          // set static style
          this.bindStyle = {}
          this.isFixed = false
          this.$emit('onChange', this.isFixed)
        }
        if (this.isFixed && this.originOffsetY > pageYOffset) {
          this.bindStyle = {}
          this.isFixed = false
          this.$emit('onChange', this.isFixed)
        }
      }
    }
  }
</script>

<style lang="scss">
.ln-affix {

}
</style>
