<template>
  <div class="selections">
    <div class="title">
      <h3>活动</h3>
      <nuxt-link to="/activity" class="more">
        更多
        <span class="more-img"></span>
      </nuxt-link>
    </div>
    <div class="selections-main">
      <nuxt-link v-for="(item,index) in activity" :key="index" :to="'/activity/' + item.mas_activity_id">
        <dl>
          <dt>
            <img
              :src="item.mas_activity_img"
              alt=""
            />
            <div class="point">最新活动</div>
          </dt>
          <dd class="oneline">{{item.mas_activity_title}}</dd>
        </dl>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    activity: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {

  },
};
</script>
<style lang="less" scoped>
.selections {
  margin: 32px 0px;
  width: 346px;
  height: 348px;
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
      &:hover {
        color: #fa6725;
        .more-img {
          background-image: url(@/static/images/more-arrow-light.png);
        }
      }
      .more-img {
        width: 7px;
        height: 10px;
        background-image: url(@/static/images/left.png);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-left: 4px;
      }
    }
  }
  .selections-main {
    padding: 17px 20px 20px;
    a {
      display: inline-block;

      font-size: 14px;
      font-weight: 400;
      text-align: justify;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
      dd{
        width: 300px;
      }
      &:last-child {
        margin-bottom: 0px;
      }
      &:hover{
        dd{
          color: #fa6725;
        }
      }
    }
    a:nth-child(1) {
      margin-bottom: 22px;
      dl {
        position: relative;
        dt {
          img {
            width: 305px;
            height: 183px;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 48%,
              #000000 100%
            );
          }
        }
        dd {
          position: absolute;
          bottom: 11px;
          left: 20px;
          color: #fff;
          width: 267px;
          font-size: 18px;
          font-weight: 500;
          // display: -webkit-box !important;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // word-break: break-all;
          // -webkit-box-orient: vertical;
          // -webkit-line-clamp: 2;
        }
      }
    }
    a:not(:first-child) dl dt {
      display: none;
    }
  }
}
</style>
