import Affix from './affix'
import Nav from './nav'
import NavItem from './nav-item'
import NavItemGroup from './nav-item-group'

const componentList = {}
componentList.install = (Vue) => {
  Vue.component(Affix.name, Affix)
  Vue.component(Nav.name, Nav)
  Vue.component(NavItem.name, NavItem)
  Vue.component(NavItemGroup.name, NavItemGroup)
}

export default componentList
