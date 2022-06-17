<template>
  <div>
    <Header />
    <div class="main_container">
      <singleHeader />
      <div class="wapper">
        <div class="banner">
          <div class="banner_main">
            <div class="banner_main-left">
              <img src="@/static/images/zsh-img/zh-banner-text.png" alt="" />
            </div>
          </div>
        </div>
        <div class="introduce">
          <div class="title_box">
            <img src="@/static/images/zsh-img/h2-l.png" alt="" />
            <h2>中国化学全面深化改革 激发企业高质量发展的“动力源”</h2>
            <img src="@/static/images/zsh-img/h2-r.png" alt="" />
          </div>
          <div class="introduce_main">
            <div class="introduce_main_l">
              <h2>中国化学工程集团有限公司 (简称中国化学)</h2>
              <p class="english">
                China National Chemical Engineering Group Corporation
                Ltd.简称CNCEC
              </p>
              <p class="info">
                国务院国资委直接监管的大型工程建设企业集团公布的全球最大的250家承包商,在全球
                油气行业工程建设公司排名中名列第二位。
              </p>
              <div class="video-box">
                <div class="video-main">
                  <video
                    :poster="require('@/static/images/zsh-img/zh-video.png')"
                    ref="movie"
                    src="https://cmas-dkt-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-ld/3345ae7060e94d9ba38fc17771ecdbec/zghx20211206.mp4?versionId=CAEQUxiBgIDO_an9hhgiIGIzMTAyMDZkYWQ2OTQ3Yzc4Mzg4ZTQ1ZjZhOTAyM2Jm"
                    controls
                  ></video>
                  <img
                    v-show="isplay"
                    @click="handlePlay"
                    class="video-play"
                    src="@/static/images/zsh-img/play.png"
                    alt=""
                  />
                  <img
                    v-show="!isplay"
                    @click="handlePause"
                    class="video-pause"
                    src="@/static/images/zsh-img/pause.png"
                    alt=""
                  />
                </div>
                <div class="point">8分钟了解中国石化</div>
              </div>
            </div>
            <div class="introduce_main_r">
              <p class="p">实施国企改革三年行动，坚持改革创新“双轮驱动”。</p>
              <ul>
                <li>
                  <img src="@/static/images/zsh-img/icon-1.png" alt="" />
                  <p>抓改革</p>
                </li>
                <li>
                  <img src="@/static/images/zsh-img/icon-2.png" alt="" />
                  <p>降成本</p>
                </li>
                <li>
                  <img src="@/static/images/zsh-img/icon-3.png" alt="" />
                  <p>增效益</p>
                </li>
                <li>
                  <img src="@/static/images/zsh-img/icon-4.png" alt="" />
                  <p>抓创新</p>
                </li>
                <li>
                  <img src="@/static/images/zsh-img/icon-5.png" alt="" />
                  <p>促转型</p>
                </li>
                <li>
                  <img src="@/static/images/zsh-img/icon-6.png" alt="" />
                  <p>谋发展</p>
                </li>
              </ul>
              <p class="p">
                企业高质量发展动 力强劲，成效突出，“十三五”各项
                主要经济指标连创新高，新签合同额
                五年翻两番，营业收入、利润总额、
                净利润、资产总额均实现翻番！！！
              </p>
              <img
                class="video-sj"
                src="@/static/images/zsh-img/icon-sj.png"
                alt=""
              />
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
        <div class="related_info">
          <div class="related_info_main">
            <div class="related_info_main_top">
              <div class="title">《管理会计研究》2022年第1期 ></div>
            </div>
            <div class="related_list">
              <div class="related_list_l">
                <div class="related_list_title">
                  <img src="@/static/images/zsh-img/logo.png" alt="" />
                  <span>专业文章</span>
                </div>
                <div class="related_list_content">
                  <dl>
                    <dt>
                      <h5>
                        中国化学刘东进：大智移动云雾科技革命 重塑财务新职能
                        引领财务新变革
                      </h5>
                      <p>财务是企业的中枢神经、生命血脉和管理核心</p>
                    </dt>
                    <dd>
                      <a
                        href="https://www.chinamas.cn/gc/list/584"
                        >阅读详情</a
                      >
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <h5>中国化学宋志鹏：从BSC模型中感悟人生之路</h5>
                      <p>
                        本文用管理会计学中平衡计分卡的思维模式巧妙对照、感悟人生，既有助于浅显易懂地理解平衡计分卡，又从“战略”高度启发人生之路
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://www.chinamas.cn/gd/list/572"
                        >阅读详情</a
                      >
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
              </div>
              <div class="related_list_l">
                <div class="related_list_title">
                  <img
                    class="zx-img"
                    src="@/static/images/zsh-img/zh-logo-2.png"
                    alt=""
                  />
                  <span>企业资讯</span>
                </div>
                <div class="related_list_content">
                  <dl>
                    <dt>
                      <h5>中国化学召开2022年度财务工作会</h5>
                      <p>4月12日，中国化学通过视频形式召开2022年度财务工作会</p>
                    </dt>
                    <dd>
                      <a
                        href="https://cncec.cn/articledetail/125548"
                        >阅读详情</a
                      >
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <h5>中国化学多个境外工程项目荣获鲁班奖</h5>
                      <p>
                        本报讯
                        近年来，中国化学以习近平新时代中国特色社会主义思想为指导，践行新发展理念，深入贯彻落实中共中央国务院《关于开展质量提升行动的指导意见》
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://cncec.cn/articledetail/125568"
                        >阅读详情</a
                      >
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="data_box">
          <div class="data_main">
            <div class="title_p">
              <div class="line"></div>
              中国化学财务数字化，以建设世界一流财务管理体系为统领，全力推进
              <div class="tip">“一平台、三驱动、四架构”</div>
              , 的数字化规划实施
            </div>
            <div class="explain_box">
              <div class="explain_box_p">
                <div class="p-line">
                  <div class="tip">“一个平台”</div>
                  以财务智能化为核心打造数字化财务云平台;
                </div>
                <div class="p-line">
                  <div class="tip">“三擎驱动”</div>
                  包括数据驱动、技术驱动和管理驱动:以业财融合大数据支撑经营管理决策，以信息技术驱动财务管理智能化、智慧化，以管理提升驱动信息化迭代;
                </div>
                <div class="p-line">
                  <div class="tip">“四大架构”</div>
                  包括应用架构、集成架构、数据架构、基础设施。助推企业数字化转型，争当数智财务先行者，为支持企业高质量发展做出贡献。
                </div>
              </div>
            </div>
            <img
              class="data_info"
              src="@/static/images/zsh-img/zh-data.png"
              alt=""
            />
          </div>
        </div>
        <div class="behavior">
          <div class="title_box">
            <img src="@/static/images/zsh-img/h2-l.png" alt="" />
            <h2>中国化学在行动</h2>
            <img src="@/static/images/zsh-img/h2-r.png" alt="" />
          </div>
          <div class="behavior_main_box">
            <swiper
              :options="swiperOption"
              ref="mySwiper"
              class="behavior_main swiper swiper-container"
            >
              <swiper-slide>
                <img src="@/static/images/zsh-img/lb-1.png" alt="" />
                <p>举办国企改革典型专场媒体座谈会</p>
              </swiper-slide>
              <swiper-slide>
                <img src="@/static/images/zsh-img/lb-2.png" alt="" />
                <p>刘东进总会计师莅临交建公司开展财务共享中心建设调研</p>
              </swiper-slide>

              <swiper-slide>
                <img src="@/static/images/zsh-img/lb-3.png" alt="" />
                <p>刘东进总会计师莅临天辰公司开展财会数字化工作调研</p>
              </swiper-slide>

              <swiper-slide>
                <img src="@/static/images/zsh-img/lb-4.png" alt="" />
                <p>开展全员竞聘上岗，对内公开选拔、对外公开招聘</p>
              </swiper-slide>
              <swiper-slide>
                <img src="@/static/images/zsh-img/lb-5.png" alt="" />
                <p>积极稳妥推进混合所有制改革</p>
              </swiper-slide>
            </swiper>

            <div class="swiper-button-left">
              <img src="@/static/images/zsh-img/swiper-l.png" alt="" />
            </div>
            <div class="swiper-button-right">
              <img src="@/static/images/zsh-img/swiper-r.png" alt="" />
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="exhibition">
          <div class="title_box">
            <img src="@/static/images/zsh-img/h2-l.png" alt="" />
            <h2>更多企业巡展</h2>
            <img src="@/static/images/zsh-img/h2-r.png" alt="" />
          </div>
          <div class="exhibition-content">
            <div class="line-bg"></div>
            <div class="exhibition_main">
              <img src="@/static/images/zsh-img/zh-xz-img.png" alt="" />
              <div class="content_info">
                <h5>中国石油化工集团有限公司</h5>
                <p>
                  中国石油化工集团有限公司（以下简称公司）的前身是成立于1983年7月的中国石油化工总公司。1998年7月，按照党中央关于实施石油石化行业战略性重组的部署，在原中国石油化工总公司基础上重组成立中国石油化工集团公司，2018年8月，经公司制改制为中国石油化工集团有限公司。目前，公司是中国最大的成品油和石化产品供应商、第二大油气生产商，是世界第一大炼油公司、第二大化工公司，加油站总数位居世界第二，在2020年《财富》世界500强企业中排名第2位。
                </p>
                <nuxt-link to="/kzt/zsh">了解更多</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="base_box">
          <div class="base_box_main">
            <div class="base_box_main_l">
              <h5>欢迎更多优秀企业入驻企业数字化转型巡展</h5>
              <p>联系方式：400-819-1255</p>
              <p>邮箱：yangww@chinamas.cn</p>
            </div>
            <div class="base_box_main_r">
              <img src="@/static/images/zsh-img/qx-code.png" alt="" />
              <span>合作咨询</span>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="lx">
          <img src="@/static/images/zsh-img/hz.png" />
          <span>合作联系</span>
        </div>
        <div class="lx-info" style="">
          <dl class="tel">
            <dt>
              <img src="@/static/images/zsh-img/tel.png" alt="" />
            </dt>
            <dd>
              <p>手机号</p>
              <p>186-1888-8888</p>
              <span></span>
            </dd>
          </dl>
          <dl class="tel">
            <dt>
              <img src="@/static/images/zsh-img/code.png" alt="" />
            </dt>
            <dd>
              <p>个人二维码</p>
              <div class="code">
                <img src="@/static/images/zsh-img/qx-code.png" alt="" />
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  layout: "not",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
        slidesPerView: 3,
        spaceBetween: 20,
        // 如果需要前进后退按钮
        navigation: {
          prevEl: ".swiper-button-left",
          nextEl: ".swiper-button-right",
        },
      },
      isplay: true, //视频是否播放
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.$store.commit("setHeaderWidth", "1200px");
  },
  mounted() {
    $(".slide .lx").mouseenter(function () {
      $(".slide .lx-info ").css("display", "block");
    });
    $(".slide .lx").mouseleave(function () {
      $(".slide .lx-info ").css("display", "none");
    });
    this.$refs.movie.addEventListener("play", this.handlePlay);
    this.$refs.movie.addEventListener("pause", this.handlePause);
  },
  methods: {
    //点击视频播放按钮
    handlePlay() {
      this.$refs.movie.play();
      this.isplay = false;
    },
    //点击视频暂停按钮
    handlePause() {
      this.$refs.movie.pause();
      this.isplay = true;
    },
  },
  destroyed() {
    this.$store.commit("setHeaderWidth", "1100px");
  },
};
</script>
<style lang="less" scoped>
/deep/.banxin {
  width: 1200px !important;
}
.wapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.banner {
  width: 100%;
  height: 460px;
  background-image: url(@/static/images/zsh-img/zh-banner.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.banner_main {
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  position: relative;
}

.banner_main-left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.banner_main-left img {
  /* width: 486px; */
  height: 270px;
}

.introduce {
  padding: 80px 0px;
}

.title_box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title_box img {
  width: 114px;
  height: 25px;
}

.title_box h2 {
  font-size: 32px;
  font-weight: 600;
  color: #2a2a39;
  line-height: 45px;
  margin: 0px 28px;
}

.introduce_main {
  width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
}

.introduce_main_l {
  width: 634px;
  float: left;
}

.introduce_main_l h2 {
  font-size: 24px;
  font-family: PingFangSC, PingFangSC-Semibold;
  font-weight: 600;
  color: #40424c;
  line-height: 33px;
}

.introduce_main_l .english {
  opacity: 0.45;
  font-size: 16px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  color: #434447;
  line-height: 22px;
  padding: 14px 0px 36px 0px;
}

.introduce_main_l .info {
  width: 608px;
  font-size: 16px;
  font-weight: 400;
  color: #73747b;
  line-height: 24px;
  padding-bottom: 88px;
}

.introduce_main_l .video-box {
  width: 368px;
  height: 405px;
  background-image: url(@/static/images/zsh-img/video-l-bg.png);
  background-size: 100% 100%;
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
}

.introduce_main_l .video-box .video-main {
  width: 606px;
  height: 341px;
  background: #d8d8d8;
  border: 8px solid #ffffff;
  position: absolute;
  top: 24px;
  left: 24px;
}

.introduce_main_l .video-box .video-main video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.introduce_main_l .video-box .video-main img {
  width: 62px;
  height: 62px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.introduce_main_l .video-box .video-main img.video-pause {
  opacity: 0;
  transition: all 0.4s;
}

.introduce_main_l .video-box .video-main:hover .video-pause {
  opacity: 1;
}

.point {
  position: absolute;
  top: 32px;
  left: 32px;
  width: 160px;
  height: 40px;
  background: #ed6d38;
  border-radius: 0px 0px 10px 0px;
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 20%);
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 38px;
}

.introduce_main_r {
  width: 520px;
  float: right;
}

.introduce_main_r .p {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a39;
  line-height: 24px;
  padding-bottom: 15px;
}

.introduce_main_r ul {
  width: 100%;
  /* height: 212px; */
  background: #f6f8fc;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
}

.introduce_main_r ul li {
  width: 172px;
  height: 105px;
  border-right: 1px solid #ebf0fa;
  border-bottom: 1px solid #ebf0fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.introduce_main_r ul li:nth-child(3n) {
  border-right: none;
}

.introduce_main_r ul li:nth-child(4),
.introduce_main_r ul li:nth-child(5),
.introduce_main_r ul li:nth-child(6) {
  border-bottom: none;
}

.introduce_main_r ul li img {
  width: 28px;
  height: 28px;
}

.introduce_main_r ul li p {
  font-size: 16px;
  font-weight: 400;
  color: #636873;
  text-align: center;
  line-height: 22px;
  margin-top: 8px;
}

.introduce_main_r .video-sj {
  width: 100%;
  height: 296px;
}

.related_info {
  width: 100%;
  background: #f7f8fa;
}

.related_info_main {
  width: 1200px;
  margin: 0 auto;
  padding: 40px 0px;
}

.related_info_main_top {
  width: 100%;
  height: 264px;
  background-image: url(@/static/images/zsh-img/zh-rw-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.related_info_main_top .title {
  width: 244px;
  height: 32px;
  background: #ed6d38;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  line-height: 32px;
  position: absolute;
  top: 176px;
  left: 46px;
}

.related_list {
  display: flex;
  justify-content: space-between;
}

.related_list_l {
  width: 588px;
}

.related_list_title {
  display: flex;
  align-items: center;
  padding: 34px 0px;
}

.related_list_title img {
  width: 102px;
  height: 30px;
}

.related_list_title .zx-img {
  width: 57px;
  height: 30px;
}

.related_list_title span {
  font-size: 20px;
  font-weight: 600;
  color: #2a2a39;
  line-height: 28px;
  margin-left: 6px;
}

.related_list_content {
  width: 524px;
  /* height: 276px; */
  background: #ffffff;
  padding: 0px 32px;
}

.related_list_content dl {
  padding: 24px 0px;
  border-bottom: 1px solid #e4e4ec;
}

.related_list_content dl:last-child {
  border-bottom: none;
}

.related_list_content dl dt h5 {
  font-size: 16px;
  font-weight: 600;
  color: #40424c;
  line-height: 30px;
}

.related_list_content dl dt p {
  font-size: 14px;
  font-weight: 400;
  color: #898c98;
  line-height: 24px;
  padding: 8px 0px 24px 0px;
}

.related_list_content dl dd {
  display: flex;
  align-items: center;
}

.related_list_content dl dd a {
  font-size: 16px;
  font-weight: 600;
  color: #ed6d38;
  line-height: 16px;
}

.related_list_content dl dd img {
  width: 16px;
  height: 10px;
  margin-left: 8px;
}

.data_box {
  background-color: #fff;
}

.data_main {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0px;
}

.data_main .title_p {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #2a2a39;
  line-height: 24px;
  display: flex;
  align-items: center;
}

.data_main .title_p .line {
  width: 4px;
  height: 16px;
  background-color: #ed6d38;
  margin-right: 16px;
  vertical-align: middle;
}

.data_main .tip {
  color: #ed6d38;
}

.explain_box {
  height: 122px;
  background: #f7f8fa;
  margin: 16px 0px 50px 0px;
}

.explain_box_p {
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #2a2a39;
  line-height: 30px;
}
.p-line {
  display: flex;
  align-items: center;
}

.data_info {
  width: 100%;
  height: 842px;
}

.behavior {
  width: 100%;
  padding-bottom: 80px;
  background-image: url(@/static/images/zsh-img/zh-xd-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.behavior .title_box {
  padding: 80px 0px 60px 0px;
}

.behavior_main_box {
  position: relative;
}

.behavior_main {
  margin: 0 auto;
  width: 1200px;
}

.behavior_main .swiper-wrapper {
  width: 100%;
}

.swiper-button-left,
.swiper-button-right {
  width: 40px;
  height: 40px;
  position: absolute;
}

.swiper-button-left {
  top: 30%;
  left: 4%;
}

.swiper-button-right {
  top: 30%;
  right: 4%;
}

.behavior_main .swiper-wrapper .swiper-slide {
  width: 385px;
}

.behavior_main .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 273px;
}

.behavior_main .swiper-wrapper .swiper-slide p {
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  color: #40424c;
  line-height: 36px;
  padding-top: 28px;
}

.exhibition .title_box {
    padding: 60px 0px 80px 0px;
}

.exhibition-content {
    margin-top: 60px;
}

.line-bg {
    width: 1360px;
    height: 167px;
    background: #f7f8fb;
    display: flex;
    margin: 0 auto;
}

.exhibition_main {
    width: 1090px;
    height: 300px;
    background-image: url(@/static/images/zsh-img/exhibition-bg.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 60px;
    margin-top: -228px
}

.exhibition_main img {
    width: 296px;
    height: 228px;
}

.content_info h5 {
    font-size: 24px;
    font-weight: 600;
    color: #40424c;
    line-height: 33px;
}

.content_info p {
    width: 761px;
    padding: 16px 0px 44px 0px;
    font-size: 14px;
    font-weight: 400;
    color: #40424c;
    line-height: 24px;
}

.content_info span, .content_info a{
    display: inline-block;
    width: 88px;
    height: 32px;
    border: 1px solid #ed6d38;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #ed6d38;
    line-height: 32px;
}

.base_box {
  background: #3d3e49;
  margin-top: 80px;
}

.base_box_main {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 45px 0px;
}

.base_box_main_l h5 {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  line-height: 28px;
  padding-bottom: 16px;
}

.base_box_main_l p {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
}

.base_box_main_r {
  display: flex;
  flex-direction: column;
}

.base_box_main_r img {
  width: 113px;
  height: 113px;
  border: 8px solid #ffffff;
  background: #a9abb8;
}

.base_box_main_r span {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 30px;
}

/* 侧导航 slide start  */
.slide {
  width: 60px;
  position: fixed;
  bottom: 214px;
  right: 10px;
  z-index: 999;
}

.slide .lx {
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(6, 13, 31, 0.1);
}

.slide .lx img {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}

.slide .lx span {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  color: #2a2a39;
  line-height: 17px;
  vertical-align: top;
}
.lx-info {
  display: none;
  width: 150px;
  height: 145px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(6, 13, 31, 0.1);
  position: absolute;
  top: 0px;
  right: 76px;
  overflow: hidden;
  padding: 20px 12px;
}

.lx-info .tel {
  position: relative;
  display: flex;
  padding-bottom: 12px;
}

.lx-info .tel dt {
  width: 20px;
  height: 20px;
}

.lx-info .tel dd {
  margin-left: 6px;
}

.slide .lx-info .tel dd p:nth-child(1) {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #2a2a39;
  line-height: 20px;
}

.slide .lx-info .tel dd p:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #2a2a39;
  line-height: 17px;
}

.slide .lx-info .tel dd span {
  position: absolute;
  right: 0px;
  top: 5px;
  background-image: url(https://www.yuanian.com/skin/images/zxkf_right.png);
  width: 6px;
  height: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.slide .lx-info .tel dd .code {
    width: 70px;
    height: 70px;
    background: #f6f7ff;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide .lx-info .tel dd .code img {
    width: 61px;
    height: 61px;
}
</style>
