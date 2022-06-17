<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/case_banner.png" alt="" />
             <nuxt-link to="/wytg" class="wytg"></nuxt-link>
          </div>
          <div class="list-box">
            <div class="major-container">
              <span class="major-container-left">专业：</span>
              <ul
                class="major-container-mid oneline"
                :style="'height:' + majorHeight + ''"
              >
                <li
                  v-for="(item, index) in major"
                  @click="oNitem(index)"
                  :key="index"
                  :class="current == index ? 'checked' : ''"
                >
                  {{ item }}
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
                  v-for="(item, index) in major"
                  @click="industryItem(index)"
                  :key="index"
                  :class="industryCurrent == index ? 'checked' : ''"
                >
                  {{ item }}
                </li>
              </ul>
              <span class="major-container-right" @click="industryAllFn"
                >全部</span
              >
            </div>
            <div class="content-container-list">
              <dl>
                <dt>
                  <div class="top">
                    <h3 class="twoline">
                      中国化学刘东进：大智移云物科技革命 重塑财务新职能
                      引领财务新变革 重塑财务新职能 引领
                    </h3>
                    <p>
                      企业财务人员不仅是企业的价值管理者，而且业财融合新模式
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <div class="pay">付费</div>
                      <span>李晶晶｜黄静｜徐铭｜邬瑜骏</span>
                    </div>

                    <div class="base-right">
                      <img
                        src="../../static/images/time.png"
                        alt=""
                        class="time"
                      />
                      <span class="text">2022-03-14</span>
                      <img
                        src="../../static/images/chat.png"
                        alt=""
                        class="chat"
                      />
                      <span class="text">3</span>
                    </div>
                  </div>
                </dt>
                <dd>
                  <img src="../../static/images/way/list.png" alt="" />
                </dd>
              </dl>
              <dl>
                <dt>
                  <div class="top">
                    <h3 class="twoline">
                      论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
                    </h3>
                    <p>
                      企业财务人员不仅是企业的价值管理者，而且业财融合新模式
                    </p>
                  </div>
                  <div class="base">
                    <div class="base-left">
                      <div class="pay">付费</div>
                      <span>李晶晶｜黄静｜徐铭｜邬瑜骏</span>
                    </div>

                    <div class="base-right">
                      <img
                        src="../../static/images/time.png"
                        alt=""
                        class="time"
                      />
                      <span class="text">2022-03-14</span>
                      <img
                        src="../../static/images/chat.png"
                        alt=""
                        class="chat"
                      />
                      <span class="text">3</span>
                    </div>
                  </div>
                </dt>
                <dd>
                  <img src="../../static/images/way/list.png" alt="" />
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
const major = [
  "成本管理",
  "绩效管理",
  "预算管理",
  "财务管理",
  "管理会计",
  "人工智能",
  "人工智能",
];
export default {
  data() {
    return {
      major, //专业
      current: 0, //专业默认索引
      industryCurrent: 0, //行业默认索引
      majorHeight: "40px", //专业默认高
      industryHeight: "40px", //行业默认高
    };
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {
    //点击专业每一项
    oNitem(index) {
      this.current = index;
    },
    //点击行业每一项
    industryItem(index) {
      this.industryCurrent = index;
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
        console.log("==");
      } else {
        this.industryHeight = "auto";
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";
</style>
