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
