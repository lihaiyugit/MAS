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
              <h2>见大咖</h2>
            </div>
            <div class="master-list">
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5>汤谷良</h5>
                    <span>（对外经贸大学国际商学院教授，博士生导师）</span>
                  </div>
                  <div class="mid">
                    <span>研究领域</span>
                    <span class="domain">管理会计</span>
                    <span class="domain">人工智能</span>
                  </div>
                  <p>
                    破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                  </p>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5>汤谷良</h5>
                    <span>（对外经贸大学国际商学院教授，博士生导师）</span>
                  </div>
                  <div class="mid">
                    <span>研究领域</span>
                    <span class="domain">管理会计</span>
                    <span class="domain">人工智能</span>
                  </div>
                  <p>
                    破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                  </p>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5>汤谷良</h5>
                    <span>（对外经贸大学国际商学院教授，博士生导师）</span>
                  </div>
                  <div class="mid">
                    <span>研究领域</span>
                    <span class="domain">管理会计</span>
                    <span class="domain">人工智能</span>
                  </div>
                  <p>
                    破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                  </p>
                </dd>
              </dl>
              <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5>汤谷良</h5>
                    <span>（对外经贸大学国际商学院教授，博士生导师）</span>
                  </div>
                  <div class="mid">
                    <span>研究领域</span>
                    <span class="domain">管理会计</span>
                    <span class="domain">人工智能</span>
                  </div>
                  <p>
                    破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                  </p>
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
        path: `/jdk/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";

</style>
