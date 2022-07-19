<template>
  <div class="selections">
    <div class="title">
      <h3>荐读</h3>
      <!-- <a href="" class="more">
        更多
        <img src="@/static/images/way/more-arrow.png" alt="" />
      </a> -->
    </div>
    <ul>
      <li class="twoline" v-for="(item, index) in selections" :key="index" @click="goDetail(item.mas_article_type_url,item.mas_article_id)">
        {{ item.mas_article_title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    selections: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  asyncData({ query, params }) {
  },
  methods: {
    //跳转到文章详情
    goDetail(url,id) {
        this.$store.commit("setSubTabId", url);
      this.$router.push({
        path:`/${url}/${id}`
      });
    },
  },
};
</script>
<style lang="less" scoped>
.selections {
  margin: 32px 0px;
  width: 346px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    h3 {
      font-size: 18px;
      font-weight: 600;
      text-align: justify;
      color: rgba(0, 0, 0, 0.85);
      padding-left: 20px;

    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      text-align: justify;
      color: rgba(0, 0, 0, 0.35);
      line-height: 22px;
       padding-right: 16px;
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
  ul {
    padding: 14px 17px 18px 22px;
    li {
      margin-bottom: 18px;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: rgba(0, 0, 0, 0.85);
      line-height: 20px;
      cursor: pointer;
      &:last-child{
        margin-bottom: 0px;
      }
      &:hover{
        color: #fa6725;
      }
    }
  }
}
</style>
