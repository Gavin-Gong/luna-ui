import Vue from 'vue'
import App from './app'
import componentList from '~components'
import router from './router'
import Demo from './examples/common/demo'

Vue.use(componentList)
Vue.component(Demo.name, Demo)

/* eslint no-unused-vars: "off" */
const app = new Vue({
  el: '#app',
  ...App,
  router
})
