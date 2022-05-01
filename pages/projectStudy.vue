<template>
  <div class="project_container">
    <singleHeader />
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.project_container {
  background-color: #fff;
}
</style>
