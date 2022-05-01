<template>
  <div class="activity-container banxin">
    <div class="banner">
      <img src="../../static/images/ad-banner.png" alt="" />
    </div>
    <div class="tabbar">
      <span class="screen">活动筛选：</span>
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
            v-for="(item, index) in timeData"
            :key="index"
            :class="current == index ? 'active' : ''"
            @click="cutValue(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="select-group">
        <div class="input-group" @click="typeClick">
          <span class="title">{{ typeValue }}</span>
          <img
            :class="typeShow ? 'select_img_rotate' : ''"
            src="https://b.yzcdn.cn/static/app-web/img/ying-yong-revision/arrow-down.png"
            alt=""
          />
        </div>
        <ul class="select-item" v-show="typeShow">
          <li
            v-for="(item, index) in typeData"
            :key="index"
            :class="typeCurrent == index ? 'active' : ''"
            @click="typeFn(item, index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="list">
      <dl>
        <dt>
          <img src="../../static/images/ad-img.png" alt="" />
        </dt>
        <dd>
          <h5>数字化企业与管理会计体系转型研讨会</h5>
          <p class="twoline">
            《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章…
          </p>
          <div class="dd-base">
            <div class="left state-one">报名中</div>
            <div class="right">
              <img class="time" src="../../static/images/time.png" alt="" />
              <span>2022-03-14</span>
              <img class="online" src="../../static/images/online.png" alt="" />
              <span>线上</span>
            </div>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../static/images/ad-img.png" alt="" />
        </dt>
        <dd>
          <h5>数字化企业与管理会计体系转型研讨会</h5>
          <p class="twoline">
            《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章…
          </p>
          <div class="dd-base">
            <div class="left state-two">已结束</div>
            <div class="right">
              <img class="time" src="../../static/images/time.png" alt="" />
              <span>2022-03-14</span>
              <img class="map" src="../../static/images/map.png" alt="" />
              <span>北京</span>
            </div>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../static/images/ad-img.png" alt="" />
        </dt>
        <dd>
          <h5>数字化企业与管理会计体系转型研讨会</h5>
          <p class="twoline">
            《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章…
          </p>
          <div class="dd-base">
            <div class="left state-two">已结束</div>
            <div class="right">
              <img class="time" src="../../static/images/time.png" alt="" />
              <span>2022-03-14</span>
              <img class="map" src="../../static/images/map.png" alt="" />
              <span>北京</span>
            </div>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <img src="../../static/images/ad-img.png" alt="" />
        </dt>
        <dd>
          <h5>数字化企业与管理会计体系转型研讨会</h5>
          <p class="twoline">
            《管理会计研究》杂志的订阅既可以订阅电子刊也可以订阅纸质刊，也可以就杂志单篇文章订阅。该杂志以管理会计理论和实践创新为基础，通过专业的深度文章…
          </p>
          <div class="dd-base">
            <div class="left state-two">已结束</div>
            <div class="right">
              <img class="time" src="../../static/images/time.png" alt="" />
              <span>2022-03-14</span>
              <img class="map" src="../../static/images/map.png" alt="" />
              <span>北京</span>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <button class="more" @click="moreFn">查看更多</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeData: ["全部时间", "本周", "本月"], //时间下拉菜单
      defaultValue: "", //时间默认值
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
      typeData: ["全部状态", "报名中", "活动中", "已结束"], //状态下拉菜单
      typeValue: "", //状态默认值
      typeShow: false, //是否展示
      typeCurrent: "-1", //下拉默认选中项
      listData: [], //总列表数据
      showData: [], //展示数据
      pageIndex: 1, //当前页
      pageSize: 3, //当前页
    };
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    //请求接口总数
    //  this.listData=res.data.task;
    // this.showData=res.data.task.slice((this.pageIndex-1) * this.pageSize, this.pageIndex * this.pageSize),
  },
  mounted() {
    this.defaultValue = this.timeData[0];
    this.typeValue = this.typeData[0];
  },
  methods: {
    //时间类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击时间下拉框
    cutValue(item, index) {
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
    //状态
    typeClick() {
      this.typeShow = !this.typeShow; //点击显示或隐藏下拉框
    },
    //点击状态下拉框
    typeFn(item, index) {
      this.typeShow = false;
      this.typeValue = item;
      this.typeCurrent = index;
    },
    //点击查看更多
    moreFn() {
    //   let that = this;
    //   let pageIndex = that.pageIndex + 1;
    //   if (that.listData.length / that.pageSize > that.pageIndex) {
    //     that.showData = that.listData.slice(
    //       (pageIndex - 1) * that.pageSize,
    //       pageIndex * that.pageSize
    //     );
    //     that.pageIndex = pageIndex;
    //   } else {
    //     console.log("最后一页了哟！");
    //   }
    },
  },
};
</script>
<style lang="less" scoped>
.activity-container {
  padding: 20px 0px 40px;
  .banner {
    height: 231px;
  }
  .tabbar {
    height: 59px;
    background: #fafafb;
    border-radius: 2px;
    margin: 30px 0px 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    .screen {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 12px;
      padding: 0px 34px 0px 46px;
    }
    .select-group {
      height: 100%;
      cursor: pointer;
      margin-right: 48px;
      .input-group {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 0px 0px 12px;
        .title {
          font-weight: 500;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
        }
        img {
          width: 10px;
          height: 6px;
          margin-left: 5px;
        }
        .select_img_rotate {
          transform: rotate(180deg);
          transition: transform 0.25s, -webkit-transform 0.25s,
            -moz-transform 0.25s;
        }
      }
      .select-item {
        position: relative;
        z-index: 997;
        width: 96px;
        padding: 4px 0px;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
          0px 6px 16px 0px rgba(0, 0, 0, 0.08),
          0px 3px 6px -4px rgba(0, 0, 0, 0.12);
        li {
          width: 77px;
          height: 26px;
          background-color: #fff;
          display: block;
          outline: none;
          padding: 0px 7px 0px 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 12px;
          font-weight: 400;
          text-align: left;
          color: rgba(0, 0, 0, 0.65);
          line-height: 26px;
        }
        li:hover {
          background-color: #edf4ff;
        }
        li.active {
          font-weight: 500;
          background: #f2f3f5;
        }
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    dl {
      width: 526px;
      margin-right: 46px;
      margin-bottom: 30px;
      dt {
        height: 316px;
        img {
          border-radius: 6px 6px 0px 0px;
        }
      }
      dd {
        width: 484px;
        height: 150px;
        border: 1px solid #eeeeee;
        border-radius: 0px 0px 6px 6px;
        padding: 20px;
        h5 {
          font-size: 18px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
        }
        p {
          width: 471px;
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 20px;
          margin: 15px 0px;
        }
        .dd-base {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed#eeeeee;
          padding-top: 30px;
          .left {
            width: 56px;
            height: 22px;
            border-radius: 2px;
            font-size: 14px;
            color: #ffffff;
            font-weight: 400;
            text-align: center;
            line-height: 21px;
          }
          .state-one {
            background: #ed6d38;
          }
          .state-two {
            background: #cccccc;
          }
          .right {
            display: flex;
            align-items: center;
            img {
              margin-top: 2px;
            }
            .time {
              width: 12px;
              height: 12px;
            }
            .map {
              width: 9px;
              height: 11px;
              margin-left: 7px;
            }
            .online {
              width: 12px;
              height: 10px;
              border-radius: 0px;
              margin-left: 7px;
            }
            span {
              font-size: 12px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.25);
              line-height: 17px;
              margin-left: 2px;
            }
          }
        }
      }
      &:nth-child(2n) {
        margin-right: 0px;
      }
    }
  }
  .more {
    width: 146px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #ed6d38;
    border-radius: 2px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    font-size: 14px;
    font-weight: 400;
    color: #ed6d38;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 17px auto;
  }
}
</style>
