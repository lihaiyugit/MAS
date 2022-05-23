<template>
  <div class="header">
    <div class="header-container" :style="'width:' + $store.state.headerWidth">
      <div class="header-nav-wrapper">
        <a target="_blank" href="/" class="header-nav-home">MAS</a>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          unique-opened
          router
          menu-trigger="click"
        >
          <!-- <template v-for="item in items">
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <span>{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                  <el-submenu
                    v-if="subItem.subs"
                    :index="subItem.index"
                    :key="subItem.index"
                  >
                    <template slot="title">{{ subItem.title }}</template>
                    <el-menu-item
                      v-for="(threeItem, i) in subItem.subs"
                      :key="i"
                      :index="threeItem.index"
                    >
                      {{ threeItem.title }}</el-menu-item
                    >
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="subItem.index"
                    :key="subItem.index"
                    >{{ subItem.title }}
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                <template slot="title">
                  <span>{{ item.title }}</span>
                </template>
              </el-menu-item>
            </template>
          </template> -->
          <el-submenu index="1">
            <template slot="title">企业服务</template>
            <el-submenu index="1-1">
              <template slot="title">大咖工作坊</template>
              <el-menu-item index="1-1-1">大咖一</el-menu-item>
              <el-menu-item index="1-1-2">直播回放</el-menu-item>
              <el-menu-item index="1-1-3">线上直播报名链接</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2">学术研究</el-menu-item>
            <el-menu-item index="1-3">市场活动</el-menu-item>
            <el-menu-item index="1-4">案例包装</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">订阅</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">课题研究</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
              <el-menu-item index="3-4-2">选项2</el-menu-item>
              <el-menu-item index="3-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="4">活动</el-menu-item>
          <el-submenu index="5">
            <template slot="title">会员服务</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
              <el-menu-item index="5-4-2">选项2</el-menu-item>
              <el-menu-item index="5-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">作者服务</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
            <el-submenu index="6-4">
              <template slot="title">选项4</template>
              <el-menu-item index="6-4-1">选项1</el-menu-item>
              <el-menu-item index="6-4-2">选项2</el-menu-item>
              <el-menu-item index="6-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
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
                href=""
                class="header-nav-item-list-item"
                >个人信息</a
              >
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                >更换头像</a
              >
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                >兴趣标签</a
              >
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                >订单中心</a
              >
              <a
                target="_blank"
                href=""
                class="header-nav-item-list-item"
                >我的订阅</a
              >

              <a
                href=""
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
const items = [
  {
    index: "/dashboard",
    title: "系统首页",
  },
  {
    index: "/table",
    title: "基础表格",
  },
  {
    index: "/tabs",
    title: "tab选项卡",
  },
  {
    index: "3",
    title: "表单相关",
    subs: [
      {
        index: "/form",
        title: "基本表单",
      },
      {
        index: "/upload",
        title: "文件上传",
      },
      {
        index: "4",
        title: "三级菜单",
        subs: [
          {
            index: "/editor",
            title: "富文本编辑器",
          },
        ],
      },
    ],
  },
  {
    index: "/icon",
    title: "自定义图标",
  },
  {
    index: "/charts",
    title: "schart图表",
  },
  {
    index: "/i18n",
    title: "国际化功能",
  },
  {
    index: "7",
    title: "错误处理",
    subs: [
      {
        index: "/permission",
        title: "权限测试",
      },
      {
        index: "/404",
        title: "404页面",
      },
    ],
  },
  {
    index: "/donate",
    title: "支持作者",
  },
];
export default {
  props: ["HeaderWidth"],
  data() {
    return {
      // activeIndex: "-1",
      items,
    };
  },
  created() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    //当前路由的值
    activeIndex() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
.header {
  position: relative;
  background-color: #f2f3f5;
  z-index: 1000;
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
.header .header-container .header-nav-item-wrapper .header-nav-item-list li {
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
  color: rgba(0, 0, 0, 0.65);
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
  li
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
  li:hover
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

.el-menu {
  background-color: transparent;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-menu--horizontal .el-menu-item.is-active {
  border-bottom: none;
  color: rgba(0, 0, 0, 0.65);
}
.el-menu-item {
  font-size: 12px;
}
.el-submenu:hover {
  color: rgba(0, 0, 0, 0.65);
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #f2f3f5;
}

.el-menu--popup-bottom-start {
  margin-top: 0px;
}
.el-menu--popup {
  min-width: 96px;
  z-index: 100;
  border: none;
  padding: 4px 0;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
}
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 37px;
  line-height: 37px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  border-bottom: none;
}
.el-menu--horizontal > .el-submenu:focus .el-submenu__title,
.el-menu--horizontal > .el-submenu:hover .el-submenu__title {
  color: rgba(0, 0, 0, 0.65);
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  outline: 0;
  color: rgba(0, 0, 0, 0.65);
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  float: none;
  height: 26px;
  line-height: 26px;
  padding: 0px 12px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
}
.el-menu--horizontal .el-menu .el-menu-item:hover,
.el-menu--horizontal .el-menu .el-submenu__title:hover {
  background-color: #f0f0f0;
  color: rgba(0, 0, 0, 0.65);
}
.el-submenu__title {
  padding: 0px 16px;
}
.el-submenu .el-menu-item {
  min-width: 96px;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}
.el-submenu__icon-arrow {
  right: 10px;
  margin-top: -5px;
}
</style>
