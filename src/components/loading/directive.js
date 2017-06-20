/*
  directive -> http://cn.vuejs.org/v2/guide/custom-directive.html
  programmic

  feature
  - custom text
  - target
  - lock
  - fullscreen
*/

// directive
import Vue from 'vue'
import loadingComponent from './index.vue'

let Loading = {}
const defaults = {
  visibile: true,
  lock: false,
  fullscreen: false,
  customClass: ''
}
const LoadingConstructor = Vue.extend(loadingComponent)
const instance = new LoadingConstructor({
  el: document.createElement('div')
  // data: {
  //   visibile: true
  // }
})

Loading.install = () => {
  Vue.directive('loading', {
    bind (el, binding, vnode, oldVnode) {
      console.log(el, binding, vnode, oldVnode)
      console.log(defaults, binding.value)
      // fullscreen
      instance.visibile = binding.value
      if (binding.modifiers.fullscreen) {
        // set body style & mounted to body ele
        document.body.style.overflow = 'hidden' // set lock style
        document.body.appendChild(instance.$el) // mount to body
      } else {
        // set parent ele style to position: relative & mount
        const parentPos = el.style.position
        if (parentPos !== 'absolute' && parentPos !== 'fixed') {
          el.style.position = 'relative'
        }
        el.appendChild(instance.$el)
      }
    },
    inserted (el, binding, vnode, oldVnode) {
    },
    update (el, binding, vnode, oldVnode) {
      instance.visibile = binding.value
    },
    componentUpdated () {
      console.log('update component')
    },
    unbind () {

    }
  })
}

export default Loading
