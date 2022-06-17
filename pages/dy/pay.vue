<template>
  <div class="content-container">
    <div class="mas-box">
      <img src="../../static/images/diamond.png" alt="" />
      <h5>MAS订阅</h5>
    </div>
    <div class="pay-container banxin">
      <div class="pay-main">
        <div class="pay-main-l">
          <div class="pay-main-l-l" @click="success()">
            <img
              class="qrcode"
              src="https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
              alt=""
            />
            <div class="info">
              <img src="../../static/images/weixin.png" alt="" />
              <span>扫码支付</span>
            </div>
          </div>
          <div class="pay-main-l-r">
            <h6>您将订阅<span>看原创</span>专题</h6>
            <div class="tip">
              完成订阅服务您可以畅读栏目所有付费文章，为此您将节省 XXX 元。
            </div>
            <div class="price">
              <span>实付：</span>
              <span class="num">58</span>
              <span class="yuan">元</span>
            </div>
          </div>
        </div>
        <div class="pay-main-r">
          <dl>
            <dt>
              <img src="../../static/images/way/zz.png" alt="" />
              <div class="point">新书</div>
            </dt>
            <dd>2022年第一期｜总第567期</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="type-box">
        <div class="btn-left">
          <img class="left01" src="@/static/images/way/left01.png" alt="" />
          <img class="left1" src="@/static/images/way/left1.png" alt="" />
        </div>
        <!-- <div class="type-main">
          <dl class="active">
            <div class="mas-tip">推荐订阅</div>
            <dt>
              <h5>学案例</h5>
              <div class="price-box">
                <span class="icon">¥</span>
                <span class="price">48.00</span>
                <span class="icon">/月</span>
              </div>
            </dt>
            <dd>
              <p>学案例栏目所有付费文章免费阅读</p>
              <img
                class="mas-select"
                src="../../static/images/mas-select.png"
                alt=""
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <h5>看原创</h5>
              <div class="price-box">
                <span class="icon">¥</span>
                <span class="price">48.00</span>
                <span class="icon">/月</span>
              </div>
            </dt>
            <dd>
              <p>MAS全站付费内容免费阅读</p>
              <img
                class="mas-select"
                src="../../static/images/mas-select.png"
                alt=""
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <h5>见大咖</h5>
              <div class="price-box">
                <span class="icon">¥</span>
                <span class="price">48.00</span>
                <span class="icon">/月</span>
              </div>
            </dt>
            <dd>
              <p>见大咖栏目所有付费文章免费阅读</p>
              <img
                class="mas-select"
                src="../../static/images/mas-select.png"
                alt=""
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <h5>淘资讯</h5>
              <div class="price-box">
                <span class="icon">¥</span>
                <span class="price">48.00</span>
                <span class="icon">/月</span>
              </div>
            </dt>
            <dd>
              <p>淘资讯栏目所有付费文章免费阅读</p>
              <img
                class="mas-select"
                src="../../static/images/mas-select.png"
                alt=""
              />
            </dd>
          </dl>
        </div> -->
        <swiper :options="swiperOption" ref="mySwiper" class="type-main">
          <swiper-slide>
            <dl :class="activeIndex === 0 ? 'active' : ''" @click="activeFn(0)">
              <div class="mas-tip">推荐订阅</div>
              <dt>
                <h5>学案例</h5>
                <div class="price-box">
                  <span class="icon">¥</span>
                  <span class="price">48.00</span>
                  <span class="icon">/月</span>
                </div>
              </dt>
              <dd>
                <p>学案例栏目所有付费文章免费阅读</p>
                <img
                  class="mas-select"
                  src="../../static/images/mas-select.png"
                  alt=""
                />
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl :class="activeIndex == 1 ? 'active' : ''" @click="activeFn(1)">
              <dt>
                <h5>看原创</h5>
                <div class="price-box">
                  <span class="icon">¥</span>
                  <span class="price">48.00</span>
                  <span class="icon">/月</span>
                </div>
              </dt>
              <dd>
                <p>MAS全站付费内容免费阅读</p>
                <img
                  class="mas-select"
                  src="../../static/images/mas-select.png"
                  alt=""
                />
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl :class="activeIndex == 2 ? 'active' : ''" @click="activeFn(2)">
              <dt>
                <h5>见大咖</h5>
                <div class="price-box">
                  <span class="icon">¥</span>
                  <span class="price">48.00</span>
                  <span class="icon">/月</span>
                </div>
              </dt>
              <dd>
                <p>见大咖栏目所有付费文章免费阅读</p>
                <img
                  class="mas-select"
                  src="../../static/images/mas-select.png"
                  alt=""
                />
              </dd>
            </dl>
          </swiper-slide>
          <swiper-slide>
            <dl :class="activeIndex == 3 ? 'active' : ''" @click="activeFn(3)">
              <dt>
                <h5>淘资讯</h5>
                <div class="price-box">
                  <span class="icon">¥</span>
                  <span class="price">48.00</span>
                  <span class="icon">/月</span>
                </div>
              </dt>
              <dd>
                <p>淘资讯栏目所有付费文章免费阅读</p>
                <img
                  class="mas-select"
                  src="../../static/images/mas-select.png"
                  alt=""
                />
              </dd>
            </dl>
          </swiper-slide>
            <swiper-slide>
            <dl :class="activeIndex == 4 ? 'active' : ''" @click="activeFn(4)">
              <dt>
                <h5>淘资讯</h5>
                <div class="price-box">
                  <span class="icon">¥</span>
                  <span class="price">48.00</span>
                  <span class="icon">/月</span>
                </div>
              </dt>
              <dd>
                <p>淘资讯栏目所有付费文章免费阅读</p>
                <img
                  class="mas-select"
                  src="../../static/images/mas-select.png"
                  alt=""
                />
              </dd>
            </dl>
          </swiper-slide>
        </swiper>
        <div class="btn-right">
          <img class="right02" src="@/static/images/way/right02.png" alt="" />
          <img class="right2" src="@/static/images/way/right2.png" alt="" />
        </div>
      </div>
      <div class="mas-advert">
        <a href=""></a>
      </div>
      <div class="dy-main">
        <div class="title">订阅须知</div>
        <ul>
          <li>
            <h6>1、订阅功能：</h6>
            <p>
              点击马上订阅，立即付款，即可阅读订购内容，直接付费用户后续消费不享受会员折扣优惠，也无法参与会员等级升级
            </p>
          </li>
          <li>
            <h6>2、您的权益：</h6>
            <p>
              您付费后即可开通相应内容阅读权限，并享受关于该主题后期内容的扩充与更新，享受定期给经典内容推送服务；
            </p>
          </li>
          <li>
            <h6>3、订阅周期：</h6>
            <p>
              订阅时间从付款之日起开始计算，如购买时间为2021年11月23日下单，购买月度服务权益有效周期为：2021.11.23-2021.12.22；购买年度有效周期为：2021.11.23-2022.11.22；
            </p>
          </li>
          <li>
            <h6>4、付款方式：</h6>
            <p>
              网站在线支付支持微信、支付宝扫码支付或者已经充值的会员可以充值抵扣，已经注册会员也可以积累金币抵扣；
            </p>
          </li>
          <li>
            <h6>5、开票：</h6>
            <p>
              以实际消费金额为准，累计消费300元以上，CMAS提供增值税普通发票（电子）、增值税专用发票，请提供准确的开票信息；
            </p>
          </li>
          <li>
            <h6>6、关于退款：</h6>
            <p>
              文章为付款业务，付款成功后暂不支持线上退款，如果您有退款的需求请联系在线客服或拨打400电话进行沟通，将会有专门人员进行处理！
            </p>
          </li>
          <li>
            <h6>7、会员优惠政策：</h6>
            <p>升级会员可享受会员折扣优惠。</p>
          </li>
        </ul>
        <table border="1" cellspacing="0" class="table">
          <thead class="title">
            <tr>
              <th>权益详情</th>
              <th>商品名称</th>
              <th>童生</th>
              <th>秀才</th>
              <th>举人</th>
              <th>贡士</th>
              <th>进士</th>
              <th>探花</th>
              <th>榜眼</th>
              <th>状元</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="one">文章订阅</td>
              <td class="left">年度订阅参与会员折扣</td>
              <td>168元</td>
              <td>168元</td>
              <td>168元</td>
              <td>152元</td>
              <td>134元</td>
              <td>118元</td>
              <td>84元</td>
              <td>84元</td>
            </tr>
            <tr>
              <td style="vertical-align: middle" class="one" rowspan="4">
                模块订阅
              </td>
              <td class="left">学案例</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">找方法</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">见大咖</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">淘咨讯</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td style="vertical-align: middle" class="one" rowspan="2">
                专题订阅
              </td>
              <td class="left">数字化转型专题</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">管理会计专题</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
          </tbody>
        </table>
        <div class="upgrade">
          <span>升级会员</span>
          <img src="../../static/images/brown-arrow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  scrollToTop: true,
  data() {
    return {
      activeIndex:0,//默认选中值
      swiperOption: {
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 24, // 在slide之间设置距离
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    //成功以后跳转页面
    success() {
      this.$router.push({
        name: "dy-success",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
    //点击每一种类型
    activeFn(val){
      this.activeIndex=val;
    }
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/pay-dy.less";
</style>
