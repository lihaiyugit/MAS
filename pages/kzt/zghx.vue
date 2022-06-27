<template>
  <div>
    <Header />
    <div class="main_container">
      <singleHeader />
      <div class="wapper">
        <div class="banner">
          <div class="banner_main">
            <div class="banner_main-left">
              <img class="t1" src="@/static/images/zsh-img/zh-t1.png" alt="" />
              <img class="t2" src="@/static/images/zsh-img/zh-t2.png" alt="" />
              <ul>
                <li>· 打造工业工程领域综合解决方案服务商</li>
                <li>· 成为高端化学品和先进材料供应商</li>
                <li>· 建设世界一流财务管理体系和加速财务数字化转型</li>
              </ul>
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
                中国化学工程集团有限公司，是国务院国资委直接监管的大型工程建设企业集团，是我国工业工程领域资质最为齐全、功能最为完备、业务链最为完整、知识技术密集的工程公司,是我国石油和化学工业体系的缔造者，是先进工业综合解决方案的提供者，是工程建设体制机制改革的先行者，是共建“一带一路”的排头兵，是清洁能源工程领域的领军者，是建设美丽中国的实践者。
                <span class="more">更多 > </span>
              </p>
              <span class="triangle">
                中国化学工程集团有限公司（China National Chemical Engineering
                Group Corporation
                Ltd.简称CNCEC）是国务院国资委直接监管的大型工程建设企业集团，是我国工业工程领域资质最为齐全、功能最为完备、业务链最为完整、知识技术密集的工程公司,是我国石油和化学工业体系的缔造者，是先进工业综合解决方案的提供者，是工程建设体制机制改革的先行者，是共建“一带一路”的排头兵，是清洁能源工程领域的领军者，是建设美丽中国的实践者。<br />
                公司源自原国家重工业部1953年成立的重工业设计院和建设公司。1984年以中国化学工程总公司名义在国家工商行政管理局注册，2005年更名为中国化学工程集团公司。
                公司是最早承接境外承包工程的中国企业，是实施走出去的先行者和排头兵。公司现拥有境外机构134个，分布在俄罗斯、印度尼西亚、马来西亚、阿联酋、沙特、巴基斯坦、哈萨克斯坦、土耳其、埃及等60多个国家和地区，境外业务占比近40%，在一带一路国家累计完成合同额超过300亿美元，为沿线国家经济整体水平的提高和人民福祉的提升做出了重要贡献。
              </span>
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
                <div class="point">8分钟了解中国化学</div>
              </div>
            </div>
            <div class="introduce_main_r">
              <p class="p">
                <span class="line"></span
                >实施国企改革三年行动，坚持改革创新“双轮驱动”。
              </p>
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
                企业高质量发展动力强劲，成效突出，“十三五”各项主要经济指标连创新高，新签合同额
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
              <a
                href="https://www.chinamas.cn/gc/list/584"
                target="_blank"
                class="title"
                >《管理会计研究》2022年第1期 ></a
              >
            </div>
            <div class="related_list">
              <div class="related_list_l">
                <div class="related_list_title">
                  <img src="@/static/images/zsh-img/logo.png" alt="" />
                </div>
                <div class="related_list_content">
                  <dl>
                    <dt>
                      <h5>
                        中国化学刘东进：大智移动云物科技革命 重塑财务新职能
                        引领财务新变革
                      </h5>
                      <p>
                        以“大智移云物区”为代表的新技术应用浪潮滚滚而来，不仅改变了传统商业模式，而且催生出新物种、新业态和新赛道，重新定义行业边界，重塑企业价值链，对企业竞争和发展战略带来深刻影响，数字化转型成为必然选择。
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://www.chinamas.cn/gc/list/584"
                        target="_blank"
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
                        本文用管理会计学中平衡计分卡的思维模式巧妙对照、感悟人生，既有助于浅显易懂地理解平衡计分卡，又从“战略”高度启发人生之路。
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://www.chinamas.cn/gd/list/572"
                        target="_blank"
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
                      <h5>
                        国务院安全生产委员会办公室《全国安全生产简报》刊发中国化学安全生产专项整治三年行动经验
                      </h5>
                      <p>
                        中国化学深入贯彻习近平总书记关于安全生产的重要论述，坚决落实党中央、国务院安全生产重要决策部署，以防范化解重大安全风险为主线，扎实推进安全生产专项整治三年行动。
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://www.cncec.com.cn/articledetail/124427"
                        target="_blank"
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
                        近年来，中国化学以习近平新时代中国特色社会主义思想为指导，践行新发展理念，深入贯彻落实中共中央国务院《关于开展质量提升行动的指导意见》。
                      </p>
                    </dt>
                    <dd>
                      <a
                        href="https://cncec.cn/articledetail/125568"
                        target="_blank"
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
              的数字化规划实施。
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
                <a href="#">了解更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="base_box">
          <div class="base_box_main">
            <div class="base_box_main_l">
              <img src="@/static/images/zsh-img/qx-code.png" alt="" />
              <span>合作咨询</span>
            </div>
            <div class="base_box_main_r">
              <h5>企业数字化巡展合作</h5>
              <p>联系方式：400-819-1255</p>
              <p>邮箱：yangww@chinamas.cn</p>
            </div>
          </div>
        </div>
      </div>
      <Slide/>
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
  head() {
    //优化seo 动态设置title、keywprds和description
    return {
      title: "MAS企业数字化转型巡展_中国化学-管理会计研究",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "MAS企业数字化转型巡展_中国化学-管理会计研究",
        },
        {
          hid: "description",
          name: "description",
          content:
            "打造工业工程领域综合解决方案服务商，成为高端化学品和先进材料供应商，建设世界一流财务管理体系和加速财务数字化转型。",
        },
      ],
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

      $(".introduce_main_l .info .more").mouseenter(function () {
        $(".introduce_main_l .triangle").css("display", "block");
    });
    $(".introduce_main_l .info .more").mouseleave(function () {
        $(".introduce_main_l .triangle").css("display", "none");
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
.main_container {
  background-color: #fff;
}
.wapper {
  width: 100%;
  height: 100%;
}

.banner {
  width: 100%;
  height: 460px;
  background-image: url(@/static/images/zsh-img/zh-banner.png);
  background-size: cover;
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
  display: flex;
  flex-direction: column;
}

.banner_main-left .t1 {
  width: 390px;
  height: 34px;
}

.banner_main-left .t2 {
  width: 465px;
  height: 47px;
  margin: 20px 0px 36px;
}

.banner_main-left ul li {
  font-size: 16px;
  font-weight: 400;
  color: #40424c;
  line-height: 30px;
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
  position: relative;
}

.introduce_main_l h2 {
  font-size: 24px;
  font-weight: 600;
  color: #40424c;
  line-height: 33px;
}

.introduce_main_l .english {
  font-size: 16px;
  font-weight: 400;
  color: #afb0bb;
  line-height: 22px;
  padding: 17px 0px 36px 0px;
}

.introduce_main_l .info {
  width: 639px;
  font-size: 14px;
  font-weight: 400;
  color: #40424c;
  line-height: 24px;
  padding-bottom: 40px;
}

.introduce_main_l .info .more {
  color: #ed6d38;
  cursor: pointer;
}

.triangle {
  width: 543px;
  padding: 22px 28px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 32px;
  left: 518px;
  z-index: 99;
  display: none;
  font-size: 14px;
  font-weight: 400;
  color: #40424c;
  line-height: 24px;
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

.introduce_main_l .video-box .video-main img.video-play {
  display: block;
}

.introduce_main_l .video-box .video-main img.video-pause {
  opacity: 0;
  transition: all 0.4s;
  display: none;
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
  font-size: 14px;
  font-weight: 400;
  color: #40424c;
  line-height: 24px;
  padding-bottom: 15px;
}

.introduce_main_r ul {
  width: 100%;
  background: #f6f8fc;
  margin-bottom: 40px;
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
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #40424c;
  line-height: 20px;
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
  top: 160px;
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
  background: #ffffff;
  padding: 8px 32px;
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.related_list_content dl dt p {
  font-size: 14px;
  font-weight: 400;
  color: #73747b;
  line-height: 24px;
  margin: 8px 0px 17px 0px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
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
  font-weight: 600;
  text-align: left;
  color: #40424c;
  line-height: 24px;
  display: flex;
  align-items: center;
}

.line {
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #ed6d38;
  margin-right: 10px;
  vertical-align: middle;
}

.data_main .tip {
  color: #ed6d38;
  font-weight: 500;
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
  color: #73747b;
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
  width: 1033px;
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

.swiper-button-left img,
.swiper-button-right img {
  width: 40px;
  height: 40px;
}

.swiper-button-left {
  top: 30%;
  left: 9.5%;
}

.swiper-button-right {
  top: 30%;
  right: 9.5%;
}

.behavior_main .swiper-wrapper .swiper-slide {
  width: 385px;
}

.behavior_main .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 235px;
}

.behavior_main .swiper-wrapper .swiper-slide p {
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #2a2a39;
  line-height: 22px;
  padding-top: 15px;
}

.exhibition {
  padding-bottom: 80px;
}

.exhibition .title_box {
  padding: 80px 0px;
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
  margin-top: -228px;
}

.exhibition_main img {
  width: 296px;
  height: 228px;
}

.content_info h5 {
  font-size: 22px;
  font-weight: 600;
  color: #2a2a39;
  line-height: 30px;
}

.content_info p {
  width: 761px;
  padding: 16px 0px 44px 0px;
  font-size: 14px;
  font-weight: 400;
  color: #73747b;
  line-height: 24px;
}

.content_info span,
.content_info a {
  display: inline-block;
  width: 86px;
  height: 30px;
  border: 1px solid #ed6d38;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ed6d38;
  line-height: 30px;
  display: none;
}

.content_info a:hover {
  width: 88px;
  height: 32px;
  background-color: #ed6d38;
  border: transparent;
  color: #fff;
}

.base_box {
  margin: 80px 0px;
  display: none;
}

.base_box_main {
  width: 1166px;
  margin: 0 auto;
  display: flex;
  background-image: url(@/static/images/zsh-img/zh-xz-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 40px 0px 15px 34px;
}

.base_box_main_r h5 {
  font-size: 18px;
  font-weight: 500;
  color: #40424c;
  line-height: 28px;
  padding-bottom: 16px;
}

.base_box_main_r p {
  font-size: 14px;
  font-weight: 400;
  color: #40424c;
  line-height: 30px;
}

.base_box_main_l {
  display: flex;
  flex-direction: column;
  margin-right: 22px;
}

.base_box_main_l img {
  width: 113px;
  height: 113px;
}

.base_box_main_l span {
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.55;
  color: #40424c;
  line-height: 26px;
}


</style>
