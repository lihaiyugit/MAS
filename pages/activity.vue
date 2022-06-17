<template>
  <div class="main_container">
    <singleHeader/>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
<style lang="less" scoped>
.main_container {
  background-color: #fff;
}
</style>
