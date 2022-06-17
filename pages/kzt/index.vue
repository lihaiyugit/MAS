<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/kzt-banner.png" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
          <div class="zt-list">
            <div class="list-title">
              <h2>MAS专题</h2>
            </div>
            <div class="list-content">
              <dl class="dl">
                <dt>
                  <nuxt-link to="/szhzx">
                    <img src="../../static/images/way/zt-1.png" alt="" />
                  </nuxt-link>
                </dt>
                <dd>
                  <nuxt-link to="/szhzx" class="h5-box">
                    <h5>数字化转型</h5>
                    <span class="into">进入专题</span>
                  </nuxt-link>

                  <p>
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成为时代的共识——数字化时代…
                  </p>
                  <div class="share-l">
                    <span>分享到</span>
                    <a
                      href="https://service.weibo.com/share/share.php?appkey=595885820&url=https://v2.chinamas.cn/szhzx&title=数字化转型"
                      target="_blank"
                      deta-title="微博分享"
                      ><img src="../../static/images/tsina.png"
                    /></a>
                    <div class="dropdown-menu-part">
                      <a title="微信分享"
                        ><img src="../../static/images/weixin.png" />
                      </a>
                      <div class="dropdown-menu wx-dropdown visible">
                        <div id="qrcode1" class="qrcode"></div>
                        <div class="w_txt">微信扫码</div>
                      </div>
                    </div>
                    <a
                      href="http://shuo.douban.com/!service/share?href=https://v2.chinamas.cn/szhzx&name=在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成为时代的共识——数字化时代…"
                      target="_blank"
                      deta-title="豆瓣分享"
                      ><img src="../../static/images/db.png"
                    /></a>
                  </div>
                </dd>
              </dl>
              <dl class="dl">
                <dt>
                  <nuxt-link to="/glkj">
                    <img src="@/static/images/way/zt-2.png" alt="" />
                  </nuxt-link>
                </dt>
                <dd>
                  <nuxt-link to="/glkj" class="h5-box">
                    <h5>管理会计</h5>
                    <span class="into">进入专题</span>
                  </nuxt-link>
                  <p>
                    在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成为时代的共识——数字化时代…
                  </p>
                  <div class="share-l">
                    <span>分享到</span>
                    <a
                      href="https://service.weibo.com/share/share.php?appkey=595885820&url=/glkj&title=管理会计"
                      target="_blank"
                      deta-title="微博分享"
                      ><img src="@/static/images/tsina.png"
                    /></a>
                    <div class="dropdown-menu-part">
                      <a title="微信分享">
                        <img src="../../static/images/weixin.png"
                      /></a>
                      <div class="dropdown-menu wx-dropdown visible">
                        <div id="qrcode" class="qrcode"></div>
                        <div class="w_txt">微信扫码</div>
                      </div>
                    </div>
                    <a
                      href="http://shuo.douban.com/!service/share?href=https://v2.chinamas.cn/glkj&name=在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成为时代的共识——数字化时代…"
                      target="_blank"
                      deta-title="豆瓣分享"
                      ><img src="../../static/images/db.png"
                    /></a>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="tip-text">更多专题敬请期待！</div>
          </div>
        </div>
        <!-- 左侧内容 -->
        <ContainerRight />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // typeName: this.$route.query.type, //页面标题
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {
    // 生成二维码
    let qr = new QRCode("qrcode" + 1, {
      width: 88,
      height: 88, // 高度
      text: "https://v2.chinamas.cn/szhzx", // 二维码内容
      render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      background: "#f0f",
      foreground: "#ff0",
    });
    // 生成二维码
    let qr1 = new QRCode("qrcode", {
      width: 88,
      height: 88, // 高度
      text: "https://v2.chinamas.cn/glkj", // 二维码内容
      render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      background: "#f0f",
      foreground: "#ff0",
    });
  },
  methods: {
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
      .zt-list {
        width: 671px;
        background: #ffffff;
        border-radius: 6px;
        margin-top: 22px;
        padding: 0px 22px 0px;
        .list-title {
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e7e7e7;
          h2 {
            font-size: 22px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;

            position: relative;
            &:after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -20px;
              width: 93px;
              height: 2px;
              background: #ed6d38;
              border-radius: 2px;
              transform: translateX(-50%);
              z-index: 100;
            }
          }
          span {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 22px;
            cursor: pointer;
          }
        }
        .list-content {
          padding-top: 18px;
          .dl {
            height: 195px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dashed #e7e7e7;
            dt {
              width: 216px;
              height: 144px;
            }
            dd {
              width: 420px;
              .h5-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .into {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.45);
                  line-height: 14px;
                }
              }
              h5 {
                font-size: 18px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.85);
                line-height: 24px;
              }
              p {
                width: 100%;
                font-size: 13px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.45);
                line-height: 20px;
                padding: 12px 0px 42px 0px;
              }
              .share-l {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                cursor: pointer;
                span {
                  display: inline-block;
                  width: 63px;
                  height: 26px;
                  background: #f7f8fa;
                  border-radius: 2px;
                  font-size: 14px;
                  font-weight: 400;
                  text-align: center;
                  color: rgba(0, 0, 0, 0.65);
                  line-height: 26px;
                }

                img {
                  width: 24px;
                  height: 24px;
                }
                a {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  margin-left: 20px;
                }
                a[deta-title]:after {
                  content: attr(deta-title);
                  position: absolute;
                  left: 50%;
                  bottom: 100%;
                  transform: translate(-50%, 0);
                  width: 130px;
                  height: 80px;
                  background: url(https://www.tmtpost.com/public/img/common/bg_tips.png);
                  background-size: 100% 100%;
                  color: gray;
                  font-size: 14px;
                  line-height: 14px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  white-space: nowrap;
                  opacity: 0;
                  visibility: hidden;
                }
                a[deta-title]:hover:after {
                  transition-delay: 100ms;
                  visibility: visible;
                  transform: translate(-50%, 8px);
                  opacity: 1;
                }

                .dropdown-menu-part {
                  position: relative;
                  white-space: normal;
                  i {
                    display: flex;
                    align-items: center;
                  }
                }
                .dropdown-menu {
                  padding: 15px 20px;
                  position: absolute;
                  top: 54px;
                  background: #fff;
                  border: 1px solid rgba(26, 53, 71, 0.12);
                  border-radius: 4px;
                  box-shadow: 0 1px 2px rgba(26, 53, 71, 0.1);
                  opacity: 0;
                  filter: alpha(opacity=0);
                  -ms-filter: alpha(opacity=0);
                  zoom: 1;
                  pointer-events: none;
                  transition: 0.25s cubic-bezier(0.3, 0, 0, 1.3);
                  &::before {
                    content: "";
                    position: absolute;
                    top: -7px;
                    right: calc(50% - 9px);
                    right: -webkit-calc(50% - 9px);
                    right: -moz-calc(50% - 9px);
                    width: 13px;
                    height: 7px;
                    z-index: 4;
                    background: url(https://www.tmtpost.com/public/css/img/dropdown-menu-arrow.svg);
                  }
                }
                .dropdown-menu.visible {
                  opacity: 1;
                  filter: alpha(opacity=100);
                  -ms-filter: alpha(opacity=100);
                  zoom: 1;
                  pointer-events: auto;
                  -webkit-transform: none;
                  transform: none;
                  z-index: 3;
                  display: none;
                }
                .dropdown-menu-part:hover .visible {
                  display: block;
                }
                .dropdown-menu:before {
                  transform: rotate(180deg);
                  bottom: -7px;
                  top: unset;
                }
                .dropdown-menu {
                  top: -146px;
                  left: -36px;
                }

                .dropdown-menu {
                  transform: scale(0.8) translateY(-30%);
                }

                .w_txt {
                  text-align: center;
                  font-size: 12px;
                }
                /deep/.qrcode {
                  img {
                    width: 88px;
                    height: 88px;
                    border-radius: 0px;
                  }
                }
              }
            }
          }
        }
        .tip-text {
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          color: #bc996d;
          line-height: 22px;
          padding: 42px 0px 190px 0px;
        }
      }
    }
  }
}
</style>
