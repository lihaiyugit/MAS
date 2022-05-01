<template>
  <div class="header" ref="header">
    <div class="header-container" :style="'width:' + $store.state.headerWidth">
      <div class="header-nav-wrapper">
        <a href="/" class="header-nav-home">MAS</a>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>企业服务</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <ul class="header-nav-item-list">
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
          </ul>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/subscription">订阅</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
          <!-- <div class="header-nav-item-list">
            <nuxt-link to="/subscription" class="header-nav-item-list-item"
              >订阅首页</nuxt-link
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >学术研究</a
            >
          </div> -->
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/projectStudy">课程研究</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
          <!-- :to="{name:'catalogue-id',params:{id:index+1,type:item}}" -->
          <!-- <div class="header-nav-item-list">
            <nuxt-link to="/projectStudy" class="header-nav-item-list-item"
              >课程成果</nuxt-link
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >案例包装</a
            >
          </div> -->
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/activity">活动</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>会员服务</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a target="_blank" href="" class="header-nav-item-list-item"
              >更多会员</a
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >商家社区</a
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >帮助中心</a
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >服务支持</a
            >
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <nuxt-link to="/authorSrervices">作者服务</nuxt-link>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>
          <!-- <div class="header-nav-item-list">
            <a target="_blank" href="" class="header-nav-item-list-item"
              >更多会员</a
            >

            <a target="_blank" href="" class="header-nav-item-list-item"
              >帮助中心</a
            >
            <a target="_blank" href="" class="header-nav-item-list-item"
              >服务支持</a
            >
          </div> -->
        </div>
      </div>
      <div class="header-info-wrapper">
        <div class="header-info-entry-wrapper" v-if="$store.state.token">
          <span class="header-info-entry-login">登录</span>
          <span class="header-info-entry-separator">|</span>
          <span class="header-info-entry-register">注册</span>
        </div>
        <div class="header-info-content-wrapper" v-else>
          <div class="header-nav-item-wrapper">
            <div class="header-nav-item-entry">
              <span id="userName">admin</span>
              <img
                class="header-arrow-down"
                src="https://su.yzcdn.cn/static/yun-layout/img/arrow-down.png"
              />
            </div>
            <div class="header-nav-item-list">
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
      // console.log(scrollTop);
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      // console.log(clientHeight);
      // 距离至页面顶部的距离
      // let offsetTop = document.querySelector('.details-info').offsetTop;
      // console.log(offsetTop)
      // let info = document.querySelector('.details-info').offsetHeight + 'px';
      // console.log(info)
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
.nuxt-link-active {
  text-decoration: none;
  color: #ed6d38;
}
.header {
  /* position: relative; */
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  background-color: #f2f3f5;
}

.header .header-container .header-nav-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
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
  height: 37px;
  text-decoration: none;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
}

.header .header-container .header-nav-wrapper .header-nav-home:hover {
  color: rgba(0, 0, 0, 0.85);
}

.header .header-container .header-info-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  height: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 18px;
}

.header .header-container .header-info-wrapper .header-info-entry-wrapper {
  color: rgba(0, 0, 0, 0.85);
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 37px;
  font-weight: 400;
  cursor: pointer;
}
.header-info-entry-login:hover,
.header-info-entry-register:hover {
  font-weight: 600;
}

.header
  .header-container
  .header-info-wrapper
  .header-info-entry-wrapper
  .header-info-entry-separator {
  margin: 0 2px;
  color: #c8c9cc;
}

.header .header-container .header-info-wrapper .header-info-content-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
}

.header
  .header-container
  .header-info-wrapper
  .header-info-content-wrapper
  .header-nav-item-wrapper
  .header-nav-item-entry {
  min-width: 72px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  justify-content: flex-end;
}

.header .header-container .header-nav-item-wrapper .header-nav-item-entry {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  height: 37px;
  min-width: 96px;
  cursor: pointer;
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

.header .header-container .header-nav-item-wrapper .header-nav-item-list {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  align-items: center;
  -moz-box-sizing: border-box;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
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
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
}

.header
  .header-container
  .header-nav-item-wrapper:hover
  .header-nav-item-entry {
  color: rgba(0, 0, 0, 0.85);
}

.header .hide {
  display: none !important;
}
</style>
