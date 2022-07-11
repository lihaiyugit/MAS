<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container banxin">
      <div class="banner">
        <img :src="bannerArr[0].mas_banner_img" alt="" />
      </div>
      <div class="magazine">
        <div v-for="(item, index) in magazineList" :key="index">
          <div class="magazine-title">
            <h2>{{ item.mas_magazine_year }}</h2>
          </div>
          <div class="magazine-gather">
            <dl v-for="(it, idx) in item.list" :key="idx" @click="details(1)">
              <dt>
                <div class="dt-img">
                  <img :src="it.mas_magazine_master_img" alt="" />
                </div>
                <h4 class="oneline">{{ it.mas_magazine_title_main }}</h4>
                <p class="oneline">{{ it.mas_magazine_notes }}</p>
              </dt>
              <dd>
                <a class="type" href="">平装</a>
                <a class="type" href="">电子刊</a>
                <div class="price">
                  <span class="price-icon">￥</span
                  ><span>{{ it.mas_magazine_electronics }}</span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import AOS from "aos";
export default {
  data() {
    return {
      bannerArr: [], //banner图
      magazineList: [], //杂志列表
    };
  },
  async asyncData({ $axios, store, params, query }) {
    let res = await $axios.notNeedlogin({
      className: "MagazineController",
      classMethod: "magazineMore",
      data: {
        MenuId: store.state.subTabId,
        magazineTypeId: parseInt(query.typeId),
      },
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        magazineList: res.data.magazineData,
      };
    }
  },
  mounted() {
    // AOS.init({
    //   once: false,
    // });
  },
  methods: {
    //点击杂志每一个
    details(id) {
      this.$router.push({
        path: `/dzz/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
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
  .banner {
    height: 231px;
  }
  .magazine {
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
      flex-wrap: wrap;
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
