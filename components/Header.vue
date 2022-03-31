<template>
  <div class="header">
    <div class="header-container" :style="'width:' + $store.state.headerWidth">
      <div class="header-nav-wrapper">
        <a target="_blank" href="/" class="header-nav-home">MAS</a>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>企业服务</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <ul class="header-nav-item-list">
            <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
              >
                <span>大咖工作坊</span>
                <img src="../static/images/left.png" alt="" />
              </a>
              <ul class="header-nav-item-list">
                <li>
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>大咖一</span></a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>线下公开课报名链接</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
              >
                <span>市场活动</span>
              </a>
            </li>
            <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
              >
                <span>学术研究</span>
                <img src="../static/images/left.png" alt="" />
              </a>
              <ul class="header-nav-item-list">
                <li class="header-list-item">
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>大咖一</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>直播回放</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>上直播报名链接</span></a
                  >
                </li>
                <li class="header-list-item">
                  <a
                    target="_blank"
                    href=""
                    class="header-nav-item-list-item"
                    ><span>线下公开课报名链接</span></a
                  >
                </li>
              </ul>
            </li>
             <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                ><span>市场活动</span></a
              >
            </li>
            <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                ><span>案例包装</span></a
              >
            </li>

            <li class="header-list-item">
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                ><span>更多产品</span></a
              >
            </li>
          </ul>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>订阅</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a
              target="_blank"
              href="/subscription"
              class="header-nav-item-list-item"
              >订阅首页</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >学术研究</a
            >
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>课程研究</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >学术研究</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >案例包装</a
            >
          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>活动</span>
            <!-- <img class="header-arrow-down" src="../static/images/arrows.png" /> -->
          </div>

        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>会员服务</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >更多会员</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >商家社区</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >帮助中心</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >服务支持</a
            >

          </div>
        </div>
        <div class="header-nav-item-wrapper">
          <div class="header-nav-item-entry">
            <span>作业服务</span>
            <img class="header-arrow-down" src="../static/images/arrows.png" />
          </div>
          <div class="header-nav-item-list">
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >更多会员</a
            >

            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >帮助中心</a
            >
            <a
              target="_blank"
              href=""
              class="header-nav-item-list-item"
              >服务支持</a
            >

          </div>
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
              <a
                target="_blank"
                href="/center/my-apps"
                class="header-nav-item-list-item"
                >个人信息</a
              >
              <a
                target="_blank"
                href="/center/my-coupons"
                class="header-nav-item-list-item"
                >更换头像</a
              >
              <a
                target="_blank"
                href="/center/my-orders"
                class="header-nav-item-list-item"
                >兴趣标签</a
              >
              <a
                target="_blank"
                href="/center/my-mp"
                class="header-nav-item-list-item"
                >订单中心</a
              >
              <a
                target="_blank"
                href="/notice-center"
                class="header-nav-item-list-item"
                >我的订阅</a
              >

              <a
                href="javascript:void()"
                class="header-nav-item-list-item"
                id="log-out-button"
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
};
</script>
<style scoped>
.header {
  position: relative;
  background-color: #f2f3f5;
  z-index: 1000;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
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
  color: rgba(0, 0, 0, 0.45);
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
  color: rgba(0, 0, 0, 0.45);
  font-weight: 600;
}

.header .header-container .header-nav-wrapper .header-nav-home:hover {
  color: rgba(0, 0, 0, 0.65);
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
  color: rgba(0, 0, 0, 0.45);
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
  color: rgba(0, 0, 0, 0.65);
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
  color: rgba(0, 0, 0, 0.65);
}

.header .hide {
  display: none !important;
}
</style>
