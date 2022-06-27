
<template>
  <div class="sub-header" ref="sigleheader" id="sub-header">
    <div class="banxin sub-header-main">
      <div class="sub-header-main-left">
        <nuxt-link to="/">
          <img src="@/static/images/logo.png" alt="" @click="tabIndex"/>
        </nuxt-link>
        <ul>
          <li
            v-for="(item, index) in tabList"
            :key="item"
            @click="oNitem(index, item)"
            :class="current == index ? 'active' : ''"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="sub-header-main-right">
        <div class="search-box">
          <input placeholder="输入搜索的内容" v-model="searchValue" />
          <div class="search" @click="onSearch">搜索</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tabList = [
  "听课程",
  "找方法",
  "学案例",
  "见大咖",
  "读杂志",
  "逛书店",
  "淘资讯",
  "看专题",
];
export default {
  data() {
    return {
      searchValue: "",
      tabList,
      current: this.$store.state.subTabIndex
        ? this.$store.state.subTabIndex
        : -1,
    };
  },
  watch: {},
  mounted() {
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      var X = 0.8; //行高缩小比例
      // 页面滚动高度
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      if (scrollTop >= 37) {
        // this.$refs.sigleheader["style"].top = 0 + "px";
        this.$refs.sigleheader["style"].transition = "all 0.5s ease";
        $(".sub-header").addClass("middle-header");
      } else {
        // this.$refs.sigleheader["style"].top = 37 + "px";
        // this.$refs.sigleheader["style"].height = `${84 - X * scrollTop}px`;
        this.$refs.sigleheader["style"].transition = "all 0.5s ease";
        $(".sub-header").removeClass("middle-header");
      }
    },
    //点击搜索跳转
    onSearch() {
      console.log(this.searchValue);
      if (this.searchValue != "") {
        this.$router.push({
          name: "search",
          // path: "/search",
          query: { keyword: this.searchValue },
          // params: {
          //   keyword: this.searchValue,
          // },
        });
      } else {
        this.$message.error("请输入搜索词");
      }
    },
    //点击每一项菜单
    oNitem(index, item) {
      document.body.scrollTop = 0;
      this.current = index;
      this.$store.commit("setSubTabIndex", index);
      if (index == 1) {
        this.$router.push({
          name: "zff",
        });
      } else if (index == 2) {
        this.$router.push({
          name: "xal",
        });
      } else if (index == 3) {
        this.$router.push({
          name: "jdk",
        });
      } else if (index == 4) {
        this.$router.push({
          name: "zz",
        });
      } else if (index == 5) {
        this.$router.push({
          name: "gsd",
          // query: { id: index, type: item },
          // params: {
          //   type: item,
          // },
        });
      } else if (index == 6) {
        this.$router.push({
          name: "tzx",
        });
      } else if (index == 7) {
        this.$router.push({
          name: "kzt",
        });
      }
    },
    //点击图标返回首页
    tabIndex() {
      this.$store.commit("setTabIndex", 0);
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.active {
  color: #ed6d38 !important;
}
.middle-header {
  position: fixed;
  top: 0px !important;
  left: 0;
  padding: 16px 0px !important;
  z-index: 100000 !important;
  transition: all 0.5s ease !important;
  animation: fadeInDown 0.5s both 0.2s;
}
.sub-header {
  width: 100%;
  padding: 24px 0px;
  background: #ffffff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: fixed;
  top: 37px;
  left: 0px;
  z-index: 998;
  .sub-header-main {
    display: flex;
    justify-content: space-between;
    .sub-header-main-left {
      display: flex;
      align-items: center;
      a {
        display: flex;
      }
      img {
        width: 48px;
        height: 20px;
        border-radius: 0px;
      }

      ul {
        display: flex;
        cursor: pointer;
        li {
          margin-left: 32px;
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
          &:nth-child(1) {
            display: none;
          }
        }
      }
    }
    .sub-header-main-right {
      .search-box {
        width: 244px;
        height: 36px;
        background: #f2f3f5;
        border-radius: 4px 0px 0px 4px;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        input {
          width: 176px;
          height: 36px;
          background: #f7f8fa;
          border: none;
          border-radius: 4px 0px 0px 4px;
          text-indent: 12px;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
        }
        input:focus {
          outline: none;
          border: none;
          box-shadow: none;
        }
        input:focus {
          outline: none;
          border: none;
          box-shadow: none;
        }
        input::-webkit-input-placeholder {
          /* WebKit browsers */
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: rgba(0, 0, 0, 0.25);
          font-size: 14px;
        }

        .search {
          width: 68px;
          height: 36px;
          background: linear-gradient(
            90deg,
            #f34250 0%,
            #f28a51 82%,
            #ff7d3b 100%
          );
          border-radius: 0px 4px 4px 0px;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 36px;
          position: absolute;
          top: 0px;
          right: 0px;
        }
      }
    }
  }
}
</style>
