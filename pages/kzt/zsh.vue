<template>
  <div>
    <Header />
    <div class="main_container">
      <singleHeader />
      <div class="wapper">
        <div class="banner">
          <div class="banner_main">
            <div class="banner_main-left">
              <img src="@/static/images/zsh-img/banner-text.png" alt="" />
            </div>
          </div>
        </div>
        <div class="introduce">
          <div class="introduce_main">
            <div class="introduce_main_info">
              <p>
                中国石化坚持理念先行、知行合一，把价值引领贯穿财务管理始终，持续深化财务转型，持续推进数智化建设，着力构建战略型集约化财务管控体系，打造央企世界一流财务管控体系标杆。
              </p>
            </div>
            <div class="introduce_main_main">
              <div class="introduce_main_main_l">
                <h2>中国石油化工集团有限公司 (简称中国石化)</h2>
                <p class="english">Sinopec Group</p>
                <p class="info">
                  国务院国资委直属的副部级中央企业，中国最大的成品油和石化产品供应商、世界第一
                  大炼油公司。
                </p>
                <div class="video-box">
                  <div class="video-main">
                    <video
                      ref="movie"
                      :poster="require('@/static/images/zsh-img/video-img.png')"
                      src="https://cmas-wendao-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-hd/65bbef8bc28f4f0aa7c93f0f43166c42/%E9%97%AE%E9%81%932%E6%9C%9F%E8%A1%A5%E6%8B%8D5.0.mp4"
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
                  <div class="point">6分钟了解中国石化</div>
                </div>
              </div>
              <div class="introduce_main_main_r">
                <p>
                  拥抱数字化时代变革，树牢大财务观，倡导开放协同共享，统筹财务信息化系统建设，在融合融通中深化智慧智能、灵活高效、深入前瞻的数智化财务应用，在创新创效中打通数据价值链条，激活数据要素潜能，释放数据金矿资源。
                </p>
                <img src="@/static/images/zsh-img/video-sj.png" alt="" />
              </div>
            </div>
            <div class="clear"></div>
          </div>
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
                        管网重组改革的创新实践和经验启示——以中国石化天然气公司为例
                      </h5>
                      <p>
                        近年来，中央企业战略性结构调整与重组整合工作持续推进
                      </p>
                    </dt>
                    <dd>
                      <a href="">阅读详情</a>
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <h5>中国石化张少峰：构建一流数智化财务三大主张</h5>
                      <p>
                        理念是理论的源头、行动的开端，价值引领是财务工作的基本理念，是推动高质量发展的基本要求
                      </p>
                    </dt>
                    <dd>
                      <a href="">阅读详情</a>
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
                    src="@/static/images/zsh-img/zsh-logo-2.png"
                    alt=""
                  />
                  <span>企业资讯</span>
                </div>
                <div class="related_list_content">
                  <dl>
                    <dt>
                      <h5>中国石化有序推进重点工程项目建设</h5>
                      <p>众力并则万钧举，人心齐则泰山移</p>
                    </dt>
                    <dd>
                      <a href="">阅读详情</a>
                      <img
                        src="@/static/images/zsh-img/arrow-left.png"
                        alt=""
                      />
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <h5>国内最大容积LNG储罐气顶升成功</h5>
                      <p>
                        本报讯
                        5月17日，由中国石化自主研发设计建造的27万立方米大型液化天然气储罐在天然气分公司青岛LNG接收站气顶升成功
                      </p>
                    </dt>
                    <dd>
                      <a href="">阅读详情</a>
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
        <div class="data">
          <div class="data_main">
            <div class="data_main_top">
              <div class="data_main_top_l">
                <img class="sj" src="@/static/images/zsh-img/sj-l.png" alt="" />
                <p class="info">
                  以全面预算系统为抓手，支撑战略、解码战略、配置资源，推动世界领先发展方略落地。
                </p>
              </div>
              <div class="data_main_top_r">
                <img class="sj" src="@/static/images/zsh-img/sj-r.png" alt="" />
                <p class="info">
                  以数智化应用平台为依托，支持决策，服务业务防控风险，有效保障公司经营行稳致远。
                </p>
              </div>
            </div>
            <div class="mid-data">
              <p>财务共享为战略型集约化财务管控体系夯实数据治理底座</p>
              <img src="@/static/images/zsh-img/lc-1.png" alt="" />
            </div>
            <div class="mid-data">
              <p>
                由点到面持续深化、拓展、完善数据资产管理能力，打通数据价值链条，激活数据要素潜能，释放数据金矿资源
              </p>
              <img src="@/static/images/zsh-img/lc-2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="exhibition">
          <div class="title_box">
            <img src="@/static/images/zsh-img/h2-l.png" alt="" />
            <h2>更多企业巡展</h2>
            <img src="@/static/images/zsh-img/h2-r.png" alt="" />
          </div>
          <div class="exhibition_main_bg">
            <img
              class="one"
              src="@/static/images/zsh-img/exhibition-bg.png"
              alt=""
            />
            <div class="exhibition_main"></div>
            <div class="content">
              <img src="@/static/images/zsh-img/exhibition-rw.png" alt="" />
              <div class="content_info">
                <h5>中国化学工程集团有限公司</h5>
                <p>
                  国务院国资委直接监管的大型工程建设企业集团公布的全球最大的250家承包商,在全球油气行业工程建设公司排名中名列第二位
                </p>
                <span>了解更多</span>
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
      <div class="clear"></div>
      <div class="slide">
        <div class="lx">
          <img src="@/static/images/zsh-img/hz.png" />
          <span>合作联系</span>
        </div>
        <div class="lx-info">
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
export default {
  layout: "not",
  data() {
    return {
      isplay: true, //视频是否播放
    };
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
  height: 460px;
  background-image: url(@/static/images/zsh-img/zsh-banner.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.banner_main {
  width: 1200px;
  height: 100%;
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
  height: 230px;
}

.introduce {
  background-image: url(@/static/images/zsh-img/introduce-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 80px 0px;
}

.introduce_main {
  width: 1200px;
  margin: 0 auto;
}

.introduce_main_info {
  width: 100%;
  height: 267px;
  background-image: url(@/static/images/zsh-img/zsh-js-bg.png);
  background-size: 100% 100%;
  background-position: top left;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.introduce_main_info p {
  width: 717px;
  font-size: 22px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #40424c;
  line-height: 36px;
  margin-left: 370px;
}

.introduce_main_main {
  padding-top: 100px;
}

.introduce_main_main_l {
  width: 634px;
  float: left;
}

.introduce_main_main_l h2 {
  font-size: 24px;
  font-family: PingFangSC, PingFangSC-Semibold;
  font-weight: 600;
  color: #40424c;
  line-height: 33px;
}

.introduce_main_main_l .english {
  opacity: 0.45;
  font-size: 16px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  color: #434447;
  line-height: 22px;
  padding: 14px 0px 36px 0px;
}

.introduce_main_main_l .info {
  width: 608px;
  font-size: 16px;
  font-weight: 400;
  color: #73747b;
  line-height: 24px;
  padding-bottom: 22px;
}

.introduce_main_main_l .video-box {
  width: 368px;
  height: 405px;
  background-image: url(@/static/images/zsh-img/video-l-bg.png);
  background-size: 100% 100%;
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
}

.introduce_main_main_l .video-box .video-main {
  width: 606px;
  height: 341px;
  background: #d8d8d8;
  border: 8px solid #ffffff;
  position: absolute;
  top: 24px;
  left: 24px;
}

.introduce_main_main_l .video-box .video-main video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.introduce_main_main_l .video-box .video-main img {
  width: 62px;
  height: 62px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.introduce_main_main_l .video-box .video-main img.video-play {
  display: block;
}

.introduce_main_main_l .video-box .video-main img.video-pause {
  opacity: 0;
  transition: all 0.4s;
  display: none;
}

.introduce_main_main_l .video-box .video-main:hover .video-pause {
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

.introduce_main_main_r {
  width: 520px;
  float: right;
  padding-top: 42px;
}

.introduce_main_main_r p {
  width: 510px;
  font-size: 16px;
  font-weight: 500;
  color: #2a2a39;
  line-height: 24px;
  padding-bottom: 38px;
}

.introduce_main_main_r img {
  width: 519px;
  height: 405px;
  background: linear-gradient(180deg, #c8d8ee, #e7f3fb);
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
  background-image: url(@/static/images/zsh-img/rw-bg.png);
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
  width: 30px;
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

.data {
  background-color: #fff;
}

.data_main {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
}

.data_main_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data_main_top_l,
.data_main_top_r {
  width: 587px;
}

.data_main_top .sj {
  width: 100%;
  height: 406px;
}

.data_main_top .info {
  width: 504px;
  font-size: 16px;
  font-weight: 400;
  color: #2a2a39;
  line-height: 24px;
  padding-top: 23px;
  margin-left: 4px;
}

.mid-data p {
  font-size: 16px;
  font-weight: 500;
  color: #2a2a39;
  line-height: 24px;
  padding: 60px 0px 30px 0px;
}

.exhibition .title_box {
  padding: 60px 0px 80px 0px;
}

.mid-data img {
  width: 100%;
  height: 529px;
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

/* .exhibition_main_bg {
    margin: 0 auto;
} */
.one {
  width: 1200px;
  height: 234px;
  margin: 0 auto;
  display: flex;
}

.exhibition_main {
  width: 1360px;
  height: 157px;
  background: #f7f8fb;
  display: flex;
  margin: 0 auto;
  margin-top: -196px;
}

.content {
  margin-top: -230px;
  margin-left: 320px;
  display: flex;
  align-items: flex-end;
}

.content img {
  width: 296px;
  height: 228px;
  margin-right: 36px;
}

.content_info h5 {
  font-size: 24px;
  font-weight: 600;
  color: #40424c;
  line-height: 33px;
}

.content_info p {
  width: 476px;
  font-size: 16px;
  font-weight: 400;
  color: #40424c;
  line-height: 24px;
  padding: 23px 0px 32px 0px;
}

.content_info span {
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
