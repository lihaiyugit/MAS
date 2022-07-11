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
            <div class="major-container">
              <span class="major-container-left">专业：</span>
              <ul
                class="major-container-mid oneline"
                :style="'height:' + majorHeight + ''"
              >
                <li
                  v-for="(item, index) in major"
                  @click="oNitem(index, item.mas_tag_id)"
                  :key="index"
                  :class="current == index ? 'checked' : ''"
                >
                  {{ item.mas_tag_name }}
                </li>
              </ul>
              <span class="major-container-right" @click.stop="allFn"
                >全部</span
              >
            </div>
            <div class="major-container industry">
              <span class="major-container-left">行业：</span>
              <ul
                class="major-container-mid oneline"
                :style="'height:' + industryHeight + ''"
              >
                <li
                  v-for="(item, index) in industry"
                  @click="industryItem(index, item.mas_industry_id)"
                  :key="index"
                  :class="industryCurrent == index ? 'checked' : ''"
                >
                  {{ item.mas_industry_name }}
                </li>
              </ul>
              <span class="major-container-right" @click="industryAllFn"
                >全部</span
              >
            </div>
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
        <!-- 页面右侧内容 -->
        <ColumnR
          :hotRecommend="hotRecommend"
          :magazineLeft="magazineLeft"
          :selections="selections"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      major: [], //专业
      current: -1, //专业默认索引
      industry: [], //行业
      industryCurrent: -1, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
      listData: [], //总列表数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      bannerArr: [], //banner图
      hotRecommend: [], //热点推荐
      magazineLeft: {}, //左侧杂志数据
      selections: [], //荐读
      showlaoding: true, // 是否显示loading效果
      finished: false, //数据是否加载完毕
      tagId: "", //专业类型
      industryId: "", //行业类型
      moretype: "", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        MenuId: store.state.subTabId,
        page: 1,
        limit: 6,
      },
      className: "ArticleController",
      classMethod: "xal",
    });
    if (res.bol) {
      return {
        bannerArr: res.data.bannerImg,
        major: res.data.tag,
        industry: res.data.industry,
        listData: res.data.articleList.articleList,
        total: res.data.articleList.articleCount,
        hotRecommend: res.data.hostpot,
        magazineLeft: res.data.magazine,
        selections: res.data.selections,
        showlaoding: false,
        finished: res.data.articleList.articleCount > 6 ? false : true,
      };
    }
  },
  mounted() {
    // scroll事件并监听
    window.addEventListener("scroll", this.xalScroll);
  },
  methods: {
    //scroll事件并监听
    xalScroll() {
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
    //点击专业每一项
    oNitem(index, majorId) {
      this.pageIndex = 1;
      this.listData = [];
      this.moretype = "list";
      this.listShowType = 1;
      this.finished = false;
      this.current = index;
      this.tagId = majorId;
      this.getList();
    },
    //点击行业每一项
    industryItem(index, industryId) {
      this.pageIndex = 1;
      this.listData = [];
      this.moretype = "list";
      this.listShowType = 1;
      this.finished = false;
      this.industryCurrent = index;
      this.industryId = industryId;
      this.getList();
    },
    //点击专业全部
    allFn() {
      if (this.majorHeight == "auto") {
        this.majorHeight = "40px";
      } else {
        this.majorHeight = "auto";
      }
    },
    //点击行业全部
    industryAllFn() {
      if (this.industryHeight == "auto") {
        this.industryHeight = "40px";
      } else {
        this.industryHeight = "auto";
      }
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/xal/${id}`,
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
          MenuId: this.$store.state.subTabId,
          page: pageIndex,
          limit: this.pageSize,
          tagId: this.tagId,
          industryId: this.industryId,
          type: this.moretype,
        },
        className: "ArticleController",
        classMethod: "xal",
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
    window.removeEventListener("scroll", this.xalScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";
</style>
