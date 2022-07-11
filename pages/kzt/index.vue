<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="@/static/images/way/kzt-banner-bg.png" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
        </div>
        <!-- 左侧内容 -->
        <div class="content-container-main-right">
          <div class="hot-recommend">
            <h3>热门专题</h3>
            <div class="hot-book">
              <dl @click="details(1)">
                <dt>
                  <img src="@/static/images/way/zt01.png" alt="" />
                </dt>
                <dd>
                  <p class="twoline">数字化转型</p>
                  <span>进入专题 ></span>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="@/static/images/way/zt02.png" alt="" />
                </dt>
                <dd>
                  <p class="twoline">管理会计</p>
                  <span>进入专题 ></span>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="@/static/images/way/zt03.png" alt="" />
                </dt>
                <dd>
                  <p class="twoline">MAS企业巡展 • 中国石化</p>
                  <span>进入专题 ></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="zt-list-box banxin">
        <div class="zt-list">
          <ul class="tabs">
            <li
              :class="tabActive == index ? 'tabActive' : ''"
              v-for="(item, index) in tabs"
              :key="index"
              @click="onTab(index)"
            >
              {{ item }}
            </li>
          </ul>
          <div class="list-content">
            <dl>
              <dt>
                <img
                  class="zt-img"
                  src="@/static/images/way/zt-hx.png"
                  alt=""
                />
                <img
                  class="icon"
                  src="@/static/images/way/zt-icon.png"
                  alt=""
                />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>MAS企业巡展 • 中国石化</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="@/static/images/way/zt-sh.png" alt="" />
                <img
                  class="icon"
                  src="@/static/images/way/zt-icon.png"
                  alt=""
                />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>MAS企业巡展 • 中国石化</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="@/static/images/way/zt-sh.png" alt="" />
                <img
                  class="icon"
                  src="@/static/images/way/zt-icon.png"
                  alt=""
                />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>MAS企业巡展 • 成都生物</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="@/static/images/way/zt-szh.png" alt="" />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>数字化转型</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                  <a class="right">立即订阅</a>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="@/static/images/way/zt-szh.png" alt="" />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>管理会计</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                  <a class="right">立即订阅</a>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="@/static/images/way/zt-szh.png" alt="" />
              </dt>
              <dd>
                <div class="dd-top">
                  <h5>其他非主打、非系列性质专题</h5>
                  <p class="twoline">
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                    …
                  </p>
                </div>

                <div class="dd-base">
                  <div class="left">
                    <span>进入专题</span>
                    <img src="@/static/images/arrows-left.png" alt="" />
                  </div>
                  <a class="right">立即订阅</a>
                </div>
              </dd>
            </dl>
          </div>
          <div class="tip-text">更多专题敬请期待！</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // typeName: this.$route.query.type, //页面标题
      tabs: ["全部", "企业巡展", "专题订阅"],
      tabActive: 0, //专题类型
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {
    // 生成二维码
    // let qr = new QRCode("qrcode" + 1, {
    //   width: 88,
    //   height: 88, // 高度
    //   text: "https://v2.chinamas.cn/kzt/1", // 二维码内容
    //   render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
    //   background: "#f0f",
    //   foreground: "#ff0",
    // });
    // 生成二维码
    // let qr1 = new QRCode("qrcode", {
    //   width: 88,
    //   height: 88, // 高度
    //   text: "https://v2.chinamas.cn/kzt/2", // 二维码内容
    //   render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
    //   background: "#f0f",
    //   foreground: "#ff0",
    // });
  },
  methods: {
    //点击tabs
    onTab(index) {
      // this.pageIndex = 1;
      // this.listData = [];
      // this.finished = false;
      // this.moretype = "list";
      // this.listShowType = 1;
      this.tabActive = index;
      // this.getList();
    },
    //分享的微博
    shareToSinaWB(event) {
      event.preventDefault();
      var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?title="123"'; //真实的appkey，必选参数
      _shareUrl += "&url=" + encodeURIComponent(document.location); //参数url设置分享的内容链接|默认当前页location，可选参数
      _shareUrl += "&title=" + encodeURIComponent(document.title); //参数title设置分享的标题|默认当前页标题，可选参数
      _shareUrl += "&source=" + encodeURIComponent(_source || "");
      _shareUrl += "&sourceUrl=" + encodeURIComponent(_sourceUrl || "");
      _shareUrl += "&content=" + "utf-8"; //参数content设置页面编码gb2312|utf-8，可选参数
      _shareUrl += "&pic=" + encodeURIComponent(_pic || ""); //参数pic设置图片链接|默认为空，可选参数
      window.open(_shareUrl, "_blank");
    },
    //分享到豆瓣
    shareToDouban(event) {
      event.preventDefault();
      var _shareUrl = "http://shuo.douban.com/!service/share?";
      _shareUrl +=
        "href=" + encodeURIComponent("https://36kr.com/p/1752078125334147"); //分享的链接
      _shareUrl += "&name=" + encodeURIComponent(document.title); //分享的标题
      _shareUrl += "&image=" + encodeURIComponent(""); //分享的图片
      window.open(_shareUrl, "_blank");
      console.log(_shareUrl);
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
        position: relative;
        .wytg {
          position: absolute;
          bottom: 24%;
          left: 8%;
          width: 122px;
          height: 38px;
          cursor: pointer;
        }
      }
    }
    .content-container-main-right {
      width: 346px;

      .hot-recommend {
        width: 346px;
        height: 300px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.05);
        h3 {
          height: 47px;
          line-height: 47px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 18px;
          font-weight: 600;
          text-align: justify;
          color: rgba(0, 0, 0, 0.85);
          padding-left: 20px;
        }
        .hot-book {
          padding: 19px 20px 22px 20px;

          dl {
            display: flex;
            margin-bottom: 20px;
            position: relative;
            cursor: pointer;
            &:last-child {
              margin-bottom: 0px;
            }
            dt {
              width: 94px;
              height: 57px;
              img {
                border-radius: 0px;
              }
            }
            dd {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-left: 15px;
              p {
                font-size: 14px;
                font-weight: 500;
                text-align: justify;
                color: rgba(0, 0, 0, 0.85);
                line-height: 18px;
              }
              span,
              a {
                font-size: 12px;
                font-weight: 400;
                text-align: justify;
                color: rgba(0, 0, 0, 0.65);
                line-height: 28px;
              }
            }
            &:hover {
              dd p,
              dd a,
              dd span {
                color: #fa6725;
              }
            }
          }
        }
      }
    }
  }
  .zt-list {
    width: 100%;
    margin-top: 32px;
    .tabs {
      height: 52px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e7e7e7;

      li {
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 22px;
        margin-right: 36px;
        cursor: pointer;
      }

      .tabActive {
        font-size: 22px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        position: relative;

        &:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -16px;
          width: 40px;
          height: 2px;
          background: #fa6725;
          transform: translateX(-50%);
          z-index: 100;
        }
      }
    }
    .list-content {
      margin-top: 38px;
      display: flex;
      flex-wrap: wrap;
      dl {
        width: 346px;
        margin-right: 28px;
        margin-bottom: 30px;
        cursor: pointer;
        &:nth-child(3n) {
          margin-right: 0px;
        }

        &:hover {
          dd .dd-top h5 {
            color: #fa6725;
          }
        }
        dt {
          height: 208px;
          position: relative;
          .zt-img {
            height: 100%;
          }
          .icon {
            width: 116px;
            height: 39px;
            position: absolute;
            top: 0px;
            left: 0px;
          }
          img {
            border-radius: 0px;
          }
        }
        dd {
          padding: 19px 0px 24px 0px;
          width: 344px;
          border: 1px solid #eeeeee;
          border-radius: 0px 0px 6px 6px;
          margin-top: -4px;
          .dd-top {
            padding: 0px 26px 26px 19px;
            h5 {
              font-size: 16px;
              font-weight: 500;
              text-align: justify;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              padding-bottom: 12px;
            }
            p {
              font-size: 13px;
              font-weight: 400;
              text-align: justify;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
            }
          }

          .dd-base {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px dashed #eeeeee;
            padding-top: 20px;

            .left {
              display: flex;
              align-items: center;
              span,
              a {
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.85);
                line-height: 22px;
                margin-left: 19px;
              }
              img {
                width: 13px;
                height: 8px;
                margin-left: 5px;
              }
            }
            .right {
              width: 88px;
              height: 32px;
              background: #fa6725;
              border-radius: 2px;
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              color: #ffffff;
              line-height: 32px;
              margin-right: 20px;
            }
          }
        }
      }
    }
    .tip-text {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      padding: 42px 0px 92px 0px;
    }
  }
}
</style>
