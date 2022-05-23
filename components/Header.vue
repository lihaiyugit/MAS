<template>
  <div class="header" ref="header">
    <div class="header-container" :style="'width:' + $store.state.headerWidth">
      <div class="header-nav-wrapper">
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/" class="text">首页</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
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
          </ul> -->
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/qyfw" class="text">企业服务</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
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
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/dy" class="text">订阅</nuxt-link>
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/kcyj" class="text">课程研究</nuxt-link>
          </div>
          <!-- :to="{name:'catalogue-id',params:{id:index+1,type:item}}" -->
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/activity" class="text">活动</nuxt-link>
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/hyfw" class="text">会员服务</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
          <!-- <div class="header-nav-item-list">
            <a target="_blank" href="" class="header-nav-item-list-item"
              >更多会员</a
            >
          </div> -->
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/zzfw" class="text">作者服务</nuxt-link>
          </div>
        </div>
      </div>
      <div class="header-info-wrapper">
        <!-- v-if="$store.state.token" -->
        <div class="header-info-entry-wrapper" >
          <!-- <router-link target="_blank" :to="{path:'/home',query:{id:'1'}}"> -->
          <nuxt-link target="_blank" to="/login" class="header-info-entry-login">登录</nuxt-link>
          <span class="header-info-entry-separator">|</span>
          <nuxt-link target="_blank" to="/login"  class="header-info-entry-register">注册</nuxt-link>
        </div>
        <div class="header-info-content-wrapper hide" >
          <div class="header-nav-item-wrapper">
            <div class="header-nav-item-entry">
              <span id="userName">admin</span>
              <img
                class="header-arrow-down"
                src="https://su.yzcdn.cn/static/yun-layout/img/arrow-down.png"
              />
            </div>
            <div class="header-nav-item-list hide">
              <a target="_blank" href="" class="header-nav-item-list-item"
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
              >

              <a href="" class="header-nav-item-list-item" id="log-out-button"
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
export default {
  props: ["HeaderWidth"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
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
      // let info = document.querySelector('.details-info').offsetHeight + 'px';
      if (scrollTop >= clientHeight / 2) {
        // this.isFixed = true;
        // this.marginTop = document.querySelector('#fixedBar').offsetHeight + 'px';
        this.$refs.header["style"].top = -37 + "px";
        this.$refs.header["style"].transition = "all 1s ease 0s";
        // this.$refs.header["className"] = "topHight";
      } else {
        // this.isFixed = false;
        // this.marginTop = 0;
        this.$refs.header["style"].top = 0 + "px";
        //  this.$refs.header["className"] = "";
        this.$refs.header["style"].transition = "all 0.8s ease 0s";
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style scoped>
/* .nuxt-link-active { */
  /* text-decoration: none;
  color: #ed6d38; */
/* } */
.header {
  width: 100%;
  background: #f2f3f5;
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0px;
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

.header .header-container .header-info-wrapper {
  display: flex;
  height: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  line-height: 18px;
}

.header .header-container .header-info-wrapper .header-info-entry-wrapper a{
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
