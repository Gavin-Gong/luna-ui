<template>
<div id="demo-affix">
  <demo>
    <div class="box" v-loading="showLoading"></div>
    <button @click="toggleLoading">hidden</button>
  </demo>
</div>
</template>

<script>
  export default {
    name: 'Loading',
    data () {
      return {
        showLoading: true
      }
    },
    methods: {
      toggleLoading () {
        this.showLoading = !this.showLoading
        console.log(this.showLoading)
      }
    }
  }
</script>

<style lang="scss" scoped>
.box {
  width:100%;
  min-height: 200px;
  background: #f44336;
}
</style>
