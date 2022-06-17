<template>
  <div class="login-wrapper">
    <div class="login-main">
      <nuxt-link to="/">
        <img class="logo" src="../static/images/logo.png" alt="" />
      </nuxt-link>
      <div class="form-container">
        <!-- 手机号绑定 -->
        <div class="register tel-register" v-if="bindType == 0">
          <div class="title">
            <h6>绑定手机号</h6>
            <nuxt-link to="/" class="title-left">
              <span>返回首页</span>
              <img src="../static/images/login/arrow.png" alt="" />
            </nuxt-link>
          </div>
          <el-form
            class="register-form"
            ref="registerForm"
            :model="registerParams"
            :rules="registerRules"
          >
            <el-form-item prop="mobile">
              <el-input
                v-model="registerParams.mobile"
                :maxlength="11"
                placeholder="请输入手机号"
                οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                :maxlength="6"
                v-model="registerParams.code"
                placeholder="输入验证码"
                style="width: 258px"
              >
              </el-input>
              <button
                class="code-btn"
                v-show="sendState == 0"
                type="button"
                @click="registerCode()"
              >
                获取验证码
              </button>
              <button class="code-btn" v-show="sendState == 1" type="button">
                发送中…
              </button>
              <button class="code-btn" v-show="sendState == 2" type="button">
                {{ this.countDown.count }}秒后失效
              </button>
              <button
                class="code-btn"
                v-show="sendState == 3"
                type="button"
                @click="registerCode()"
              >
                重新获取
              </button>
            </el-form-item>
          </el-form>
          <div class="operation register-top">
            <el-checkbox v-model="registerParams.agreement"
              >我已阅读并同意<span class="agreement"
                >《服务协议》</span
              ></el-checkbox
            >
          </div>
          <button class="login-btn" @click="registerUser()">注册</button>
          <nuxt-link to="/login" class="text">使用已有帐户登录</nuxt-link>
        </div>
        <!-- 绑定完成动画 -->
        <div class="animation" v-else-if="bindType == 1">
          <img src="../static/images/animation.gif" alt="" />
        </div>
        <!-- 动画结束提示语 -->
        <div class="bind-tip" v-else-if="bindType == 2">
          <img src="../static/images/bind-success.png" alt="" />
          <h5>恭喜您注册成功！</h5>
          <p>即将返回首页～</p>
        </div>
      </div>
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
import { notNeedlogin } from "../request/api";
import { mapMutations } from "vuex";
import md5 from "js-md5";
import config from "../config/index";
export default {
  layout: "not",
  data() {
    const mobile = (rule, value, callback) => {
      if (
        /^(13[0-9]|14[0-9]|15[0-9]|16[6]|18[0-9]|19[6,9]|17[0-9])\d{8}$/i.test(
          value
        ) == false
      ) {
        callback(new Error("手机号格式错误!"));
      } else {
        //校验通过
        callback();
      }
    };
    return {
      bindType: 0, //0待绑定 1绑定完成动画 2动画结束提示语
      checked: false,
      countDown: {
        show: true,
        count: "",
        timer: null,
      }, //倒计时
      sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      // 注册
      registerParams: {
        mobile: "",
        code: "",
        agreement: false,
      },
      // 注册验证规则
      registerRules: {
        mobile: [
          {
            required: true,
            message: "请输入手机号！",
            trigger: "blur",
          },
          { min: 11, validator: mobile, trigger: "blur" },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: "blur",
          },
          {
            type: "string",
            min: 4,
            max: 6,
            message: "请输入正确的验证码！",
            trigger: "blur",
          },
        ],
      },
      // wxcode: this.$route.query.wxcode, //从url获取code
    };
  },
  mounted() {
    // console.log(location.href, "location.href");
    console.log(this.$route.query.wxCode, "33");
  },
  methods: {
    ...mapMutations(["setToken", "setUserInfo"]),
    // 注册验证码
    registerCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      _this.$refs.registerForm.validateField("mobile", (error) => {
        if (!error) {
          _this.CaptchaAppId();
        } else {
          _this.$message.error(error);
        }
      });
    },
    //获取图形验证码CaptchaAppId
    CaptchaAppId() {
      let _this = this;
      let timestamp = Date.parse(new Date());
      let sign = md5(timestamp + _this.$store.state.secretKey);
      notNeedlogin(_this.$axios, {
        sign: sign,
        timespan: timestamp,
        className: "SendCode",
        classMethod: "getCaptchaAppId",
      }).then((res) => {
        if (res.bol) {
          _this.verificationCode(res.data);
        } else {
          _this.$message.error(res.msg);
        }
      });
    },

    //手机号注册腾讯滑块验证
    verificationCode(val) {
      let _this = this;
      // let langtion = 'zh-hk';
      let captchaId = val.toString(); //腾讯滑块验证码appid
      //生成一个滑块验证码对象
      var captcha = new TencentCaptcha(captchaId, function (res) {
        if (res.ret === 0) {
          // 记得把验证成功的票据和随机字符带到自己接口中去腾讯验证票据的真实性
          _this.getRegisterCode(res.ticket, res.randstr);
        } else {
          return false;
        }
      });
      //  滑块多语言调用
      // captcha.initOpts.forceLang = langtion;
      captcha.langFun();
      // 滑块显示
      captcha.show();
    },
    //注册获取验证码
    getRegisterCode(ticket, randstr) {
      let _this = this;
      _this.sendState = 1;
      let timestamp = Date.parse(new Date());
      let sign = md5(timestamp + _this.$store.state.secretKey);
      notNeedlogin(_this.$axios, {
        sign: sign,
        timespan: timestamp,
        data: {
          phone: _this.registerParams.mobile,
          Ticket: ticket,
          Randstr: randstr,
        },
        className: "SendCode",
        classMethod: "sendCode",
      }).then((res) => {
        if (res.bol) {
          _this.sendState = 2;
          _this.countDownFn();
        } else {
          _this.sendState = 3;
          _this.$message.error(res.msg);
        }
      });
    },
    // 注册
    registerUser() {
      let _this = this;
      _this.$refs.registerForm.validate((valid) => {
        if (valid) {
          if (_this.registerParams.agreement == false) {
            return _this.$message.warning("请阅读并同意服务协议");
          }
          let timestamp = Date.parse(new Date());
          let sign = md5(timestamp + _this.$store.state.secretKey);
          notNeedlogin(_this.$axios, {
            sign: sign,
            timespan: timestamp,
            data: {
              phone: _this.registerParams.mobile,
              code: _this.registerParams.code,
              wxCode: _this.$route.query.wxCode,
            },
            className: "UserController",
            classMethod: "bindingPhone",
          }).then((res) => {
            console.log(res, "scrollToTop: true");
            if (res.bol) {
              _this.bindType = 1;
              _this.setToken(res.data.token);
              _this.$cookies.set("token", res.data.token, config.cookieConfig);
              _this.setUserInfo(res.data);
              _this.$cookies.set("userInfo", res.data, config.cookieConfig);
              _this.$message.success(res.msg);
              setTimeout(() => {
                _this.bindType = 2;
                // _this.$router.push("/");
              }, 500);
              setTimeout(() => {
                _this.$router.push("/");
              }, 1000);
            } else {
              _this.$message.error(res.msg);
            }
          });
        } else {
        }
      });
    },
    // 倒计时
    countDownFn() {
      let _this = this;
      const TIME_COUNT = 60;
      _this.countDown.count = TIME_COUNT;
      _this.countDown.show = false;
      _this.countDown.timer = setInterval(() => {
        if (_this.countDown.count > 0 && _this.countDown.count <= TIME_COUNT) {
          _this.countDown.count--;
        } else {
          _this.countDown.show = true;
          clearInterval(_this.countDown.timer);
          this.sendState = 3;
          _this.countDown.timer = null;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
  .login-main {
    padding: 40px 110px 0px 110px;
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
    position: relative;
    bottom: 20px;
    padding-top: 74px;
  }
}
.form-container {
  width: 368px;
  height: 430px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
  margin: 0 auto;
  margin-top: 60px;
  padding: 70px 26px 0px;
  position: relative;

  /deep/.el-form-item {
    margin-bottom: 36px;
  }
  /deep/.el-form-item__error {
    padding-top: 10px;
  }

  /deep/.el-input.is-active .el-input__inner,
   /deep/.el-input__inner:focus {
    border-color: #ed6d38 !important;
  }

  /deep/.el-checkbox__input.is-checked .el-checkbox__inner,
  /deep/.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    border-color: #ed6d38;
    background: #ed6d38;
  }
  /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
    color: rgba(0, 0, 0, 0.65);
  }
  /deep/.el-checkbox__inner:hover,
  /deep/.el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #ed6d38;
  }
  /deep/.el-input__prefix {
    left: 10px;
  }

  .operation {
    padding-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #ed6d38 !important;
    line-height: 24px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  .login-btn {
    width: 368px;
    height: 40px;
    background: #ed6d38;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    margin: 15px 0px 20px;
  }
  .code-btn {
    width: 102px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    color: #ed6d38;
    line-height: 22px;
    margin-left: 4px;
  }
  .register {
    .title {
      display: flex;
      justify-content: space-between;
      h6 {
        font-size: 18px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 20px;
      }
      .title-left {
        span {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
          line-height: 14px;
        }
        img {
          width: 12px;
          height: 12px;
          border-radius: 0px;
        }
      }
    }
    .register-form {
      padding-top: 44px;
    }
    .agreement {
      color: #ea3a3a;
    }
    /deep/.el-select .el-input {
      width: 80px;
    }
    /deep/.input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    /deep/.el-select .el-input.is-focus .el-input__inner,
    /deep/.el-select .el-input__inner:focus,
    /deep/.el-select .el-input__inner:hover {
      border-color: transparent !important;
    }
  }
}
.animation {
  margin-top: 70px;
}
.bind-tip {
  margin-top: 70px;
  img {
    width: 60px;
    height: 60px;
    display: flex;
    margin: 0 auto;
  }
  h5 {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    line-height: 20px;
    padding: 20px 0px 18px 0px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    line-height: 14px;
  }
}
</style>
