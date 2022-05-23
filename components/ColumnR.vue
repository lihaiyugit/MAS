<template>
  <div class="content-container-main-right">
    <!-- 热门推荐 -->
    <HotRecommend />
    <div class="selections">
      <div class="title">
        <h3>荐读</h3>
        <a href="" class="more">查看更多</a>
      </div>
      <ul>
        <li class="twoline">
          论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
        </li>
        <li class="twoline">
          论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
        </li>
        <li class="twoline">
          论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
        </li>
      </ul>
    </div>
    <!-- 杂志模块 -->
    <MagazineModule />
  </div>
</template>
<script>
const major = [
  "成本管理",
  "绩效管理",
  "预算管理",
  "财务管理",
  "管理会计",
  "人工智能",
  "人工智能",
];
export default {
  data() {
    return {
      major, //专业
      current: 0, //专业默认索引
      industryCurrent: 0, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
      typeName: this.$route.query.type, //页面标题
      tabs: ["案例", "观点", "方法"],
      tabActive: 0,
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
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .more {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
  }
  .selections {
    margin: 22px 0px;
    width: 306px;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 6px;
    padding: 20px;
    ul {
      li {
        margin-top: 18px;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 20px;
      }
    }
  }
}
</style>
