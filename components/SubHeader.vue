<template>
  <div class="sub-header" ref="subHeader">
    <div class="banxin container">
      <div class="content-top">
        <img :src="require('@/static/images/logo.png')" alt="" />
        <div class="search-box">
          <div class="select-group">
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
          <span class="line">|</span>
          <input placeholder="输入搜索的内容" />
          <div class="search">搜索</div>
        </div>
        <p>
          <span>9.9会员</span>
          <span>大数据</span>
          <span>企业管理</span>
          <span>财务管理</span>
        </p>
      </div>
      <div class="content-base">
        <div class="base-left">
          <span>管理会计研究</span>
          <span>开讲啦</span>
          <span>精品课程</span>
          <img src="/images/giftbag.png" alt="" />
        </div>
        <div class="base-right">
          <img src="/images/pen.png" alt="" />
          <span class="one-span">我要投稿</span>
          <img src="/images/bag.png" alt="" />
          <span>购买杂志</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultValue: "搜专业",
      typeData: ["应用", "模板", "应用", "模板模板"],
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项

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
      // 页面滚动高度
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      if (scrollTop >= clientHeight / 2) {
        // this.defaultStyle = this.fixed;
        this.$refs.subHeader["style"].top = 0 + "px";
        this.$refs.subHeader["style"].transition = "all 0.8s ease 0s";
      } else {
        // this.defaultStyle = this.isfixed;
        this.$refs.subHeader.style.top = 37 + "px";
        this.$refs.subHeader["style"].transition = "all 0.8s ease 0s";
      }
    },
    onSearch(value) {
      console.log(value, "value");
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
.sub-header {
  width: 100%;
  height: 167px;
  position: fixed;
  top: 37px;
  left: 0px;
  background: #ffffff;
  z-index: 998;
  .container {
    padding-top: 38px;
    .content-top {
      display: flex;
      align-items: center;
      img {
        width: 84px;
        height: 36px;
        border-radius: 0px;
      }

      .search-box {
        width: 476px;
        height: 46px;
        background: #f2f3f5;
        border-radius: 4px 0px 0px 4px;
        margin: 0px 27px;
        display: flex;
        align-items: center;
        position: relative;
        .line {
          font-size: 20px;
          color: #dadada;
          margin-top: -6px;
        }
        input {
          width: 286px;
          background-color: #f2f3f5;
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
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
        input:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
        input::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
        input:-ms-input-placeholder {
          /* Internet Explorer 10+ */
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }

        .search {
          width: 87px;
          height: 46px;
          background: linear-gradient(
            90deg,
            #f34250 0%,
            #f28a51 82%,
            #ff7d3b 100%
          );
          border-radius: 0px 4px 4px 0px;
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 46px;
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
          height: 45px;
          padding: 0px 12px 0px 15px;
          .title {
            font-size: 16px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
          }
          img {
            width: 16px;
            height: 16px;
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
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 46px;
        margin-bottom: 0px;

        span {
          margin-right: 23px;
        }
      }
    }
    .content-base {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 34px;

      .base-left {
        height: 47px;
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          line-height: 22px;
          margin-right: 45px;
        }
        img {
          width: 126px;
          height: 47px;
        }
      }
      .base-right {
        display: flex;
        align-items: center;
        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
          margin-top: 2px;
        }
        span {
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
