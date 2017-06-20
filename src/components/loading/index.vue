<template>
  <div
    class="ln-loading"
    v-show="visibile"
    :class="customClass">
    <div class="ln-loading-spin">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <path fill="#41b883" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"/>
        </path>
      </svg>
      <div class="ln-loading-text"> {{ text }} </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ln-loading',
    componentName: 'ln-loading',
    data () {
      return {
        visibile: false,
        text: '加载中',
        customClass: ''
      }
    }
  }
</script>

<style lang="scss">
@import "../_styles/vars";
.ln-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: rgba(255, 255, 255, .9);
  .ln-loading-spin {
    position: absolute;
    width: 100%;
    top: 50%;
    transform:translateY(-50%);
    text-align: center;
  }
}
</style>
