<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-book-details banxin">
      <div class="book-details-l">
        <div class="page-router">
          首页 / 书籍 /
          <span>{{ bookData.mas_book_name }}</span>
        </div>
        <div class="book-info">
          <div class="book-info-l">
            <img :src="bookData.mas_book_img" alt="" />
          </div>
          <div class="book-info-r">
            <h2>{{ bookData.mas_book_name }}</h2>
            <div class="classify">
              分类：<span>{{ bookData.mas_booktype_name }}</span>
            </div>
            <div class="author">
              作者：<span>{{ bookData.mas_book_author }}</span>
            </div>
            <div class="publish-info">
              <p>
                出版社：<span>{{ bookData.mas_magazine_host }}</span>
              </p>
              <p>出版时间：{{ bookData.mas_magazine_founded_time }}</p>
            </div>
            <p class="introduce fourline">
              {{ bookData.mas_book_describe }}
            </p>
          </div>
        </div>
        <div class="book-content">
          <div class="module-title">
            <span></span>
            出版书籍
          </div>
          <div class="content-box" v-html="bookData.mas_book_content">
            <!-- <p class="title">编辑推荐</p>
            <p>《财务管理案例(第三版)》充分融合财务理论、管理实务与财务政策。案例的理论背景介绍可以使学生巩固财务管理的基本原理和核心理论主张，精选的案例可以培养学生清晰的专业理念、较高的专业技能和敏锐的专业判断水准。</p>
            <p>《财务管理案例(第三版)》全面展现和追踪中国本土企业财务管理的实践。案例来源全部是真实的案例，且都是“中国制造”。案例新颖，大部分都是2013年以后的“故事”。</p>
            <p class="title">内容简介</p>
            <p>《财务管理案例(第三版)》第二版为十二五***规划教材，《财务管理案例(第三版)》充分融合财务理论、管理实务与财务政策。案例的理论背景介绍可以使学生巩固财务管理的基本原理和核心理论主张，精选的案例可以培养学生清晰的专业理念、较高的专业技能和敏锐的专业判断水准。《财务管理案例(第三版)》全面展现和追踪中国本土企业财务管理的实践。案例来源全部是真实的案例，且都是“中国制造”。案例新颖，大部分都是2013年以后的“故事”。本书尽可能反映财务管理课程的基本问题、知识点，既考虑全面，又突出重点，还把握难点。既有财务投融资、并购、重组问题，也有企业内部财务治理、管控体制与风险防控等问题。本书配有PPT及小案例分析要点，任课教师如需要，欢迎填写书后的“教师反馈及教辅申请表”免费索取。</p>
            <p class="title">作者简介</p>
            <p>汤谷良，对外经济贸易大学国际商学院院长、教授，教育部长江学者特聘教授。长期从事公司财务管理、管理控制系统的教学与研究，在集团财务管控、预算管理、财务战略等方面颇具建树。韩慧博，祝继高，对外经济贸易大学副教授。</p>
            <p class="title">目 录</p>
            <p>案例一 中信集团的分层上市治理</p>
            <p>案例二 乐视网价值评估 </p> -->
          </div>
        </div>
      </div>
      <div class="book-details-r">
        <div class="module">
          <h2>书籍推荐</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <div
              class="magazine"
              v-for="(item, index) in recommend.list"
              :key="index"
              @click="goBooks(recommend.menu.mas_menu_url, item.mas_book_id)"
            >
              <div class="magazine-img">
                <img :src="item.mas_book_img" alt="" />
                <div class="point">新书</div>
              </div>
              <div class="headline">{{ item.mas_book_name }}</div>
              <a class="contribute">马上阅读</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookData: {}, //书籍信息
      recommend: {}, //书籍推荐
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      className: "BookController",
      classMethod: "bookDetails",
      data: {
        bookId: query.bookId,
      },
    });
    if (res.bol) {
      return {
        bookData: res.data.bookData,
        recommend: res.data.recommend,
      };
    }
  },
  methods: {
    //点击跳转到书详情
    goBooks(url, id) {
      this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/bookDetails.less";
</style>
