<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/zz-banner.png" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
        </div>
        <div class="content-container-main-right">
          <!-- 热门推荐 -->
          <HotRecommend />
        </div>
      </div>
      <div class="magazine-list banxin">
        <div class="magazine-title">
          <h2>管理会计研究</h2>
          <nuxt-link to="/zz/list" class="more-btn"
            >查看更多
            <img src="../../static/images/arrows-left.png" alt="" />
          </nuxt-link>
        </div>
        <div class="magazine-gather">
          <dl @click="details(1)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz01.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(2)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz02.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(3)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz03.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(4)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz04.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(5)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz04.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
        </div>
        <div class="clear"></div>
        <div class="magazine-title" data-aos="fade-up">
          <h2>其他杂志</h2>
          <nuxt-link to="/zz/list" class="more-btn"
            >查看更多
            <img src="../../static/images/arrows-left.png" alt="" />
          </nuxt-link>
        </div>
        <div class="magazine-gather" data-aos="fade-up">
          <dl @click="details(5)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz01.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(5)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz02.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(3)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz03.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(3)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz04.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
            </dd>
          </dl>
          <dl @click="details(3)">
            <dt>
              <div class="dt-img">
                <img src="../../static/images/way/zz04.png" alt="" />
              </div>
              <h4>2022年第一期 总第22期</h4>
              <p>重塑核心能力</p>
            </dt>
            <dd>
              <a class="type" href="">平装</a>
              <a class="type" href="">电子刊</a>
              <div class="price">
                <span class="price-icon">￥</span><span>58</span>
              </div>
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
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/zz/${id}`,
        // name: "",
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
    padding: 50px 40px 0px;
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
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
        cursor: pointer;
        img {
          width: 13px;
          height: 8px;
          margin-left: 5px;
        }
      }
    }
    .magazine-gather {
      display: flex;
      dl {
        width: 178px;
        margin: 35px 30px 50px 0px;
        dt {
          .dt-img {
            width: 100%;
            height: 178px;
            img {
              border-radius: 0px;
            }
          }
          h4 {
            width: 100%;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin: 20px 0px 6px;
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
          margin-top: 36px;
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
            margin-right: 10px;
          }
          .price {
            font-size: 20px;
            font-weight: 400;
            text-align: left;
            color: #ed6d38;
            line-height: 22px;
            letter-spacing: 1.33px;
            padding-top: 20px;
            .price-icon {
              font-size: 14px;
            }
            span:nth-child(2) {
              margin-left: -4px;
            }
          }
        }
        &:nth-child(5n) {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
