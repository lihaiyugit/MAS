<template>
  <div class="content-container">
    <div class="banxin content-container-main">
      <div class="content-container-main-left">
        <div class="banner">
          <img src="@/static/images/way/dy-banner.png" alt="" />
        </div>
        <div class="subscription">
          <ul class="ul">
            <li
              v-for="(item, index) in typeList"
              :key="index"
              v-on:click="typeClass(index)"
              :class="{ active: index == typeCurrent }"
            >
              {{ item }}
            </li>
          </ul>
          <div v-if="typeCurrent == 0">
            <div class="ul-content">
              <h1>文章订阅</h1>
              <p>
                CMAS文章阅读，有关注行业发展的热点资讯、有企业管理升级的工具、方法推荐，有行业专家观点看法，有成功企业的精益实践案例分享。完整的企业管理转型内容体系，助您读懂新形式下的企业管理。文章可统一购买，畅阅各模块及专题文章，也可通过各模块、专题单独订阅。
              </p>
              <div class="base">
                <div class="base-l">
                  <span>套餐版本：</span>
                  <button
                    class="month"
                    v-for="(item, index) in priceList"
                    :class="idx == index ? 'clickbtn' : ''"
                    :key="index"
                    @click="onSelect(index)"
                  >
                    <span>{{ item }}</span>
                    <img
                      src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                      alt=""
                    />
                  </button>
                  <!-- <button class="month">
                    <span>168/年</span>
                    <img
                      src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                      alt=""
                    />
                  </button> -->
                </div>
                <div class="base-r">
                  <button class="subscribe">立即订阅</button>
                </div>
              </div>
            </div>
            <ul class="ul-content-ul">
              <li
                v-for="(item, index) in modulesList"
                :key="index"
                v-on:click="modulesClass(index)"
                :class="{ 'content-active': index == modulesCurrent }"
              >
                {{ item }}
              </li>
            </ul>
            <div class="ul-content">
              <ul>
                <li>
                  <h1>学案例</h1>
                  <p>
                    CMAS平台汇聚了多位企业大咖，带来企业精益实践分享，关注不同行业成功企业精益管理要点，为您开展企业的精益管理提供参考。
                  </p>
                  <div class="base">
                    <div class="base-l">
                      <span>套餐版本：</span>
                      <button class="year">
                        <span>58/年</span>
                        <img
                          src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div class="base-r">
                      <button class="subscribe">立即订阅</button>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>找方法</h1>
                  <p>
                    新形势下，企业管理面临诸多挑战，如何找到符合企业管理升级路径，顺利实现企业管理转型，CMAS平台分享前沿理论、方法，新技术体系等，支持企业管理模式的探索与改进。
                  </p>
                  <div class="base">
                    <div class="base-l">
                      <span>套餐版本：</span>
                      <button class="year">
                        <span>88/年</span>
                        <img
                          src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div class="base-r">
                      <button class="subscribe">立即订阅</button>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>见大咖</h1>
                  <p>
                    CMAS专家观点输出各行业领袖、专家学者对于新形势下企业发展、企业管理的看法与建议，为各行业的发展建言献策。
                  </p>
                  <div class="base">
                    <div class="base-l">
                      <span>套餐版本：</span>
                      <button class="year">
                        <span>68/年</span>
                        <img
                          src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div class="base-r">
                      <button class="subscribe">立即订阅</button>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>淘资讯</h1>
                  <p>
                    CMAS聚焦企业管理，分享行业资讯，关注各行业发展的政策热点话题，深刻理解政策导向，清晰了解行业的发展动向。
                  </p>
                  <div class="base">
                    <div class="base-l">
                      <span>套餐版本：</span>
                      <button class="year">
                        <span>免费</span>
                        <img
                          src="https://img.alicdn.com/tfs/TB1VKCSehz1gK0jSZSgXXavwpXa-30-31.png"
                          alt=""
                        />
                      </button>
                    </div>
                    <div class="base-r">
                      <button class="subscribe">立即订阅</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="magazine" v-if="typeCurrent == 1">
            <p class="describe">
              《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章，专注数字技术驱动业财融合、企业转型的发展趋势，用案例启迪管理智慧。为您的企业管理、转型提供深刻、全面的借鉴与指导。
            </p>
            <div class="magazine-title">
              <h2>管理会计研究</h2>
              <div class="more-btn">查看更多</div>
            </div>
            <div class="magazine-gather">
              <dl>
                <nuxt-link :to="{ name: 'catalogue-zz' }">
                  <dt>
                    <div class="dt-img">
                      <div class="cj"></div>
                      <img src="@/static/images/zz.png" alt="" />
                    </div>
                    <h4>2022年第一期 总第22期</h4>
                    <p>重塑核心能力</p>
                  </dt>
                  <dd>
                    <a class="type" href="">平装</a>
                    <a class="type" href="">电子刊</a>
                  </dd>
                </nuxt-link>
              </dl>
              <dl>
                <nuxt-link :to="{ name: 'catalogue-zz' }">
                  <dt>
                    <div class="dt-img">
                      <div class="cj"></div>
                      <img src="@/static/images/zz.png" alt="" />
                    </div>
                    <h4>2022年第一期 总第22期</h4>
                    <p>重塑核心能力</p>
                  </dt>
                  <dd>
                    <a class="type" href="">平装</a>
                    <a class="type" href="">电子刊</a>
                  </dd>
                </nuxt-link>
              </dl>
              <dl>
                <nuxt-link :to="{ name: 'catalogue-zz' }">
                  <dt>
                    <div class="dt-img">
                      <div class="cj"></div>
                      <img src="@/static/images/zz.png" alt="" />
                    </div>
                    <h4>2022年第一期 总第22期</h4>
                    <p>重塑核心能力</p>
                  </dt>
                  <dd>
                    <a class="type" href="">平装</a>
                    <a class="type" href="">电子刊</a>
                  </dd>
                </nuxt-link>
              </dl>
            </div>
            <div class="magazine-title">
              <h2>其他杂志s</h2>
              <div class="more-btn">查看更多</div>
            </div>
            <div class="magazine-gather">
              <dl>
                <dt>
                  <div class="dt-img">
                    <div class="cj"></div>
                    <img src="@/static/images/zz.png" alt="" />
                  </div>
                  <h4>2022年第一期 总第22期</h4>
                  <p>重塑核心能力</p>
                </dt>
                <dd>
                  <a class="type" href="">平装</a>
                  <a class="type" href="">电子刊</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <div class="dt-img">
                    <div class="cj"></div>
                    <img src="@/static/images/zz.png" alt="" />
                  </div>
                  <h4>2022年第一期 总第22期</h4>
                  <p>重塑核心能力</p>
                </dt>
                <dd>
                  <a class="type" href="">平装</a>
                  <a class="type" href="">电子刊</a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <div class="dt-img">
                    <div class="cj"></div>
                    <img src="@/static/images/zz.png" alt="" />
                  </div>
                  <h4>2022年第一期 总第22期</h4>
                  <p>重塑核心能力</p>
                </dt>
                <dd>
                  <a class="type" href="">平装</a>
                  <a class="type" href="">电子刊</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="content-container-main-right">
        <div class="hot-recommend">
          <h3>热点推荐</h3>
          <ul>
            <li v-for="(item, index) in recommend" :key="index">
              <a href="">
                <span
                  v-if="index + 1 == 1"
                  :style="`${index + 1 == 1 ? 'background: #ea3a3a' : ''}`"
                  >{{ index + 1 }}</span
                >
                <span
                  v-else-if="index + 1 == 2"
                  :style="`${index + 1 == 2 ? 'background: #ed6d38' : ''}`"
                  >{{ index + 1 }}</span
                >
                <span
                  v-else-if="index + 1 == 3"
                  :style="`${index + 1 == 3 ? 'background: #f4a74d' : ''}`"
                  >{{ index + 1 }}</span
                >
                <span v-else>{{ index + 1 }}</span>
                <p class="oneline">{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="sub-selections">
          <div class="title">
            <h3>杂志</h3>
            <a href="" class="more">查看更多</a>
          </div>
          <div class="magazine-img">
            <img src="../../static/images/way/zz.png" alt="" />
            <div class="point">新书</div>
          </div>
          <div class="headline">2022年第一期｜总第567期</div>
          <div class="contribute">我要投稿</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const recommend = [
  { title: "疫情之下，企业如何应对？" },
  { title: "基于“鲸鱼曲线”思想的全面预算管理" },
  { title: "财务共享服务中心（FSSC）项目实施" },
  { title: "践行管理会计 促进价值提升" },
  { title: "苏宁和蒙牛:新零售的商业模式特征" },
  { title: "基于“鲸鱼曲线”思想的全面预算管理" },
  { title: "财务共享服务中心（FSSC）项目实施" },
];
const major = [
  "成本管理",
  "绩效管理",
  "预算管理",
  "财务管理",
  "管理会计",
  "人工智能",
  "人工智能",
];
const typeList = ["文章订阅", "杂志订阅"];
const modulesList = ["模块订阅", "专题订阅"];
const priceList = ["16.8/月", "168/年"];
export default {
  data() {
    return {
      recommend,
      major, //专业
      current: 0, //专业默认索引
      industryCurrent: 0, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
      typeName: this.$route.query.type, //页面标题
      typeList,
      typeCurrent: 0,
      modulesCurrent: 0,
      modulesList,
      idx: "0",
      priceList,
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {
    //点击专业每一项
    oNitem(index) {
      this.current = index;
    },
    //点击行业每一项
    industryItem(index) {
      this.industryCurrent = index;
    },
    //点击专业全部
    allFn() {
      this.majorHeight = "auto";
    },
    //点击行业全部
    industryAllFn() {
      this.industryHeight = "auto";
    },
    modulesClass(index) {
      this.modulesCurrent = index;
    },
    typeClass(index) {
      this.typeCurrent = index;
    },
    onSelect(index) {
      this.idx = index;
    },
  },
};
</script>
<style lang="less" scoped>
.content-container {
  margin: 18px 0px 40px 0px;
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
      }
      .subscription {
        width: 647px;
        background: #ffffff;
        border-radius: 6px;
        margin-top: 22px;
        padding: 36px 35px 2px 33px;
        .ul {
          display: flex;
          align-items: center;
          padding-bottom: 22px;
          border-bottom: 1px solid #e7e7e7;
          li {
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
            margin-right: 32px;
          }
          .active {
            padding: 5px 16px;
            background: #ed6d38;
            color: #ffffff;
          }
        }
        .ul-content {
          h1 {
            font-size: 24px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 32px;
            padding: 32px 0px 14px 0px;
          }
          p {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
          }
          .base {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 22px;
            button {
              padding: 5px 16px;
              font-size: 14px;
              font-weight: 400;
              border-radius: 2px;
              cursor: pointer;
            }
            .month {
              background: #ffffff;
              border: 1px solid #d9d9d9;
              color: rgba(0, 0, 0, 0.65);
              margin-right: 10px;
              position: relative;
              transition: all 0.3s ease !important;
              img {
                width: 16px;
                height: 16px;
                border-radius: 0px;
                display: none;
                position: absolute;
                right: 0;
                bottom: 0;
              }
              &:hover {
                background: #f0f0f0;
                border: 1px solid rgba(0, 0, 0, 0.05);
                color: #ed6d38;
              }
            }
            .clickbtn {
              border: 1px solid #ed6d38;
              color: #ff6a00;
              img {
                display: block;
              }
            }
            .year {
              background: #ffffff;
              border: 1px solid #ed6d38;
              color: #ed6d38;
              position: relative;
              transition: all 0.3s ease !important;
              img {
                width: 16px;
                height: 16px;
                border-radius: 0px;
                position: absolute;
                right: 0;
                bottom: 0;
              }
            }
            .base-l {
              span {
                font-size: 13px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.65);
                line-height: 20px;
              }
            }
            .base-r {
              .subscribe {
                background: #ea3a3a;
                color: #fff;
                border: none;
              }
            }
          }
          ul {
            li {
              width: 602px;
              height: 213px;
              border: 1px solid rgba(0, 0, 0, 0.1);
              margin-bottom: 22px;
              padding: 0px 22px;
              .base {
                padding-top: 30px;
              }
              &:last-child {
                margin-bottom: 36px;
              }
            }
          }
        }
        .ul-content-ul {
          display: flex;
          align-items: center;
          margin: 56px 0px 30px;
          li {
            margin-right: 16px;
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.45);
            line-height: 24px;
            padding-bottom: 5px;
          }
          .content-active {
            font-weight: 600;
            color: #ed6d38;
            border-bottom: 2px solid #ed6d38;
          }
        }
        .magazine {
          .describe {
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.45);
            line-height: 20px;
            padding: 36px 0px 56px;
            border-top: 1px solid #e7e7e7;
          }
          .magazine-title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h2 {
              font-size: 24px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 22px;
            }
            .more-btn {
              width: 88px;
              height: 32px;
              background: #ffffff;
              border: 1px solid #d9d9d9;
              border-radius: 2px;
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              color: rgba(0, 0, 0, 0.65);
              line-height: 30px;
              cursor: pointer;
              &:hover {
                background: #f2f4f5;
                border: 1px solid #e4e6e7;
                border-radius: 2px;
                color: rgba(0, 0, 0, 0.85);
              }
            }
          }
          .magazine-gather {
            display: flex;
            dl {
              width: 176px;
              margin: 35px 57px 55px 0px;
              dt {
                .dt-img {
                  width: 154px;
                  height: 203px;
                  border: 1px solid #eaeaea;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  img {
                    width: 152px;
                    height: 198px;
                    border-radius: 0px;
                  }
                }
                h4 {
                  font-size: 16px;
                  font-weight: 600;
                  text-align: left;
                  color: rgba(0, 0, 0, 0.85);
                  line-height: 24px;
                  margin: 16px 0px 6px;
                }
                p {
                  font-size: 13px;
                  font-weight: 400;
                  text-align: left;
                  color: rgba(0, 0, 0, 0.45);
                  line-height: 20px;
                }
              }
              dd {
                margin-top: 30px;
                .type {
                  padding: 0px 8px;
                  background: #fafafa;
                  border: 1px solid #d9d9d9;
                  border-radius: 2px;
                  font-size: 12px;
                  font-weight: 400;
                  text-align: center;
                  color: rgba(0, 0, 0, 0.65);
                  line-height: 20px;
                  display: inline-block;
                  &:nth-child(1) {
                    margin-right: 10px;
                  }
                  &:hover {
                    background: #ed6d38;
                    border: 1px solid #ed6d38;
                    color: #fff;
                  }
                }
              }
              &:hover .cj {
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.25);
                position: absolute;
                left: 0;
                top: 0;
                z-index: 99;
              }
              &:nth-child(3n) {
                margin-right: 0px;
              }
            }
          }
        }
      }
    }
    .content-container-main-right {
      width: 346px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .more {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
        }
      }
      .hot-recommend {
        width: 306px;
        height: 262px;
        background: #ffffff;
        border-radius: 6px;
        padding: 20px;
        ul {
          margin-top: 16px;
          li a {
            display: flex;
            margin-bottom: 18px;
            span {
              display: inline-block;
              min-width: 16px;
              height: 16px;
              background: #bfbfbf;
              border-radius: 2px;
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              color: #ffffff;
              line-height: 16px;
            }
            p {
              width: 271px;
              font-size: 14px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              line-height: 14px;
              margin-left: 7px;
            }
          }
          li:nth-last-child(1) {
            margin-bottom: 0px;
          }
        }
      }

      .sub-selections {
        width: 306px;
        height: 311px;
        background: #ffffff;
        border-radius: 6px;
        padding: 20px;
        margin-top: 22px;
        .magazine-img {
          margin: 22px 0px;
          width: 305px;
          height: 146px;
          position: relative;
        }
        .headline {
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 28px;
        }
        .contribute {
          width: 306px;
          height: 32px;
          border: 1px solid #ed6d38;
          border-radius: 2px;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #ed6d38;
          line-height: 30px;
          margin-top: 28px;
        }
        .contribute:hover {
          background: #ed6d38;
          color: #fff;
        }
      }
    }
  }
}
</style>
