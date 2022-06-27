<template>
  <div class="sub-header" ref="subHeader">
    <div class="banxin container">
      <div class="content-top">
        <nuxt-link to="/">
          <img :src="require('@/static/images/logo.png')" alt="" />
        </nuxt-link>
        <div class="search-box">
          <div class="select-group" v-close>
            <div class="input-group" @click="selectClick">
              <span class="title">{{ defaultValue }}</span>
              <img
                :class="selectList ? 'select_img_rotate' : ''"
                src="https://b.yzcdn.cn/static/app-web/img/ying-yong-revision/arrow-down.png"
                alt=""
              />
            </div>
            <ul class="select-item" v-show="selectList">
              <li
                v-for="(item, index) in typeData"
                :key="index"
                :class="current == index ? 'active' : ''"
                @click="cutValue(item, index)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <span class="line"></span>
          <input placeholder="输入搜索的内容" v-model="searchValue" />
          <div class="search" @click="onSearch">搜索</div>
        </div>
        <p>
          <span
            v-for="(item, index) in hotWord"
            :key="index"
            @click="onItem(item.mas_tag_id, item.mas_tag_name)"
            >{{ item.mas_tag_name }}</span
          >
          <!-- <span @click="onItem(2, '站内热词')">站内热词</span>
          <span @click="onItem(3, '站内热词')">站内热词</span>
          <span @click="onItem(4, '站内热词')">站内热词</span> -->
        </p>
      </div>
      <div class="content-base">
        <div class="base-left">
          <nuxt-link to="/kzt/zghx" class="span">中国化学专题</nuxt-link>
          <nuxt-link to="/kzt/zsh" class="span">中国石油专题</nuxt-link>
          <nuxt-link to="/hyfw">
            <img src="/images/giftbag.png" alt="" />
          </nuxt-link>
        </div>
        <div class="base-right">
          <img src="/images/pen.png" alt="" />
          <nuxt-link to="/wytg" class="one-span">我要投稿</nuxt-link>
          <img src="/images/bag.png" alt="" />
          <nuxt-link to="/zz">购买杂志</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotWord: {
      type: Array,
      // default() {
      //   return [];
      // }
    }, // 热词数据
  },
  data() {
    return {
      defaultValue: "搜专业",
      typeData: ["应用", "模板", "应用", "模板模板"],
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
      searchValue: "", //搜索词
    };
  },
  //点击空白处关闭下拉框
  directives: {
    close: {
      inserted(el, binding, vnode) {
        window.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.selectList = false;
          }
        });
      },
    },
  },
  watch: {},
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
      if (scrollTop >= 37) {
        // this.$refs.subHeader["style"].top = 0 + "px";
        this.$refs.subHeader["style"].transition = "all 0.5s ease";
        $(".sub-header").addClass("sticky");
      } else {
        // this.$refs.subHeader.style.top = 37 + "px";
        this.$refs.subHeader["style"].transition = "all 0.5s ease";
        $(".sub-header").removeClass("sticky");
        console.log("===");
      }
    },
    //点击搜索跳转
    onSearch() {
      if (this.searchValue != "") {
        console.log("===");
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
    //点击站内热词
    onItem(index, val) {
      this.$router.push({
        path: "/search",
        query: { keyword: val, index: index },
        // params: {
        //   type: item,
        // },
      });
    },
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    cutValue(item, index) {
      console.log(item, index);
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300000;
  transition: all 0.5s ease;
  animation: fadeInDown 0.5s both 0.2s;
}
.sticky .content-top {
  padding: 14px 0px !important;
}
.sticky .content-base {
  display: none !important;
}

.sub-header {
  width: 100%;
  //二级菜单固定
  position: fixed;
  top: 37px;
  left: 0px;
  background: #ffffff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.1);
  z-index: 998;
  .container {
    .content-top {
      display: flex;
      align-items: center;
      padding: 27px 0px 17px;
      img {
        width: 62px;
        height: 26px;
        border-radius: 0px;
      }

      .search-box {
        width: 422px;
        height: 40px;
        background: #f7f8fa;
        border-radius: 4px 0px 0px 4px;
        margin: 0px 27px 0px 30px;
        display: flex;
        align-items: center;
        position: relative;
        .line {
          width: 1px;
          height: 16px;
          background: #dadada;
        }
        input {
          width: 250px;
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
          width: 87px;
          height: 40px;
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
          line-height: 40px;
          position: absolute;
          top: 0px;
          right: 0px;
        }
      }
      .select-group {
        height: 100%;
        cursor: pointer;
        .input-group {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0px 12px 0px 15px;
          .title {
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
          }
          img {
            width: 13px;
            height: 7px;
            margin-left: 8px;
          }
          .select_img_rotate {
            transform: rotate(180deg);
            transition: transform 0.25s, -webkit-transform 0.25s,
              -moz-transform 0.25s;
          }
        }
        .select-item {
          position: relative;
          box-shadow: 0 2px 8px 0 rgb(200 201 204 / 50%);
          width: 100%;
          z-index: 2000;
          background-color: #fff;
          border-radius: 3px;
          font-size: 14px;
          li {
            background-color: #fff;
            display: block;
            outline: none;
            padding: 7px 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          li:hover {
            background-color: #edf4ff;
          }
          li.active {
            font-weight: 500;
            background-color: #f7f8fa;
          }
        }
      }
      p {
        font-size: 13px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        margin-bottom: 0px;
        span {
          margin-right: 25px;
          cursor: pointer;
        }
      }
    }
    .content-base {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .base-left {
        height: 47px;
        display: flex;
        align-items: center;
        .span {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 22px;
          margin-right: 40px;
        }
        img {
          width: 126px;
          height: 47px;
        }
      }
      .base-right {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
          margin-top: 2px;
        }
        span,
        a {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
        }
        .one-span {
          margin-right: 32px;
        }
      }
    }
  }
}
</style>
