<template>
  <div class="main_container">
    <singleHeader :typeName="typeName" />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img
              v-if="$route.query.id == 1"
              src="../../static/images/way/banner.png"
              alt=""
            />
            <img
              v-else-if="$route.query.id == 2"
              src="../../static/images/way/case_banner.png"
              alt=""
            />
            <img
              v-else-if="$route.query.id == 3"
              src="../../static/images/way/master.png"
              alt=""
            />
            <img
              v-else-if="$route.query.id == 4"
              src="../../static/images/way/zz-banner.png"
              alt=""
            />
            <img v-else src="../../static/images/way/case_banner.png" alt="" />
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
        </div>
      </div>
      <div class="magazine-list banxin">
        <div class="magazine-title">
          <h2>管理会计研究</h2>
          <div class="more-btn">查看更多</div>
        </div>
        <div class="magazine-gather">
            <dl @click="details">
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
            <dl @click="details">
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
            <dl @click="details">
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
            <dl @click="details">
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
        <div class="clear"></div>
        <div class="magazine-title" data-aos="fade-up">
          <h2>其他杂志</h2>
          <div class="more-btn">查看更多</div>
        </div>
        <div class="magazine-gather" data-aos="fade-up">
            <dl @click="details">
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
            <dl @click="details">
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
            <dl @click="details">
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
            <dl @click="details">
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
        <div class="clear"></div>
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
      typeName: this.$route.query.type, //页面标题
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {
    details() {
      this.$router.push({
        name: "catalogue-zz",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
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
      }
      .magazine-box {
        padding: 45px 40px 0px;
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
    }
  }
  .magazine-list {
    width: 1020px;
    // height: 877px;
    background: #ffffff;
    border-radius: 6px;
    padding: 45px 40px 0px;
    margin-top: 22px;
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
      dl {
        width: 186px;
        float: left;
        margin: 35px 75px 55px 0px;
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
        &:nth-child(1) {
          margin-left: 25px;
        }
        &:nth-child(4n) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
