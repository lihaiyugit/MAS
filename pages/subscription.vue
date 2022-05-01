<template>
  <div class="main_container">
    <singleHeader :typeName="typeName" />
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  data() {
    return {
      typeName: "订阅",
    };
  },
};
</script>
<style lang="less" scoped>
.main_container {
  background-color: #fff;
   min-height: 346px;
}
</style>

