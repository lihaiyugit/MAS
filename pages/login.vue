<template>
  <div class="login-wrapper">
    <!-- <h1>登录</h1>
    <input type="text" name="" v-model="userName" />
    <input type="text" name="" v-model="userPwd" />
    <button @click="login">登录</button> -->
    <!-- <img src="../static/images/login/login-bg.png" alt=""> -->
    <div class="login-main">
      <img class="logo" src="../static/images/logo.png" alt="" />
      <div class="form-container">
        <!-- 密码、验证码登录 -->
        <div class="login" v-show="loginType == 0 || loginType == 1">
          <div class="wxCode-box">
            <div class="btn-wx-tips"><span>微信扫码登录</span></div>
            <div class="picture-tag" @click="changeLogin('2')">
              <img
                src="../static/images/login/wx-code.png"
                alt="微信扫码登录图标"
                class="picture-icon"
              />
            </div>
          </div>
          <ul class="tabs">
            <li
              @click="changeLogin('0')"
              :class="loginType == 0 ? 'active' : ''"
            >
              密码登录
            </li>
            <li
              @click="changeLogin('1')"
              :class="loginType == 1 ? 'active' : ''"
            >
              验证码登录
            </li>
          </ul>
          <!-- 密码登录 -->
          <div class="user-box" v-show="loginType == 0">
            <el-form
              ref="loginFormPwd"
              :model="loginFormPwdData"
              :rules="loginFormPwd"
              class="ruleForm"
            >
              <el-form-item prop="mobile">
                <el-input
                  type="text"
                  v-model="loginFormPwdData.mobile"
                  maxlength="11"
                  placeholder="手机号/账号"
                  οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
                >
                  <span slot="prefix" class="icon user-icon"></span>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginFormPwdData.password"
                  placeholder="密码"
                >
                  <span slot="prefix" class="icon lock-icon"></span>
                </el-input>
              </el-form-item>
            </el-form>
            <div class="operation">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <span class="text" @click="changeLogin('5')">忘记密码</span>
            </div>
            <button class="login-btn" @click="loginPwd('loginFormPwd')">
              登 录
            </button>
            <div class="text" @click="changeLogin('3')">注册账户</div>
          </div>
          <!-- 验证码登录 -->
          <div class="code-box" v-show="loginType == 1">
            <el-form
              class="ruleForm"
              ref="loginFormCode"
              :model="loginFormCodeData"
              :rules="loginFormCode"
            >
              <el-form-item prop="mobile">
                <el-input
                  v-model="loginFormCodeData.mobile"
                  maxlength="11"
                  placeholder="手机号"
                  οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
                >
                  <span slot="prefix" class="icon mobile-icon"></span>
                </el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input
                  v-model="loginFormCodeData.code"
                  placeholder="验证码"
                  :maxlength="4"
                  style="width: 258px"
                >
                  <span slot="prefix" class="icon mail-icon"></span>
                  <img
                    slot="suffix"
                    class="icon"
                    src="../static/images/login/Shape.png"
                    alt=""
                  />
                </el-input>
                <button
                  class="code-btn"
                  v-show="sendState == 0"
                  type="button"
                  @click="loginGetCode()"
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
                  @click="loginGetCode()"
                >
                  重新获取
                </button>
              </el-form-item>
            </el-form>
            <div class="operation">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <span class="text" @click="changeLogin('5')">忘记密码</span>
            </div>
            <button class="login-btn" @click="loginCode()">登 录</button>
            <div class="text" @click="changeLogin('3')">注册账户</div>
          </div>
        </div>
        <!-- 微信扫码登录 -->
        <div class="register wechat-login" v-show="loginType == 2">
          <div class="wxCode-box">
            <div class="btn-tips"><span>账号登录</span></div>
            <div class="picture-tag" @click="changeLogin('0')">
              <img
                src="../static/images/login/account.png"
                alt="账号登录图标"
                class="picture-icon"
              />
            </div>
          </div>
          <div class="title">
            <h6>微信扫码登录</h6>
          </div>
          <div class="register-form">
            <div class="qrcode-bg">
              <img
                class="qrcode"
                src="	https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
                alt=""
              />
            </div>
            <div class="tip">微信扫码开启MAS之旅</div>
            <div class="base-tip" @click="changeLogin('3')">
              <div class="tip">切换至手机号注册</div>
              <img src="../static/images/login/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 手机号注册 -->
        <div class="register tel-register" v-show="loginType == 3">
          <div class="title">
            <h6>手机号注册</h6>
            <div class="title-left" @click="changeLogin('4')">
              <span>微信扫码注册</span>
              <img src="../static/images/login/arrow.png" alt="" />
            </div>
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
                maxlength="11"
                placeholder="11位手机号"
                class="input-with-select"
                οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
              >
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <!-- <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option> -->
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                :maxlength="4"
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
            <el-form-item prop="pass_word">
              <el-input
                placeholder="设置登录密码"
                v-model="registerParams.pass_word"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <div class="operation register-top">
            <el-checkbox v-model="checked"
              >我已阅读并同意<span class="agreement"
                >《服务协议》</span
              ></el-checkbox
            >
            <span class="text" @click="changeLogin('5')">忘记密码</span>
          </div>
          <button class="login-btn" @click="registerUser()">登 录</button>
          <div class="text" @click="changeLogin('3')">注册账户</div>
        </div>
        <!-- 微信扫码注册 -->
        <div class="register wx-register" v-show="loginType == 4">
          <div class="title">
            <h6>微信扫码注册</h6>
            <div class="title-left" @click="changeLogin('2')">
              <span class="text">登录</span>
              <img src="../static/images/login/arrow_1.png" alt="" />
            </div>
          </div>
          <div class="register-form">
            <div class="qrcode-bg">
              <img
                class="qrcode"
                src="	https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
                alt=""
              />
            </div>
            <div class="tip">微信扫码开启MAS之旅</div>
            <div class="base-tip" @click="changeLogin('3')">
              <div class="tip">切换至手机号注册</div>
              <img src="../static/images/login/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <!--找回密码 -->
        <div class="register retrieve" v-show="loginType == 5">
          <div class="title">
            <h6>重设密码</h6>
          </div>
          <el-form
            ref="findFormPwd"
            :model="findPwdFormData"
            :rules="findFormPwd"
            class="register-form"
          >
            <el-form-item prop="mobile">
              <el-input
                v-model="findPwdFormData.mobile"
                maxlength="11"
                placeholder="11位手机号"
                class="input-with-select"
                οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
              >
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <!-- <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option> -->
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                :maxlength="4"
                v-model="findPwdFormData.code"
                placeholder="输入验证码"
                style="width: 258px"
              >
              </el-input>
              <button
                class="code-btn"
                v-show="sendState == 0"
                type="button"
                @click="getCode()"
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
                @click="getCode()"
              >
                重新获取
              </button>
            </el-form-item>
            <el-form-item prop="pass_word">
              <el-input
                v-model="findPwdFormData.pass_word"
                placeholder="新密码"
                :type="visible ? 'password' : 'text'"
              >
                <img
                  slot="suffix"
                  class="hide"
                  v-if="visible"
                  src="../static/images/login/hide.png"
                  @click="visible = !visible"
                  alt=""
                />
                <img
                  slot="suffix"
                  class="show"
                  v-else
                  src="../static/images/login/show.png"
                  @click="visible = !visible"
                  alt=""
                />
              </el-input>
            </el-form-item>
          </el-form>
          <button class="login-btn" @click="signupSms()">登 录</button>
          <div class="text" @click="changeLogin('0')">返回密码登录</div>
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
import { login } from "../request/api";
import { mapMutations } from "vuex";
import qs from "qs";
export default {
  name: "Loginpage",
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
      loginType: 0, //0密码登录1验证码登录2微信扫码登录3手机号注册4微信扫码注册 5找回密码
      visible: true, //密码显示与隐藏判断渲染，true:暗文显示，false:明文显示
      countDown: {
        show: true,
        count: "",
        timer: null,
      }, //倒计时
      sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      rules: {
        tel: [
          { required: true, message: "请输入手机号", trigger: "change" },
          { min: 11, message: "手机号码格式错误", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, message: "密码最少10位数哦", trigger: "blur" },
          {
            trigger: "blur",
            validator: (rule, value, callback) => {
              var passwordreg =
                /(?![A-Z]*$)(?![a-z]*$)(?![0-9]*$)(?![^a-zA-Z0-9]*$)/;
              if (!passwordreg.test(value)) {
                callback(
                  new Error(
                    "密码必须由大写字母、小写字母、数字、特殊符号中的2种及以上类型组成!"
                  )
                );
              } else {
                callback();
              }
            },
          },
        ],
      },
      // 密码登录
      loginFormPwdData: {
        mobile: "",
        password: "",
      },

      // 密码登录验证规则
      loginFormPwd: {
        mobile: [
          {
            required: true,
            message: "请输入手机号！",
            trigger: "blur",
          },
          { min: 11, validator: mobile, trigger: "blur" },
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            max: 32,
            message: "密码格式不正确！",
            trigger: "blur",
          },
        ],
      },

      // 验证码登陆
      loginFormCodeData: {
        mobile: "",
        code: "",
      },
      // 验证码验证规则
      loginFormCode: {
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
            max: 4,
            message: "请输入正确的验证码！",
            trigger: "blur",
          },
        ],
      },
      // 注册
      registerParams: {
        mobile: "",
        pass_word: "",
        code: "",
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
            max: 4,
            message: "请输入正确的验证码！",
            trigger: "blur",
          },
        ],
        pass_word: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            max: 32,
            message: "密码格式不正确！",
            trigger: "blur",
          },
        ],
      },
      //找回密码
      findPwdFormData: {
        mobile: "",
        code: "",
        pass_word: "",
      },
      // 找回密码验证规则
      findFormPwd: {
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
            max: 4,
            message: "请输入正确的验证码！",
            trigger: "blur",
          },
        ],
        pass_word: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            max: 32,
            message: "密码格式不正确！",
            trigger: "blur",
          },
        ],
      },
      checked: false,
      select: "+ 86",
    };
  },
  // async asyncData({ $axios }) {
  //    let res =await $axios.get('/api/list');
  //   console.log(res,'=====');
  //   return { a: res.data.a};
  // },
  methods: {
    ...mapMutations(["setToken"]),
    login() {
      // let data= qs.stringify ({
      //     username:this.userName,
      //     password:this.userPwd
      // });
      // this.$axios({
      //   url:'/api/u/logByJson',
      //   method:'post',
      //   data
      // }).then(res=>{
      //   console.log(res)
      // })

      // login(this.$axios, {
      //   username: this.userName,
      //   password: this.userPwd,
      // }).then(async (res) => {
      //   console.log(res, "login");
      // this.setToken('admin123456')
      // this.$router.push('/')
      // this.$router.push({
      //   name:'login'
      // })
      // });
      if (this.userName != "admin") return;
      if (this.userPwd != "123456") return;
      this.setToken("admin123456");
      this.$router.push("/");
    },
    //点击登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //点击账号验证码登录
    tabFn(index) {
      this.currentIndex = index;
    },
    //点击登录方式切换
    changeLogin(type) {
      this.loginType = type;
    },
    //账号密码登录
    loginPwd(loginFormPwd) {
      this.$refs[loginFormPwd].validate((valid) => {
        if (valid) {
          console.log(valid, "=====");
        }
      });
    },
    // 验证码接口
    loginGetCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      this.$refs.loginFormCode.validateField("mobile", (error) => {
        if (!error) {
          this.sendState = 1;
          // sendCode({
          //   mobile: this.mobile,
          //   code_type: "0",
          // }).then((res) => {
          //   if (res.code == 200) {
          //     this.sendState = 2;
          //     _this.countDownFn();
          //   } else {
          //     this.sendState = 3;
          //     return Toast({ duration: 1000, message: res.msg });
          //   }
          // });
        }
      });
    },
    //验证码登录
    loginCode() {
      this.$refs.loginFormCode.validate((valid) => {
        if (valid) {
          let _this = this;
        }
      });
    },
    // 注册验证码
    registerCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      this.$refs.registerForm.validateField("mobile", (error) => {
        if (!error) {
          _this.sendState = 1;
          // sendCode({
          //   mobile: this.mobile,
          //   code_type: "0",
          // }).then((res) => {
          //   if (res.code == 200) {
          //     this.sendState = 2;
          //     _this.countDownFn();
          //   } else {
          //     this.sendState = 3;
          //     return Toast({ duration: 1000, message: res.msg });
          //   }
          // });
        }
      });
    },
    // 注册
    registerUser() {
      let _this = this;
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
        } else {
        }
      });
      // }
    },
    //找回密码验证码
    getCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      this.$refs.findFormPwd.validateField("mobile", (error) => {
        if (!error) {
          _this.sendState = 1;
          // sendCode({
          //   mobile: this.mobile,
          //   code_type: "0",
          // }).then((res) => {
          //   if (res.code == 200) {
          //     this.sendState = 2;
          //     _this.countDownFn();
          //   } else {
          //     this.sendState = 3;
          //     return Toast({ duration: 1000, message: res.msg });
          //   }
          // });
        }
      });
    },
    // 找回密码
    signupSms() {
      let _this = this;
      this.$refs.findFormPwd.validate((valid) => {
        if (valid) {
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
    .form-container {
      width: 368px;
      height: 432px;
      background: #ffffff;
      border-radius: 6px;
      box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
      margin-top: 85px;
      padding: 68px 20px 0px;
      position: relative;
      .wxCode-box {
        .btn-wx-tips,.btn-tips {
          position: absolute;
          right: 72px;
          top: 22px;
          width: 106px;
          height: 28px;
          background: url(../static/images/login/wx-frame.png) no-repeat 0 0;
          background-size: 100% 100%;
          line-height: 28px;
          font-size: 14px;
          font-weight: 400;
          color: #ed6d38;
          span {
            margin-left: 8px;
          }
        }
         .btn-tips {
          width: 78px;
          background: url(../static/images/login/account-frame.png) no-repeat 0 0;
          background-size: 100% 100%;
        }
        .picture-tag {
          position: absolute;
          right: 0px;
          top: 0px;
          display: flex;
          justify-content: flex-start;
          .picture-icon {
            top: 0px;
            width: 72px;
            height: 72px;
            cursor: pointer;
          }
        }
      }
      .tabs {
        display: flex;
        li {
          font-size: 20px;
          font-weight: 500;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 20px;
          margin-right: 45px;
        }
        .active {
          color: #ed6d38;
          padding-bottom: 10px;
          border-bottom: 2px solid #ed6d38;
        }
      }
      .ruleForm {
        margin-top: 30px;
      }
      /deep/.el-form-item {
        margin-bottom: 36px;
      }
      /deep/.el-form-item__error {
        padding-top: 10px;
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

      .icon {
        margin: 12.5px 12px 12px 0;
        width: 16px;
        height: 16px;
        background-size: cover;
        display: inline-block;
      }
      .user-icon {
        background-image: url(../static/images/login/user_1.png);
      }
      /deep/.el-form-item.is-error .el-input__prefix .user-icon {
        background-image: url(../static/images/login/user.png);
      }
      .lock-icon {
        background-image: url(../static/images/login/lock_1.png);
      }
      /deep/.el-form-item.is-error .el-input__prefix .lock-icon {
        background-image: url(../static/images/login/lock.png);
      }
      .mobile-icon {
        background-image: url(../static/images/login/mobile.png);
      }
      /deep/.el-form-item.is-error .el-input__prefix .mobile-icon {
        background-image: url(../static/images/login/mobile_1.png);
      }
      .mail-icon {
        background-image: url(../static/images/login/mail.png);
      }
      /deep/.el-form-item.is-error .el-input__prefix .mail-icon {
        background-image: url(../static/images/login/mail_1.png);
      }
      .show {
        width: 16px;
        height: 11px;
        margin: 16px 12px 12px 0;
      }
      .hide {
        width: 15px;
        height: 7px;
        margin: 18px 12px 12px 0;
      }
      .operation {
        padding-top: 76px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .register-top {
        padding-top: 8px;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #ed6d38 !important;
        line-height: 14px;
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
            font-size: 20px;
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
        .qrcode-bg {
          width: 200px;
          height: 200px;
          background-image: url(../static/images/login/qrcode.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          .qrcode {
            width: 180px;
            height: 180px;
          }
        }
        .tip {
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          color: rgba(0, 0, 0, 0.45);
          line-height: 14px;
          padding: 27px 0px 65px;
        }
        .base-tip {
          display: flex;
          justify-content: center;
          align-items: center;
          .tip {
            font-size: 14px;
            padding: 0px;
          }
          img {
            width: 12px;
            height: 12px;
            margin-left: 5px;
          }
        }
      }
      .retrieve {
        .login-btn {
          margin: 34px 0px 20px;
        }
      }
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
