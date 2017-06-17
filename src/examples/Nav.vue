<template>
<div id="demo-affix">
  <demo>
    <ln-nav :default-active="1" mode="vertical">
      <ln-nav-item
        v-for="item in navList"
        :index="item.id"
        :key="item.id">{{ item.title }}</ln-nav-item>
    </ln-nav>
  </demo>
</div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        navList: [
          { id: 1, title: 'gg-xxx' },
          { id: 2, title: 'gg-xxx' },
          { id: 3, title: 'gg-xxx' },
          { id: 4, title: 'gg-xxx' },
          { id: 5, title: 'gg-xxx' }
        ]
      }
    },
    methods: {
      handleClick (index) {
        console.log(index)
      }
    }
  }
</script>

<style lang="scss">
.ln-affix {

}
.placeholder {
  min-height: 200vh;
  background: #f44336;
  width: 100%;
}
</style>
