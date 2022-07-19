<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img :src="bannerArr[0].mas_banner_img" alt="" />
          </div>
        </div>
        <div class="content-container-main-right">
          <div class="hot-recommend">
            <h3>热销图书</h3>
            <div class="hot-book">
              <dl
                v-for="(item, index) in recommend"
                :key="index"
                @click="details(item.mas_book_id)"
              >
                <dt>
                  <img :src="item.mas_book_img" alt="" />
                  <img
                    v-if="index + 1 == 1"
                    src="@/static/images/way/one.png"
                    alt=""
                    class="top-img"
                  />
                  <img
                    v-else-if="index + 1 == 2"
                    src="@/static/images/way/two.png"
                    alt=""
                    class="top-img"
                  />
                  <img
                    v-else
                    src="@/static/images/way/three.png"
                    alt=""
                    class="top-img"
                  />
                </dt>
                <dd>
                  <p class="twoline">{{ item.mas_book_name }}</p>
                  <span>￥ {{ item.mas_book_price }}</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="tabber">
        <ul class="banxin">
          <li class="active">图书分类</li>
          <li
            :class="index == current ? 'active-li' : ''"
            v-for="(item, index) in showBookType"
            :key="index"
            @click="oNitem(index, item.mas_booktype_id)"
          >
            {{ item.mas_booktype_name }}
          </li>
          <li v-if="bookType.length >= 6" v-show="isShow" @click="moreFn">
            更多
          </li>
        </ul>
      </div>
      <div class="magazine-list banxin" v-if="!isSearch">
        <div class="magazine-title">
          <h2>{{ listData[0].mas_booktype_name }}</h2>
        </div>
        <div class="magazine-gather">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
            <swiper-slide v-for="(it, idx) in listData[0].list" :key="idx">
              <dl @click="details(it.mas_book_id)">
                <dt>
                  <img class="dt-img" :src="it.mas_book_img" alt="" />
                  <span>￥ {{ it.mas_book_price }}</span>
                  <h4 class="oneline">{{ it.mas_book_name }}</h4>
                  <p class="oneline">作者：{{ it.mas_book_author }}</p>
                </dt>
                <dd>
                  <span>出版社：{{ it.mas_book_press }}</span>
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          <div class="btn-left">
            <img class="left01" src="@/static/images/way/left01.png" alt="" />
            <img class="left1" src="@/static/images/way/left1.png" alt="" />
          </div>
          <div class="btn-right">
            <img class="right02" src="@/static/images/way/right02.png" alt="" />
            <img class="right2" src="@/static/images/way/right2.png" alt="" />
          </div>
        </div>
        <div class="clear"></div>
        <div
          class="magazine-title"
          data-aos="fade-up"
          v-if="listData[1].list.length > 0"
        >
          <h2>{{ listData[1].mas_booktype_name }}</h2>
        </div>
        <div
          class="magazine-gather"
          data-aos="fade-up"
          v-if="listData[1].list.length > 0"
        >
          <swiper
            :options="swiperTwoOption"
            ref="myTwoSwiper"
            class="swiper-wrapper"
          >
            <swiper-slide v-for="(it, idx) in listData[1].list" :key="idx">
              <dl @click="details(it.mas_book_id)">
                <dt>
                  <img class="dt-img" :src="it.mas_book_img" alt="" />
                  <span>￥ {{ it.mas_book_price }}</span>
                  <h4 class="oneline">{{ it.mas_book_name }}</h4>
                  <p class="oneline">作者：{{ it.mas_book_author }}</p>
                </dt>
                <dd>
                  <span>出版社：{{ it.mas_book_press }}</span>
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          <div class="btn-left-two">
            <img class="left01" src="@/static/images/way/left01.png" alt="" />
            <img class="left1" src="@/static/images/way/left1.png" alt="" />
          </div>
          <div class="btn-right-two">
            <img class="right02" src="@/static/images/way/right02.png" alt="" />
            <img class="right2" src="@/static/images/way/right2.png" alt="" />
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="magazine-list banxin" v-else>
        <div class="search-list" v-if="bookList.length>0">
          <dl
            v-for="(it, idx) in bookList"
            :key="idx"
            @click="details(it.mas_book_id)"
          >
            <dt>
              <img class="dt-img" :src="it.mas_book_img" alt="" />
              <span>￥ {{ it.mas_book_price }}</span>
              <h4 class="oneline">{{ it.mas_book_name }}</h4>
              <p class="oneline">作者：{{ it.mas_book_author }}</p>
            </dt>
            <dd>
              <span>出版社：{{ it.mas_book_press }}</span>
            </dd>
          </dl>
        </div>
        <div class="no-data-box" v-else>
          <img src="@/static/images/no-data.png" alt="" />
          <div class="tip">目前还没有内容哦～</div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航。
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        effect: "slide", //切换效果：默认为“位移切换”
        loop: false, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 3000,
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 4, // 在轮播模式下定义slides的数量多少为一组。
        loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      swiperTwoOption: {
        loop: false, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 3000,
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 4, // 在轮播模式下定义slides的数量多少为一组。
        loopFillGroupWithBlank: true, //在loop模式下，为group填充空白slide
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right-two", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left-two", //上一张标签类名可以自定义
        },
      },
      recommend: [], //热销图书
      bookType: [], //书类型
      showBookType: [], //展示几个书类型
      current: -1, //专业默认索引
      isShow: true, //是否展示更多按钮
      bannerArr: [], //banner图
      listData: [], //列表数据
      bookTypeId: "", //书籍类型id
      bookList:[],//根据书籍类型id搜索结果列表
      isSearch:false,//false 默认数据 true 搜索数据
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },

  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
      },
      className: "BookController",
      classMethod: "bookList",
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        bookType: res.data.bookType,
        showBookType: res.data.bookType.slice(0, 5),
        listData: res.data.bookList,
        recommend: res.data.hotlist,
      };
    }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // },
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
    // $(".tabber li").click(function () {
    //   var index = $(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
    //   $(this).addClass("active-li").siblings().removeClass("active-li");
    // });
  },
  methods: {
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/gsd/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },

    //点击更多
    moreFn() {
      this.showBookType = this.bookType;
      console.log(this.bookType, "this.bookList");
      this.isShow = false;
    },
    //点击每一个书类型
    oNitem(index, id) {
      this.current = index;
      this.isSearch=true
      this.bookTypeId = id;
      this.getList();
    },
    //根据条件搜索
    getList() {
      this.commonData();
    },
    //公共请求接口
    async commonData() {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId:this.$route.query.menuId,
          bookTypeId: this.bookTypeId,
          type: "list",
        },
        className: "BookController",
        classMethod: "bookList",
      });
      if (res.bol) {
        this.bookList=res.data.bookList;
      }else{
        this.$message.error(res.msg);
      }
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
        cursor: pointer;
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
      .hot-recommend {
        width: 304px;
        height: 260px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 20px;
        .hot-book {
          margin-top: 13px;

          dl {
            width: 289px;
            height: 60px;
            background: rgba(0, 0, 0, 0.03);
            border-radius: 2px;
            padding: 5px 15px 5px 5px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
            dt {
              width: 42px;
              height: 60px;
              img {
                border-radius: 0px;
              }
              .top-img {
                width: 19px;
                height: 15px;
                position: absolute;
                top: 8px;
                left: -7px;
              }
            }
            dd {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              p {
                width: 230px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.85);
                line-height: 18px;
              }
              span {
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ea3a3a;
                line-height: 28px;
              }
            }
            &:hover {
              dd p {
                color: #fa6725;
              }
            }
          }
        }
      }
    }
  }
  .tabber {
    margin: 40px 0px 0px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        width: 166px;
        height: 54px;
        background: #ffffff;
        border-radius: 3px;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        color: rgba(0, 0, 0, 0.85);
        line-height: 54px;
        margin-right: 20px;
        margin-bottom: 15px;
        &:nth-child(6n) {
          margin-right: 0px;
        }
      }
      .active {
        background: linear-gradient(
          90deg,
          #f34250 0%,
          #f28a51 81%,
          #ff7d3b 100%
        );
        color: #ffffff;
      }
      .active-li {
        color: #fa6725;
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
      position: relative;
      dl {
        width: 152px;
        float: left;
        margin: 40px 95px 55px 0px;
        cursor: pointer;
        dt {
          .dt-img {
            width: 152px;
            height: 215px;
            border-radius: 0px;
          }
          span {
            font-size: 18px;
            font-weight: 600;
            text-align: justify;
            color: #ea3a3a;
            line-height: 24px;
            display: inline-block;
            margin-top: 18px;
          }
          h4 {
            font-size: 16px;
            font-weight: 600;
            text-align: justify;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin: 8px 0px 6px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            text-align: justify;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
          }
        }
        dd {
          margin-top: 26px;
          span {
            font-size: 13px;
            font-weight: 400;
            text-align: justify;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
        }
        &:hover {
          dt h4 {
            color: #fa6725;
          }
        }
      }
      /deep/.swiper-wrapper .swiper-slide:nth-child(4n) dl {
        margin-right: 0px;
      }
      /deep/.swiper-wrapper {
        width: 90%;
        margin: 0 auto;
      }
      .btn-left,
      .btn-right,
      .btn-left-two,
      .btn-right-two {
        cursor: pointer;
        width: 38px;
        height: 38px;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 8px;
          height: 14px;
        }
        .right2,
        .left1 {
          display: none;
        }
      }

      .btn-left,
      .btn-left-two {
        position: absolute;
        top: 28%;
        left: 0px;
        z-index: 997;
      }
      .btn-right,
      .btn-right-two {
        position: absolute;
        top: 28%;
        right: 0px;
        z-index: 999;
      }
      .btn-left:hover,
      .btn-right:hover,
      .btn-left-two:hover,
      .btn-right-two:hover {
        background: #fa6725;
      }
      .btn-left:hover .left1,
      .btn-left-two:hover .left1 {
        display: block;
      }

      .btn-left:hover .left01,
      .btn-left-two:hover .left01 {
        display: none;
      }
      .btn-right:hover .right2,
      .btn-right-two:hover .right2 {
        display: block;
      }
      .btn-right:hover .right02,
      .btn-right-two:hover .right02 {
        display: none;
      }
    }
    .search-list {
      display: flex;
      flex-wrap: wrap;
      dl {
        width: 152px;
        margin: 40px 85px 55px 0px;
        cursor: pointer;
        dt {
          .dt-img {
            width: 152px;
            height: 215px;
            border-radius: 0px;
          }
          span {
            font-size: 18px;
            font-weight: 600;
            text-align: justify;
            color: #ea3a3a;
            line-height: 24px;
            display: inline-block;
            margin-top: 18px;
          }
          h4 {
            font-size: 16px;
            font-weight: 600;
            text-align: justify;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin: 8px 0px 6px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            text-align: justify;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
          }
        }
        dd {
          margin-top: 26px;
          span {
            font-size: 13px;
            font-weight: 400;
            text-align: justify;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
        }
        &:nth-child(5n) {
          margin-right: 0px;
        }
        &:hover {
          dt h4 {
            color: #fa6725;
          }
        }
      }
    }
    //无数据样式
    .no-data-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 110px;

      img {
        width: 380px;
        height: 254px;
      }

      .tip {
        margin-top: 22px;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
      }
    }
  }
}
</style>
