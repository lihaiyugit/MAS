<template>
  <div class="hot-recommend">
    <h3>热点推荐</h3>
    <ul>
      <li v-for="(item, index) in hotRecommend" :key="index">
        <a @click="goDetail(item.mas_article_type_url,item.mas_article_id)">
          <span
            v-if="index + 1 == 1"
            :style="`${index + 1 == 1 ? 'background: #ea3a3a' : ''}`"
            >{{ index + 1 }}</span
          >
          <span
            v-else-if="index + 1 == 2"
            :style="`${index + 1 == 2 ? 'background: #fa6725' : ''}`"
            >{{ index + 1 }}</span
          >
          <span
            v-else-if="index + 1 == 3"
            :style="`${index + 1 == 3 ? 'background: #f4a74d' : ''}`"
            >{{ index + 1 }}</span
          >
          <span v-else>{{ index + 1 }}</span>
          <p class="oneline">{{ item.mas_article_title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    hotRecommend: {
      type: Array,
    },
  },
  data() {
    return {

    };
  },
  asyncData({ query, params }) {
  },
  methods: {
    //跳转到文章详情
    goDetail(url,id) {
       this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.hot-recommend {
  // width: 346px;
  height: 300px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);

  h3 {
    height: 47px;
    line-height: 47px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 18px;
    font-weight: 600;
    text-align: justify;
    color: rgba(0, 0, 0, 0.85);
    padding-left: 20px;
  }
  ul {
    padding: 14px 20px 18px 20px;
    li a {
      display: flex;
      margin-bottom: 18px;
      cursor: pointer;
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
        text-align: justify;
        color: rgba(0, 0, 0, 0.85);
        line-height: 14px;
        margin-left: 7px;
      }
      &:hover{
        p{
          color: #fa6725;
        }
      }
    }
    li:last-child a{
      margin-bottom: 0px;
    }
  }
}
</style>
