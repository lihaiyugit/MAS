<template>
  <el-dialog
    :visible.sync="isVisible"
    :before-close="closeFn"
    :lock-scroll="false"
  >
    <div class="vip-container">
      <div class="vip-header">
        <div class="header-l">
          <img class="photo" src="@/static/images/vip/popup-photo.png" alt="" />
          <div class="info">
            <div class="title-box">
              <h5>坚持的小强</h5>
              <span class="tip-title">PLUS会员</span>
            </div>
            <p>有效期：2023-01-01</p>
          </div>
        </div>
        <div class="header-r" @click="closeFn">
          <img src="@/static/images/vip/popup-close.png" alt="" />
        </div>
      </div>
      <div class="vip-body">
        <div class="body-l">
          <h2>电脑/手机/平板 会员通用</h2>
          <div class="equity-box">
            <div class="equity-main" v-if="type == 1">
              <div class="equity-title">尊享10+特权</div>
              <ul>
                <li>
                  <img src="@/static/images/vip/kw.png" alt="" />
                  <p>赠阅《管理会计研究》创刊以来所有电子刊</p>
                </li>
                <li>
                  <img src="@/static/images/vip/article.png" alt="" />
                  <p>畅读管理会计研究网付费文章</p>
                </li>
                <li>
                  <img src="@/static/images/vip/video.png" alt="" />
                  <p>观看全年《MAS大讲堂》课程直播及回看</p>
                </li>
                <li>
                  <img src="@/static/images/vip/column.png" alt="" />
                  <p>观看全年《MAS对话》高端访谈栏目</p>
                </li>
                <li>
                  <img src="@/static/images/vip/column-live.png" alt="" />
                  <p>观看全年“走进名企”实务直播栏目</p>
                </li>
                <li>
                  <img src="@/static/images/vip/activity.png" alt="" />
                  <p>优先受邀参加主题沙龙、年度峰会等线下活动</p>
                </li>
              </ul>
            </div>
            <div class="equity-main equity-article" v-else>
              <div class="equity-title">尊享10+特权</div>
              <ul>
                <li>
                  <img src="@/static/images/vip/zff-icon.png" alt="" />
                  <div class="li-r">
                    <h5>找方法</h5>
                    <p>寻转型方法，学新技术体系</p>
                  </div>
                </li>
                <li>
                  <img src="@/static/images/vip/xal-icon.png" alt="" />
                  <div class="li-r">
                    <h5>学案例</h5>
                    <p>跨越数十个热门行业，汇集数百位一流企业大咖</p>
                  </div>
                </li>
                <li>
                  <img src="@/static/images/vip/tzx-icon.png" alt="" />
                  <div class="li-r">
                    <h5>淘资讯</h5>
                    <p>深刻理解政策导向，精准洞悉行业趋势</p>
                  </div>
                </li>
                <li>
                  <img src="@/static/images/vip/jdk-icon.png" alt="" />
                  <div class="li-r">
                    <h5>见大咖</h5>
                    <p>新时代的管理会计如何承担新使命，管理会计基础价值</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="body-r">
          <ul class="tabber">
            <li @click="typeFn(1)" :class="type == 1 ? 'one-li-active' : ''">
              PLUS会员
            </li>
            <li @click="typeFn(2)" :class="type == 2 ? 'two-li-active' : ''">
              文章会员
            </li>
          </ul>
          <div class="tabber-content">
            <div class="content-main" v-if="type == 1">
              <div class="tip">
                PLUS会员可以畅游管理会计研究网全站专业文章、视频课程、电子刊等内容。
              </div>
              <ul class="time-interval">
                <li
                  :class="vipType == 0 ? 'vip-checked' : ''"
                  @click="vipTypeFn(0)"
                >
                  <div class="month">1个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">60</span>
                  </div>
                  <div class="base-tip">MAS PLUS会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
                <li
                  :class="vipType == 1 ? 'vip-checked' : ''"
                  @click="vipTypeFn(1)"
                >
                  <div class="month">6个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">180</span>
                  </div>
                  <div class="base-tip">MAS PLUS会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
                <li
                  :class="vipType == 2 ? 'vip-checked' : ''"
                  @click="vipTypeFn(2)"
                >
                  <div class="tip-icon">推荐订阅</div>
                  <div class="month">12个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">330</span>
                  </div>
                  <div class="base-tip">MAS PLUS会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
              </ul>
              <div class="user-info">
                <div class="info-l">
                  <img class="code" src="../static/images/code.png" alt="" />
                  <div class="base-tip-text">
                    <img class="wx" src="../static/images/weixin.png" alt="" />
                    <span>扫码支付</span>
                  </div>
                </div>
                <div class="info-r">
                  <div class="price-box">
                    实付：<span class="num">48</span
                    ><span class="yuan">元</span>
                  </div>
                  <div class="account">微信账号：坚持的小强</div>
                  <p>
                    开通前阅读并同意<a
                      href="/protocol"
                      target="_blank"
                      class="protocol"
                      >《管理会计研究会员服务条款》</a
                    >购买后不支持7天无理由退货
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div class="content-main article" v-else>
              <div class="tip">
                文章会员可以阅读管理会计研究网全站付费专业文章。
              </div>
              <ul class="time-interval">
                <li
                  :class="vipType == 0 ? 'article-checked' : ''"
                  @click="vipTypeFn(0)"
                >
                  <div class="month">1个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">60</span>
                  </div>
                  <div class="base-tip">MAS 文章会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
                <li
                  :class="vipType == 1 ? 'article-checked' : ''"
                  @click="vipTypeFn(1)"
                >
                  <div class="month">6个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">180</span>
                  </div>
                  <div class="base-tip">MAS 文章会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
                <li
                  :class="vipType == 2 ? 'article-checked' : ''"
                  @click="vipTypeFn(2)"
                >
                  <div class="tip-icon">推荐订阅</div>
                  <div class="month">12个月</div>
                  <div class="price">
                    <span class="icon">¥</span>
                    <span class="num">330</span>
                  </div>
                  <div class="base-tip">MAS 文章会员</div>
                  <img
                    class="vip-select"
                    src="../static/images/vip/select.png"
                    alt=""
                  />
                </li>
              </ul>
              <div class="user-info">
                <div class="info-l">
                  <img class="code" src="../static/images/code.png" alt="" />
                  <div class="base-tip-text">
                    <img class="wx" src="../static/images/weixin.png" alt="" />
                    <span>扫码支付</span>
                  </div>
                </div>
                <div class="info-r">
                  <div class="price-box">
                    实付：<span class="num">48</span
                    ><span class="yuan">元</span>
                  </div>
                  <div class="account">微信账号：坚持的小强</div>
                  <p>
                    开通前阅读并同意<a
                      href="/protocol"
                      target="_blank"
                      class="protocol"
                      >《管理会计研究会员服务条款》</a
                    >购买后不支持7天无理由退货
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    //父组件传递的值，要改变的
    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // vipVisible: true, //会员购买弹框
      vipType: 2, //mas会员价格类型
      type: 1, //1 mas会员 2文章
    };
  },
  computed: {
    /* visible用来接收和改变父组件的值:isVisible */
    visible: {

      get() {
        if (this.isVisible) {
          this.init();
        } //打开弹窗的时候直接去初始化，
        return this.isVisible; //接收父组件传递的值
      },
      set(val) {
        // 使用$emit方法去改变父组件传递的isVisible值，父组件使用close方法接收，val是当前传递的值
        this.$emit("close", val);
      },
    },
  },
  mounted() {
  },

  methods: {
    //mas 会员价格类型
    vipTypeFn(type) {
      this.vipType = type;
    },
    //会员类型
    typeFn(num) {
      this.type = num;
      this.vipType = 2;
    },
    //点击关闭弹框
    closeFn() {
      this.visible = false;
    },
    init(){
      // this.vipVisible=this.visible;
    },
  },
};
</script>
<style lang="less" scoped>
/deep/.el-dialog {
  width: 900px;
  height: 624px;
  border-radius: 8px;
  box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03),
    0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 6px 16px -8px rgba(0, 0, 0, 0.08);
  margin-top: 10vh !important;

  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 0px;
  }
}
.vip-container {
  .vip-header {
    width: 100%;
    height: 101px;
    background-image: url(../static/images/vip/popup-header.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;

    .header-l {
      display: flex;
      align-items: center;
      margin-left: 27px;

      .photo {
        width: 55px;
        height: 54px;
      }

      .info {
        margin-left: 10px;

        h5 {
          font-size: 18px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 18px;
        }

        p {
          font-size: 12px;
          font-weight: 500;
          color: #805f49;
          line-height: 12px;
          padding-top: 5px;
        }

        .title-box {
          display: flex;
        }

        .tip-title {
          display: inline-block;
          width: 62px;
          height: 22px;
          background-image: url(../static/images/vip/popup-title-bg.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          color: #fcd2af;
          line-height: 19px;
          margin-left: 3px;
          margin-top: -8px;
        }
      }
    }

    .header-r {
      margin-right: 30px;
      margin-top: 24px;

      img {
        width: 20px;
        height: 21px;
        border-radius: 0pxf;
        cursor: pointer;
      }
    }
  }

  .vip-body {
    padding: 36px 38px 43px 38px;
    display: flex;

    .body-l {
      width: 260px;

      h2 {
        height: 42px;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: rgba(0, 0, 0, 0.85);
        line-height: 40px;
      }

      .equity-box {
        width: 100%;
        height: 402px;
        background: #f8f8f8;

        .equity-main {
          padding: 24px 38px 0px 38px;
          margin: 0 auto;

          .equity-title {
            width: 183px;
            height: 28px;
            background: linear-gradient(143deg, #ff8b39 5%, #ffb375 100%);
            border-radius: 14px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            color: #ffffff;
            line-height: 28px;
          }

          ul {
            padding-top: 12px;

            li {
              display: flex;
              padding: 11px 0px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.05);

              &:last-child {
                border-bottom: none;
              }

              img {
                width: 17px;
                height: 14px;
                border-radius: 0px;
              }

              p {
                font-size: 12px;
                font-weight: 400;
                text-align: justify;
                color: rgba(0, 0, 0, 0.85);
                line-height: 18px;
                margin-left: 8px;
                margin-top: -2px;
              }
            }
          }
        }

        .equity-article {
          .equity-title {
            color: #614015;
            background: linear-gradient(129deg, #f3bd72, #ffe4be 92%);
          }

          ul {
            li {
              padding: 13px 0px;

              .li-r {
                margin-left: 10px;
                margin-top: -2px;

                h5 {
                  font-size: 14px;
                  font-weight: 600;
                  text-align: justify;
                  color: #bc996d;
                  line-height: 18px;
                }

                p {
                  margin-left: 0px;
                  margin-top: 5px;
                }
              }
            }
          }
        }
      }
    }

    .body-r {
      .tabber {
        height: 42px;
        display: flex;
        align-items: flex-end;

        li {
          width: 291px;
          height: 100%;
          background-image: url(../static/images/vip/default-bg.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          color: rgba(255, 255, 255, 0.55);
          line-height: 42px;
          cursor: pointer;

          &:nth-child(2) {
            margin-left: -14px;
          }
        }

        .one-li-active {
          width: 290px;
          height: 45px;
          line-height: 45px;
          transform-origin: 50% 100% 0;
          transform: perspective(20px) rotateX(2deg);
          position: relative;
          background: linear-gradient(90deg, #ffebde 24%, #ffcea4 100%);
          border-radius: 8px 8px 0px 0px;
          color: #40301c;
        }

        .two-li-active {
          width: 290px;
          height: 45px;
          line-height: 45px;
          transform-origin: 50% 100% 0;
          transform: perspective(20px) rotateX(2deg);
          position: relative;
          background: linear-gradient(129deg, #ffe4be, #f3bd72 92%);
          border-radius: 8px 8px 0px 0px;
          color: #40301c;
        }
      }

      .tabber-content {
        width: 100%;
        height: 401px;
        border-right: 1px solid rgba(0, 0, 0, 0.05);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        .content-main {
          padding: 25px 40px 0px 40px;

          .tip {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 13px;
          }

          .time-interval {
            padding: 18px 0px 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            display: flex;
            justify-content: space-between;

            li {
              width: 150px;
              height: 134px;
              background: #ffffff;
              border: 2px solid #ffefe0;
              border-radius: 8px;
              position: relative;
              cursor: pointer;

              .tip-icon {
                position: absolute;
                top: -2px;
                left: -2px;
                width: 64px;
                height: 21px;
                background-image: url(../static/images/vip/tip-icon.png);
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                font-size: 12px;
                font-weight: 600;
                text-align: center;
                color: #ffffff;
                line-height: 20px;
              }

              .month {
                font-size: 16px;
                font-weight: 600;
                text-align: center;
                color: rgba(0, 0, 0, 0.85);
                line-height: 24px;
                padding: 22px 0px 7px;
              }

              .price {
                color: #fa6725;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: flex-end;

                .icon {
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 24px;
                }

                .num {
                  font-size: 24px;
                  font-weight: 600;
                }
              }

              .base-tip {
                width: 100%;
                height: 33px;
                background: #ffefe0;
                border-radius: 0px 0px 6px 6px;
                font-size: 12px;
                font-weight: 500;
                text-align: center;
                color: #c49772;
                line-height: 33px;
                // margin-top: 16px;
                position: absolute;
                left: 0px;
                bottom: 0px;
              }

              .vip-select {
                width: 24px;
                height: 24px;
                position: absolute;
                bottom: -2px;
                right: -2px;
                border-radius: 0px;
                display: none;
              }
            }

            .vip-checked {
              background: #fffaf5 !important;
              border: 2px solid #b87101 !important;

              .vip-select {
                display: block !important;
              }
            }
          }

          .user-info {
            display: flex;
            align-items: center;
            margin-top: 16px;

            .info-l {
              width: 132px;
              height: 152px;
              border: 1px solid #eeeeee;
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              .code {
                width: 108px;
                height: 108px;
                border-radius: 0px;
              }

              .base-tip-text {
                display: flex;
                align-items: center;
                margin-top: 6px;

                .wx {
                  width: 16px;
                  height: 16px;
                }

                span {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.65);
                  line-height: 12px;
                  margin-left: 3px;
                }
              }
            }

            .info-r {
              margin-left: 22px;

              .price-box {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.65);
                line-height: 24px;

                .num {
                  font-size: 36px;
                  font-weight: 600;
                  color: #fa6725;
                  line-height: 36px;
                  vertical-align: text-bottom;
                }

                .yuan {
                  font-weight: 400;
                  color: #ed6d38;
                  line-height: 14px;
                }
              }

              .account {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.65);
                line-height: 24px;
                padding: 7px 0px 14px 0px;
              }

              p {
                width: 264px;
                font-size: 12px;
                font-weight: 400;
                text-align: justify;
                color: rgba(0, 0, 0, 0.35);
                line-height: 19px;

                .protocol {
                  color: rgba(0, 0, 0, 0.85);
                }
              }
            }
          }
        }

        .article {
          li {
            border: 2px solid #fae8d0 !important;
          }
          .article-checked {
            background: #fff9f1 !important;
            border: 2px solid #b87101 !important;
            .vip-select {
              display: block !important;
            }
          }
          .base-tip {
            background: #fae8d0 !important;
          }
        }
      }
    }
  }
}
</style>
