<template>
  <div class="content-container-main-right">
    <!-- 热门推荐 -->
    <HotRecommend :hotRecommend="hotRecommend"/>
    <!-- 荐读 -->
    <Selections :selections='selections' />
    <!-- <div class="selections">
      <div class="title">
        <h3>荐读</h3>
      </div>
      <ul>
        <li class="twoline" v-for="(item,index) in selections" :key="index">
          {{item.mas_article_title}}
        </li>
      </ul>
    </div> -->
    <!-- 杂志模块 -->
    <MagazineModule :magazineLeft="magazineLeft"/>
  </div>
</template>
<script>


export default {
  props: {
    hotRecommend: {
      type: Array,
    },
    magazineLeft: {
      type: Object,
    },
    selections:{
       type: Array,
    },

  },
  data() {
    return {

    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {},

};
</script>
<style lang="less" scoped>
.content-container-main-right {
  width: 346px;

}
</style>
