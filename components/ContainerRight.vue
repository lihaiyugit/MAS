<template>
  <div class="content-container-main-right">
    <!-- 热门推荐 -->
    <HotRecommend />
    <div class="selections">
      <div class="title">
        <h3>活动</h3>
        <nuxt-link to="/activity" class="more">查看更多</nuxt-link>
      </div>
      <div class="selections-main">
        <a href="https://www.chinamas.cn/hd/17">
          <dl>
            <dt>
              <img
                src="https://www.chinamas.cn/upload/2021/03/26/16167267228744.jpg"
                alt=""
              />
              <div class="point">最新活动</div>
            </dt>
            <dd>数字化企业与管理会计体系转型研讨会</dd>
          </dl>
        </a>
        <a href="https://www.chinamas.cn/hd/16">
          <dl>
            <dt>
              <img
                src="https://www.chinamas.cn/upload/2021/03/15/16157866922673.15.jpg"
                alt=""
              />
            </dt>
            <dd>数字化赋能产业互联</dd>
          </dl>
        </a>
        <a href="https://www.chinamas.cn/hd/15">
          <dl>
            <dt>
              <img
                src="https://www.chinamas.cn/upload/2020/12/18/16082829422449.jpg"
                alt=""
              />
            </dt>
            <dd>2021中国智慧财务国际峰会将于上海召开</dd>
          </dl>
        </a>
      </div>
    </div>
    <!-- 杂志模块 -->
    <MagazineModule />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
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
    margin: 22px 0px;
    width: 306px;
    background: #ffffff;
    border-radius: 6px;
    padding: 20px;
    .selections-main {
      a {
        display: block;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 18px;
        &:last-child {
          margin-bottom: 4px;
        }
      }
      a:nth-child(1) {
        padding-top: 20px;
        margin-bottom: 26px;
        dl {
          position: relative;
          dt {
            img {
              width: 305px;
              height: 183px;
              background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 48%,
                #000000 100%
              );
            }
          }
          dd {
            position: absolute;
            bottom: 11px;
            left: 20px;
            color: #fff;
            width: 267px;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
      a:not(:first-child) dl dt {
        display: none;
      }
    }
  }
}
</style>
