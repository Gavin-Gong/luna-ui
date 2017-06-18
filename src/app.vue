<template>
  <div id="app">
    <ln-nav
      class="sidebar"
      :default-active="1"
      mode="vertical">
      <ln-nav-item :link="{name: 'Affix'}" :index="1">Affix</ln-nav-item>
      <ln-nav-item :link="{name: 'Nav'}" :index="2">Nav</ln-nav-item>
    </ln-nav>
    <main class="content">
      <router-view> </router-view>
    </main>
  </div>
</template>

<style lang="scss">
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #app {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .sidebar {
      width: 200px;
      height:100vh;
      overflow: auto;
      float: left;
    }
    .content {
      margin-left: 200px;
    }
  }
</style>
