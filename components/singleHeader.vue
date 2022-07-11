
<template>
  <div class="sub-header" ref="sigleheader" id="sub-header">
    <div class="banxin sub-header-main">
      <div class="sub-header-main-left">
        <nuxt-link to="/">
          <img src="@/static/images/logo.png" alt="" />
        </nuxt-link>
        <ul>
          <li
            v-for="(item, index) in tabList"
            :key="index"
            @click="oNitem(index, item)"
            :class="current == item.mas_menu_id ? 'active' : ''"
          >
            <!-- :class="current == item.mas_menu_id ? 'active' : ''" -->
            {{ item.mas_menu_name }}
            <!-- <nuxt-link
              :to="{
                name: item.mas_menu_url,
                params:{menuId:item.mas_menu_id}
              }"
              >{{ item.mas_menu_name }}</nuxt-link
            > -->
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
export default {
  data() {
    return {
      searchValue: "",
      tabList: [],
      current: this.$store.state.subTabId ? this.$store.state.subTabId : 0,
    };
  },
  async fetch() {
    if (this.$store.state.tabList == undefined) {
      let res = await this.$axios.notNeedlogin({
        className: "NavigationController",
        classMethod: "getLeftNavigation",
      });
      if (res.bol) {
        console.log(res.data, "res.data");
        this.$store.commit("setTabList", res.data);
        return (this.tabList = res.data);
      }
    } else {
      this.tabList = this.$store.state.tabList;
    }
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
      // console.log(item, "=item===");
      document.body.scrollTop = 0;
      this.$store.commit("setSubTabId", item.mas_menu_id);
      this.$router.push({
        name: item.mas_menu_url,
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.nuxt-link-active {
  text-decoration: none;
  color: #fa6725 !important;
}
.active {
  color: #fa6725 !important;
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
          a {
            color: rgba(0, 0, 0, 0.85);
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
            #ff4e5c 0%,
            #ff9261 82%,
            #fa6725 100%
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
