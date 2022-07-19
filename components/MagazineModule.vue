<template>
  <div class="sub-selections">
    <div class="title">
      <h3>杂志</h3>
      <!-- <span class="more" @click="goMagazineList()">
        更多
        <span class="more-img"></span>
      </span> -->
    </div>
    <a
      @click="goMagezine(magazineLeft.mas_magazine_id)"
      v-if="magazineLeft != undefined"
    >
      <div class="magazine-img">
        <img :src="magazineLeft.mas_magazine_master_img" alt="" />
        <div class="point">新书</div>
      </div>
      <div class="headline oneline">
        {{ magazineLeft.mas_magazine_title_main }}
      </div>
    </a>
    <nuxt-link :to="'/dzz/' + 1" v-else>
      <div class="magazine-img">
        <img src="@/static/images/way/zz.png" alt="" />
        <div class="point">新书</div>
      </div>
      <div class="headline oneline">2022年第一期｜总第567期</div>
    </nuxt-link>
    <a @click="wytgFn" class="contribute">我要投稿</a>
  </div>
</template>
<script>
export default {
  props: {
    magazineLeft: {
      type: Object,
    },
  },
  mounted() {},
  methods: {
    //跳转到杂志列表
    goMagazineList() {
      this.$store.commit("setSubTabId", "");
      this.$router.push({
        path: "/dzz",
        query: { menuId: 16 },
      });
    },
    //点击跳转到杂志详情
    goMagezine(id) {
      this.$store.commit("setSubTabId", "dzz");
      this.$router.push({
        path: `/dzz/${id}`,
      });
    },
    //点击我要投稿
    wytgFn() {
      this.$store.commit("setSubTabId", "");
      this.$router.push({
        path: "/wytg",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.sub-selections {
  width: 346px;
  height: 348px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #ffffff;
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
        margin-top: 2px;
      }
    }
  }
  .magazine-img {
    width: 305px;
    height: 146px;
    position: relative;
    margin: 17px 20px 32px 20px;
    cursor: pointer;
  }
  .headline {
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    color: rgba(0, 0, 0, 0.85);
    padding: 0px 20px;
    cursor: pointer;
    &:hover {
      color: #fa6725;
    }
  }

  .contribute {
    display: inline-block;
    width: 306px;
    height: 32px;
    border: 1px solid #fa6725;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #fa6725;
    line-height: 30px;
    margin-top: 28px;
    margin-left: 20px;
    cursor: pointer;
  }
  .contribute:hover {
    background: #fa6725;
    color: #fff;
  }
}
</style>
