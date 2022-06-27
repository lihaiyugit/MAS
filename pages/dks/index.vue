<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/master.png" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
          <div class="filtrate-box">
            <span class="text">筛选：</span>
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
            <div class="search-box">
              <input placeholder="输入搜索的内容" v-model="searchValue" />
              <img
                class="search"
                src="../../static/images/way/search.png"
                @click="onSearch"
                alt=""
              />
            </div>
          </div>
          <div class="list-box">
            <div class="list-title">
              <h2>大咖说</h2>
            </div>
            <div class="master-list">
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="twoline">
                      中国石化张少峰：构建一流数智化财务三大主张
                    </h5>
                    <p class="twoline">
                      破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span
                        >刘跃珍
                        中国石油天然气集团有限公司总会计师、党组成员</span
                      >
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">2022-03-14</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="twoline">
                      中国石化张少峰：构建一流数智化财务三大主张
                    </h5>
                    <p class="twoline">
                      破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span
                        >刘跃珍
                        中国石油天然气集团有限公司总会计师、党组成员</span
                      >
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">2022-03-14</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="twoline">
                      中国石化张少峰：构建一流数智化财务三大主张
                    </h5>
                    <p class="twoline">
                      破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span
                        >刘跃珍
                        中国石油天然气集团有限公司总会计师、党组成员</span
                      >
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">2022-03-14</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="twoline">
                      中国石化张少峰：构建一流数智化财务三大主张
                    </h5>
                    <p class="twoline">
                      破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span
                        >刘跃珍
                        中国石油天然气集团有限公司总会计师、党组成员</span
                      >
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">2022-03-14</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="more-btn">查看更多</div>
            </div>
          </div>
        </div>
        <!-- 页面右侧内容 -->
        <ColumnR />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultValue: "人物名称",
      typeData: ["人物名称", "研究领域", "著作", "书籍"],
      selectList: false, //先将下拉框隐藏
      current: "0", //下拉默认选中项
      searchValue: "",
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
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {
    //类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击下拉框
    cutValue(item, index) {
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
    //点击搜索跳转
    onSearch() {
      console.log(this.searchValue);
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
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/dks/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";
.master-list dd {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 156px;
  .top {
    display: unset !important;
    p {
      margin-top: 12px;
    }
  }
  .base {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .base-left {
      display: flex;
      align-items: center;
      span {
        font-size: 13px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 14px;
      }
    }

    .base-right {
      display: flex;
      align-items: center;

      .time {
        width: 12px;
        height: 12px;
      }

      .text {
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.25);
        margin-top: -2px;
        margin-left: 2px;
      }
    }
  }
}
</style>
