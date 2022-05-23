<template>
  <div class="main_container">
    <singleHeader />
    <div class="content-container">
      <div class="banxin content-container-main">
        <div class="content-container-main-left">
          <div class="banner">
            <img src="../../static/images/way/master.png" alt="" />
          </div>
          <div class="list-box">
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
                      <div class="author">李晶晶</div>
                      <span>中国化学工程股份有限公司总会计师</span>
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
                      <div class="author">李晶晶</div>
                      <span>中国化学工程股份有限公司总会计师</span>
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
export default {
  data() {
    return {};
  },
  asyncData({ query, params }) {
    // this.$route.params.id
    // let res= await ArticleIdApi({id:query.id})
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/listCommon.less";
</style>
