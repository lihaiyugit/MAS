<template>
  <div class="content-container banxin">
    <div class="pay-success">
      <div class="success">
        <img src="../../static/images/success.png" alt="" />
        <span class="text">支付成功！</span>
      </div>
      <p>您已完成【学案例】模块订阅，可以前往<span>个人中心</span>查看！</p>
      <p class="item-p"><span>3s</span>后跳转至学案例</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.pay-success {
  margin: 0 auto;
  .success {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 102px;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      font-size: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.55);
      line-height: 25px;
      margin-left: 20px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.55);
    line-height: 22px;
    text-align: center;
    margin-top: 30px;
    span {
      color: #ed6d38;
      line-height: 25px;
    }
  }
  .item-p{
    margin-top: 20px;
  }
}
</style>
