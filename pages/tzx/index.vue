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
          <div class="list-box-new">
            <ul class="tabs">
              <li
                :class="tabActive == index ? 'tabActive' : ''"
                v-for="(item, index) in tabs"
                :key="index"
                @click="onTab(index, item.mas_article_type_id)"
              >
                {{ item.mas_article_type_name }}
              </li>
            </ul>
            <div class="content-container-list" v-if="listShowType == 1">
              <dl
                v-for="(item, index) in listData"
                :key="index"
                @click="details(item.mas_article_id)"
              >
                <dt>
                  <img :src="item.mas_article_img" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h3 class="twoline">
                      {{ item.mas_article_title }}
                    </h3>
                    <p class="oneline">
                      {{ item.mas_article_introduce }}
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <div
                        class="pay"
                        v-if="item.mas_article_details_type == 1"
                      >
                        付费
                      </div>
                      <img src="@/static/images/way/pen.png" alt="" />
                      <span>{{ item.mas_article_author }}</span>
                    </div>

                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">{{ item.mas_article_addtime }}</span>
                      <img src="@/static/images/chat.png" alt="" class="chat" />
                      <span class="text">{{ item.commont_num }}</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <div class="more-btn" v-show="!finished">查看更多</div>
            </div>
            <div class="no-data-box" v-if="listShowType == 2">
              <img src="@/static/images/no-data.png" alt="" />
              <div class="tip">目前还没有内容哦～</div>
            </div>
          </div>
        </div>
        <!-- 左侧内容 -->
        <ContainerRight
          :hotRecommend="hotRecommend"
          :magazineLeft="magazineLeft"
          :activity="activity"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [], //文章类型
      tabActive: 0, //文章类型
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      bannerArr: [], //banner图
      hotRecommend: [], //左侧热点推荐
      magazineLeft: {}, //左侧杂志数据
      activity: [], //左侧活动
      showlaoding: true, // 是否显示loading效果
      finished: false, //数据是否加载完毕
      articleTypeId: "", //文章类型
      moretype: "", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: query.menuId,
        page: 1,
        limit: 6,
      },
      className: "ArticleController",
      classMethod: "tzx",
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        tabs: res.data.articleType,
        listData: res.data.articleList.articleList,
        total: res.data.articleList.articleCount,
        hotRecommend: res.data.hostpot,
        magazineLeft: res.data.magazine,
        activity: res.data.activity,
        showlaoding: false,
        finished: res.data.articleList.articleCount > 6 ? false : true,
      };
    }
  },
  beforeRouteLeave(to, from, next) {
    //取消二级菜单高亮
    if (to.name == "activity-id" || to.name == "activity") {
      this.$store.commit("setSubTabId", "");
    }
    next();
  },
  mounted() {
    // scroll事件并监听
    window.addEventListener("scroll", this.tzxScroll);
  },

  methods: {
    //scroll事件并监听
    tzxScroll() {
      //可视区域大小window.innerHeight
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop; //滚动高度
      //"文档高度"document.body.offsetHeight 327底部高度
      //判断是否滚动到底部
      if (
        scrollTop + window.innerHeight + 327 * 1.5 >=
        document.body.offsetHeight
      ) {
        //327 表示距离底部多少的距离的开始触发loadmore效果
        if (!this.showlaoding && !this.finished) {
          //防止多次加载
          this.moretype = "list";
          this.moreFn();
        }
      }
    },
    //点击tabs类型
    onTab(index, typeId) {
      this.pageIndex = 1;
      this.listShowType = 1;
      this.finished = false;
      this.listData = [];
      this.moretype = "list";
      this.tabActive = index;
      this.articleTypeId = typeId;
      this.getList();
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/tzx/${id}`,
      });
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
    //公共请求接口
    async commonData(pageIndex) {
      this.showlaoding = true;
      let res = await this.$axios.notNeedlogin({
        data: {
          MenuId: this.$route.query.menuId,
          page: pageIndex,
          limit: this.pageSize,
          articleTypeId: this.articleTypeId,
          type: this.moretype,
        },
        className: "ArticleController",
        classMethod: "tzx",
      });
      if (res.bol) {
        let articleArr = res.data.articleList;
        this.total = res.data.articleCount;
        this.showlaoding = false;
        this.listShowType = this.total ? 1 : 2;
        if (this.total / this.pageSize > this.pageIndex) {
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(articleArr);
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.tzxScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";
</style>
