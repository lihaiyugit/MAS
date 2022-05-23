<template>
  <div class="hot-recommend">
    <h3>热点推荐</h3>
    <ul>
      <li v-for="(item, index) in recommend" :key="index">
        <a @click="goDetail(index + 1)">
          <span
            v-if="index + 1 == 1"
            :style="`${index + 1 == 1 ? 'background: #ea3a3a' : ''}`"
            >{{ index + 1 }}</span
          >
          <span
            v-else-if="index + 1 == 2"
            :style="`${index + 1 == 2 ? 'background: #ed6d38' : ''}`"
            >{{ index + 1 }}</span
          >
          <span
            v-else-if="index + 1 == 3"
            :style="`${index + 1 == 3 ? 'background: #f4a74d' : ''}`"
            >{{ index + 1 }}</span
          >
          <span v-else>{{ index + 1 }}</span>
          <p class="oneline">{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
const recommend = [
  { title: "疫情之下，企业如何应对？" },
  { title: "基于“鲸鱼曲线”思想的全面预算管理" },
  { title: "财务共享服务中心（FSSC）项目实施" },
  { title: "践行管理会计 促进价值提升" },
  { title: "苏宁和蒙牛:新零售的商业模式特征" },
  { title: "基于“鲸鱼曲线”思想的全面预算管理" },
  { title: "财务共享服务中心（FSSC）项目实施" },
];

export default {
  data() {
    return {
      recommend,
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {
    //跳转到文章详情
    goDetail(id) {
      this.$router.push({
        path: `/dy/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
   .hot-recommend {
    width: 306px;
    height: 262px;
    background: #ffffff;
    border-radius: 6px;
    padding: 20px;
    ul {
      margin-top: 16px;
      li a {
        display: flex;
        margin-bottom: 18px;
        span {
          display: inline-block;
          min-width: 16px;
          height: 16px;
          background: #bfbfbf;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 16px;
        }
        p {
          width: 271px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 14px;
          margin-left: 7px;
        }
      }
      li:nth-last-child(1) {
        margin-bottom: 0px;
      }
    }
  }
</style>
