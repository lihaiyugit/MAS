<template>
  <div class="header" ref="header">
    <div class="header-container" :style="'width:' + $store.state.headerWidth">
      <div class="header-nav-wrapper">
        <a href="/" class="header-nav-home">MAS</a>
        <div
          class="header-nav-item-wrapper"
          v-for="(item, index) in meanList"
          :key="index"
          @click="oNitem(index)"
        >
          <div class="header-nav-item-entry">
            <nuxt-link
              :to="{ name: item.url }"
              class="text"
              :active-class="active == index ? 'nuxt-link-active' : ''"
              >{{ item.title }}</nuxt-link
            >
          </div>
        </div>
        <!-- <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/qyfw" class="text">企业服务</nuxt-link>
          </div> -->
        <!-- <ul class="header-nav-item-list">
            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item">
                <span>大咖工作坊</span>
                <img src="../static/images/left.png" alt="" />
              </a>
              <ul class="header-nav-item-list">
                <li>
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>大咖一</span></a
                  >
                </li>
                <li>
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>线下公开课报名链接</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item">
                <span>市场活动</span>
              </a>
            </li>
            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item">
                <span>学术研究</span>
                <img src="../static/images/left.png" alt="" />
              </a>
              <ul class="header-nav-item-list">
                <li class="header-list-item">
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>大咖一</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>直播回放</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>上直播报名链接</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a target="_blank" href="" class="header-nav-item-list-item"
                    ><span>线下公开课报名链接</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item"
                ><span>市场活动</span></a
              >
            </li>
            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item"
                ><span>案例包装</span></a
              >
            </li>

            <li class="header-list-item">
              <a target="_blank" href="" class="header-nav-item-list-item"
                ><span>更多产品</span></a
              >
            </li>
          </ul> -->
        <!-- </div> -->
        <!-- <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/dy" class="text">订阅</nuxt-link>
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/ktyj" class="text">课题研究</nuxt-link>
          </div>
        </div> -->
        <!-- <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/activity" class="text">活动</nuxt-link>
          </div>
        </div> -->
        <!-- <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/hyfw" class="text">会员服务</nuxt-link>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a target="_blank" href="" class="header-nav-item-list-item"
              >更多会员</a
            >
          </div>
        </div> -->
        <!-- <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/zzfw" class="text">作者服务</nuxt-link>
          </div>
        </div> -->
      </div>
      <div class="header-info-wrapper">
        <div
          class="header-info-entry-wrapper"
          v-if="$store.state.token == '' || $store.state.token == undefined"
        >
          <!-- <router-link target="_blank" :to="{path:'/home',query:{id:'1'}}"> -->
          <nuxt-link
            target="_blank"
            :to="{ path: `/login?path=${this.$router.currentRoute.fullPath}` }"
            class="header-info-entry-login"
            >登录</nuxt-link
          >
          <span class="header-info-entry-separator">|</span>
          <nuxt-link
            target="_blank"
            :to="{ path: `/login?path=${this.$router.currentRoute.fullPath}` }"
            class="header-info-entry-register"
            >注册</nuxt-link
          >
        </div>
        <div class="header-info-content-wrapper" v-else>
          <div class="header-nav-item-wrapper">
            <div class="header-nav-item-entry">
              <span id="userName">{{
                $store.state.userInfo.mas_user_nickname
              }}</span>
              <img
                class="header-arrow-down"
                src="https://su.yzcdn.cn/static/yun-layout/img/arrow-down.png"
              />
            </div>
            <div class="header-nav-item-list">
              <!-- <a target="_blank" href="" class="header-nav-item-list-item"
                >个人信息</a
              >
              <a target="_blank" href="" class="header-nav-item-list-item"
                >更换头像</a
              >
              <a target="_blank" href="" class="header-nav-item-list-item"
                >兴趣标签</a
              >
              <a target="_blank" href="" class="header-nav-item-list-item"
                >订单中心</a
              >
              <a target="_blank" href="" class="header-nav-item-list-item"
                >我的订阅</a
              > -->

              <a href="" @click="loginOut()" class="header-nav-item-list-item"
                >退出登录</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const meanList = [
  {
    url: "index",
    title: "首页",
  },
  {
    url: "qyfw",
    title: "企业服务",
  },
  {
    url: "dy",
    title: "订阅",
  },
  {
    url: "ktyj",
    title: "课题研究",
  },
  {
    url: "activity",
    title: "活动",
  },
  {
    url: "hyfw",
    title: "会员服务",
  },
  {
    url: "zzfw",
    title: "作者服务",
  },
];
import { notNeedlogin } from "@/request/api";
import md5 from "js-md5";
export default {
  data() {
    return {
      active: this.$store.state.tabIndex ? this.$store.state.tabIndex : 0,
      meanList: meanList,
    };
  },
  async fetch() {
    let timestamp = Date.parse(new Date());
    let sign = md5(timestamp + this.$store.state.secretKey);
    let res = await notNeedlogin(this.$axios, {
      sign: sign,
      timespan: timestamp,
      className: "NavigationController",
      classMethod: "getTopNavigation",
    });
    // console.log(res,'res-顶部导航')
    if (res.bol) {
      // return this.meanList = res.data;
    }
  },
  created() {},
  mounted() {
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
    console.log(
      this.$store.state.isFixedHeader,
      "this.$store.state.isFixedHeader"
    );
    // console.log(this.$router.currentRoute.fullPath,'this.$router.currentRoute.fullPath')
  },

  methods: {
    // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      // 页面滚动高度
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      // 距离至页面顶部的距离
      // let offsetTop = document.querySelector('.details-info').offsetTop;
      if (this.$store.state.isFixedHeader == false) {
        console.log(this.$store.state.isFixedHeader, "=");
        if (scrollTop >= 37) {
          this.$refs.header["style"].top = -37 + "px";
          // this.$refs.header["style"].transition = "all 0.5s ease";
        } else {
          this.$refs.header["style"].top = 0 + "px";
          // this.$refs.header["style"].transition = "all 0.5s ease";
        }
      } else {
        if (scrollTop >= 37) {
          $('.header').addClass("sticky");
        } else {
          $('.header').removeClass("sticky");
        }
      }
    },
    //点击菜单每一项
    oNitem(index) {
      document.body.scrollTop = 0;
      this.active = index;
      this.$store.commit("setTabIndex", index);
    },
    //点击退出登录
    loginOut() {
      this.$store.commit("loginOut");
      // this.$router.replace("/");
    },
  },
  destroyed() {
    // this.$store.commit("setIsFixedHeader", false);
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style scoped>
.nuxt-link-active {
  font-weight: 600;
  text-decoration: none;
  color: #ed6d38 !important;
}
/* .nuxt-link-exact-active {
  font-weight: 600;
  color: #ed6d38 !important;
} */
.header {
  width: 100%;
  background: #f2f3f5;
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0px;
  transition: all 0.5s ease;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300000;
  transition: all 0.5s ease;
  animation: fadeInDown 0.5s both 0.2s;
}
.header .header-container {
  margin: 0 auto;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f3f5;
}

.header .header-container .header-nav-wrapper {
  display: flex;
  height: 100%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 400;
}
.header .header-container .header-nav-wrapper .header-nav-home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  min-width: 50px;
  text-decoration: none;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
}

.header .header-container .header-nav-wrapper .header-nav-home:hover {
  color: rgba(0, 0, 0, 0.85);
}

.header .header-container .header-info-wrapper {
  display: flex;
  height: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 18px;
}

.header .header-container .header-info-wrapper .header-info-entry-wrapper a {
  color: rgba(0, 0, 0, 0.65);
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 37px;
  font-weight: 400;
  cursor: pointer;
}
.header-info-entry-login:hover,
.header-info-entry-register:hover {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}

.header
  .header-container
  .header-info-wrapper
  .header-info-entry-wrapper
  .header-info-entry-separator {
  margin: 0 2px;
  color: #c8c9cc;
}

/* .header .header-container .header-info-wrapper .header-info-content-wrapper {
  display: flex;
} */

.header
  .header-container
  .header-info-wrapper
  .header-info-content-wrapper
  .header-nav-item-wrapper
  .header-nav-item-entry {
  min-width: 72px;
  justify-content: flex-end;
  margin-right: 0px;
}

.header .header-container .header-nav-item-wrapper .header-nav-item-entry {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 37px;
  /* min-width: 96px; */
  cursor: pointer;
  margin-right: 32px;
}

.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-entry
  .header-arrow-down {
  width: 10px;
  height: 6px;
  margin-left: 4px;
  margin-top: 2px;
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-entry
  .text {
  color: rgba(0, 0, 0, 0.65);
}
.header .header-container .header-nav-item-wrapper .header-nav-item-list {
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  padding: 4px 0;
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.14);
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-list-item {
  position: relative;
}

.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-nav-item-list-item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 26px;
  padding: 4px 12px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 18px;
  text-decoration: none;
  white-space: nowrap;
  margin-bottom: 4px;
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-nav-item-list-item
  img {
  width: 6px;
  height: 10px;
  margin-left: 6px;
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-list-item
  .header-nav-item-list {
  position: absolute;
  top: 0px;
  left: 96px;
  display: none;
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-list-item:hover
  .header-nav-item-list {
  display: flex;
}
.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-nav-item-list-item:last-child {
  margin-bottom: 0;
}

.header
  .header-container
  .header-nav-item-wrapper
  .header-nav-item-list
  .header-nav-item-list-item:hover {
  color: rgba(0, 0, 0, 0.85);
  background: #f0f0f0;
}

.header .header-container .header-nav-item-wrapper:hover .header-nav-item-list {
  display: flex;
}

.header
  .header-container
  .header-nav-item-wrapper:hover
  .header-nav-item-entry
  .text {
  color: rgba(0, 0, 0, 0.85);
}

.header .hide {
  display: none !important;
}
</style>
