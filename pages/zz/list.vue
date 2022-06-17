<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container banxin">
      <div class="banner">
        <img src="@/static/images/ad-banner.png" alt="" />
      </div>
      <div class="magazine">
        <div class="magazine-title">
          <h2>2022年</h2>
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
        <div class="magazine-title" data-aos="fade-up">
          <h2>2021年</h2>
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
        <div class="magazine-title" data-aos="fade-up">
          <h2>2020年</h2>
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
      </div>
    </div>
  </div>
</template>
<script>
// import AOS from "aos";
export default {
  data() {
    return {};
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // data-aos="fade-up"
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {
    // AOS.init({
    //   once: false,
    // });
  },
  methods: {

    //点击杂志每一个
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
  },
};
</script>
<style lang="less" scoped>
.content-container {
  padding: 23px 0px 40px;
  .banner {
    height: 231px;
  }
  .magazine {
    background: #ffffff;
    border-radius: 6px;
    padding: 50px 42px 0px;
    .magazine-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 24px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
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
