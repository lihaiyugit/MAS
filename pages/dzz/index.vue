<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img :src="bannerArr[0].mas_banner_img" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
        </div>
        <div class="content-container-main-right">
          <!-- 热门推荐 -->
          <HotRecommend :hotRecommend="hotRecommend" />
        </div>
      </div>
      <div class="magazine-list banxin">
        <div v-for="(item, index) in listData" :key="index" >
          <div class="magazine-title" v-if='item.list.length>0'>
            <h2>{{ item.mas_magazinetype_name }}</h2>
            <nuxt-link
              :to="{
                path: `${routerUrl}/list`,
                query: { menuId:$route.query.menuId,typeId: item.mas_magazinetype_id },
              }"
              class="more-btn"
              >查看更多
              <img src="@/static/images/arrows-left.png" alt="" />
            </nuxt-link>
          </div>
          <div class="magazine-gather" v-if='item.list.length>0'>
            <dl
              v-for="(it, idx) in item.list"
              :key="idx"
              @click="details(it.mas_magazine_id)"
            >
              <dt>
                <div class="dt-img">
                  <img :src="it.mas_magazine_master_img" alt="" />
                </div>
                <h4 class="oneline">{{ it.mas_magazine_title_main }}</h4>
                <p class="oneline">{{it.mas_magazine_notes}}</p>
              </dt>
              <dd>
                <a class="type" href="">平装</a>
                <a class="type" href="">电子刊</a>
                <div class="price">
                  <span class="price-icon">￥</span><span>{{it.mas_magazine_electronics}}</span>
                </div>
              </dd>
            </dl>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotRecommend: [], //热点推荐数据
      bannerArr: [], //banner图
      listData: [], //列表数据
      routerUrl:this.$route.path,//当前页面路由
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
      },
      className: "MagazineController",
      classMethod: "magazineList",
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        hotRecommend: res.data.hotspot,
        listData: res.data.magazineList,
      };
    }
  },
  mounted() {
    // console.log(this.$route.path)
  },
  methods: {
    //点击到详情
    details(id) {
      this.$router.push({
        path: `${this.routerUrl}/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.main_container {
  background-color: transparent;
}
.content-container {
  padding: 30px 0px 40px 0px;
  .content-container-main {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 18px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
    .content-container-main-left {
      width: 715px;
      .banner {
        width: 100%;
        height: 302px;
        position: relative;
        .wytg {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 122px;
          height: 38px;
          cursor: pointer;
        }
      }
      .magazine-box {
        padding: 45px 40px 0px;
      }
    }
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
    }
  }
  .magazine-list {
    width: 1100px;
    padding: 55px 0px 0px;
    .magazine-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      h2 {
        font-size: 22px;
        font-weight: 500;
        text-align: justify;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
        padding-bottom: 22px;
        border-bottom: 2px solid #fa6725;
      }
      .more-btn {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.35);
        line-height: 22px;
        cursor: pointer;
        img {
          width: 13px;
          height: 8px;
          margin-left: 5px;
        }
      }
    }
    .magazine-gather {
      display: flex;
      justify-content: space-between;
      dl {
        width: 178px;
        margin: 40px 52px 50px 0px;
        cursor: pointer;
        dt {
          .dt-img {
            width: 100%;
            height: 178px;
            img {
              border-radius: 0px;
            }
          }
          h4 {
            width: 100%;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin: 20px 0px 6px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
          }
        }
        dd {
          margin-top: 36px;
          .type {
            padding: 0px 8px;
            background: #fafafa;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 400;
            text-align: center;
            color: rgba(0, 0, 0, 0.65);
            line-height: 20px;
            display: inline-block;
            margin-right: 10px;
          }
          .price {
            font-size: 20px;
            font-weight: 400;
            text-align: left;
            color: #fa6725;
            line-height: 22px;
            letter-spacing: 1.33px;
            padding-top: 20px;
            .price-icon {
              font-size: 14px;
            }
            span:nth-child(2) {
              margin-left: -4px;
            }
          }
        }
        &:nth-child(5n) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
