<template>
<div id="demo-affix">
  <div class="placeholder"></div>
  <demo>
    <ln-affix :offset-top="50">
      <button>affix it</button>
    </ln-affix>
    <ln-affix :offset-bottom="50">
      <button>affix it</button>
    </ln-affix>
  </demo>
  <div class="placeholder"></div>
</div>
</template>

<script>
  export default {
    name: 'Affix'
  }
</script>

<style lang="scss" scoped>
.ln-affix {

}
.placeholder {
  min-height: 200vh;
  background: #f44336;
  width: 100%;
}
</style>
