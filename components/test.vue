<template>
  <div class="sub-header">
    <div class="banxin sub-header-main">
      <div class="sub-header-main-left">
        <img src="@/static/images/logo.png" alt="" />
        <span class="circle"></span>
        <h4>{{ typeName }}</h4>
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
          <span>|</span>
          <a-input placeholder="输入搜索的内容" />
          <div class="search">搜索</div>
        </div>
      </div>
      <div class="sub-header-main-right">
        <img src="@/static/images/pen.png" alt="" />
        <span class="one-span">我要投稿</span>
        <img src="@/static/images/bag.png" alt="" />
        <span>购买杂志</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["typeName"],
  data() {
    return {
      defaultValue: "搜专业",
      typeData: ["应用", "模板", "应用", "模板模板"],
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
    };
  },
  watch: {},
  methods: {
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
};
</script>
<style lang="less" scoped>
.sub-header {
  height: 121px;
  background: #ffffff;
  .sub-header-main {
    display: flex;
    justify-content: space-between;
    padding-top: 36px;
    .sub-header-main-left {
      display: flex;
      align-items: center;
      img {
        width: 56px;
        height: 24px;
      }
      .circle {
        width: 4px;
        height: 4px;
        background: rgba(2, 2, 2, 0.85);
        border-radius: 50%;
        margin: 20px 10px 0px 10px;
      }
      h4 {
        font-size: 24px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
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
        span {
          font-size: 20px;
          color: #dadada;
          margin-top: -2px;
        }

        .ant-input {
          width: 286px;
          background-color: #f2f3f5;
          border: none;
        }
        .ant-input:focus {
          border-color: none;
          box-shadow: none;
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
    }
    .sub-header-main-right {
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
        color: #232323;
      }
      .one-span {
        margin-right: 32px;
      }
    }
  }
}
</style>
