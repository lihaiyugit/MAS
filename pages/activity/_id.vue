<template>
  <div class="page-activity-details">
    <div class="activity-info">
      <div class="activity-info-main banxin">
        <div class="activity-info-main-l">
          <img src="../../static/images/ad-img.png" alt="" />
        </div>
        <div class="activity-info-main-r">
          <h2>数字化企业与管理会计体系转型研讨会</h2>
          <div class="activity-time">
            <img src="../../static/images/time.png" alt="" />
            <span>时间：2021-04-11 - 14:00-17:30</span>
            <span class="restrict"
              >限制：<span style="color: #ed6d38">100人</span></span
            >
            <span>线下：上海</span>
          </div>
          <div class="activity-time">
            <img src="../../static/images/zb.png" alt="" />
            <span
              >主办：<span style="color: #bc996d"
                >《管理会计研究》杂志</span
              ></span
            >
          </div>
          <div class="activity-time">
            <img src="../../static/images/xb.png" alt="" />
            <span
              >协办：<span style="color: #bc996d"
                >中国医药会计学会、上海市成本研究会、上海交通大学安泰经济与管理学院…</span
              ></span
            >
          </div>
          <div class="operate-box" v-if="state == 1">
            <button class="state-one">我要报名</button>
          </div>
          <div class="operate-box" v-else-if="state == 2">
            <button type="button" disabled="disabled" class="state-two">
              已报名
            </button>
            <button class="check">查看活动</button>
          </div>
          <div class="operate-box" v-else>
            <button type="button" disabled="disabled" class="state-three">
              已结束
            </button>
            <button class="check">查看活动</button>
          </div>
          <div class="share-box" v-close>
            <div class="share-title" @click="shareFn">
              <img
                class="fx-icon"
                src="../../static/images/fx-icon.png"
                alt=""
              />
              <span>分享至</span>
              <img
                class="top-arrow"
                src="../../static/images/top-arrow.png"
                alt=""
              />
            </div>
            <div class="share-list" v-show="isShare">
              <div class="wx-box" v-show="isWx">
                <span>微信扫码</span>
                <div id="qrcode" class="qrcode"></div>
                <!-- <img src="../../static/images/code.png" alt="" /> -->
              </div>
              <div class="list-right">
                <div class="item" @click.stop="copyUrl">
                  <img src="../../static/images/lj.png" alt="" />
                  <span>复制链接</span>
                </div>
                <div class="item">
                  <a
                    :href="
                      'https://service.weibo.com/share/share.php?appkey=' +
                      595885820 +
                      '&url=' +
                      linkUrl +
                      '&title=数字化企业与管理会计体系转型研讨会'
                    "
                    target="_blank"
                  >
                    <img src="../../static/images/tsina.png" alt="" />
                    <span>新浪微博</span>
                  </a>
                </div>
                <div class="item" @click="isWxFn">
                  <img src="../../static/images/weixin.png" alt="" />
                  <span>微信</span>
                </div>
                <div class="item">
                  <a
                    :href="
                      'http://shuo.douban.com/!service/share?href=' +
                      linkUrl +
                      '&name=数字化企业与管理会计体系转型研讨会'
                    "
                    target="_blank"
                  >
                    <img src="../../static/images/db.png" alt="" />
                    <span>豆瓣</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detailed-info banxin">
      <div class="detailed-info-l">
        <div class="title-box">
          <span class="line"></span>
          <h5>活动票种</h5>
        </div>
        <div class="ticket">免费票</div>
        <div class="title-box">
          <span class="line"></span>
          <h5>主办方介绍</h5>
        </div>
        <div class="introduce-box">
          <img src="../../static/images/gl-logo.png" alt="" />
          <p>
            《管理会计研究》杂志在立足但不拘泥于传统管理会计教科书内容和工具应用的指导思想下，将把视角拓展到生机勃勃的财经领域，会特别关注公司治理、商业模式、投融资、企业重组、风险管理、战略创新、组织转型、工业互联网和智能财务等。
          </p>
        </div>
        <div class="title-box">
          <span class="line"></span>
          <h5>活动详情</h5>
        </div>
        <div class="details-box">
          <dl>
            <dt>
              <img src="../../static/images/yh.png" alt="" />
            </dt>
            <dd>
              <p>
                数字化已经深度嵌入中国企业的方方面面，建设数字化企业乃大势所趋。
              </p>
              <p>
                基于此“数字化企业与管理会计体系转型”研讨会来啦，本次研讨会汇聚管理会计产学研政等各领域专家学者、大型企业财务负责人，面对面交流，赋能中国企业数字化转型。
              </p>
            </dd>
          </dl>
          <img class="flow" src="../../static/images/flow.png" alt="" />
        </div>
      </div>
      <div class="detailed-info-r">
        <div class="module">
          <h2>活动地点</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <div class="map">
              <div class="bm-view">地图</div>
              <!-- <baidu-map
                id="allmap"
                class="bm-view"
                zoom="17"
                @ready="init"
              ></baidu-map> -->
            </div>
          </div>
        </div>
        <div class="module">
          <h2>更多活动</h2>
          <div class="module-main activity-base">
            <div class="top-line"></div>
            <div class="activity">
              <swiper
                :options="swiperOption"
                ref="mySwiper"
                class="swiper-wrapper"
              >
                <swiper-slide>
                  <dl @click="details(1)">
                    <dt>
                      <img src="../../static/images/hd-img.png" alt="" />
                      <div class="point">最新活动</div>
                      <h5>疫情下的日企成本企划和改善之道</h5>
                    </dt>
                    <dd>
                      <div class="dd-l">
                        <img src="../../static/images/time.png" alt="" />
                        <span>11月18日 13:21</span>
                      </div>
                      <div class="dd-r">
                        <img src="../../static/images/map.png" alt="" />
                        <span>北京</span>
                      </div>
                    </dd>
                  </dl>
                </swiper-slide>
                <swiper-slide>
                  <dl @click="details(2)">
                    <dt>
                      <img src="../../static/images/hd-img.png" alt="" />
                      <div class="point">最新活动</div>
                      <h5>疫情下的日企成本企划和改善之道</h5>
                    </dt>
                    <dd>
                      <div class="dd-l">
                        <img src="../../static/images/time.png" alt="" />
                        <span>11月18日 13:21</span>
                      </div>
                      <div class="dd-r">
                        <img src="../../static/images/map.png" alt="" />
                        <span>北京</span>
                      </div>
                    </dd>
                  </dl>
                </swiper-slide>
                <swiper-slide>
                  <dl @click="details(3)">
                    <dt>
                      <img src="../../static/images/hd-img.png" alt="" />
                      <div class="point">最新活动</div>
                      <h5>疫情下的日企成本企划和改善之道</h5>
                    </dt>
                    <dd>
                      <div class="dd-l">
                        <img src="../../static/images/time.png" alt="" />
                        <span>11月18日 13:21</span>
                      </div>
                      <div class="dd-r">
                        <img src="../../static/images/map.png" alt="" />
                        <span>北京</span>
                      </div>
                    </dd>
                  </dl>
                </swiper-slide>
              </swiper>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
        <div class="module">
          <h2>相关文章</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <ul>
              <li>
                <div class="li-l twoline">
                  论文《 潜水期权与高管绩效薪酬敏感 度之间的…
                </div>
                <div class="li-r">
                  <img src="@/static/images/article-img.png" alt="" />
                </div>
              </li>
              <li>
                <div class="li-l twoline">
                  论文《 潜水期权与高管绩效薪酬敏感 度之间的…
                </div>
                <div class="li-r">
                  <img src="@/static/images/article-img.png" alt="" />
                </div>
              </li>
              <li>
                <div class="li-l twoline">
                  论文《 潜水期权与高管绩效薪酬敏感 度之间的…
                </div>
                <div class="li-r">
                  <img src="@/static/images/article-img.png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="module">
          <h2>热点推荐</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <HotRecommend />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { notNeedlogin } from "@/request/api";
import md5 from "js-md5";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  scrollToTop: true,
  data() {
    return {
      state: 3, //1我要报名2 已报名 3 已结束
      isShare: false, //是否展示分享弹框
      isWx: false, //是否展示微信二维码
      swiperOption: {
        loop: false, // 无限循环
        autoplay: true, //可选选项，自动滑动
        speed: 2000,
        slidesPerView: 1, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 1, // 在轮播模式下定义slides的数量多少为一组。
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
        },
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      linkUrl: "",
    };
  },
  //点击空白处关闭下拉框
  directives: {
    close: {
      inserted(el, binding, vnode) {
        window.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.isShare = false;
            vnode.context.isWx = false;
          }
        });
      },
    },
  },

  async asyncData({ $axios, store, params }) {
    let timestamp = Date.parse(new Date());
    let sign = md5(timestamp + store.state.secretKey);
    let res = await notNeedlogin($axios, {
      sign: sign,
      timespan: timestamp,
      className: "ActivityController",
      classMethod: "activityDetails",
      data: {
        mas_activity_id: parseInt(params.id),
      },
    });
    console.log(res.data, "res-活动详情");
    // if (res.bol) {
    //   return { listData: res.data,banner: res.data.bannerImg[0].mas_banner_img};
    // }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    // this.init();
    this.linkUrl = window.location.href;
    // 生成二维码
    let qr = new QRCode("qrcode", {
      width: 88,
      height: 88, // 高度
      text: this.linkUrl, // 二维码内容
      // render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      background: "#f0f",
      foreground: "#ff0",
      // correctLevel: QRCode.CorrectLevel.H,
    });
  },
  methods: {
    init({ BMap, map }) {
      this.map = map;
      var point = new BMap.Point(116.331398, 39.897445); //设置城市经纬度坐标
      map.centerAndZoom(point, 16); //
      map.setCurrentCity("上海"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //鼠标滚动缩放
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      // for (var i in mapdata) {
      //   var pt = new BMap.Point(mapdata[i].longitude, mapdata[i].latitude); //经纬度
      //   var myicon = new BMap.Icon("图片路径", new BMap.Size(32, 32)); //设置对应图片和图片大小
      //   var marker2 = new BMap.Marker(pt, { icon: myicon }); //创建标注
      //   map.addOverLay(marker2);
      // }
      // 百度地图API功能
      // var map = new BMap.Map("allmap");
      // var point = new BMap.Point(116.331398,39.897445);
      // map.centerAndZoom(point,12);
      // // 创建地址解析器实例
      // var myGeo = new BMap.Geocoder();
      // // 将地址解析结果显示在地图上,并调整地图视野
      // myGeo.getPoint(''+Detailed_address+'', function(point){
      //     if (point) {
      //         map.centerAndZoom(point, 16);
      //         map.addOverlay(new BMap.Marker(point));
      //     }else{
      //         alert("您选择地址没有解析到结果!");
      //     }
      // }, ''+Active_address+'');
      // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },

    // handler ({BMap, map}) {
    //   var point = new BMap.Point(121.34113,31.19590)//标注点的经纬度
    //   map.centerAndZoom(point, 13)
    //   var marker = new BMap.Marker(point) // 创建标注
    //   map.addOverlay(marker) // 将标注添加到地图中
    //   var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
    // //   map.addOverlay(circle)
    // },
    //点击分享
    shareFn() {
      this.isShare = !this.isShare;
    },
    //点击微信
    isWxFn() {
      this.isWx = !this.isWx;
    },
    //点击赋值链接
    copyUrl() {
      var textArea = document.createElement("textarea");
      document.body.appendChild(textArea);
      textArea.readOnly = "readonly";
      textArea.style.opacity = "0";
      textArea.value = this.linkUrl; //你的要被复制的链接
      textArea.select();
      if (textArea.setSelectionRange)
        textArea.setSelectionRange(0, textArea.value.length);
      else textArea.select();
      document.execCommand("copy");
      this.$message({
        message: "复制成功",
        type: "success",
      });
      document.body.removeChild(textArea);
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/activity/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/activitydetails.less";
</style>
