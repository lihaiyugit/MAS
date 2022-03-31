<template>
  <div class="main_container">
    <singleHeader :typeName="typeName" />
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
                    <img :src="item.img" alt="" />
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
              <h1>《管理会计研究》2021年第一二期合刊 总第16/17期</h1>
              <h6>新技术•新理念•新实践</h6>
              <div class="select">
                <dl
                  :class="current == index ? 'default' : ''"
                  @click="onSelect(index)"
                  v-for="(item, index) in selectList"
                  :key="index"
                >
                  <dt>{{ item.type }}</dt>
                  <dd>¥ {{ item.price }}</dd>
                </dl>
                <!-- <dl>
                  <dt>电子刊</dt>
                  <dd>¥ 60.00</dd>
                </dl> -->
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
                <div class="stock">库存：342本</div>
              </div>
              <div class="buy-btn">
                <button class="immediately">立即订阅</button>
                <button
                  class="join"
                  :disabled="dis"
                  :class="{ disabled: dis == false }"
                >
                  加入购物车
                </button>
              </div>
              <div class="order-info">
                <div class="more">
                  <span>更多订阅： </span>
                  <p>下单日即为起订日，起订期刊为起订日后的最新一期杂志。</p>
                </div>
                <!-- disabled="disabled" -->
                <div class="SubscribeMoreP">
                  <input
                    type="checkbox"
                    id="1"
                    title="半年/3期"
                    value="150"
                    name="test"
                    @click="checkedThis(150)"
                  />
                  <span>半年/3期</span><span class="price">¥150.00</span>
                  <input
                    type="checkbox"
                    id="2"
                    title=" 全年 / 共6期 "
                    value="300"
                    name="test"
                    @click="checkedThis(300)"
                  />
                  <span>全年 / 共6期</span><span class="price">¥300.00</span>
                </div>
                <div class="tips">
                  会员购买全年纸质期刊，同时获得免费阅读历史过刊、每期新刊电子刊的权益。注册成为会员，有机会享受折扣优惠
                </div>
                <a class="register" href="">
                  <span>立即注册</span>
                  <img src="../../static/images/arrows-left.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="zz-infoR">
            <div class="zz-infoR-advert">
              <!-- <img src="https://www.chinamas.cn/static/img/guanG.png" alt="" /> -->
              <swiper
                :options="sidebarOption"
                ref="sidebarSwiper"
                class="swiper-wrapper"
              >
                <swiper-slide>
                  <img
                    src="https://www.chinamas.cn/static/img/guanG.png"
                    alt=""
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    src="https://www.chinamas.cn/static/img/guanG.png"
                    alt=""
                  />
                </swiper-slide>
                <swiper-slide>
                  <img
                    src="https://www.chinamas.cn/static/img/guanG.png"
                    alt=""
                  />
                </swiper-slide>
              </swiper>
            </div>
            <div class="contact-way">杂志投稿：400-819-1255</div>
            <div class="contact-way">edit@chinamas.cn</div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="section_introduce">
          <div class="section_introduceL">
            <h6>杂志推荐</h6>
            <div class="section_introduceLD">
              <a href="/zz/31">
                <dl id="m_id15">
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/img/2022/03/22/8b1e4e1bcc70762c1408a03ab9913839.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>2022年 第2期总第23期</dd>
                </dl>
              </a>
              <a href="/zz/29">
                <dl id="m_id15">
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/img/2021/11/22/96bf6f043922dc0fda07b3b27c0dbd46.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>2021年 第6期 总第21期</dd>
                </dl>
              </a>
              <a href="/zz/28">
                <dl id="m_id15">
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/img/2021/09/27/0e86b81ed731d9bb6876702ff22ef38d.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>2021年 第五期 总第20期</dd>
                </dl>
              </a>
              <div class="clear"></div>
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
                      <li>主管单位：<span>南方出版传媒股份有限公司</span></li>
                      <li>主办单位：<span>广东经济出版社有限公司</span></li>
                      <li>出版单位：<span>广东经济出版社有限公司</span></li>
                      <li>创刊时间：<span>2018年7月</span></li>
                      <li>国内刊号：<span>CN44-1740/F</span></li>
                      <li>出版周期：<span>双月刊</span></li>
                      <li>ISBN：<span>1671-0762</span></li>
                      <li>页数：<span>88页</span></li>
                      <li>开本：<span>全彩16开</span></li>
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
                    <div class="post-comment" v-if="commentStatus == 1">
                      <h6 class="total_num">暂无评价</h6>
                      <div class="login-tip">
                        <p>
                          您需要登录后才可以评论
                          <a class="login" href="/loadLogin" target="_blank"
                            >登录</a
                          >
                          |
                          <a class="login" href="/loadLogin" target="_blank"
                            >立即注册</a
                          >
                        </p>
                      </div>
                      <button class="comment">评论</button>
                    </div>
                    <div class="post-comment" v-else-if="commentStatus == 2">
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
                            <a class="login" href="/loadLogin" target="_blank"
                              >登录</a
                            >
                            |
                            <a class="login" href="/loadLogin" target="_blank"
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
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const tabList = ["杂志简介", "杂志评论", "订阅须知"];
const selectList = [
  {
    type: "平装",
    price: "100.00",
  },
  {
    type: "电子刊",
    price: "60.00",
  },
];
const swiperOption = {
  spaceBetween: 10, // 在slide之间设置距离
  loop: true,
  loopedSlides: 5, // looped slides should be the same
  centeredSlides: true,
};
const swiperTwoOption = {
  spaceBetween: 8, // 在slide之间设置距离
  slidesPerView: 3, //同时显示的数量
  grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状
  loop: true,
  loopedSlides: 5, // looped slides should be the same
  centeredSlides: false,
  slideToClickedSlide: true,
};
const sidebarOption = {
  loop: true,
  autoplay: true,
  speed: 1000,
  slidesPerView: 1, //同时显示的数量
  grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状
};
export default {
  data() {
    return {
      total: 1,
      page: 1,
      limit: 10,
      selectList, //购买类型
      current: 0,
      imgList: [
        {
          img: "https://www.chinamas.cn/upload/img/2022/03/22/8b1e4e1bcc70762c1408a03ab9913839.jpg",
        },
        {
          img: "https://www.chinamas.cn/upload/img/2021/11/22/96bf6f043922dc0fda07b3b27c0dbd46.jpg",
        },
        {
          img: "https://www.chinamas.cn/upload/img/2021/09/27/0e86b81ed731d9bb6876702ff22ef38d.jpg",
        },
      ],
      swiperOption,
      swiperTwoOption,
      sidebarOption,
      tabList, //tab列表
      tabCurrent: 1, //默认选中
      typeName: "逛书店", //页面标题
      counter_num: "1", // 计数
      min_num: 1, // 设定最小值
      max_num: Infinity, // 设定最大值,Infinity表示无穷大
      dis: true,
      commentStatus: 3, //1未登录 2暂无评论 3有评论
      textarea: "",
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  watch: {
    counter_num(newVal) {
      console.log(newVal);
      this.counter_num = newVal;
      console.log(this.counter_num);
    },
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper.swiper;
    },
    swiperThumbs() {
      return this.$refs.swiperThumbs.swiper;
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
    oNitem(index) {
      this.tabCurrent = index;
    },
    onSelect(index) {
      this.current = index;
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
  },
};
</script>
<style lang="less" scoped>
.content-container {
  padding: 40px 0px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(114, 76, 76, 0.1);
  .content-container-main {
    .zz-info {
      .zz-infoL {
        float: left;
        width: 856px;
        .zz-infoL-l {
          width: 370px;
          float: left;
          .zz-infoL-l-top {
            width: 368px;
            height: 405px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            margin-bottom: 25px;
            .swiper-slide {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            img {
              width: 304px;
              height: 401px;
            }
          }
          .zz-infoL-l-base {
            .swiper-slide {
              width: 116px !important;
              height: 129px;
              border: 1px solid rgba(0, 0, 0, 0.05);
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 97px;
                height: 127px;
              }
            }
            .swiper-slide-active {
              border: 2px solid #ea3a3a;
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
          width: 420px;
          margin-left: 33px;
          h1 {
            font-size: 24px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 32px;
          }
          h6 {
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: #ea3a3a;
            line-height: 20px;
            margin: 20px 0px;
          }
          .select {
            display: flex;
            dl {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 194px;
              height: 70px;
              border: 2px solid rgba(0, 0, 0, 0.1);
              &:nth-child(1) {
                margin-right: 23px;
              }
              dt {
                font-size: 16px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
              }
              dd {
                font-size: 18px;
                font-weight: 600;
                color: #ea3a3a;
              }
            }
            .default {
              border: 2px solid #ea3a3a;
            }
          }
          .details_Number {
            display: flex;
            align-items: center;
            margin: 22px 0px;
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
            padding: 22px 0px;
            border-top: 1px solid #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
            button {
              width: 148px;
              height: 48px;
              font-size: 18px;
              font-weight: 600;
              text-align: center;
              line-height: 48px;
            }
            .immediately {
              background: linear-gradient(
                90deg,
                #f34250 0%,
                #f28a51 81%,
                #ff7d3b 100%
              );
              color: #ffffff;
              border: none;
              cursor: pointer;
            }
            .join {
              background: #fff5f1;
              border: 1px solid #ed6d38;
              box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
              color: #ed6d38;
              margin-left: 16px;
              cursor: pointer;
            }
            .disabled {
              background: rgb(234, 234, 234) !important;
              color: rgb(0, 0, 0) !important;
              border: none !important;
              cursor: default !important;
            }
          }
          .order-info {
            .more {
              margin: 22px 0px;
              font-size: 12px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.45);
              display: flex;
              align-items: center;
              span {
                font-size: 13px;
                font-weight: 600;
                text-align: left;
                color: rgba(0, 0, 0, 0.85);
              }
            }
            .SubscribeMoreP {
              font-size: 13px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              display: flex;
              align-items: center;
              .price {
                font-size: 14px;
                color: #ea3a3a;
                margin: 0px 20px 0px 12px;
              }
              input {
                margin-right: 10px;
              }

              input[type="checkbox"] {
                cursor: pointer;
                position: relative;
              }
              input[type="checkbox"]::after {
                position: absolute;
                top: 0;
                background-color: #fff;
                color: #fff;
                width: 14px;
                height: 14px;
                display: inline-block;
                visibility: visible;
                padding-left: 0px;
                text-align: center;
                content: " ";
                border-radius: 2px;
                box-sizing: border-box;
                border: 1px solid #ddd;
              }

              input[type="checkbox"]:checked::after {
                content: "";
                background-color: #ea3a3a;
                border-color: #ea3a3a;
                background-color: #ea3a3a;
              }

              input[type="checkbox"]:checked::before {
                content: "";
                position: absolute;
                top: 1px;
                left: 5px;
                width: 3px;
                height: 8px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
                z-index: 1;
              }
            }

            .tips {
              font-size: 12px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              line-height: 16px;
              padding: 20px 0px;
            }
            .register {
              display: inline-block;
              align-items: center;
              span {
                font-weight: 600;
                text-align: center;
                color: #ed6d38;
                line-height: 16px;
              }
              img {
                width: 16px;
                height: 10px;
                margin-left: 4px;
                border-radius: 0px;
              }
            }
          }
        }
      }
      .zz-infoR {
        float: right;
        width: 239px;
        .zz-infoR-advert {
          width: 234px;
          height: 375px;
          margin: 0 auto;
          margin-bottom: 30px;
        }
        .contact-way {
          margin-bottom: 15px;
          width: 100%;
          height: 48px;
          background: #f7f7f7;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          color: rgba(0, 0, 0, 0.85);
          line-height: 48px;
        }
      }
    }
    .section_introduce {
      margin-top: 52px;
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
            &:last-child {
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
                background: #ed6d38;
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
                      color: #ed6d38;
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
                  border: 1px solid #ed6d38;
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
                /deep/.el-pagination {
                  display: flex;
                  justify-content: center;
                  margin: 50px;
                }
                /deep/.el-pagination.is-background
                  .el-pager
                  li:not(.disabled).active {
                  background-color: #ed6d38;
                }
                /deep/.el-input.is-active .el-input__inner,
                /deep/.el-input__inner:focus {
                  border-color: #ed6d38;
                }

                /deep/.el-select .el-input__inner:focus,
                /deep/.el-select .el-input__inner:hover {
                  border-color: #ed6d38;
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
