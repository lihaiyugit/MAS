<template>
  <div class="login-wrapper">
    <!-- <h1>登录</h1>
    <input type="text" name="" v-model="userName" />
    <input type="text" name="" v-model="userPwd" />
    <button @click="login">登录</button> -->
    <!-- <img src="../static/images/login/login-bg.png" alt=""> -->
    <div class="login-main">
      <img class="logo" src="../static/images/login/logo.png" alt="" />
      <div class="form-container">
        <div class="login">
          <ul class="tabs">
            <li
              v-for="(item, index) in tabs"
              :key="index"
              :class="currentIndex == index ? 'active' : ''"
              @click="tabFn(index)"
            >
              {{ item }}
            </li>
          </ul>
          <div class="user-box" v-if="currentIndex == 0">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="ruleForm"
            >
              <el-form-item prop="tel">
                <el-input
                  v-model="ruleForm.tel"
                  maxlength="11"
                  placeholder="手机号/账号"
                  οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
                >
                  <img
                    slot="prefix"
                    class="icon"
                    src="../static/images/login/user_1.png"
                    alt=""
                  />
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="密码">
                  <img
                    slot="prefix"
                    class="icon"
                    src="../static/images/login/lock_1.png"
                    alt=""
                  />
                </el-input>
              </el-form-item>
            </el-form>
            <div class="operation">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <span class="text">忘记密码</span>
            </div>
            <button class="login-btn" @click="submitForm('ruleForm')">
              登 录
            </button>
            <div class="text">注册账户</div>
          </div>
          <div class="code-box" v-else>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="ruleForm"
            >
              <el-form-item prop="tel">
                <el-input
                  v-model="ruleForm.tel"
                  maxlength="11"
                  placeholder="手机号"
                  οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
                >
                  <img
                    slot="prefix"
                    class="icon"
                    src="../static/images/login/mobile.png"
                    alt=""
                  />
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="验证码"
                  style="width: 258px"
                >
                  <img
                    slot="prefix"
                    class="icon"
                    src="../static/images/login/mail.png"
                    alt=""
                  />
                  <img
                    slot="suffix"
                    class="icon"
                    src="../static/images/login/Shape.png"
                    alt=""
                  />
                </el-input>
                <button class="code-btn">获取验证码</button>
              </el-form-item>
            </el-form>
            <div class="operation">
              <el-checkbox v-model="checked">自动登录</el-checkbox>
              <span class="text">忘记密码</span>
            </div>
            <button class="login-btn" @click="submitForm('ruleForm')">
              登 录
            </button>
            <div class="text">注册账户</div>
          </div>
        </div>
        <div class="register tel-register" style="display: none">
          <div class="title">
            <h6>手机号注册</h6>
            <div class="title-left">
              <span>微信扫码注册</span>
              <img src="../static/images/login/arrow.png" alt="" />
            </div>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="register-form"
          >
            <el-form-item prop="tel">
              <el-input
                v-model="ruleForm.tel"
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
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                placeholder="输入验证码"
                style="width: 258px"
              >
              </el-input>
              <button class="code-btn">获取验证码</button>
            </el-form-item>
          </el-form>
          <div class="operation">
            <el-checkbox v-model="checked"
              >我已阅读并同意<span class="agreement"
                >《服务协议》</span
              ></el-checkbox
            >
            <span class="text">忘记密码</span>
          </div>
          <button class="login-btn" @click="submitForm('ruleForm')">
            登 录
          </button>
          <div class="text">注册账户</div>
        </div>
        <div class="register wx-register" style="display: none">
          >
          <div class="title">
            <h6>微信扫码注册</h6>
            <div class="title-left">
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
            <div class="base-tip">
              <div class="tip">微信扫码开启MAS之旅</div>
              <img src="../static/images/login/arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div class="register retrieve" style="display: none">
          <div class="title">
            <h6>重设密码</h6>
          </div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            class="register-form"
          >
            <el-form-item prop="tel">
              <el-input
                v-model="ruleForm.tel"
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
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                placeholder="输入验证码"
                style="width: 258px"
              >
              </el-input>
              <button class="code-btn">获取验证码</button>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                placeholder="新密码"
                show-password
              >
                <img
                  slot="suffix"
                  class="hide"
                  src="../static/images/login/hide.png"
                  alt=""
                />
              </el-input>
            </el-form-item>
          </el-form>
          <button class="login-btn" @click="submitForm('ruleForm')">
            登 录
          </button>
          <div class="text">返回密码登录</div>
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
    return {
      userName: "",
      userPwd: "",
      ruleForm: {
        tel: "",
        password: "",
      },
      tabs: ["账户密码登录", "验证码登录"],
      currentIndex: 0,
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
              console.log(passwordreg.test(value));
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
      /deep/.el-input.is-active .el-input__inner, .el-input__inner:focus .icon{
         width: 26px;
        height: 26px;
      }
      .icon {
        margin: 12px 12px 12px 0;
        width: 16px;
        height: 16px;
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
