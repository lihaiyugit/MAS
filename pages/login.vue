<template>
  <div class="login-wrapper">
    <!-- <h1>登录</h1>
    <input type="text" name="" v-model="userName" />
    <input type="text" name="" v-model="userPwd" />
    <button @click="login">登录</button> -->
    <!-- <img src="../static/images/login/login-bg.png" alt=""> -->
    <div class="login-main">
      <nuxt-link to="/">
        <img class="logo" src="../static/images/logo.png" alt="" />
      </nuxt-link>
      <LoginBox />
    </div>
    <div class="footer-info">
      <p>
        法律声明隐私政策北京元年诺亚舟咨询有限公司版权所有京ICP备17056011号-2京公网安备11010802027279
      </p>
      <p>地址：北京市海淀区知春路68号院1号楼三层301-12电话：010-82252999</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: "not",
  loading: false,
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   console.log()
  // },
  async asyncData({ $axios,route}) {
    // let res = await $axios.get("/api/list");
    // console.log($axios, route,"=====");
    // return { a: res.data.a};
  },
};
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background-image: url(../static/images/login/login-bg.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .login-main {
    padding: 40px 120px 0px 110px;
    display: flex;
    justify-content: space-between;
    .logo {
      width: 77px;
      height: 32px;
      border-radius: 0px;
    }
  }
  .footer-info {
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
    margin: 0 auto;
    position: relative;
    bottom: 20px;
    padding-top: 85px;
  }
}
</style>
