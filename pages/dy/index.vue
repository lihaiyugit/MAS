<template>
  <div class="content-container banxin">
    <div class="banner">
      <div class="banner-main">
        <div class="logo">M A S</div>
        <img
          src="../../static/images/way/book-icon.png"
          class="book-icon"
          alt=""
        />
        <h2>“阅”享，读懂企业管理</h2>
        <p>新形式下的企业管理，深度文章、杂志，您想看的都在这里！</p>
        <div class="send">
          <span>我要投稿</span>
          <img src="../../static/images/way/Outlined.png" alt="" />
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module-title">
        <h2>“阅享”文章订阅</h2>
        <p>
          CMAS文章阅读，有关注行业发展的热点资讯、有企业管理升级的工具、方法推荐，有行业专家观点看法，有成功企业的精益实践案例分享。完整的企业管理转型内容体系，助您读懂新形式下的企业管理。文章可统一购买，畅阅各模块及专题文章，也可通过各模块、专题单独订阅
        </p>
      </div>
      <div class="article">
        <div class="article-l">
          <dl class="common-dl">
            <dt>
              <img src="../../static/images/way/book-l.png" alt="" />
            </dt>
            <dd>
              <h6>看原创</h6>
              <p>
                企业管理的资讯、观点、案例、企业转型内容体系、管理升级工具方法，一键购买，一手掌握！打包拆分两种途径，满足不同文章订阅需求。
              </p>
              <el-radio-group v-model="radio">
                <el-radio label="1"
                  ><span>￥<span class="price">16.8</span>/月</span></el-radio
                >
                <el-radio label="2"
                  ><span>￥<span class="price">168</span>/年</span></el-radio
                >
              </el-radio-group>
              <button @click="buyFn()">立即订阅</button>
            </dd>
          </dl>
        </div>
        <div class="article-r">
          <ul>
            <li :style="{ 'background-image': 'url(' + img1 + ')' }">
              <img class="dy" src="../../static/images/dy.png" alt="" />
              <div class="title">
                <h6>学案例</h6>
                <a href="" class="more">查看更多</a>
              </div>
              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>跨越数十个热门行业</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>汇集数百位一流企业大咖</span>
                </p>
              </div>
              <div class="li-base">
                <el-radio-group v-model="xalRadio">
                  <el-radio label="1"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">5.8</span>/月</el-radio
                  >
                  <el-radio label="2"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">58</span>/年</el-radio
                  >
                </el-radio-group>
                <button @click="buyFn()">立即订阅</button>
              </div>
            </li>
            <li :style="{ 'background-image': 'url(' + img2 + ')' }">
              <!-- <img class="dy" src="../../static/images/dy.png" alt="" /> -->
              <div class="title">
                <h6>找方法</h6>
                <a href="" class="more">查看更多</a>
              </div>
              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>寻转型方法</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>学新技术体系</span>
                </p>
              </div>
              <div class="li-base">
                <el-radio-group v-model="zffRadio">
                  <el-radio label="1"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">8.8</span>/月</el-radio
                  >
                  <el-radio label="2"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">88</span>/年</el-radio
                  >
                </el-radio-group>
                <button @click="buyFn()">立即订阅</button>
              </div>
            </li>
            <li :style="{ 'background-image': 'url(' + img3 + ')' }">
              <img class="dy" src="../../static/images/dy.png" alt="" />
              <div class="title">
                <h6>淘咨询</h6>
                <a href="" class="more">查看更多</a>
              </div>

              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>深刻理解政策导向</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>精准洞悉行业趋势</span>
                </p>
              </div>
              <div class="li-base">
                <div class="price">
                  <span class="icon">￥</span><span class="num">0</span>
                </div>
                <button @click="buyFn()">立即续费</button>
              </div>
            </li>
            <li :style="{ 'background-image': 'url(' + img4 + ')' }">
              <!-- <img class="dy" src="../../static/images/dy.png" alt="" /> -->
              <div class="title">
                <h6>见大咖</h6>
                <a href="" class="more">查看更多</a>
              </div>
              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>新时代的管理会计如何承担新使命</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>管理会计基础价值</span>
                </p>
              </div>
              <div class="li-base">
                <el-radio-group v-model="jdkRadio">
                  <el-radio label="1"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">6.8</span>/月</el-radio
                  >
                  <el-radio label="2"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">68</span>/年</el-radio
                  >
                </el-radio-group>
                <button @click="buyFn()">立即订阅</button>
              </div>
            </li>
            <li :style="{ 'background-image': 'url(' + img5 + ')' }">
              <!-- <img class="dy" src="../../static/images/dy.png" alt="" /> -->
              <div class="title">
                <h6>数字化转型</h6>
                <nuxt-link to="/szhzt" class="more">查看更多</nuxt-link>
              </div>
              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>助力企业弄潮数字时代</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>直击数字化转型落地执行</span>
                </p>
              </div>
              <div class="li-base">
                <el-radio-group v-model="szhRadio">
                  <el-radio label="1"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">6.8</span>/月</el-radio
                  >
                  <el-radio label="2"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">68</span>/年</el-radio
                  >
                </el-radio-group>
                <button @click="buyFn()">立即订阅</button>
              </div>
            </li>
            <li :style="{ 'background-image': 'url(' + img6 + ')' }">
              <!-- <img class="dy" src="../../static/images/dy.png" alt="" /> -->
              <div class="title">
                <h6>管理会计</h6>
                <nuxt-link to="/glkj" class="more">查看更多</nuxt-link>
              </div>
              <div class="info">
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>新时代的管理会计如何承担新使命</span>
                </p>
                <p>
                  <img src="../../static/images/way/check.png" alt="" />
                  <span>管理会计基础价值</span>
                </p>
              </div>
              <div class="li-base">
                <el-radio-group v-model="glkjRadio">
                  <el-radio label="1"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">6.8</span>/月</el-radio
                  >
                  <el-radio label="2"
                    ><span class="money-icon">￥</span
                    ><span class="money-num">68</span>/年</el-radio
                  >
                </el-radio-group>
                <button @click="buyFn()">立即订阅</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="advert">
      <img src="../../static/images/way/vip-advert.png" alt="" />
    </div>
    <div class="module">
      <div class="module-title">
        <h2>“阅享”杂志订阅</h2>
        <p>
          《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章，专注数字技术驱动业财融合、企业转型的发展趋势，用案例启迪管理智慧。为您的企业管理、转型提供深刻、全面的借鉴与指导。
        </p>
      </div>
      <div class="introduce">
        <dl class="common-dl">
          <dt>
            <img src="../../static/images/way/book1.png" alt="" />
          </dt>
          <dd>
            <h6>杂志订阅</h6>
            <p>
              CMAS文章阅读，有关注行业发展的热点资讯、有企业管理升级的工具、方法推荐，有行业专家观点看法，有成功企业的精益实践案例分享。完整的企业管理转型内容体系，助您读懂新形式下的企业管理。文章可统一购买，畅阅各模块及专题文章，也可通过各模块、专题单独订阅。
            </p>
            <div class="base">
              <div class="all-year">￥<span class="price">168</span>/年</div>
              <button @click="buyFn()">立即订阅</button>
            </div>
          </dd>
        </dl>
      </div>
      <div class="magazine" data-aos="fade-up">
        <div class="magazine-title">
          <h2>管理会计研究</h2>
          <div class="more-btn">
            <span>查看更多</span>
            <img src="../../static/images/arrows-left.png" alt="" />
          </div>
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
        <div class="magazine-title">
          <h2>其他杂志</h2>
          <div class="more-btn">
            <span>查看更多</span>
            <img src="../../static/images/arrows-left.png" alt="" />
          </div>
        </div>
        <div class="magazine-gather">
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
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
export default {
  data() {
    return {
      radio: "1",
      xalRadio: "1",
      zffRadio: "1",
      jdkRadio: "1",
      szhRadio: "1",
      glkjRadio: "1",
      img1: require("@/static/images/way/al.png"),
      img2: require("@/static/images/way/way.png"),
      img3: require("@/static/images/way/zx.png"),
      img4: require("@/static/images/way/dk.png"),
      img5: require("@/static/images/way/szh.png"),
      img6: require("@/static/images/way/kj.png"),
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {
    AOS.init({
      once: false,
    });
  },
  methods: {
    //点击立即订阅
    buyFn() {
      this.$router.push({
        name: "by-pay",
      });
    },
    //点击杂志每一个
    details(id) {
      this.$router.push({
        path: `/zz/${id}`,
        // name: "catalogue-zz",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.content-container {
  padding: 23px 0px 40px;
  .banner {
    width: 1100px;
    height: 392px;
    background-image: url(@/static/images/way/zz-bg.png);
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
    margin-bottom: 14px;
    .banner-main {
      padding-top: 52px;
      .logo {
        width: 55px;
        height: 14px;
        font-size: 14px;
        font-family: ArialMT, ArialMT-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 14px;
        margin-left: 98px;
        position: relative;
        &:after {
          content: "";
          display: inline-block;
          width: 72px;
          height: 3px;
          background: #0a0803;
          position: absolute;
          bottom: -8px;
          left: 2px;
        }
      }
      .book-icon {
        width: 88px;
        height: 25px;
        margin: 38px 0px 7px 102px;
      }
      h2 {
        font-size: 38px;
        font-weight: 600;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 40px;
        margin-left: 81px;
        letter-spacing: 1px;
      }
      p {
        width: 530px;
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        margin: 23px 0px 60px 97px;
      }
      .send {
        width: 122px;
        height: 38px;
        line-height: 37px;
        background: #ffffff;
        border-radius: 19px;
        display: flex;
        justify-content: center;
        margin-left: 94px;
        span {
          font-size: 16px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
        }
        img {
          width: 16px;
          height: 16px;
          margin-top: 12px;
        }
      }
    }
  }
  .module {
    .common-dl {
      dt {
        height: 332px;
        img {
          border-radius: 0px;
        }
      }
      dd {
        background: linear-gradient(
          324deg,
          #ff7d3b 0%,
          #f28a51 49%,
          #f34250 130%
        );
        border-radius: 0px 0px 6px 6px;
        padding: 35px 28px 22px;
        h6 {
          font-size: 24px;
          font-weight: 500;
          color: #ffffff;
          line-height: 24px;
        }
        p {
          height: 94px;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          padding: 22px 0px 10px;
          opacity: 0.9;
        }
        /deep/.el-radio__inner {
          width: 14px;
          height: 14px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          background-color: transparent;
        }
        /deep/.el-radio__inner::after {
          width: 6px;
          height: 6px;
        }
        /deep/.el-radio__label {
          padding-left: 6px;
        }
        /deep/.el-radio__input {
          vertical-align: bottom;
        }
        span {
          color: #ffffff;
          font-weight: 400;
        }
        .all-year {
          color: #ffffff;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
        }
        .price {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 1.2px;
        }
        button {
          width: 88px;
          height: 32px;
          border-radius: 2px;
          background: #ffffff;
          font-size: 14px;
          font-weight: 400;
          color: #ed6d38;
          line-height: 22px;
          border: none;
          margin-top: 37px;
          display: block;
        }
      }
    }
    .module-title {
      padding: 72px 0px 72px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        padding-bottom: 30px;
      }
      p {
        width: 810px;
        font-size: 13px;
        font-weight: 400;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        line-height: 20px;
        margin: 0 auto;
      }
    }
    .article {
      display: flex;
      .article-l {
        min-width: 398px;
        .common-dl {
          dt {
            height: 332px;
            img {
              border-radius: 0px;
            }
          }
        }
      }
      .article-r {
        ul {
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          li {
            width: 284px;
            height: 154px;
            box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
            background-size: cover;
            background-position: top left;
            background-repeat: no-repeat;
            margin: 0px 0px 16px 16px;
            padding: 25px 18px 20px 28px;
            border-radius: 6px;
            position: relative;
            .dy {
              width: 44px;
              height: 44px;
              position: absolute;
              top: -6px;
              right: -5px;
            }
            .title {
              display: flex;
              justify-content: space-between;
              h6 {
                font-size: 20px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.85);
                line-height: 24px;
              }
              .more {
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.45);
                display: none;
              }
            }
            .info {
              height: 84px;
              margin: 10px 0px 5px;
              p {
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.45);
                line-height: 28px;
                img {
                  width: 12px;
                  height: 9px;
                }
              }
            }

            .li-base {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .el-radio-group {
                display: flex;
                align-items: center;
              }
              .el-radio {
                margin-right: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              /deep/.el-radio__inner {
                width: 14px;
                height: 14px;
                border: 2px solid #ed6d38;
                border-radius: 50%;
                background-color: transparent;
              }
              /deep/.el-radio__inner::after {
                width: 6px;
                height: 6px;
                background: #ed6d38;
                border-radius: 50%;
              }
              /deep/.el-radio__label {
                padding-left: 6px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.85);
                line-height: 22px;
              }

              .money-icon {
                color: #ed6d38;
              }
              .money-num {
                color: #ed6d38;
                font-size: 20px;
                font-weight: 500;
                margin-left: -3px;
              }
              .price {
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.85);
                .icon {
                  color: #ed6d38;
                }
                .num {
                  font-size: 20px;
                  font-weight: 500;
                  color: #ed6d38;
                  line-height: 22px;
                  letter-spacing: 1.33px;
                  margin-left: -3px;
                  vertical-align: bottom;
                }
              }
              button {
                width: 88px;
                height: 32px;
                background: #ed6d38;
                border-radius: 2px;
                border: none;
                font-size: 14px;
                font-weight: 400;
                color: #ffffff;
                line-height: 22px;
              }
            }
            &:hover .more {
              display: block;
            }
          }
        }
      }
    }
    .introduce {
      margin-bottom: 74px;
      .common-dl {
        height: 250px;
        display: flex;
        dt {
          width: 504px;
          height: 100%;
          img {
            border-radius: 6px 0px 0px 6px;
          }
        }
        dd {
          background: linear-gradient(
            268deg,
            #ff7d3b 0%,
            #f28a51 82%,
            #f34250 140%
          );
          border-radius: 0px 6px 6px 0px;
          p {
            width: 551px;
          }
          .base {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
          }
          button {
            margin-top: 0px;
            display: initial;
          }
        }
      }
    }
    .magazine {
      .magazine-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          font-size: 24px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
        }
        .more-btn {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
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
          margin: 46px 52px 68px 0px;
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
  .advert {
    height: 86px;
    margin-top: 19px;
  }
}
</style>
