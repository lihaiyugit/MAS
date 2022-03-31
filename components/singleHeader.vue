


<template>
  <div class="sub-header">
    <div class="banxin sub-header-main">
      <div class="sub-header-main-left">
        <img src="@/static/images/logo.png" alt="" />
        <ul>
          <li v-for="item in tabList" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="sub-header-main-right">
        <div class="search-box">
          <input placeholder="输入搜索的内容" />
          <div class="search">搜索</div>
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
  "淘咨讯",
  "见大咖",
  "读杂志",
  "看专题",
];
export default {
  data() {
    return {
      tabList,
    };
  },
  watch: {},
  methods: {
    onSearch(value) {
      console.log(value, "value");
    },
  },
};
</script>
<style lang="less" scoped>
.sub-header {
  height: 84px;
  background: #ffffff;
  border-top: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  .sub-header-main {
    display: flex;
    justify-content: space-between;
    .sub-header-main-left {
      display: flex;
      align-items: center;
      img {
        width: 48px;
        height: 20px;
        border-radius: 0px;
      }

      ul {
        display: flex;
        li {
          margin-left: 32px;
          font-size: 14px;
          font-weight: 500;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
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

        input {
          width: 176px;
          height: 36px;
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
