<template>
  <div class="main_container">
    <singleHeader />
    <div class="digital-container">
      <div class="banner banxin">
        <h2 class="banner-h2">专业共创，成就共享</h2>
        <p>人人是读者，人人是作者，就在MAS！</p>
      </div>
      <div class="introduce banxin">
        <dl class="common-dl">
          <dt>
            <img src="@/static/images/illustration.png" alt="" />
          </dt>
          <dd>
            <h6>MAS秉承专业、原创的方针</h6>
            <p>
              MAS秉承专业、原创的方针，依托《管理会计研究》智慧资源，立足新形式发展下对企业管理的要求，集中展现企业管理前沿理论，发掘支持企业转型的新方法与新技术，关注企业管理实践中的热点、难点问题，诚邀有经验的企业管理者，有行业研究的专家学者，有独到见解的青年才俊参与共创，为新形式下的企业管理共同献计献策。
            </p>
            <div class="introduce-base">
              <button class="default-btn" @click="authorFn()">成为作者</button>
            </div>
          </dd>
        </dl>
      </div>
      <div class="author-equity" data-aos="fade-up">
        <h2>作者权益</h2>
        <div class="author-equity-main banxin">
          <dl>
            <dt>
              <img src="../static/images/way/fw-icon1.png" alt="" />
              <h5>MAS平台最佳作者</h5>
            </dt>
            <dd>
              <p>
                年度受欢迎度前10的作者将荣获“MAS年度最佳作者”称号，并获得相应权益。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/way/fw-icon2.png" alt="" />
              <h5>获得收益</h5>
            </dt>
            <dd>
              <p>
                作者可通过撰写收费文章或以授课的方式，按照平台分成标准赚取收益。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/way/fw-icon3.png" alt="" />
              <h5>提速MAS会员升级</h5>
            </dt>
            <dd>
              <p>
                创造更多的优质内容，可快速提升MAS会员等级，从而获得更多优惠政策。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/way/fw-icon4.png" alt="" />
              <h5>开辟个人专栏</h5>
            </dt>
            <dd>
              <p>成为作者将有机会在MAS平台开设个人专栏，分享个人观点及洞察。</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="upgrade-plan" data-aos="fade-up">
        <h2>作者升级计划</h2>
        <div class="upgrade-plan-mian banxin">
          <div class="btn-box">
            <div class="top">
              <button>权益</button>
              <div class="line"></div>
            </div>
            <div class="base">
              <button>升级条件</button>
              <div class="line"></div>
            </div>
          </div>
          <ul>
            <li>
              <div class="one">
                <img src="../static/images/way/star.png" alt="" />
              </div>
              <div class="two">获得会员LV3权益 ></div>
              <div class="three"><p>发布专业G级文章 1篇</p></div>
            </li>
            <li>
              <div class="one">
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
              </div>
              <div class="two">获得会员LV4权益 ></div>
              <div class="three">
                <p>发布专业D级文章 1篇</p>
                <span>or</span>
                <p>受欢迎度达到100</p>
              </div>
            </li>
            <li>
              <div class="one">
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
              </div>
              <div class="two">获得会员LV5权益 ></div>
              <div class="three">
                <p>发布专业B级文章 2篇</p>
                <span>or</span>
                <p>发布专业D级文章 1篇 <br />受欢迎度达到300</p>
                <span>or</span>
                <p>发布专业文章创作量达 到20篇<br />且受欢迎度达到100</p>
              </div>
            </li>
            <li>
              <div class="one">
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
              </div>
              <div class="two">获得会员LV6权益 ></div>
              <div class="three">
                <p>发布专业B级文章 3篇</p>
                <span>or</span>
                <p>发布专业D级文章 1篇<br />受欢迎度达到500</p>
                <span>or</span>
                <p>发布专业文章创作量 达到30篇<br />且受欢迎度达到200</p>
              </div>
            </li>
            <li>
              <div class="one">
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
                <img src="../static/images/way/star.png" alt="" />
              </div>
              <div class="two">获得会员LV7权益 ></div>
              <div class="three">
                <p>发布专业A级文章 1篇</p>
                <span>or</span>
                <p>发布专业B级文章 5篇</p>
                <span>or</span>
                <p>发布专业D级文章 1篇<br />受欢迎度达到1000</p>
                <span>or</span>
                <p>发布专业文章创作量达 到50篇<br />受欢迎度达到300</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="explain banxin">
          <div class="explain-main">
            <h5>名词解释</h5>
            <div class="info">
              <p>
                <span>发文量：</span
                >发文后经网站管理员审核非违规内容、非求助类内容将计入发文总数量中。
              </p>
              <p>
                <span>文章专业度：</span>编辑老师根据文章的专业度进行分类。<a
                  class="detial"
                  href=""
                  >了解详细 >></a
                >
              </p>
              <p>
                <span>创作者受欢迎度：</span
                >受欢迎程度与创作者粉丝量、文章销售量、文章销售金额、点赞量、阅读量、阅读时长、收藏量相关。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="create">
        <h2>创作学院</h2>
        <div class="create-main banxin">
          <div class="frame create-main-left">
            <div class="left">
              <img
                src="https://www.chinamas.cn/upload/2021/01/14/16106158037960.jpg"
                alt=""
              />
              <img
                class="video-play"
                src="../static/images/play.png"
                alt=""
                @click="videoPlay"
              />
            </div>
            <div class="right">
              <h6>会计学术研究文章写作与研究成果发表</h6>
              <span>课程大纲：</span>
              <p>
                1.如何在国内和国外权威期刊发表会计学术文章；<br />
                2.管理会计文章写作要领和技巧。
              </p>
              <button class="default-btn">学习课程</button>
            </div>
          </div>
          <div class="frame create-main-right">
            <h6>去创作</h6>
            <div class="img-box" >
              <nuxt-link to="/wytg" class="img img1"><span>网站投稿</span></nuxt-link>
              <nuxt-link to="/wytg" class="img img2"><span>杂志投稿</span></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="videoVisible"
      :before-close="handleClose"
      width="700"
    >
      <div class="video-visible-box">
        <video
          ref="movie"
          poster="https://www.chinamas.cn/upload/2021/01/14/16106158037960.jpg"
          src="https://cmas-wendao-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-hd/65bbef8bc28f4f0aa7c93f0f43166c42/%E9%97%AE%E9%81%932%E6%9C%9F%E8%A1%A5%E6%8B%8D5.0.mp4"
          controls
        ></video>
        <img
          v-show="isplay"
          class="video-play"
          src="../static/images/play.png"
          alt=""
          @click="handlePlay"
        />
        <img
          v-show="!isplay"
          class="video-pause"
          src="../static/images/pause.png"
          alt=""
          @click="handlePause"
        />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isplay: true,
      videoVisible: false,
    };
  },

  mounted() {
    // this.$refs.movie.addEventListener("play", this.handlePlay);
    // this.$refs.movie.addEventListener("pause", this.handlePause);
  },
  methods: {
    //点击播放按钮
    videoPlay() {
      this.videoVisible = true;
      setTimeout(() => {
        this.handlePlay();
      }, 500);
    },
    handleClose() {
      this.videoVisible = false;
      this.handlePause();
    },
    //点击成为作者
    authorFn() {
      // this.$router.push({
      //   name: "dy-pay",
      // });
    },
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
};
</script>
<style lang="less" scoped>
.main_container {
  background: #fff;
}
.digital-container {
  padding: 30px 0px 0px;
  .banner {
    height: 240px;
    background-image: url(@/static/images/way/fw-banner.png);
    background-size: cover;
    background-repeat: no-repeat;
    .banner-h2 {
      font-size: 38px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      text-align: left;
      line-height: 40px;
      margin-left: 87px;
      padding: 80px 0px 0px 0px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 24px;
      padding-top: 24px;
      margin-left: 87px;
    }
  }
  .default-btn {
    width: 88px;
    height: 32px;
    border-radius: 2px;
    background: #fa6725;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    line-height: 22px;
    border: none;
    display: block;
    cursor: pointer;
  }

  .default-btn:hover {
    background: rgba(237, 109, 56, 0.8);
  }

  .introduce {
    padding: 50px 0px;
    .common-dl {
      height: 250px;
      display: flex;
      dt {
        min-width: 504px;
        height: 100%;
        img {
          border-radius: 6px 0px 0px 6px;
        }
      }
      dd {
        width: 551px;
        padding: 30px 20px 27px 22px;
        background: linear-gradient(90deg, #fcfcfd, #f9fafb 94%, #f7f8fa);
        border-radius: 0px 6px 6px 0px;
        h6 {
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
        }
        p {
          width: 551px;
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          text-align: justify;
          line-height: 20px;
          padding: 15px 0px 30px;
        }
        .introduce-base {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
  h2 {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    line-height: 32px;
    padding: 50px 0px;
  }
  .author-equity {
    padding-bottom: 50px;
    background: #f7f8fa;
    .author-equity-main {
      display: flex;
      justify-content: space-between;
      dl {
        width: 260px;
        height: 320px;
        background: #ffffff;
        border-radius: 6px;
        dt {
          text-align: center;
          img {
            width: 70px;
            height: 70px;
            padding: 64px 0px 30px 0px;
          }
          h5 {
            font-size: 18px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            padding-bottom: 24px;
          }
        }
        dd {
          p {
            width: 224px;
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            color: rgba(0, 0, 0, 0.45);
            line-height: 21px;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .upgrade-plan {
    background: #ffffff;
    padding-bottom: 50px;
    .upgrade-plan-mian {
      margin-bottom: 52px;
      display: flex;
      align-items: center;
      .btn-box {
        margin-top: 195px;
        margin-right: -14px;
        button {
          width: 80px;
          height: 36px;
          background: linear-gradient(
            90deg,
            #f34250 0%,
            #f28a51 100%,
            rgba(255, 125, 59, 0) 100%
          );
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          line-height: 22px;
          border: none;
        }
        .top {
          display: flex;
          align-items: center;
          margin-bottom: 34px;
          .line {
            width: 35px;
            height: 10px;
            background: #fef7f5;
          }
        }
        .base {
          display: flex;
          align-items: center;
          .line {
            width: 35px;
            height: 10px;
            background: #f7f8fa;
          }
        }
      }
      ul {
        display: flex;
        align-items: flex-end;
        li {
          width: 202px;
          margin-right: -2px;
          .one {
            width: 160px;
            height: 47px;
            line-height: 52px;
            border-bottom: 1px solid #d5dae4;
            border-right: 1px solid #d5dae4;
            padding: 0px 20px;
            img {
              width: 20px;
              height: 22px;
              margin-right: 8px;
              &:nth-child(5) {
                margin-right: 0px;
              }
            }
          }
          .two {
            width: 176px;
            height: 54px;
            background: #fef7f5;
            font-size: 14px;
            font-weight: 500;
            color: #fa6725;
            text-align: center;
            line-height: 54px;
            margin: 10px auto;
          }
          .three {
            width: 130px;
            height: 89px;
            background: #f7f8fa;
            font-size: 13px;
            font-weight: 400;
            text-align: center;
            color: rgba(0, 0, 0, 0.65);
            line-height: 20px;
            margin: 0 auto;
            padding: 23px 23px 0px;
            span {
              color: rgba(0, 0, 0, 0.25);
              margin-left: -16px;
            }
            p {
              text-align: left;
            }
          }
          &:nth-child(2) {
            .three {
              height: 136px;
            }
          }
          &:nth-child(3) {
            .three {
              height: 183px;
            }
          }
          &:nth-child(4) {
            .three {
              height: 230px;
            }
          }
          &:nth-child(5) {
            .one {
              border-right: none;
            }
            .three {
              height: 277px;
            }
          }
        }
      }
    }
    .explain {
      background: #f7f8fa;
      border-radius: 6px;
      .explain-main {
        padding: 30px 36px 32px 36px;
        h5 {
          font-size: 18px;
          font-weight: 600;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 18px;
        }
        .info {
          padding-top: 24px;
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
          line-height: 20px;
          p {
            padding-bottom: 12px;
            &:last-child {
              padding-bottom: 0px;
            }
          }
          span {
            font-size: 13px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
          }
          .detial {
            color: #fa6725;
          }
        }
      }
    }
  }
  .create {
    background: #f7f8fa;
    padding-bottom: 50px;
    .create-main {
      display: flex;
      justify-content: space-between;
      .frame {
        width: 496px;
        height: 171px;
        background: #ffffff;
        border-radius: 6px;
        padding: 22px;
        h6 {
          font-size: 16px;
          font-weight: 600;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
          padding-bottom: 14px;
        }
      }
      .create-main-left {
        display: flex;
        .left {
          width: 128px;
          height: 171px;
          // opacity: 0.5;
          background: radial-gradient(rgba(0, 0, 0, 0), #000000);
          border-radius: 6px;
          position: relative;
          img:nth-child(1) {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            object-fit: cover;
          }
          img {
            width: 62px;
            height: 62px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
          }
        }
        .right {
          margin-left: 20px;
          span {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 18px;
          }
          p {
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.45);
            line-height: 18px;
            padding: 6px 0px 32px 0px;
          }
        }
      }
      .create-main-right {
        .img-box {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          .img {
            width: 236px;
            height: 125px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            cursor: pointer;
            span {
              font-size: 12px;
              font-weight: 400;
              text-align: center;
              color: #ffffff;
              line-height: 18px;
              display: flex;
              justify-content: center;
              margin-top: 29%;
              opacity: 0.8;
            }
          }
          .img1 {
            background-image: url(@/static/images/way/fw-tg1.png);
          }
          .img2 {
            background-image: url(@/static/images/way/fw-tg2.png);
          }
        }
      }
    }
  }
}
/deep/.el-dialog__header {
  padding: 10px 20px 10px;
  .el-dialog__headerbtn:focus .el-dialog__close,
  .el-dialog__headerbtn:hover .el-dialog__close {
    color: #8c8c8c;
  }
}
.video-visible-box {
  width: 700px;
  height: 400px;
  position: relative;
  video {
    width: 96%;
    height: 400px;
    background: radial-gradient(rgba(0, 0, 0, 0), #000000);
    border-radius: 6px;
    object-fit: cover;
  }
  img {
    width: 82px;
    height: 82px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    // opacity: 0.85;
    &.video-pause {
      opacity: 0;
      transition: all 0.4s;
    }
  }
  &:hover {
    .video-pause {
      opacity: 1;
    }
  }
}
</style>
