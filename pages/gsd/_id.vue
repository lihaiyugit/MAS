<template>
  <div class="main_container">
    <singleHeader />
    <div class="crumbs">
      <div class="banxin crumbs-item">
        首页 > 逛书店 >
        <span>{{ bookData.mas_book_name }}</span>
      </div>
    </div>
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="zz-info">
          <div class="zz-infoL">
            <div class="zz-infoL-l">
              <div class="zz-infoL-l-top">
                <swiper
                  :options="swiperOption"
                  ref="mySwiper"
                  class="swiper-wrapper gallery-top"
                >
                  <swiper-slide v-for="(item, index) in imgList" :key="index">
                    <img :src="item.img" alt="" class="swiper-img" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="zz-infoL-l-base">
                <swiper
                  :options="swiperTwoOption"
                  ref="swiperThumbs"
                  class="swiper-wrapper gallery-thumbs"
                >
                  <swiper-slide v-for="(item, index) in imgList" :key="index">
                    <img :src="item.img" alt="" />
                  </swiper-slide>
                </swiper>
              </div>
              <div class="collect">
                <img src="@/static/images/star.png" alt="" />
                <span>收藏</span>
              </div>
            </div>
            <div class="zz-infoL-r">
              <h1>{{ bookData.mas_book_name }}</h1>
              <p class="introduce">
                {{ bookData.mas_book_describe }}
              </p>
              <div class="book-info">
                <p>
                  作者：<span>{{ bookData.mas_book_author }}</span>
                </p>
                <p>
                  出版社：<span>{{ bookData.mas_book_press }}</span>
                </p>
              </div>
              <div class="price-box">
                <div class="current-price">
                  <span class="text">MAS价格</span>
                  <span class="icon">￥</span>
                  <!-- <span class="num">58.00</span> -->
                  <span class="num">{{ bookData.mas_book_price }}</span>
                </div>
                <div class="current-price" style="padding-top: 10px">
                  <span class="text"
                    >定价
                    <!-- <span style="text-decoration: line-through">¥88.00</span> -->
                    <span style="text-decoration: line-through"
                      >¥{{ bookData.mas_book_o_price }}</span
                    >
                  </span>
                </div>
              </div>

              <div class="details_Number">
                <span class="Subscribe">订阅数量：</span>
                <div class="_Number">
                  <button class="reduce" @click="minus">-</button>
                  <input
                    type="text"
                    class="centent_number"
                    :value="counter_num"
                    disabled
                  />
                  <button class="plus" @click="add">+</button>
                </div>
                <!-- <div class="stock">库存：342本</div> -->
                <div class="stock">库存：{{ bookData.mas_book_num }}本</div>
              </div>
              <div class="tips">
                全国快递投递， 快递不到地区采用邮局挂号配送。 包邮地区不含西藏，
                新疆， 甘肃， 青海， 宁夏， 内蒙古， 海南。（邮发代码：80-841）
              </div>
              <div class="buy-btn">
                <button class="immediately">立即订阅</button>
                <button
                  class="join"
                  :disabled="dis"
                  :class="{ disabled: dis == false }"
                  v-if="current != 1"
                >
                  加入购物车
                </button>
              </div>
            </div>
          </div>
          <div class="zz-infoR">
            <img src="../../static/images/press.png" alt="" />
          </div>
        </div>
        <div class="clear"></div>
        <div class="section_introduce">
          <div class="section_introduceL">
            <h6>书推荐</h6>
            <div class="section_introduceLD">
              <dl
                v-for="(item, index) in recommend"
                :key="index"
                @click="zzDetails(item.mas_book_id)"
              >
                <dt>
                  <img :src="item.mas_book_img" alt="" />
                </dt>
                <dd>{{ item.mas_book_name }}</dd>
              </dl>
              <!-- <dl>
                <dt>
                  <img
                    src="https://www.chinamas.cn/upload/img/2021/11/22/96bf6f043922dc0fda07b3b27c0dbd46.jpg"
                    alt=""
                  />
                </dt>
                <dd>2021年 第6期 总第21期</dd>
              </dl> -->
              <!-- <div class="clear"></div> -->
            </div>
          </div>
          <div class="section_introduceR">
            <div class="tab">
              <div class="tab-menu">
                <ul>
                  <li
                    v-for="(item, index) in tabList"
                    :key="index"
                    :class="tabCurrent == index ? 'change' : ''"
                    @click="oNitem(index)"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="tab-box">
                <div class="div div1" v-if="tabCurrent == 0">
                  <div class="information">
                    <ol>
                      <li>
                        主管单位：<span>{{ bookData.mas_magazine_host }}</span>
                      </li>
                      <li>
                        主办单位：<span>{{
                          bookData.mas_magazine_charge
                        }}</span>
                      </li>
                      <li>
                        出版单位：<span>{{ bookData.mas_magazine_press }}</span>
                      </li>
                      <li>
                        创刊时间：<span>{{
                          bookData.mas_magazine_founded_time
                        }}</span>
                      </li>
                      <li>
                        国内刊号：<span>{{
                          bookData.mas_magazine_domestic_issn
                        }}</span>
                      </li>
                      <li>
                        出版周期：<span>{{
                          bookData.mas_magazine_publication_cycle
                        }}</span>
                      </li>
                      <li>
                        ISBN：<span>{{ bookData.mas_magazine_isbn }}</span>
                      </li>
                      <li>
                        页数：<span>{{ bookData.mas_magazine_pages }}</span>
                      </li>
                      <li>
                        开本：<span>{{ bookData.mas_magazine_open_book }}</span>
                      </li>
                    </ol>
                  </div>
                  <div class="briefIntroduction">
                    <p>
                      <img
                        src="https://www.chinamas.cn/upload/img/2022/01/24/fbe9e98dd8e4aeaba7749b3e9e7adfa1.png"
                        alt="undefined"
                      /><br />
                    </p>
                    <p>
                      <img
                        src="https://www.chinamas.cn/upload/img/2022/01/24/f407c81519e803b7a954e911b9adc309.jpg"
                        alt="undefined"
                      /><br />
                    </p>
                    <p>
                      <img
                        src="https://www.chinamas.cn/upload/img/2022/01/24/49495a93fb8011a0cd934e3fc67efb43.jpg"
                        alt="undefined"
                      /><br />
                    </p>
                    <p><br /></p>
                  </div>
                </div>
                <div class="div div2" v-if="tabCurrent == 1">
                  <div class="comments_mod_v1">
                    <!-- 没有登陆提示登录后评论 -->
                    <div
                      class="post-comment"
                      v-if="
                        $store.state.token == '' ||
                        $store.state.token == undefined
                      "
                    >
                      <h6 class="total_num">暂无评价</h6>
                      <div class="login-tip">
                        <p>
                          您需要登录后才可以评论
                          <nuxt-link
                            target="_blank"
                            :to="{
                              path: `/login?path=${this.$router.currentRoute.fullPath}`,
                            }"
                            class="login"
                            >登录</nuxt-link
                          >
                          |
                          <nuxt-link
                            target="_blank"
                            :to="{
                              path: `/login?path=${this.$router.currentRoute.fullPath}`,
                            }"
                            class="login"
                            >立即注册</nuxt-link
                          >
                        </p>
                      </div>
                      <button class="comment">评论</button>
                    </div>
                    <div
                      class="post-comment"
                      v-else-if="bookComment.length == 0 && $store.state.token"
                    >
                      <h6 class="total_num">暂无评价</h6>
                      <el-input
                        type="textarea"
                        placeholder="请输入评论内容"
                        v-model="textarea"
                      >
                      </el-input>
                      <button class="comment">评论</button>
                    </div>
                    <div class="comment-list" v-else>
                      <ul>
                        <li>
                          <div class="li-l">
                            <img src="../../static/images/photo.png" alt="" />
                          </div>
                          <div class="li-r">
                            <div class="li-r-info">
                              <h6>TAKI <span>童生</span></h6>
                              <span>3天前</span>
                            </div>
                            <p class="li-r-comment">
                              本杂志可以进行单期杂志购买与订阅及一年期订阅，同时可以满足电子刊以及刊内文章单独订阅。集团订阅请直接和我们联系（400-819-1255）。
                            </p>
                            <div class="li-r-base">
                              <img
                                src="../../static/images/praise.png"
                                alt=""
                              />
                              <span>赞1</span>
                              <img src="../../static/images/reply.png" alt="" />
                              <span>回复</span>
                            </div>
                            <div class="li-r-reply">
                              <ul>
                                <li>
                                  <div class="li-l">
                                    <img
                                      src="../../static/images/photo.png"
                                      alt=""
                                    />
                                  </div>
                                  <div class="li-r">
                                    <div class="li-r-info">
                                      <h6>TAKI <span>童生</span></h6>
                                      <span>3天前</span>
                                    </div>
                                    <p class="li-r-comment">
                                      集团订阅请直接和我们联系（400-819-1255）。
                                    </p>
                                    <div class="li-r-base">
                                      <img
                                        src="../../static/images/praise.png"
                                        alt=""
                                      />
                                      <span>赞1</span>
                                      <img
                                        src="../../static/images/reply.png"
                                        alt=""
                                      />
                                      <span>回复</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="li-l">
                                    <img
                                      src="../../static/images/photo.png"
                                      alt=""
                                    />
                                  </div>
                                  <div class="li-r">
                                    <div class="li-r-info">
                                      <h6>TAKI <span>童生</span></h6>
                                      <span>3天前</span>
                                    </div>
                                    <p class="li-r-comment">
                                      集团订阅请直接和我们联系（400-819-1255）。
                                    </p>
                                    <div class="li-r-base">
                                      <img
                                        src="../../static/images/praise.png"
                                        alt=""
                                      />
                                      <span>赞1</span>
                                      <img
                                        src="../../static/images/reply.png"
                                        alt=""
                                      />
                                      <span>回复</span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="li-l">
                            <img src="../../static/images/photo.png" alt="" />
                          </div>
                          <div class="li-r">
                            <div class="li-r-info">
                              <h6>TAKI <span>童生</span></h6>
                              <span>3天前</span>
                            </div>
                            <p class="li-r-comment">
                              本杂志可以进行单期杂志购买与订阅及一年期订阅，同时可以满足电子刊以及刊内文章单独订阅。集团订阅请直接和我们联系（400-819-1255）。
                            </p>
                            <div class="li-r-base">
                              <img
                                src="../../static/images/praise.png"
                                alt=""
                              />
                              <span>赞1</span>
                              <img src="../../static/images/reply.png" alt="" />
                              <span>回复</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <!-- <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000"
                      >
                      </el-pagination> -->
                      <pagination
                        v-show="total > 0"
                        :total="total"
                        :page.sync="page"
                        :limit.sync="limit"
                        @pagination="getList"
                      />
                      <div class="post-comment">
                        <div class="login-tip">
                          <p>
                            您需要登录后才可以评论
                            <a class="login" href="" target="_blank">登录</a>
                            |
                            <a class="login" href="" target="_blank"
                              >立即注册</a
                            >
                          </p>
                        </div>
                        <button class="comment">评论</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div div3" v-if="tabCurrent == 2">
                  <h6>管理会计研究：</h6>
                  <p class="dyzz_p">
                    《管理会计研究》杂志为广东经济出版社主办的管理会计专业期刊，双月刊，单月份26日出刊，国内统一刊号：CN
                    44-1740/F。
                    本杂志可以进行单期杂志购买与订阅及一年期订阅，同时可以满足电子刊以及刊内文章单独订阅。集团订阅请直接和我们联系（400-819-1255）。
                  </p>
                  <h6>纸质刊阅：</h6>
                  <p class="dyzz_p">
                    1.购买往期杂志：购买成功后2个工作日内寄出。<br />2.订阅单期杂志：新版杂志出刊后3个工作日内寄出。<br />
                    3.订阅一年期杂志：一年期杂志共6期，从预定起始月开始每两个月邮寄一次，共邮寄6次。
                  </p>
                  <p class="dyzz_p">
                    例：张先生在2018年12月份订阅了半年期杂志，那么他的订单中预定起始月为2019年1月份，张先生会在2019年1月份、3月份、5月份这个三个月里分别收到一本《管理会计研究》杂志新刊。<br />
                    如果您在新版杂志出刊半月内未收到我们邮寄的杂志，请查询订单发货信息后及时联系客服处理。
                  </p>

                  <h6>付款方式：</h6>
                  <p class="dyzz_p">网站在线支付支持微信、支付宝扫码支付。</p>
                  <h6>关于发票：</h6>
                  <p class="dyzz_p">
                    我们可以提供增值税普通发票（电子）、增值税专用发票（消费300元及以上），请提供准确的开票信息。
                  </p>
                  <h6>关于运费：</h6>
                  <p class="dyzz_p">
                    西藏、新疆、甘肃、青海、宁夏、内蒙古、海南、港澳台地区除外，其他地区免运费配送，非免邮地区具体运费以网站实际标识为准。
                  </p>
                  <h6>关于退款：</h6>
                  <p class="dyzz_p">
                    杂志订阅为预付款业务，付款成功后暂不支持线上退款，如果您有退款的需求请联系在线客服或拨打400电话进行沟通，将会有专门人员进行处理！
                  </p>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import { notNeedlogin } from "@/request/api";
// import md5 from "js-md5";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
const tabList = ["书简介", "书评论", "订阅须知"];
export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  data() {
    return {
      total: 1,
      page: 1,
      limit: 10,
      current: 0, //购买类型索引
      imgList: [
        {
          img: require("../../static/images/way/book.png"),
        },
        {
          img: require("../../static/images/way/book.png"),
        },
        {
          img: require("../../static/images/way/book.png"),
        },
      ],
      swiperOption: {
        slidesPerView: 1, //同时显示的数量
        spaceBetween: 10, // 在slide之间设置距离
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        centeredSlides: true,
      },
      swiperTwoOption: {
        spaceBetween: 10, // 在slide之间设置距离
        slidesPerView: 3, //同时显示的数量
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        centeredSlides: false,
        slideToClickedSlide: true,
      },
      tabList, //tab列表
      tabCurrent: 0, //默认选中
      typeName: "逛书店", //页面标题
      counter_num: "1", // 计数
      min_num: 1, // 设定最小值
      max_num: Infinity, // 设定最大值,Infinity表示无穷大
      dis: true,
      commentStatus: 3, //1未登录 2暂无评论 3有评论
      textarea: "",
      bookData: "", //书详情数据
      bookComment: [], //书评论数据
      recommend: [], //书推荐
      meau:{},//菜单信息
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, store, params }) {
    // let timestamp = Date.parse(new Date());
    // let sign = md5(timestamp + store.state.secretKey);
    let res = await $axios.notNeedlogin({
      // sign: sign,
      // timespan: timestamp,
      className: "BookController",
      classMethod: "getBookDetails",
      data: {
        bookId: parseInt(params.id),
      },
    });
    if (res.bol) {
      return {
        bookData: res.data.bookData,
        bookComment: res.data.bookComment,
        recommend: res.data.recommend.list,
        meau: res.data.recommend.menu,
      };
    }
  },
  watch: {
    counter_num(newVal) {
      this.counter_num = newVal;
    },
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.$swiper;
    },
    swiperThumbs() {
      return this.$refs.swiperThumbs.$swiper;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.mySwiper.controller.control = this.swiperThumbs;
      this.swiperThumbs.controller.control = this.mySwiper;
    });
  },
  methods: {
    getList() {},
    //点击tab栏每一项
    oNitem(index) {
      this.tabCurrent = index;
    },
    minus() {
      if (this.counter_num <= this.min_num) {
        this.counter_num = this.min_num;
      } else {
        this.counter_num--;
      }
    },
    add() {
      if (this.counter_num >= this.max_num) {
        this.counter_num = this.max_num;
      } else {
        this.counter_num++;
      }
    },
    checkedThis(obj) {
      var boxArray = document.getElementsByName("test");
      for (var i = 0; i <= boxArray.length - 1; i++) {
        if (boxArray[i].value == obj && boxArray[i].checked) {
          boxArray[i].checked = true;
        } else {
          boxArray[i].checked = false;
        }
      }
    },
    //书详情
    zzDetails(id){
       this.$router.push({
        path: `/${this.meau.mas_menu_url}/${id}`,
      });
    }
  },
};
</script>
<style lang="less" scoped>
.crumbs {
  width: 100%;
  height: 48px;
  background: #f7f7f7;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 0.35);
  line-height: 48px;
  span {
    color: rgba(0, 0, 0, 0.85);
  }
}
.content-container {
  padding: 35px 0px 40px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(114, 76, 76, 0.1);
  .content-container-main {
    .zz-info {
      .zz-infoL {
        float: left;
        width: 922px;
        .zz-infoL-l {
          width: 343px;
          float: left;
          .zz-infoL-l-top {
            width: 343px;
            height: 407px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            margin-bottom: 16px;
            position: relative;
            .swiper-slide {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .swiper-img {
              width: 227px;
              height: 321px;
            }
          }
          .zz-infoL-l-base {
            .swiper-slide {
              display: flex;
              justify-content: center;
              align-items: center;
              // height: 127px;
              img {
                width: 70px;
                height: 99px;
                padding: 13px 18px;
                border-radius: 0px;
                border: 1px solid rgba(0, 0, 0, 0.05);
              }
            }
            .swiper-slide-active {
              width: 104px !important;
              border: 2px solid #ea3a3a;
              img {
                border: none;
              }
            }
          }
          .collect {
            margin-top: 24px;
            display: flex;
            align-items: center;
            img {
              width: 14px;
              height: 14px;
            }
            span {
              font-size: 13px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.65);
              line-height: 13px;
              margin-left: 8px;
            }
          }
        }
        .zz-infoL-r {
          float: left;
          width: 529px;
          margin-left: 44px;
          h1 {
            font-size: 23px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 32px;
          }
          .introduce {
            font-size: 13px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
            padding: 15px 0px;
            border-bottom: 1px solid #f0f0f0;
          }
          .book-info {
            display: flex;
            padding: 12px 0px 22px;
            p {
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.65);
              line-height: 13px;
              margin-right: 43px;
              span {
                color: #1d65b1;
              }
            }
          }
          .price-box {
            width: 529px;
            height: 64px;
            background: #f7f7f7;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            background-image: url(@/static/images/right-angle.png);
            background-size: 38px 64px;
            background-position: right bottom;
            background-repeat: no-repeat;
            .current-price {
              font-size: 14px;
              font-weight: 400;
              padding: 0px 25px;
              .text {
                color: rgba(0, 0, 0, 0.45);
                line-height: 13px;
              }
              .icon {
                color: #fa6725;
                line-height: 22px;
              }
              .num {
                color: #fa6725;
                font-size: 28px;
                font-weight: 500;
                margin-left: -6px;
              }
            }
          }
          .tips {
            background: #fff9ee;
            font-size: 12px;
            font-weight: 400;
            color: #fa6725;
            line-height: 16px;
            padding: 10px 8px 10px 16px;
            margin-bottom: 20px;
          }
          .details_Number {
            display: flex;
            align-items: center;
            padding: 20px 0px;
            border-top: 1px dashed #e7e7e7;

            .Subscribe {
              font-size: 13px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.65);
            }
            ._Number {
              margin-right: 35px;
              width: 118px;
              height: 31px;
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              display: flex;
              button {
                outline: none;
                width: 28px;
                height: 31px;
                background: rgba(0, 0, 0, 0.05);
                cursor: pointer;
              }
              .reduce {
                border: 1px solid #e5e5e5;
              }
              .centent_number {
                border-width: 0;
                width: 58px;
                text-align: center;
                border-top: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                outline: none;
                cursor: pointer;
                background: #fff;
              }
              .plus {
                border: 1px solid #e5e5e5;
              }
            }
            .stock {
              font-size: 13px;
              color: rgba(0, 0, 0, 0.65);
              font-weight: 400;
              line-height: 24px;
            }
          }
          .buy-btn {
            display: flex;
            padding: 20px 0px;
            border-top: 1px dashed #e7e7e7;
            button {
              width: 170px;
              height: 48px;
              font-size: 18px;
              font-weight: 600;
              text-align: center;
              line-height: 48px;
              cursor: pointer;
            }
            .immediately {
              background: linear-gradient(
                90deg,
                #f34250 0%,
                #f28a51 81%,
                #ff7d3b 100%
              );
              color: #ffffff;
              border: 1px solid transparent;
              margin-right: 20px;
            }
            .join {
              background: #fff5f1;
              border: 1px solid #fa6725;
              box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
              color: #fa6725;
            }
            .disabled {
              background: rgb(234, 234, 234) !important;
              color: rgb(0, 0, 0) !important;
              border: none !important;
              cursor: default !important;
            }
          }
        }
      }
      .zz-infoR {
        float: right;
        width: 120px;
        img {
          width: 100%;
          height: 74px;
        }
      }
    }
    .section_introduce {
      margin-top: 52px;
      // display: flex;
      // justify-content: space-between;
      .section_introduceL {
        float: left;
        width: 257px;
        border: 1px solid #e5e5e5;
        h6 {
          width: 100%;
          height: 58px;
          background: #f7f7f7;
          border-bottom: 1px solid #e5e5e5;
          text-align: center;
          line-height: 58px;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
        }
        .section_introduceLD {
          width: 219px;

          padding: 5px 19px 8px 19px;
          dl {
            width: 100%;
            border-bottom: 1px dashed #e7e7e7;
            cursor: pointer;
            &:nth-last-child(1) {
              border-bottom: none;
            }
            dt {
              text-align: center;
              padding-top: 22px;
              img {
                width: 193px;
                height: 256px;
              }
            }
            dd {
              font-size: 14px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              text-align: center;
              padding: 18px 0px 22px;
            }
          }
        }
      }
      .section_introduceR {
        float: right;
        width: 802px;
        background: #f7f7f7;
        border: 1px solid #e5e5e5;
        .tab {
          width: 749px;
          background: rgba(246, 246, 246, 1);
        }
        .tab-menu {
          height: 58px;
          border-bottom: 1px solid #e5e5e5;
          ul {
            li {
              float: left;
              width: 159px;
              height: 58px;
              line-height: 58px;
              text-align: center;
              font-size: 16px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              border-right: 1px solid #e5e5e5;
            }
            .change {
              border-top: 2px solid red;
              background: #ffffff;
            }
          }
        }
        .tab-box {
          background: #fff;
          .div:nth-of-type(1) {
            p img {
              width: 100%;
              float: left;
            }
          }
          .div2 {
            width: 90%;
            margin: 0 auto;
            padding-bottom: 40px;
            .comments_mod_v1 {
              .comment {
                padding: 5px 16px;
                background: #fa6725;
                border-radius: 2px;
                font-size: 14px;
                font-weight: 400;
                color: #ffffff;
                border: none;
                margin-top: 22px;
              }
              .post-comment {
                padding-top: 22px;
                h6 {
                  font-size: 13px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.45);
                  line-height: 20px;
                  margin-bottom: 24px;
                  text-align: center;
                }
                .login-tip {
                  height: 128px;
                  border: 4px solid #f7f7f7;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  p {
                    font-size: 14px;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 20px;
                    .login {
                      color: #fa6725;
                    }
                  }
                }

                /deep/.el-textarea__inner {
                  height: 124px;

                  border: 1px solid #e5e5e5;
                  color: rgba(0, 0, 0, 0.85);
                  font-size: 14px;
                }
                /deep/.el-textarea__inner:focus {
                  outline: none !important;
                  border: 1px solid #fa6725;
                }
              }
              .comment-list {
                ul {
                  padding-top: 36px;
                  li {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 36px;
                    .li-l {
                      min-width: 40px;
                      height: 40px;
                      border-radius: 50%;
                    }
                    .li-r {
                      margin-left: 12px;
                      padding-bottom: 32px;
                      border-bottom: 1px solid #e5e5e5;
                      .li-r-info {
                        font-size: 14px;
                        line-height: 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        h6 {
                          font-weight: 400;
                          color: rgba(0, 0, 0, 0.85);
                        }
                        span {
                          margin-left: 10px;
                          color: rgba(0, 0, 0, 0.45);
                        }
                      }
                      .li-r-comment {
                        font-size: 16px;
                        font-weight: 400;
                        text-align: left;
                        color: rgba(0, 0, 0, 0.85);
                        line-height: 24px;
                        padding: 18px 0px;
                      }
                      .li-r-base {
                        display: flex;
                        img {
                          width: 16px;
                          height: 14px;
                          border-radius: 0px;
                        }

                        span {
                          font-size: 14px;
                          font-weight: 400;
                          color: rgba(0, 0, 0, 0.45);
                          line-height: 20px;
                          margin: 0px 22px 0px 6px;
                        }
                      }
                    }
                  }
                }
                .li-r-reply {
                  margin-top: 38px;
                  background: #f7f7f7;
                  ul {
                    padding: 22px;
                    li {
                      margin-bottom: 22px;
                      .li-l {
                        min-width: 28px;
                        height: 28px;
                      }
                      .li-r {
                        width: 94%;
                      }
                      &:last-child {
                        margin-bottom: 0px;
                      }
                      &:last-child .li-r {
                        padding-bottom: 0px;
                        border-bottom: none;
                      }
                    }
                  }
                }

                .post-comment {
                  padding-top: 0px;
                }
              }
            }
          }
          .div1 {
            padding: 50px;
            .information {
              margin: 0 auto;
              border-bottom: 1px solid #e7e7e7;
              ol {
                width: 682px;
                height: 156px;
                margin: 0 auto;
                padding-top: 22px;
                li {
                  width: 33.3%;
                  float: left;
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.85);
                  line-height: 38px;
                }
              }
            }
            .briefIntroduction {
              width: 654px;
              margin: 0 auto;
              margin-top: 27px;
              width: 100%;
              font-size: 13px;
              font-weight: 400;
              color: rgba(34, 34, 34, 1);
              line-height: 26px;
              text-indent: 2rem;
              text-align: left;
            }
            p {
              text-align: left;
            }
          }
          .div3 {
            h6 {
              margin: 0 auto;
              width: 654px;
              font-size: 13px;
              font-weight: 600;
              text-align: left;
              color: rgba(0, 0, 0, 0.85);
              padding: 36px 0px 10px;
              border-bottom: 1px solid #e7e7e7;
            }
            .dyzz_p {
              margin: 0 auto;
              width: 654px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.85);
              line-height: 28px;
              padding-top: 22px;
            }
            .dyzz_p:nth-last-child(1) {
              padding-bottom: 36px;
            }
          }
        }
      }
    }
  }
  /deep/.el-select-dropdown__item:hover {
    color: #f00 !important;
  }
}
</style>
