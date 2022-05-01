<template>
  <div class="footer-container">
    <div class="footer-top">
      <div class="footerD">
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
    </div>
    <div class="footer-base">
      <div class="banxin footerB">
        <p>
          <a href="" class="flsm">法律声明</a
          ><a href="" class="flsm">隐私政策</a
          >北京元年诺亚舟咨询有限公司版权所有<a
            style="margin-left: 10px"
            href=""
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
</template>
<style lang="less" scoped>
.footer-container {
  height: 404px;
  background: #353535;
  .footer-top {
    height: 295px;
    .footerD {
      padding-top: 57px;
      width: 1200px;
      margin: 0 auto;
      .footerLeft ul {
        float: left;
        margin-right: 170px;
        li:nth-child(1) a {
          color: #ffffff;
          font-size: 18px;
          font-weight: 500;
          line-height: 28px;
          margin-bottom: 16px;
          display: block;
          font-family: PingFangSC, PingFangSC-Medium;
        }
        li a {
          font-size: 13px;
          font-weight: 400;
          line-height: 30px;
          color: #ffffff;
          font-family: PingFangSC, PingFangSC-Regular;
        }
      }
      .footerRight {
        width: 129px;
        height: 129px;
        float: right;
        dl {
          width: 100%;
          text-align: center;
          dt img {
            width: 100%;
            height: 100%;
          }
          dd {
            font-size: 13px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #ffffff;
            line-height: 30px;
          }
        }
      }
    }
  }
  .footer-base {
    border-top: 1px solid #535353;
    .footerB {
      text-align: center;
      padding-top: 33px;
      p {
        font-size: 13px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;

        .flsm {
          margin-right: 10px;
          color: #ffffff;
        }
        .record {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
