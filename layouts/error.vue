<template>
  <div class="wapper">
    <singleHeader />
    <div class="error-box">
      <nuxt-link to="/">
        <img src="@/static/images/404.jpg" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
<style lang="less" scoped>
.error-box {
  width: 100%;
  height: 575px;
  padding-top: 121px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
