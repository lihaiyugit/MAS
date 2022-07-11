<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img :src="bannerArr[0].mas_banner_img" alt="" />
            <!-- <img src="@/static/images/way/dks-banner.png" alt="" /> -->
          </div>
          <!-- <div
            class="banner-bg"
            :style="{
              backgroundImage:
                'url(' + require('@/static/images/way/dks-banner.png') + ')',
            }"
          >
            <div class="banner-mian">
              <h2>大咖说</h2>
              <p>前沿理论、热点荐读、大咖观点一网打尽</p>
              <nuxt-link to="/wytg"
                >我要投稿 <img src="@/static/images/way/Outlined.png" alt=""
              /></nuxt-link>
            </div>
          </div> -->
          <div class="list-box-new">
            <div class="list-title">
              <h2>大咖说</h2>
            </div>
            <div class="master-list" v-if="listShowType == 1">
              <dl
                v-for="(item, index) in listData"
                :key="index"
                @click="details(item.mas_master_user_id)"
              >
                <dt>
                  <img :src="item.mas_master_list_img" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="oneline">
                      {{ item.mas_master_list_title }}
                    </h5>
                    <p class="oneline">
                      {{ item.mas_master_list_introduce }}
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span>{{ item.mas_master_user_name }}</span>
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">{{
                        item.mas_master_list_addtime
                      }}</span>
                      <img src="@/static/images/chat.png" alt="" class="chat" />
                      <span class="text">{{ item.commont_num }}</span>
                    </div>
                  </div>
                </dd>
              </dl>
              <!-- <dl @click="details(1)">
                <dt>
                  <img src="../../static/images/way/master-rw.png" alt="" />
                </dt>
                <dd>
                  <div class="top">
                    <h5 class="twoline">
                      中国石化张少峰：构建一流数智化财务三大主张
                    </h5>
                    <p class="oneline">
                      破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <span>大咖说</span>
                    </div>
                    <div class="base-right">
                      <img src="@/static/images/time.png" alt="" class="time" />
                      <span class="text">2022-03-14</span>
                      <img src="@/static/images/chat.png" alt="" class="chat" />
                      <span class="text">3</span>
                    </div>
                  </div>
                </dd>
              </dl> -->

              <div class="more-btn" @click="moreFn" v-show="!finished">
                查看更多
              </div>
            </div>
            <div class="no-data-box" v-if="listShowType == 2">
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
          <MagazineModule
            :magazineLeft="magazineLeft"
            style="margin-top: 32px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotRecommend: [], //热词推荐
      magazineLeft: {}, //左侧杂志数据
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      listData: [], //总列表数据
      bannerArr: [], //banner图
      finished: false, //数据是否加载完成
      showlaoding: true, // 是否显示loading效果
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
      className: "MasterController",
      classMethod: "dksList",
    });
    if (res.bol) {
      return {
        listData: res.data.getDksList.masterList,
        bannerArr: res.data.bannerImg,
        total: res.data.getDksList.masterCount,
        hotRecommend: res.data.hotspot,
        magazineLeft: res.data.magazine,
        showlaoding: false,
        finished: res.data.getDksList.masterCount > 6 ? false : true,
      };
    }
  },
  mounted() {
    // scroll事件并监听
    window.addEventListener("scroll", this.dksScroll);
  },
  //scroll事件并监听
  dksScroll() {
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
  methods: {
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
          MenuId: this.$store.state.subTabId,
          page: pageIndex,
          limit: this.pageSize,
          type: this.moretype,
        },
        className: "MasterController",
        classMethod: "dksList",
      });
      if (res.bol) {
        let masterArr = res.data.masterList;
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
        path: `/dks/${id}`,
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
