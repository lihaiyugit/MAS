<template>
  <div class="main_container">
    <singleHeader :typeName="typeName" />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="@/static/images/way/book-banner.png" alt="" />
          </div>
        </div>
        <div class="content-container-main-right">
          <div class="hot-recommend">
            <h3>热销图书</h3>
            <div class="hot-book">
              <dl v-for="(item, index) in recommend" :key="index">
                <dt>
                  <img src="@/static/images/way/small-book.png" alt="" />
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
                  <p>{{ item.title }}</p>
                  <span>￥ {{ item.price }}</span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="tabber">
        <ul class="banxin">
          <li>图书分类</li>
          <li v-for="(item, index) in showBookList" :key="index">
            {{ item }}
          </li>
          <li v-show="isShow" @click="moreFn">更多</li>
        </ul>
      </div>
      <div class="magazine-list banxin">
        <div class="magazine-title">
          <h2>管理类</h2>
        </div>
        <div class="magazine-gather">
            <swiper
              :options="swiperOption"
              ref="mySwiper"
              class="swiper-wrapper"
            >
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
            </swiper>
            <!-- Optional controls -->
            <div class="btn-left">
              <img
                class="left01"
                src="../../static/images/way/left01.png"
                alt=""
              />
              <img
                class="left1"
                src="../../static/images/way/left1.png"
                alt=""
              />
            </div>
            <div class="btn-right">
              <img
                class="right02"
                src="../../static/images/way/right02.png"
                alt=""
              />
              <img
                class="right2"
                src="../../static/images/way/right2.png"
                alt=""
              />
            </div>
        </div>
        <div class="clear"></div>
        <div class="magazine-title" data-aos="fade-up">
          <h2>技术类</h2>
        </div>
        <div class="magazine-gather" data-aos="fade-up">
            <swiper
              :options="swiperTwoOption"
              ref="myTwoSwiper"
              class="swiper-wrapper"
            >
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      class="dt-img"
                      src="@/static/images/way/book.png"
                      alt=""
                    />
                    <span>￥ 45</span>
                    <h4>智能管理会计</h4>
                    <p>作者：韩向东</p>
                  </dt>
                  <dd>
                    <span>出版社：xxxxxxxx</span>
                  </dd>
                </dl>
              </swiper-slide>
            </swiper>
            <!-- Optional controls -->
            <div class="btn-left-two">
              <img
                class="left01"
                src="../../static/images/way/left01.png"
                alt=""
              />
              <img
                class="left1"
                src="../../static/images/way/left1.png"
                alt=""
              />
            </div>
            <div class="btn-right-two">
              <img
                class="right02"
                src="../../static/images/way/right02.png"
                alt=""
              />
              <img
                class="right2"
                src="../../static/images/way/right2.png"
                alt=""
              />
            </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
const recommend = [
  { title: "疫情之下，企业如何应对？疫情之下，企业如何应对？", price: "50" },
  { title: "疫情之下，企业如何应对？", price: "40" },
  { title: "疫情之下，企业如何应对？", price: "45" },
];
const bookList = [
  "管理类",
  "技术类",
  "哲学类",
  "经济类",
  "管理类",
  "技术类",
  "哲学类",
  "经济类",
];
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航。
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        effect: "slide", //切换效果：默认为“位移切换”
        loop: true, // 无限循环
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
        loop: true, // 无限循环
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
      recommend,
      bookList, //书类型
      showBookList: [],
      current: 0, //专业默认索引
      industryCurrent: 0, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
      typeName: this.$route.query.type, //页面标题
      isShow: true, //是否展示更多按钮
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
    return {
      showBookList: bookList.slice(0, 4),
    };
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
  },
  methods: {
    //点击专业每一项
    oNitem(index) {
      this.current = index;
    },
    //点击行业每一项
    industryItem(index) {
      this.industryCurrent = index;
    },
    //点击专业全部
    allFn() {
      this.majorHeight = "auto";
    },
    //点击行业全部
    industryAllFn() {
      this.industryHeight = "auto";
    },
    //点击更多
    moreFn() {
      this.showBookList = this.bookList;
      this.isShow = false;
    },
  },
};
</script>
<style lang="less">
.content-container {
  padding: 18px 0px 40px 0px;
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
        .hot-book {
          width: 285px;
          height: 205px;
          background: rgba(0, 0, 0, 0.02);
          border-radius: 2px;
          margin-top: 13px;
          padding: 10px 16px 10px 5px;
          dl {
            display: flex;
            justify-content: space-between;
            height: 60px;
            margin-bottom: 12px;
            position: relative;
            dt {
              width: 42px;
              height: 100%;
              .top-img {
                width: 19px;
                height: 15px;
                position: absolute;
                top: 4px;
                left: -8px;
                border-radius: 0px;
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
        &:nth-child(1) {
          background: linear-gradient(
            90deg,
            #f34250 0%,
            #f28a51 81%,
            #ff7d3b 100%
          );
          color: #ffffff;
        }
        &:nth-child(6n) {
          margin-right: 0px;
        }
      }
    }
  }
  .magazine-list {
    width: 1020px;
    // height: 877px;
    background: #ffffff;
    border-radius: 6px;
    padding: 45px 40px 0px;
    margin-top: 22px;
    .magazine-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 24px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
      }
      .more-btn {
        width: 88px;
        height: 30px;
        background: #ffffff;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: rgba(0, 0, 0, 0.65);
        line-height: 30px;
        &:hover {
          height: 32px;
          background: #ed6d38;
          border: none;
          color: #fff;
        }
      }
    }
    .magazine-gather {
      position: relative;
      dl {
        width: 152px;
        float: left;
        margin: 35px 95px 55px 0px;
        dt {
          .dt-img {
            width: 152px;
            height: 215px;
            border-radius: 6px;
          }
          span {
            font-size: 18px;
            font-weight: 600;
            text-align: left;
            color: #ea3a3a;
            line-height: 24px;
            display: inline-block;
            margin-top: 18px;
          }
          h4 {
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin: 8px 0px 6px;
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
          margin-top: 26px;
          span {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
        }
      }
      .swiper-wrapper .swiper-slide:nth-child(4n) dl {
        margin-right: 0px;
      }
      .swiper-wrapper {
        width: 94%;
        margin: 0 auto;
      }
      .btn-left,
      .btn-right,
      .btn-left-two,
      .btn-right-two {
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
        background: #ed6d38;
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
  }
}
</style>
