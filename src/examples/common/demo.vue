<template>
  <section class="component-demo">
    <slot></slot>
    <pre>
      <span v-html="code"></span>
    </pre>
  </section>
</template>

<script>
export default {
  name: 'Demo',
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .component-demo {

  }
</style>
