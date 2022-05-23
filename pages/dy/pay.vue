<template>
  <div class="content-container">
    <div class="pay-container banxin">
      <div class="pay-main">
        <div class="pay-main-l">
          <div class="pay-main-l-l" @click="success()">
            <img
              class="qrcode"
              src="https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
              alt=""
            />
            <div class="info">
              <img src="../../static/images/weixin.png" alt="" />
              <span>扫码支付</span>
            </div>
          </div>
          <div class="pay-main-l-r">
            <h6>请扫码订阅</h6>
            <div class="tip">扫码直接订阅完成付费，可订阅学案例</div>
            <div class="vip">
              <p>升级会员订阅价格更优惠详看下侧订阅须</p>
              <img src="../../static/images/down.png" alt="" />
            </div>
            <div class="price">
              <span>实付：</span>
              <span class="num">58</span>
              <span class="yuan">元</span>
            </div>
          </div>
        </div>
        <div class="pay-main-r">
          <dl>
            <dt>
              <img src="../../static/images/way/zz.png" alt="" />
              <div class="point">新书</div>
            </dt>
            <dd>2022年第一期｜总第567期</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="notice">
      <div class="title">订阅须知</div>
      <div class="dy-main">
        <ul>
          <li>
            <h6>1、订阅功能：</h6>
            <p>
              点击马上订阅，立即付款，即可阅读订购内容，直接付费用户后续消费不享受会员折扣优惠，也无法参与会员等级升级
            </p>
          </li>
          <li>
            <h6>2、您的权益：</h6>
            <p>
              您付费后即可开通相应内容阅读权限，并享受关于该主题后期内容的扩充与更新，享受定期给经典内容推送服务；
            </p>
          </li>
          <li>
            <h6>3、订阅周期：</h6>
            <p>
              订阅时间从付款之日起开始计算，如购买时间为2021年11月23日下单，购买月度服务权益有效周期为：2021.11.23-2021.12.22；购买年度有效周期为：2021.11.23-2022.11.22；
            </p>
          </li>
          <li>
            <h6>4、付款方式：</h6>
            <p>
              网站在线支付支持微信、支付宝扫码支付或者已经充值的会员可以充值抵扣，已经注册会员也可以积累金币抵扣；
            </p>
          </li>
          <li>
            <h6>5、开票：</h6>
            <p>
              以实际消费金额为准，累计消费300元以上，CMAS提供增值税普通发票（电子）、增值税专用发票，请提供准确的开票信息；
            </p>
          </li>
          <li>
            <h6>6、关于退款：</h6>
            <p>
              文章为付款业务，付款成功后暂不支持线上退款，如果您有退款的需求请联系在线客服或拨打400电话进行沟通，将会有专门人员进行处理！
            </p>
          </li>
          <li>
            <h6>7、会员优惠政策：</h6>
            <p>升级会员可享受会员折扣优惠。</p>
          </li>
        </ul>
        <table border="1" cellspacing="0" class="table">
          <thead class="title">
            <tr>
              <th>权益详情</th>
              <th>商品名称</th>
              <th>童生</th>
              <th>秀才</th>
              <th>举人</th>
              <th>贡士</th>
              <th>进士</th>
              <th>探花</th>
              <th>榜眼</th>
              <th>状元</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="one">文章订阅</td>
              <td class="left">年度订阅参与会员折扣</td>
              <td>168元</td>
              <td>168元</td>
              <td>168元</td>
              <td>152元</td>
              <td>134元</td>
              <td>118元</td>
              <td>84元</td>
              <td>84元</td>
            </tr>
            <tr>
              <td style="vertical-align: middle" class="one" rowspan="4">
                模块订阅
              </td>
              <td class="left">学案例</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">找方法</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">见大咖</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">淘咨讯</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td style="vertical-align: middle" class="one" rowspan="2">
                专题订阅
              </td>
              <td class="left">数字化转型专题</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
            <tr>
              <td class="left">管理会计专题</td>
              <td>58元</td>
              <td>58元</td>
              <td>58元</td>
              <td>52元</td>
              <td>46元</td>
              <td>41元</td>
              <td>29元</td>
              <td>29元</td>
            </tr>
          </tbody>
        </table>
        <div class="upgrade">
          <span>升级会员</span>
          <img src="../../static/images/arrows-left.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //成功以后跳转页面
    success(){
      this.$router.push({
        name: "by-success",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
      });
    }
  },
};
</script>
<style lang="less" scoped>
.content-container {
  padding: 23px 0px 40px;
  height: 1310px;
  background: #f7f8fa;
  border-radius: 6px;
  .pay-container {
    height: 264px;
    background: #ffffff;
    border-radius: 8px;
    .pay-main {
      padding: 34px 52px 34px 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .pay-main-l {
        display: flex;
        .pay-main-l-l {
          width: 168px;
          height: 194px;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .qrcode {
            width: 138px;
            height: 138px;
            border-radius: 0;
            margin: 14px 0px 8px;
          }
          .info {
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
            }
            span {
              font-size: 16px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.65);
              margin-left: 6px;
            }
          }
        }
        .pay-main-l-r {
          margin-left: 30px;
          h6 {
            font-size: 20px;
            font-weight: 500;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
            margin-top: 14px;
          }
          .tip {
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: #ed6d38;
            line-height: 24px;
            padding: 12px 0px;
          }
          .vip {
            width: 270px;
            height: 20px;
            background: #f2f4f5;
            border: 1px solid #e4e6e7;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              font-size: 13px;
              font-weight: 400;
              text-align: left;
              color: rgba(0, 0, 0, 0.85);
              line-height: 13px;
            }
            img {
              width: 8px;
              height: 10px;
              margin: 2px 0px 0px 5px;
            }
          }
          .price {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 24px;
            margin-top: 30px;
            .num {
              font-size: 36px;
              font-weight: 600;
              color: #ed6d38;
              line-height: 36px;
              vertical-align: bottom;
            }
            .yuan {
              color: #ed6d38;
            }
          }
        }
      }
      .pay-main-r {
        dl {
          dt {
            position: relative;
            width: 305px;
            height: 146px;
          }
          dd {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            padding-top: 16px;
            margin-left: 12px;
          }
        }
      }
    }
  }
  .notice {
    width: 1100px;
    height: 1028px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .title {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: left;
    color: #ed6d38;
    line-height: 24px;
    padding: 26px 45px 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  .dy-main {
    margin: 20px 0px 0px 45px;
    .table {
      width: 804px;
      height: 378px;
      text-align: center;
      border: 1px solid #e8e8e8;

      .title {
        height: 53px;
        line-height: 53px;
        text-align: center;
        background: #fafafa;
        border: 1px solid #e8e8e8;
        tr th {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.85);
          border: 1px solid #e8e8e8;
          &:nth-child(2) {
            text-align: left;
            padding-left: 20px;
            width: 177px;
          }
        }
      }
      tbody td {
        height: 47px;
        line-height: 47px;
        border: 1px solid #e8e8e8;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
      .left {
        text-align: left;
        padding-left: 20px;
        width: 177px;
      }
      .one {
        font-weight: 500;
        color: #ed6d38;
      }
    }
    ul {
      font-size: 13px;
      font-weight: 400;
      text-align: left;
      color: rgba(0, 0, 0, 0.85);
      line-height: 24px;
      padding-bottom: 12px;
      li {
        margin-bottom: 15px;
        p {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }
    .upgrade {
      padding-top: 25px;
      display: flex;
      align-items: center;
      span {
        font-size: 18px;
        font-weight: 600;
        color: #ed6d38;
      }
      img {
        width: 18px;
        height: 10px;
        margin-left: 7px;
      }
    }
  }
}
</style>
