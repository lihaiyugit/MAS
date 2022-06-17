<template>
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
        <li @click="changeLogin('0')" :class="loginType == 0 ? 'active' : ''">
          验证码登录
        </li>
        <li @click="changeLogin('1')" :class="loginType == 1 ? 'active' : ''">
          密码登录
        </li>
      </ul>
      <!-- 验证码登录 -->
      <div class="code-box" v-show="loginType == 0">
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
              placeholder="请输入手机号"
              οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
            >
              <span slot="prefix" class="icon mobile-icon"></span>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model="loginFormCodeData.code"
              placeholder="验证码"
              :maxlength="6"
              style="width: 258px"
            >
              <span slot="prefix" class="icon mail-icon"></span>
              <img
                v-if="loginFormCodeData.code.length == 6"
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
          <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
          <span class="text" @click="changeLogin('5')">忘记密码</span>
        </div>
        <button class="login-btn" @click="loginCode()">登 录</button>
        <div class="text" @click="changeLogin('3')">注册账户</div>
      </div>
      <!-- 密码登录 -->
      <div class="user-box" v-show="loginType == 1">
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
              placeholder="请输入手机号"
              οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
            >
              <span slot="prefix" class="icon user-icon"></span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginFormPwdData.password" placeholder="密码">
              <span slot="prefix" class="icon lock-icon"></span>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="operation">
          <el-checkbox v-model="autoLogin">自动登录</el-checkbox>
          <span class="text" @click="changeLogin('5')">忘记密码</span>
        </div>
        <button class="login-btn" @click="loginPwd('loginFormPwd')">
          登 录
        </button>
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
          <div id="login_container" class="qrcode"></div>
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
        <span class="text" @click="changeLogin('5')">忘记密码</span>
      </div>
      <button class="login-btn" @click="registerUser()">注册</button>
      <div class="text" @click="changeLogin('0')">使用已有帐户登录</div>
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
          <div id="login_container_one" class="qrcode"></div>
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
            placeholder="请输入手机号"
            οninput="value=value.replace(/[^\d]/g,'');if(value.length > 11)value = value.slice(0, 11)"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            :maxlength="6"
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
</template>

<script>
import { notNeedlogin, getUserInfo } from "../request/api";
import { mapMutations } from "vuex";
import md5 from "js-md5";
import qs from "qs";
import config from "../config/index";
export default {
  loading: false,
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
      loginType: 0, //0验证码登录1密码登录2微信扫码登录3手机号注册4微信扫码注册 5找回密码
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
            max: 6,
            message: "请输入正确的验证码！",
            trigger: "blur",
          },
        ],
      },
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
            max: 6,
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
      autoLogin: false, //是否自动登录
      userState: "", //根据state获取user信息监听事件
      timer: null, //state获取user信息定时器
    };
  },

  async asyncData({ $axios }) {
    //  let res =await $axios.get('/api/list');
    // console.log($axios,res,'=====');
    // return { a: res.data.a};
  },
  created() {
    console.log(this.$route.query.code, this.$route.query.path, "===");
    if (this.$route.query.code != "" && this.$route.query.code !== undefined) {
      this.getState();
    }
  },
  mounted() {
    //自动登录
    let autoLogin = this.$cookies.get("autoLogin");
    if (autoLogin) {
      this.publicLogin(2, autoLogin);
    }
    console.log(location.href, "location.href");
  },
  methods: {
    ...mapMutations(["setToken", "setUserInfo"]),

    //点击账号验证码登录
    tabFn(index) {
      this.currentIndex = index;
    },
    // 获取微信数据
    getWxData() {
      let _this = this;
      let timestamp = Date.parse(new Date());
      let sign = md5(timestamp + this.$store.state.secretKey);
      notNeedlogin(this.$axios, {
        sign: sign,
        timespan: timestamp,
        className: "Wx",
        classMethod: "getWxParams",
      }).then((res) => {
        if (res.bol) {
          // _this.userState = res.data.state;
          // 扫码登录
          var obj = new WxLogin({
            self_redirect: false,
            id: `${
              _this.loginType == 2 ? "login_container" : "login_container_one"
            }`, //显示二维码的容器id
            appid: res.data.appid, //应用唯一标识
            scope: res.data.scope, //应用授权作用域,网页应用目前仅填写snsapi_login即可
            state: _this.$route.query.path,
            redirect_uri: encodeURIComponent(res.data.redirect_uri), //重定向地址，需要进行UrlEncode
            style: "black",
            href: "data:text/css;base64,LmltcG93ZXJCb3ggewogIHdpZHRoOiAxODBweDsKfQouaW1wb3dlckJveCAucXJjb2RlIHsKICB3aWR0aDogMTgwcHg7CiAgbWFyZ2luLXRvcDogMHB4OwogIGJvcmRlcjogbm9uZTsKfQouaW1wb3dlckJveCAudGl0bGUgewogIGRpc3BsYXk6IG5vbmU7Cn0KLmltcG93ZXJCb3ggLmluZm8gewogIHdpZHRoOiAxMDAlOwp9Ci5pbXBvd2VyQm94IC5pbmZvIC5zdGF0dXNfYnJvd3NlciB7CiAgICBkaXNwbGF5OiBub25lOwp9Ci5zdGF0dXNfaWNvbiB7CiAgZGlzcGxheTogbm9uZTsKfQouaW1wb3dlckJveCAuc3RhdHVzIHsKICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgcGFkZGluZzogMTRweDsKfQouaW1wb3dlckJveCAuc3RhdHVzX3N1Y2MgewogICAgZm9udC1zaXplOiAxNnB4OwogICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgbWFyZ2luLXRvcDogMHB4Owp9Ci5pbXBvd2VyQm94IC5pY29uMzhfbXNnLnN1Y2MgewogICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmVzLnd4LnFxLmNvbS9jb25uZWN0L3poX0NOL2h0bWxlZGl0aW9uL2ltYWdlcy9pY29uX3BvcHVwMzY5NmI0LnBuZykwIC0yOXB4IG5vLXJlcGVhdDsKICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDsKfS5pbXBvd2VyQm94IC5pY29uMzhfbXNnIHsKICAgIHdpZHRoOiAyNHB4OwogICAgaGVpZ2h0OiAyNHB4Owp9Ci5pbmZvIC5zdGF0dXNfdHh0IHAgewogICAgZGlzcGxheTogbm9uZTsKfQ==",
          });
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    //根据state获取user信息监听事件
    getState() {
      let _this = this;
      // clearInterval(_this.timer);//防止上次定时器没有关又请求下次
      // let timestamp = Date.parse(new Date());
      // let sign = md5(timestamp + this.$store.state.secretKey);
      getUserInfo(_this.$axios, {
        wxCode: _this.$route.query.code,
        // sign: sign,
        // timespan: timestamp,
        // data: {
        //   wxCode: _this.$route.query.code,
        // },
        // className: "Wx",
        // classMethod: "getUserInfo",
      }).then((res) => {
        console.log(res, "res");
        if (res.err_code == 40023) {
          // // 40023用户未扫码（继续调用监听方法）
          // _this.timer = setInterval(() => {
          //   _this.getState();
          // }, 3000);
          // console.log(_this.timer, "_this.timer");
        } else if (res.err_code == 40021) {
          // 40021您未绑定手机号，请绑定手机号（跳转绑定页面）
          // clearInterval(_this.timer);
          this.$router.push({
            path: `/bindPhone?wxCode=${_this.$route.query.code}`,
            // query: { wxCode: _this.$route.query.code },
          });
        } else if (res.err_code == 20001) {
          // 20001 登录成功 （跳转首页）
          // clearInterval(timer);
          _this.setToken(res.data.token);
          _this.$cookies.set("token", res.data.token, config.cookieConfig);
          _this.setUserInfo(res.data);
          _this.$cookies.set("userInfo", res.data, config.cookieConfig);
          _this.$message.success(res.msg);
          let path = _this.$route.query.path || "/";
          _this.$router.push({
            path: _this.$route.query.path ? path : "/",
          });
        }
      });
    },

    //点击登录方式切换
    changeLogin(type) {
      this.loginType = type;
      console.log(type, "typetype");
      if (type == 2 || type == 4) {
        this.getWxData();
      }
      // if (type == 0 || type == 3) {
      //   console.log(this.timer, "this.timer");
      //   clearInterval(this.timer);
      //   // window.clearInterval(this.timer);
      // }
    },
    //账号密码登录
    loginPwd(loginFormPwd) {
      let _this = this;
      _this.$refs[loginFormPwd].validate((valid) => {
        if (valid) {
          let params = {
            type: 1,
            phone: _this.loginFormPwdData.mobile,
            password: _this.loginFormPwdData.password,
          };
          _this.publicLogin(1, params);
        }
      });
    },
    //验证码登录验证码接口
    loginGetCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      _this.$refs.loginFormCode.validateField("mobile", (error) => {
        if (!error) {
          _this.CaptchaAppId();
        } else {
          _this.$message.error(error);
        }
      });
    },
    //验证码登录
    loginCode() {
      let _this = this;
      _this.$refs.loginFormCode.validate((valid) => {
        if (valid) {
          let params = {
            type: "",
            phone: _this.loginFormCodeData.mobile,
            code: _this.loginFormCodeData.code,
          };
          _this.publicLogin(0, params);
        }
      });
    },
    //账号密码公共的登录方法
    publicLogin(type, val) {
      let _this = this;
      let timestamp = Date.parse(new Date());
      let sign = md5(timestamp + this.$store.state.secretKey);
      notNeedlogin(this.$axios, {
        sign: sign,
        timespan: timestamp,
        data: val,
        className: "UserController",
        classMethod: "login",
      }).then((res) => {
        if (res.bol) {
          // 是否自动登录 储存7天
          if (type == 1) {
            if (_this.autoLogin) {
              //存储cookie
              _this.$cookies.set(
                "autoLogin",
                {
                  type: 1,
                  phone: _this.loginFormPwdData.mobile,
                  password: _this.loginFormPwdData.password,
                },
                {
                  path: "/", //设置cookie为路由的跟路径，对整个网站有效
                  maxAge: 60 * 60 * 24 * 7, //设置cookie过期时间为7天
                }
              );
            } else {
              _this.$cookies.remove("autoLogin", { path: "/" });
            }
          }
          _this.setToken(res.data.token);
          _this.$cookies.set("token", res.data.token, config.cookieConfig);
          _this.setUserInfo(res.data);
          _this.$cookies.set("userInfo", res.data, config.cookieConfig);
          _this.$message.success(res.msg);
          // _this.$router.push({ name: "index" });
          //fullPath为登录前的地址，登录成功后跳转到登录前的浏览地址
          //fullPath可以从nuxt的asyncData的from参数中获取
          //  let path = _self.fullPath || '/';
          //  _self.$router.push({ path: path.indexOf('/verify') === 0 ? '/' : path });
          let path = _this.$route.query.path || "/";
          _this.$router.push({
            path: _this.$route.query.path ? path : "/",
          });
        } else {
          this.$message.error(res.msg);
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

    //手机号注册腾讯滑块验证
    verificationCode(val) {
      let _this = this;
      // let langtion = 'zh-hk';
      let captchaId = val.toString(); //腾讯滑块验证码appid
      //生成一个滑块验证码对象
      var captcha = new TencentCaptcha(captchaId, function (res) {
        if (res.ret === 0) {
          // 记得把验证成功的票据和随机字符带到自己接口中去腾讯验证票据的真实性
          _this.getCommonCode(res.ticket, res.randstr);
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
    //获取验证码
    getCommonCode(ticket, randstr) {
      let _this = this;
      _this.sendState = 1;
      let phone = "";
      if (_this.loginType == 0) {
        phone = _this.loginFormCodeData.mobile;
      } else if (_this.loginType == 3) {
        phone = _this.registerParams.mobile;
      } else if (_this.loginType == 5) {
        phone = _this.findPwdFormData.mobile;
      }

      let timestamp = Date.parse(new Date());
      let sign = md5(timestamp + _this.$store.state.secretKey);
      notNeedlogin(_this.$axios, {
        sign: sign,
        timespan: timestamp,
        data: {
          phone: phone,
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
      this.$refs.registerForm.validate((valid) => {
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
            },
            className: "UserController",
            classMethod: "register",
          }).then((res) => {
            if (res.bol) {
              _this.$message.success(res.msg);
              setTimeout(() => {
                _this.$router.push("/");
              }, 1000);
            } else {
              _this.$message.error(res.msg);
            }
          });
        }
      });
    },

    //找回密码验证码
    getCode() {
      let _this = this;
      // sendState: 0, // '验证码发送'按钮的状态 0待发送 1发送中 2倒数时中 3重新发送
      _this.$refs.findFormPwd.validateField("mobile", (error) => {
        if (!error) {
          _this.CaptchaAppId();
        } else {
          _this.$message.error(error);
        }
      });
    },
    // 找回密码
    signupSms() {
      let _this = this;
      _this.$refs.findFormPwd.validate((valid) => {
        if (valid) {
          let timestamp = Date.parse(new Date());
          let sign = md5(timestamp + _this.$store.state.secretKey);
          notNeedlogin(_this.$axios, {
            sign: sign,
            timespan: timestamp,
            data: {
              phone: _this.findPwdFormData.mobile,
              code: _this.findPwdFormData.code,
              password: _this.findPwdFormData.pass_word,
              token: _this.$store.state.token,
            },
            className: "UserController",
            classMethod: "setPassword",
          }).then((res) => {
            if (res.bol) {
              _this.$message.success("设置成功,请重新登录");
              setTimeout(() => {
                _this.loginType = 0;
              }, 1000);
            } else {
              _this.$message.error(res.msg);
            }
          });
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
  beforeDestroy() {
    // clearInterval(this.timer);
  },
};
</script>
<style lang="less" scoped>
.form-container {
  width: 368px;
  height: 430px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
  margin-top: 85px;
  padding: 70px 26px 0px;
  position: relative;
  .wxCode-box {
    .btn-wx-tips,
    .btn-tips {
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
      margin-right: 40px;
      font-size: 18px;
      font-weight: 500;
      text-align: left;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
      cursor: pointer;
    }
    .active {
      color: rgba(0, 0, 0, 0.85);
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -10px;
        width: 40px;
        height: 2px;
        background: rgba(0, 0, 0, 0.85);
        transform: translateX(-50%);
        z-index: 100;
        transition: all 0.2s linear;
      }
    }
  }
  .ruleForm {
    margin-top: 44px;
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
  /deep/.el-input.is-active .el-input__inner,
  /deep/.el-input__inner:focus {
    border-color: #ed6d38;
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
    padding-top: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  // .register-top {
  //   padding-top: 8px;
  // }
  .text {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #ed6d38 !important;
    line-height: 14px;
    cursor: pointer;
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
      // padding: 28px 0px 66px;
      padding: 56px 0px 38px;
    }
    .base-tip {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      position: relative;
      z-index: 99;
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
      margin: 22px 0px 20px;
    }
  }
}
</style>
