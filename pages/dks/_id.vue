<template>
  <div class="main_container">
    <singleHeader />
   <ArticleDetails :detailsData="detailsData"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailsData: {},//文章详情数据
    };
  },
    async asyncData({ $axios, query, params, store }) {
    let res = await $axios.notNeedlogin({
      className: "ArticleController",
      classMethod: "articleDetails",
      data: {
        articleId: params.id,
        token: store.state.token,
      },
    });
    if (res.bol) {
      return {
        detailsData: res.data,
      };
    }
  },
};
</script>
<style lang="less" scoped>
  .main_container{
    background: #fff !important;
  }
</style>
