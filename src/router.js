import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// require all modules in examlpes folder
function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}
let modules = requireAll(require.context('./examples', false, /\.vue$/))

const routes = modules.map((module) => {
  return {
    path: `/${module.name.toLowerCase()}`,
    name: module.name,
    component: module
  }
})
console.log(routes)
const router = new VueRouter({
  routes
})

export default router
