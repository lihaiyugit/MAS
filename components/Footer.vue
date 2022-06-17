<template>
  <div class="footer-container">
    <div class="footer-main" :style="'width:' + $store.state.headerWidth">
      <div class="footer-top">
        <div class="footerLeft">
          <ul>
            <li><a>学术支持单位</a></li>
            <li><a>中国人民大学管理会计研究中心</a></li>
            <li><a>上海财经大学管理会计项目研究中心</a></li>
            <li><a>西南财经大学中国管理会计研究中心</a></li>
            <li><a>江苏管理会计研究中心</a></li>
            <li><a>元年管理会计研究院</a></li>
          </ul>
          <ul>
            <li><a>战略合作单位</a></li>
            <li><a>中国医药会计学会</a></li>
            <li><a>上海市成本研究会</a></li>
          </ul>
          <ul>
            <li>
              <a>关于MAS</a>
            </li>
            <li><a href="">关于我们</a></li>
            <li><a>联系方式：400-819-1255</a></li>
          </ul>
        </div>
        <div class="footerRight">
          <dl>
            <dt>
              <img
                src="https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
                alt=""
              />
            </dt>
            <dd>官方微信</dd>
          </dl>
        </div>
      </div>
      <div class="footer-base">
        <div class="footerB">
          <p>
            <a href="" class="flsm">法律声明</a
            ><a href="" class="flsm">隐私政策</a
            >北京元年诺亚舟咨询有限公司版权所有<a
              style="margin-left: 10px"
              class="record flsm"
              >京ICP备17056011号-2</a
            >京公网安备11010802027279
          </p>
          <p class="paragraph">
            <span>地址：北京市海淀区知春路68号院1号楼三层301-12</span
            ><span style="margin-left: 10px">电话：010-82252999</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { notNeedlogin } from "@/request/api";
import md5 from "js-md5";
export default {
  data() {
    return {};
  },
  async fetch() {
    let timestamp = Date.parse(new Date());
    let sign = md5(timestamp + this.$store.state.secretKey);
    let res = await notNeedlogin(this.$axios, {
      sign: sign,
      timespan: timestamp,
      className: "NavigationController",
      classMethod: "getBottomNavigation",
    });
    // console.log(res,'res-底部导航')
    // if (res.bol) {
    // return this.meanList = res.data;
    // }
  },
};
</script>
<style lang="less" scoped>
.footer-container {
  height: 327px;
  background: #f2f3f5;
  .footer-main {
    margin: 0 auto;
    .footer-top {
      padding-top: 47px;
      display: flex;
      justify-content: space-between;
      .footerLeft {
        display: flex;
      }
      .footerLeft ul {
        margin-right: 124px;
        li:nth-child(1) a {
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 28px;
          margin-bottom: 16px;
          display: inline-block;
        }
        li a {
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.4);
          line-height: 28px;
        }
      }
      .footerRight {
        width: 129px;
        height: 129px;
        dl {
          width: 100%;
          text-align: center;
          dt img {
            width: 100%;
            height: 100%;
          }
          dd {
            font-size: 13px;
            font-weight: 400;
            color: rgba(0,0,0,0.65);
            line-height: 30px;
          }
        }
      }
    }
    .footer-base {
      padding-top: 36px;
      .footerB {
        margin: 0 auto;
        p {
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.4);
          line-height: 22px;
          text-align: center;
          .flsm {
            margin-right: 10px;
            color: rgba(0, 0, 0, 0.4);
          }
          .record {
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
  }
}
</style>
