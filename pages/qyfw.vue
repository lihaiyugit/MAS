<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-enterprise-service">
      <div class="banner banxin">
        <img src="../static/images/qy/qy-banner.png" alt="" />
      </div>
      <div class="introduce banxin">
        <dl class="common-dl">
          <dt>
            <img src="../static/images/qy/qy-illustration.png" alt="" />
          </dt>
          <dd>
            <h6>MAS企业服务致力于多领域</h6>
            <p>
              MAS企业会员服务致⼒于为企业、机构，提供品牌宣传、知识学习、⼈脉链接、资源合作、行业咨询等服务，以打破认知和资源的不对称，共同构筑中国数字产业化、产业数字化之融合⾼地。
              为各领域⾼价值企业、机构打造，通过丰富的会员增值服务使企业间、行业领域、企业与机构间的链接更加紧密、为企业的服务更加定制化，做最懂市场与⾏业需求的会员制度。
            </p>
            <div class="introduce-base">
              <button class="default-btn" @click="consultFn()">立即咨询</button>
            </div>
          </dd>
        </dl>
      </div>
      <div class="advantage" data-aos="fade-up">
        <h2>优势</h2>
        <div class="advantage-main banxin">
          <dl>
            <dt>
              <img src="../static/images/qy/advantage1.png" alt="" />
            </dt>
            <dd>
              <h5>强展示</h5>
              <p>将MAS全媒体平台作为企业的流量⼊⼝，实现扩⼤宣传</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/qy/advantage2.png" alt="" />
            </dt>
            <dd>
              <h5>精链接</h5>
              <p>MAS组局⾏业领袖人物，根据会员需求创造链接</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/qy/advantage3.png" alt="" />
            </dt>
            <dd>
              <h5>价值内容配合发布</h5>
              <p>发挥管理会计研究媒体属性，为会员内容传播搭建平台</p>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/qy/advantage4.png" alt="" />
            </dt>
            <dd>
              <h5>市场活动</h5>
              <p>以不同类型活动构建高质量强互动的精准资源对接体系</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="resource-pool" data-aos="fade-up">
        <h2>MAS企业会员服务图谱（资源池）</h2>
        <div class="resource-pool-main banxin">
          <ul class="resourceTabs">
            <li
              :class="resourceActive == index ? 'active' : ''"
              v-for="(item, index) in resourceTabs"
              :key="index"
              @click="itemFn(index)"
            >
              {{ item }}
            </li>
          </ul>
          <div class="tabs-content">
            <div class="media" v-if="resourceActive == 0">
              <dl>
                <dt>
                  <img src="../static/images/qy/mt1.png" alt="" />
                </dt>
                <dd>
                  <h5 style="margin-left: -12px">《管理会计研究》杂志</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>“观察”栏目</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>“企业数字化转型巡展”栏目</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>学术文章投稿</span>
                    </p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt2.png" alt="" />
                </dt>
                <dd>
                  <h5>MAS服务号/公众号</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>深度解读</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>实战案例</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>决策内参</span>
                    </p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt3.png" alt="" />
                </dt>
                <dd>
                  <h5>MAS视频号</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>布局</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>MAS会客厅</span>
                    </p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt4.png" alt="" />
                </dt>
                <dd>
                  <h5>MAS网站</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>网站广告</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>栏目冠名</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>文章连载</span>
                    </p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt5.png" alt="" />
                </dt>
                <dd>
                  <h5>社群运营</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>粉丝活动</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>拓展流量/平台转发</span>
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="activity" v-else-if="resourceActive == 1">
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity1.png') + ')',
                }"
              >
                <dt>品牌活动</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity2.png') + ')',
                }"
              >
                <dt>闭门研讨会</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity3.png') + ')',
                }"
              >
                <dt>行业峰会</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity4.png') + ')',
                }"
              >
                <dt>MAS思宴</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity5.png') + ')',
                }"
              >
                <dt>线上直播大讲堂</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/activity6.png') + ')',
                }"
              >
                <dt>定制化活动</dt>
              </dl>
            </div>
            <div class="activity" v-else-if="resourceActive == 2">
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train1.png') + ')',
                }"
              >
                <dt>独家数字化转型实践课程</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train2.png') + ')',
                }"
              >
                <dt>全球化高端财会人才培养项目</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train3.png') + ')',
                }"
              >
                <dt>企业实战内训</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train4.png') + ')',
                }"
              >
                <dt>沉浸式游学</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train5.png') + ')',
                }"
              >
                <dt>师资培训班</dt>
              </dl>
              <dl
                :style="{
                  backgroundImage:
                    'url(' + require('../static/images/qy/train6.png') + ')',
                }"
              >
                <dt>论文辅导班</dt>
              </dl>
            </div>
            <div class="media" v-else>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt1.png" alt="" />
                </dt>
                <dd>
                  <h5>研究报告</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>数字化趋势报告</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>行业研究报告</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>企业研究报告</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>课题研究报告</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>企业/机构榜单</span>
                    </p>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <img src="../static/images/qy/mt6.png" alt="" />
                </dt>
                <dd>
                  <h5>咨询服务</h5>
                  <div class="abstract">
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>大咖对面咨询</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>企业诊断</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>项目对接</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>完整解决方案</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>企业战略规划</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>人才招聘</span>
                    </p>
                    <p>
                      <img src="../static/images/qy/right-icon.png" alt="" />
                      <span>产业升级</span>
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="discount" data-aos="fade-up">
        <div class="discount-title">
          <img src="../static/images/qy/discount.png" alt="" />
          <h2>折扣开放中：企业会员服务包10万起</h2>
        </div>
        <div class="discount-main banxin">
          <div class="discount-main-left">
            <div class="type-box">
              <img src="../static/images/qy/hot.png" alt="" />
              <span>内容类</span>
            </div>
            <div class="type-content">
              <dl>
                <dt>
                  <h5>深度、有价值稿件转发（新媒体端）</h5>
                  <p>
                    MAS对企业及机构具有传播需求，并且有高度有深度的稿件进行转载宣发
                  </p>
                </dt>
                <dd>
                  <div class="dd-l">
                    <span class="icon">￥</span>
                    <span class="num">20000</span>
                    <span class="text">/次</span>
                  </div>
                  <img class="dd-r" src="../static/images/qy/zk1.png" alt="" />
                </dd>
              </dl>
              <dl>
                <dt>
                  <h5>企业专访稿件（服务号/公众号）</h5>
                  <p>
                    从企业视角出发，以采访、对话形式对产品业务、行业趋势、企业实践案例进行解析
                  </p>
                </dt>
                <dd>
                  <div class="dd-l">
                    <span class="icon">￥</span>
                    <span class="num">20000</span>
                    <span class="text">/次</span>
                  </div>
                  <img class="dd-r" src="../static/images/qy/zk3.png" alt="" />
                </dd>
              </dl>
              <dl>
                <dt>
                  <h5>原创稿件（杂志媒体/服务号、公众号）</h5>
                  <p>
                    《管理会计研究》杂志：“观察”栏目，企业总会计师、财务总监等高管前沿观点文章；“企业巡展”栏目，企业数字化转型图文形式软文宣传
                  </p>
                </dt>
                <dd>
                  <div class="dd-l">
                    <span class="icon">￥</span>
                    <span class="num">20000</span>
                    <span class="text">/次</span>
                  </div>
                  <img class="dd-r" src="../static/images/qy/zk5.png" alt="" />
                </dd>
              </dl>
            </div>
          </div>
          <div class="discount-main-left">
            <div class="type-box">
              <img src="../static/images/qy/hot.png" alt="" />
              <span>活动类</span>
            </div>
            <div class="type-content">
              <dl>
                <dt>
                  <h5>MAS主办系列活动门票</h5>
                  <p>
                    MAS平台主办的所有系列活动入场券（商务休闲活动除外，如高尔夫、品酒等活动）
                  </p>
                </dt>
                <dd>
                  <div class="dd-l">
                    <span class="icon">￥</span>
                    <span class="num">20000</span>
                    <span class="text">/次</span>
                  </div>
                  <img class="dd-r" src="../static/images/qy/zk2.png" alt="" />
                </dd>
              </dl>
              <dl>
                <dt>
                  <h5>业界合作活动邀请</h5>
                  <p>推荐可以参加业界与MAS合作的活动（评选类活动参选除外）</p>
                </dt>
                <dd style="padding-top: 22px">
                  <div class="dd-l"></div>
                  <img class="dd-r" src="../static/images/qy/zk4.png" alt="" />
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="contact-way banxin" data-aos="fade-up">
          <dl>
            <dt>
              <img src="../static/images/qy/contact-tel.png" alt="" />
            </dt>
            <dd>
              <h5>企业用户服务咨询</h5>
              <p>
                开通热线：yangww@chinamas.cn /13910957544
                (手机号同微信，添加请备注“公司+姓名”)
              </p>
              <button>立即咨询</button>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src="../static/images/qy/contact-person.png" alt="" />
            </dt>
            <dd>
              <h5>立即加入</h5>
              <p>
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<br />XXXXXXXXXXXXXXXXXXXXXXXXXXXX
              </p>
              <button style="background: #ed6d38; border: 1px solid #ed6d38">
                立即咨询
              </button>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resourceTabs: ["媒体资源", "活动资源", "培训资源", "智库资源"],
      resourceActive: 0, //默认选中
    };
  },

  mounted() {},
  methods: {
    //点击每个资源池
    itemFn(index) {
      this.resourceActive = index;
    },
    //点击立即咨询
    consultFn() {
      // this.$router.push({
      //   name: "dy-pay",
      // });
    },
  },
};
</script>
<style lang="less" scoped>
.page-enterprise-service {
  width: 100%;
  padding-top: 50px;
  .banner {
    height: 240px;
  }
  .default-btn {
    width: 88px;
    height: 32px;
    border-radius: 2px;
    background: #ed6d38;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    line-height: 22px;
    border: none;
    display: block;
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
        background: #fff;
        border-radius: 0px 6px 6px 0px;
        padding: 30px 20px 27px 22px;
        h6 {
          font-size: 20px;
          font-weight: 500;
          color: #000000;
          line-height: 24px;
        }
        p {
          width: 551px;
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 20px;
          padding: 24px 0px 30px;
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
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
    color: #232323;
    line-height: 32px;
    padding-top: 70px;
  }
  .advantage {
    background-color: #fff;
    .advantage-main {
      padding: 50px 0px 30px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      dl {
        width: 494px;
        height: 132px;
        background: #ffffff;
        border: 1px solid #e9ebed;
        border-radius: 6px;
        padding-left: 44px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        dt {
          width: 70px;
          height: 70px;
        }
        dd {
          margin-left: 28px;
          h5 {
            font-size: 18px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
          }
          p {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.45);
            line-height: 22px;
            padding-top: 12px;
          }
        }
      }
    }
  }
  .resource-pool {
    background: linear-gradient(90deg, #fcfcfd, #f9fafb 94%, #f7f8fa);
    .resource-pool-main {
      display: flex;
      justify-content: space-between;
      padding: 50px 0px;
      .resourceTabs {
        padding-top: 10px;
        li {
          font-size: 20px;
          font-weight: 400;
          color: #818999;
          line-height: 32px;
          padding-bottom: 44px;
        }
        .active {
          font-weight: 500;
          color: #ed6d38;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            left: 10px;
            bottom: 38px;
            width: 60px;
            height: 4px;
            background: #ed6d38;
            border-radius: 2px;
            // transform: translateX(-10px);
            z-index: 100;
          }
        }
      }
      .tabs-content {
        .media {
          width: 900px;
          background: #ffffff;
          border-radius: 6px;
          box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
          display: flex;
          flex-wrap: wrap;
          padding-left: 80px;
          padding-top: 50px;
          dl {
            width: 352px;
            padding-bottom: 50px;
            &:nth-child(3n) {
              width: auto !important;
            }
            dt {
              width: 30px;
              height: 30px;
              img {
                border-radius: 0px;
              }
            }
            dd {
              h5 {
                font-size: 24px;
                font-weight: 500;
                color: #262626;
                line-height: 24px;
                padding: 24px 0px 22px 0px;
              }
              .abstract {
                p {
                  font-size: 14px;
                  font-weight: 400;
                  color: #8c8c8c;
                  line-height: 22px;
                  padding-bottom: 6px;

                  img {
                    width: 12px;
                    height: 9px;
                    margin-right: 10px;
                  }
                }
              }
            }
          }
        }
        .activity {
          width: 1004px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          dl {
            width: 334px;
            height: 215px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-top: -10px;
            dt {
              font-size: 20px;
              font-family: PingFangSC, PingFangSC-Medium;
              font-weight: 500;
              text-align: left;
              color: #ffffff;
              line-height: 36px;
              padding: 24px 0px 0px 32px;
            }
          }
        }
      }
    }
  }
  .discount {
    background-color: #fff;
    .discount-title {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 48px;
        height: 48px;
        padding-top: 70px;
        margin-right: 16px;
      }
    }
    .discount-main {
      padding-top: 62px;
      display: flex;
      justify-content: space-between;
      .discount-main-left {
        width: 481px;
        height: 773px;
        background: #f7f8fa;
        border-radius: 6px;
        padding: 42px 30px 10px 30px;
        .type-box {
          padding-bottom: 32px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
          span {
            display: block;
            font-size: 24px;
            font-weight: 600;
            color: #ed6d38;
            line-height: 24px;
            margin-left: 6px;
          }
        }
        .type-content {
          dl {
            width: 423px;
            background: #ffffff;
            border-radius: 6px;
            box-shadow: 0px 4px 0px 0px #ed6d38 inset;
            padding: 35px 30px 0px 27px;
            margin-bottom: 20px;
            dt {
              h5 {
                font-size: 24px;
                font-weight: 500;
                color: #262626;
                line-height: 24px;
              }
              p {
                font-size: 14px;
                font-weight: 400;
                color: #8c8c8c;
                line-height: 22px;
                padding: 22px 0px 16px;
              }
            }
            dd {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .dd-l {
                font-size: 14px;
                font-weight: 400;
                color: #ed6d38;
                display: flex;
                align-items: flex-end;
                .num {
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 22px;
                  vertical-align: bottom;
                  margin-left: -3px;
                }
                .text {
                  color: #333;
                }
              }
              .dd-r {
                width: 68px;
                height: 68px;
              }
            }
          }
        }
      }
    }
    .contact-way {
      width: 940px;
      height: 153px;
      background-image: url(../static/images/qy/contact-bg.png);
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 6px;
      margin: 70px auto 100px;
      padding: 40px 80px;
      display: flex;
      justify-content: space-between;
      dl {
        display: flex;
        dt {
          width: 90px;
          height: 90px;
        }
        dd {
          margin-left: 28px;
          h5 {
            font-size: 24px;
            font-weight: 500;
            color: #ffffff;
            line-height: 24px;
          }
          p {
            width: 313px;
            opacity: 0.85;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            line-height: 22px;
            padding: 22px 0px 32px 0px;
          }
          button {
            width: 88px;
            height: 32px;
            background: transparent;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>
