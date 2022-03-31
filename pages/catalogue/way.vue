<template>
  <div class="main_container">
    <singleHeader :typeName='typeName' />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/banner.png" alt="" />
          </div>
          <div class="list-box">
            <div class="major-container">
              <span class="major-container-left">专业：</span>
              <ul
                class="major-container-mid oneline"
                :style="'height:' + majorHeight + ''"
              >
                <li
                  v-for="(item, index) in major"
                  @click="oNitem(index)"
                  :key="index"
                  :class="current == index ? 'checked' : ''"
                >
                  {{ item }}
                </li>
              </ul>
              <span class="major-container-right" @click="allFn">全部</span>
            </div>
            <div class="major-container industry">
              <span class="major-container-left">行业：</span>
              <ul
                class="major-container-mid oneline"
                :style="'height:' + industryHeight + ''"
              >
                <li
                  v-for="(item, index) in major"
                  @click="industryItem(index)"
                  :key="index"
                  :class="industryCurrent == index ? 'checked' : ''"
                >
                  {{ item }}
                </li>
              </ul>
              <span class="major-container-right" @click="industryAllFn"
                >全部</span
              >
            </div>
            <div class="content-container-list">
              <ul>
                <li>
                  <dl>
                    <dt>
                      <div class="top">
                        <h3>潜水期权与高管绩效薪酬敏感 度之间的动态关系</h3>
                        <p>
                          企业财务人员不仅是企业的价值管理者，而且业财融合新模式
                        </p>
                      </div>
                      <div class="base">
                        <div class="base-left">
                          <img src="../../static/images/way/pen.png" alt="" />
                          <span>找方法</span>
                        </div>
                        <div class="base-right">
                          <img
                            src="../../static/images/time.png"
                            alt=""
                            class="time"
                          />
                          <span class="text">2022-03-14</span>
                          <img
                            src="../../static/images/chat.png"
                            alt=""
                            class="chat"
                          />
                          <span class="text">3</span>
                        </div>
                      </div>
                    </dt>
                    <dd>
                      <img src="../../static/images/way/list.png" alt="" />
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>
                      <div class="top">
                        <h3>
                          论文《 潜水期权与高管绩效薪酬敏感
                          度之间的动态关系》的评述
                        </h3>
                        <p>
                          企业财务人员不仅是企业的价值管理者，而且业财融合新模式
                        </p>
                      </div>
                      <div class="base">
                        <div class="base-left">
                          <img src="../../static/images/way/pen.png" alt="" />
                          <span>找方法</span>
                        </div>
                        <div class="base-right">
                          <img
                            src="../../static/images/time.png"
                            alt=""
                            class="time"
                          />
                          <span class="text">2022-03-14</span>
                          <img
                            src="../../static/images/chat.png"
                            alt=""
                            class="chat"
                          />
                          <span class="text">3</span>
                        </div>
                      </div>
                    </dt>
                    <dd>
                      <img src="../../static/images/way/list.png" alt="" />
                    </dd>
                  </dl>
                </li>
              </ul>
              <div class="more-btn">查看更多</div>
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
          <div class="selections">
            <div class="title">
              <h3>荐读</h3>
              <a href="" class="more">查看更多</a>
            </div>
            <ul>
              <li class="twoline">
                论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
              </li>
              <li class="twoline">
                论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
              </li>
              <li class="twoline">
                论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
              </li>
            </ul>
          </div>
          <div class="sub-selections">
            <div class="title">
              <h3>荐读</h3>
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
export default {
  data() {
    return {
      recommend,
      major, //专业
      current: 0, //专业默认索引
      industryCurrent: 0, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
        typeName:'找方法',//页面标题
    };
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
      .list-box {
        margin-top: 20px;
        width: 651px;
        background: #ffffff;
        border-radius: 6px;
        padding: 24px 32px;
        .major-container {
          display: flex;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          line-height: 22px;
          border-bottom: 1px dashed #e9e9e9;
          .major-container-left {
            min-width: 42px;
            color: rgba(0, 0, 0, 0.85);
          }
          .major-container-mid {
            width: 581px;
            margin-left: 22px;

            li {
              float: left;
              color: rgba(0, 0, 0, 0.65);
              margin-right: 36px;
              margin-bottom: 16px;
              line-height: 22px;
            }
            .checked {
              background: #ed6d38;
              border-radius: 2px;
              color: #fff;
              padding: 0px 6px;
              margin-right: 28px;
            }
          }
          .major-container-right {
            min-width: 28px;
            color: #ed6d38;
          }
        }
        .industry {
          margin-top: 20px;
          border-bottom: 1px solid #e7e7e7;
        }
        .content-container-list {
          ul {
            li {
              height: 190px;
              border-bottom: 1px solid #e7e7e7;
              dl {
                display: flex;
                justify-content: space-between;
                padding-top: 22px;
                height: 144px;
                dt {
                  width: 411px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  .top {
                    h3 {
                      line-height: 24px;
                    }
                    p {
                      font-size: 13px;
                      font-weight: 400;
                      text-align: left;
                      color: rgba(0, 0, 0, 0.45);
                      line-height: 20px;
                      margin-top: 12px;
                    }
                  }
                  .base {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .base-left {
                      display: flex;
                      align-items: center;
                      img {
                        width: 14px;
                        height: 14px;
                      }
                      span {
                        font-size: 12px;
                        font-weight: 400;
                        text-align: left;
                        color: rgba(0, 0, 0, 0.25);
                        line-height: 22px;
                        margin-left: 5px;
                      }
                    }
                    .base-right {
                      display: flex;
                      align-items: center;
                      .time {
                        width: 12px;
                        height: 12px;
                      }
                      .text {
                        font-size: 12px;
                        font-weight: 400;
                        text-align: left;
                        color: rgba(0, 0, 0, 0.25);
                        margin-top: -2px;
                        margin-left: 2px;
                      }
                      .chat {
                        width: 12px;
                        height: 10px;
                        margin-left: 7px;
                      }
                    }
                  }
                }
                dd {
                  width: 216px;
                  height: 100%;
                  border-radius: 6px;
                }
              }
            }
          }
          .more-btn {
            width: 146px;
            height: 32px;
            background: #ffffff;
            border: 1px solid #ed6d38;
            border-radius: 2px;
            box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            color: #ed6d38;
            line-height: 30px;
            margin: 0 auto;
            margin-top: 32px;
            margin-bottom: 16px;
          }
          .more-btn:hover {
          background: #ed6d38;
          color: #fff;
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
      .selections {
        margin: 20px 0px;
        width: 306px;
        height: 196px;
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 6px;
        padding: 20px;
        ul {
          li {
            margin-top: 18px;
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 20px;
          }
        }
      }
      .sub-selections {
        width: 306px;
        height: 311px;
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 6px;
        padding: 20px;
        .magazine-img {
          margin: 22px 0px;
          width: 305px;
          height: 146px;
          position: relative;
          .point {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 63px;
            height: 26px;
            background: #ea3a3a;
            font-size: 11px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
            line-height: 25px;
            letter-spacing: 0.7px;
          }
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
