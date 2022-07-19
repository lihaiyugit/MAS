<template>
  <div class="activity-container banxin">
    <div class="banner">
      <!-- <img src="@/static/images/hd-banner.png" alt="" /> -->
      <img :src="bannerArr[0].mas_banner_img" alt="" />
    </div>
    <div class="tabbar">
      <span class="screen">活动筛选：</span>
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
            v-for="(item, index) in timeData"
            :key="index"
            :class="current == index ? 'active' : ''"
            @click="cutValue(item, index)"
          >
            {{ item.val }}
          </li>
        </ul>
      </div>
      <div class="select-group" v-closeType>
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
      <dl
        v-for="(item, index) in listData"
        :key="index"
        @click="details(item.mas_activity_id)"
      >
        <dt>
          <img :src="item.mas_activity_img" alt="" />
        </dt>
        <dd>
          <h5>
            {{ item.mas_activity_title }}
          </h5>
          <div class="dd-base">
            <div
              class="left state-two"
              v-if="item.mas_activity_status == '已结束'"
            >
              {{ item.mas_activity_status }}
            </div>
            <div class="left state-one" v-else>
              {{ item.mas_activity_status }}
            </div>
            <div class="right" v-if="item.mas_activity_address_type==0">
              <img class="time" src="@/static/images/time.png" alt="" />
              <span>{{ item.mas_activity_starttime }}</span>
              <img class="online" src="@/static/images/online.png" alt="" />
              <span>线上</span>
            </div>
            <div class="right" v-else>
              <img class="time" src="@/static/images/time.png" alt="" />
              <span>{{ item.mas_activity_starttime }}</span>
              <img class="map" src="@/static/images/map.png" alt="" />
              <span>{{ item.mas_activity_address_type }}</span>
            </div>
          </div>
        </dd>
      </dl>
      <!-- <dl @click="details(2)">
        <dt>
          <img src="../../static/images/ad-img.png" alt="" />
        </dt>
        <dd>
          <h5>数字化企业与管理会计体系转型研讨会</h5>
          <div class="dd-base">
            <div class="left state-two">已结束</div>
            <div class="right">
              <img class="time" src="@/static/images/time.png" alt="" />
              <span>2022-03-14</span>
              <img class="map" src="../../static/images/map.png" alt="" />
              <span>北京</span>
            </div>
          </div>
        </dd>
      </dl>-->

    </div>
    <button class="more" v-show="!finished">查看更多</button>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      timeData: [
        { val: "全部时间", type: 0 },
        { val: "本周", type: 2 },
        { val: "本月", type: 1 },
      ], //时间下拉菜单
      defaultValue: "", //时间默认值
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
      typeData: ["全部状态", "报名中", "活动中", "已结束"], //状态下拉菜单
      typeValue: "", //状态默认值
      typeShow: false, //是否展示
      typeCurrent: "-1", //下拉默认选中项
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      listData: [], //总列表数据
      bannerArr: [], //banner图
      finished: false, //数据是否加载完成
      showlaoding: true, // 是否显示loading效果
      moretype: "", //加载更多 取值 ‘list’
      timeType: "", //查询时间 1 本月 2本周
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
    closeType: {
      inserted(el, binding, vnode) {
        window.addEventListener("click", (e) => {
          if (!el.contains(e.target)) {
            vnode.context.typeShow = false;
          }
        });
      },
    },
  },
  async asyncData({ $axios, store }) {
    let res = await $axios.notNeedlogin({
      className: "HomeController",
      classMethod: "activityList",
      data: {
        page: 1,
        limit: 6,
      },
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        listData: res.data.activityList.activityList,
        total: res.data.activityList.activityCount,
        showlaoding: false,
        finished: res.data.activityList.activityCount > 6 ? false : true,
      };
    }
  },
  mounted() {
    this.defaultValue = this.timeData[0].val;
    this.typeValue = this.typeData[0];
    //scroll事件并监听
    window.addEventListener("scroll", this.activityScroll);
  },
  methods: {
    //scroll事件并监听
    activityScroll() {
      //可视区域大小window.innerHeight
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop; //滚动高度
      //"文档高度"document.body.offsetHeight 327底部高度
      //判断是否滚动到底部
      if (scrollTop + window.innerHeight + 327 >= document.body.offsetHeight) {
        //327 表示距离底部多少的距离的开始触发loadmore效果
        if (!this.showlaoding && !this.finished) {
          //防止多次加载
          this.moretype = "list";
          this.moreFn();
        }
      }
    },
    //时间类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击时间下拉框
    cutValue(item, index) {
      this.pageIndex = 1;
      this.listData = [];
      this.moretype = "list";
      this.finished = false;
      this.selectList = false;
      this.defaultValue = item.val;
      this.current = index;
      this.timeType = item.type;
      this.getList();
    },
    //状态
    typeClick() {
      this.typeShow = !this.typeShow; //点击显示或隐藏下拉框
    },
    //点击状态下拉框
    typeFn(item, index) {
      this.pageIndex = 1;
      this.listData = [];
      this.moretype = "list";
      this.finished = false;
      this.typeShow = false;
      this.typeValue = item;
      this.typeCurrent = index;
      this.getList();
    },

    //点击查看更多
    moreFn() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //公共请求接口
    async commonData(pageIndex) {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          page: pageIndex,
          limit: this.pageSize,
          type: this.moretype,
          timeType: this.timeType > 0 ? this.timeType : "",
          status: this.typeCurrent > 0 ? this.typeCurrent : "",
        },
        className: "HomeController",
        classMethod: "activityList",
      });
      if (res.bol) {
        let activityArr = res.data.activityList;
        this.total = res.data.activityCount;
        this.showlaoding = false;
        if (this.total / this.pageSize > this.pageIndex) {
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        this.listData = this.listData.concat(activityArr);
      }
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/activity/${id}`,
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.activityScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.activity-container {
  padding: 30px 0px 40px;
  .banner {
    height: 160px;
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
      width: 96px;
      height: 100%;
      cursor: pointer;
      margin-right: 30px;
      .input-group {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0px 0px 0px 12px;
        .title {
          font-size: 14px;
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
      width: 346px;
      margin-right: 28px;
      margin-bottom: 30px;
      cursor: pointer;
      dt {
        height: 208px;
        img {
          border-radius: 0px;
        }
      }
      dd {
        padding: 24px 0px 26px 0px;
        width: 344px;
        border: 1px solid #eeeeee;
        border-radius: 0px 0px 6px 6px;
        margin-top: -4px;
        h5 {
          height: 48px;
          font-size: 16px;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
          padding: 0px 15px 25px 18px;
        }

        .dd-base {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px dashed#eeeeee;
          padding-top: 25px;
          .left {
            width: 56px;
            height: 22px;
            border-radius: 2px;
            font-size: 14px;
            color: #ffffff;
            font-weight: 400;
            text-align: center;
            line-height: 21px;
            margin-left: 20px;
          }
          .state-one {
            background: #fa6725;
          }
          .state-two {
            background: #cccccc;
          }
          .right {
            display: flex;
            align-items: center;
            margin-right: 20px;
            img {
              margin-top: 1px;
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
      &:nth-child(3n) {
        margin-right: 0px;
      }
    }
  }
  .more {
    width: 146px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #fa6725;
    border-radius: 2px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    font-size: 14px;
    font-weight: 400;
    color: #fa6725;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 17px auto;
    cursor: pointer;
    &:hover {
      background: #fa6725;
      color: #fff;
      border: transparent;
    }
  }
}
</style>
