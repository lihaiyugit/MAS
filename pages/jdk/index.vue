<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img :src="bannerArr[0].mas_banner_img" alt="" />
            <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
          <div class="filtrate-box">
            <!-- <span class="text">筛选：</span>
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
            </div> -->
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
          <div class="list-box-new">
            <div class="list-title">
              <h2>见大咖</h2>
            </div>
            <div class="master-list-new" v-if="listShowType==1">
              <dl
                v-for="(item, index) in listData"
                :key="index"
                @click="details(item.mas_master_user_id)"
              >
                <dt>
                  <img :src="item.mas_master_photo" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5>{{ item.mas_master_user_name }}</h5>
                    <span>{{ item.mas_master_duty }}</span>
                  </div>
                  <div class="mid">
                    <span>研究领域</span>
                    <span
                      class="domain"
                      v-for="(keyIt, keyIn) in item.newData"
                      :key="keyIn"
                      >{{ keyIt }}</span
                    >
                    <!-- <span class="domain">人工智能</span> -->
                  </div>
                  <!-- <p>{{item.mas_master_golden}}</p> -->
                  <p>
                    破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                  </p>
                </dd>
              </dl>
              <div class="more-btn" @click="moreFn" v-show="!finished">
              查看更多
            </div>
            </div>
             <div class="no-data-box" v-if="listShowType==2">
              <img src="@/static/images/no-data.png" alt="" />
              <div class="tip">目前还没有内容哦～</div>
            </div>
          </div>
        </div>
        <!-- 页面右侧内容 -->
        <div class="content-container-main-right">
          <!-- 热门推荐 -->
          <HotRecommend :hotRecommend="hotRecommend" />
          <!-- 杂志模块 -->
          <MagazineModule :magazineLeft="magazineLeft"  style="margin-top:32px;"/>
        </div>
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
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      listData: [], //总列表数据
      bannerArr: [], //banner图
      finished: false, //数据是否加载完成
      showlaoding: true, // 是否显示loading效果
      moretype: "", //加载更多 取值 ‘list’
      keyArr: [], //字符串转数组
      hotRecommend: [], //热词推荐
      magazineLeft: {}, //左侧杂志数据
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
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
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
        page: 1,
        limit: 6,
      },
      className: "MasterController",
      classMethod: "master",
    });
    if (res.bol) {
      res.data.masterList.master.forEach((item) => {
        let newData = [];
        newData = item.tag_name.split(",");
        item.newData = newData;
      });
      return {
        listData: res.data.masterList.master,
        bannerArr: res.data.bannerImg,
        total: res.data.masterList.masterCount,
        hotRecommend: res.data.hotspot,
        magazineLeft: res.data.magazine,
        showlaoding: false,
        finished: res.data.masterList.masterCount > 6 ? false : true,
      };
    }
  },
  mounted() {
    // scroll事件并监听
    window.addEventListener("scroll", this.jdkScroll);
  },
  methods: {
    //scroll事件并监听
    jdkScroll() {
      //可视区域大小window.innerHeight
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop; //滚动高度
      //"文档高度"document.body.offsetHeight 327底部高度
      //判断是否滚动到底部
      if (scrollTop + window.innerHeight + 327*1.5 >= document.body.offsetHeight) {
        //327 表示距离底部多少的距离的开始触发loadmore效果
        if (!this.showlaoding && !this.finished) {
          //防止多次加载
          this.moretype = "list";
          this.moreFn();
        }
      }
    },
    //类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击下拉框
    cutValue(item, index) {
      this.searchValue = "";
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
    //点击搜索跳转
    onSearch() {
      this.pageIndex = 1;
      this.listData = [];
      this.moretype = "list";
      this.listShowType=1;
      if (this.searchValue != "") {
        this.getList();
      } else {
        this.$message.error("请输入搜索词");
      }
    },

    //滑动加载
    moreFn() {
      let pageIndex = this.pageIndex + 1;
      this.commonData(pageIndex);
    },
    //根据条件搜索
    getList() {
      this.commonData(this.pageIndex);
    },
    //根据条件搜索
    async commonData(pageIndex) {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId:this.$route.query.menuId,
          // selectId: parseInt(this.current + 1),
          selectVal: this.searchValue,
          page: pageIndex,
          limit: this.pageSize,
          type: this.moretype,
        },
        className: "MasterController",
        classMethod: "master",
      });
      if (res.bol) {
        res.data.master.forEach((item) => {
          let newData = [];
          newData = item.tag_name.split(",");
          item.newData = newData;
        });
        let masterArr = res.data.master;
        this.total = res.data.masterCount;
        this.listShowType = this.total ? 1 : 2;
        if (this.total / this.pageSize > this.pageIndex) {
          this.showlaoding = false;
          this.finished = false;
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(masterArr);
      }
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/jdk/${id}`,
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.jdkScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";

</style>
