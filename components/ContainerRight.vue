<template>
  <div class="content-container-main-right">
    <!-- 热门推荐 -->
    <HotRecommend :hotRecommend="hotRecommend"/>
    <!-- 活动 -->
    <ActivityModule  :activity="activity"/>
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
    activity:{
       type: Array,
    },

  },
  data() {
    return {};
  },
  methods: {},
};
</script>

