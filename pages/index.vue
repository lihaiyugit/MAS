<template>
  <div class="main_container">
    <SubHeader v-bind:hotWord="indexData.hotWord" />
    <div class="banxin layout-container">
      <div class="layout-left" ref="leftTab">
        <MainLeft />
      </div>
      <div class="layout-right">
        <div class="advert">
          <img :src="indexData.bannel[0].mas_banner_img" alt="" />
        </div>
        <div class="two-advert">
          <img :src="indexData.advertising[0].mas_advertising_img" alt="" />
        </div>
        <div class="main-container" data-aos="fade-up">
          <div class="container-one">
            <div class="container-one-left">
              <div class="title-box">
                <div class="top">
                  <h2>大咖说</h2>
                  <nuxt-link
                    :to="{
                      name: indexData.master.masterTheory.menu.mas_menu_url,
                      query: {
                        menuId: indexData.master.masterTheory.menu.mas_menu_id,
                      },
                    }"
                    class="more"
                    >更多 <span class="more-img"></span
                  ></nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="left-content">
                <li
                  v-for="(item, index) in indexData.master.masterTheory
                    .masterlist"
                  :key="index"
                  @click="
                    goDetails(
                      indexData.master.masterTheory.menu.mas_menu_url,
                      item.mas_article_id
                    )
                  "
                >
                  <h5 class="twoline">{{ item.mas_article_title }}</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="@/static/images/time.png" alt="" />
                      <span>{{ item.mas_article_addtime }}</span>
                      <img class="icon" src="@/static/images/chat.png" alt="" />
                      <span>{{ item.commont_num }}</span>
                    </div>
                    <span class="right">{{ item.mas_article_author }}</span>
                  </div>
                </li>
              </ul>
              <div class="middle-line"></div>
              <h5 style="height: auto">猜你想认识的大咖</h5>
              <div class="keyword_box twoline">
                <span
                  v-for="(item, index) in indexData.master.masterList.master"
                  :key="index"
                  @click="
                    goDetails(
                      indexData.master.masterList.menu.mas_menu_url,
                      item.mas_master_user_id
                    )
                  "
                  >{{ item.mas_master_user_name }}</span
                >
              </div>
              <nuxt-link
                :to="{
                  name: indexData.master.masterList.menu.mas_menu_url,
                  query: {
                    menuId: indexData.master.masterList.menu.mas_menu_id,
                  },
                }"
                class="skip-box"
              >
                <span>查看更多</span>
                <img src="../static/images/arrows-left.png" alt="" />
              </nuxt-link>
            </div>
          </div>
          <div class="container-one">
            <div class="container-one-left">
              <div class="title-box">
                <div class="top">
                  <h2>荐读</h2>
                </div>
                <div class="line"></div>
              </div>
              <ul class="middle-content">
                <li
                  v-for="(jdItem, jdIndex) in indexData.recommend"
                  :key="jdIndex"
                  @click="
                    goDetails(
                      jdItem.mas_article_type_url,
                      jdItem.mas_article_id
                    )
                  "
                >
                  <h5>{{ jdItem.mas_article_title }}</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>{{ jdItem.mas_article_addtime }}</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>{{ jdItem.commont_num }}</span>
                    </div>
                  </div>
                  <p class="twoline" style="height: 40px">
                    {{ jdItem.mas_article_introduce }}
                  </p>
                  <div class="skip-box">
                    <span>阅读详情</span>
                    <img src="../static/images/arrows-left.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="container-one">
            <div class="container-one-left">
              <div class="right-content">
                <div class="title-box">
                  <div class="top">
                    <h2>课程推荐</h2>
                    <span class="more"
                      >更多
                      <span class="more-img"></span>
                    </span>
                  </div>
                  <div class="line"></div>
                </div>
                <div class="advert-box">
                  <div class="img">
                    <img src="/images/sub-advert01.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="right-content">
                <div class="title-box">
                  <div class="top">
                    <h2>最新活动</h2>
                    <nuxt-link to="/activity" class="more"
                      >更多 <span class="more-img"></span
                    ></nuxt-link>
                  </div>
                  <div class="line"></div>
                </div>
                <nuxt-link
                  :to="{
                    path: `/activity/${indexData.newActivity.menu.mas_menu_id}`,
                  }"
                  class="advert-box"
                >
                  <div class="img">
                    <img
                      :src="indexData.newActivity.activity.mas_activity_img"
                      alt=""
                    />
                  </div>
                </nuxt-link>
              </div>
              <div class="right-content">
                <div class="title-box">
                  <div class="top">
                    <h2>新一期杂志</h2>
                    <nuxt-link
                      :to="{
                        name: indexData.newMagazine.menu.mas_menu_url,
                        query: {
                          menuId: indexData.newMagazine.menu.mas_menu_id,
                        },
                      }"
                      class="more"
                      >更多<span class="more-img"></span
                    ></nuxt-link>
                  </div>
                  <div class="line"></div>
                </div>
                <a
                  @click="
                    goDetails(
                      indexData.newMagazine.menu.mas_menu_url,
                      indexData.newMagazine.magazine.mas_magazine_id
                    )
                  "
                  class="advert-box"
                >
                  <div class="img">
                    <img
                      :src="
                        indexData.newMagazine.magazine.mas_magazine_master_img
                      "
                      alt=""
                    />
                    <div class="point">新书</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="three-advert" data-aos="fade-up">
          <div class="advert-box-left"></div>
          <div class="advert-box-right"></div>
        </div>
        <div class="main-container" data-aos="fade-up">
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>淘资讯</h2>
                  <nuxt-link
                    :to="{
                      name: indexData.articleTzx.menu.mas_menu_url,
                      query: {
                        menuId: indexData.articleTzx.menu.mas_menu_id,
                      },
                    }"
                    class="more"
                    >更多<span class="more-img"></span
                  ></nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li
                  v-for="(tzItem, tzIndex) in indexData.articleTzx.Tzx"
                  :key="tzIndex"
                  @click="
                    goDetails(
                      indexData.articleTzx.menu.mas_menu_url,
                      tzItem.mas_article_id
                    )
                  "
                >
                  <div class="li-left">
                    <img :src="tzItem.mas_article_img" alt="" />
                    <div class="point">推荐</div>
                  </div>
                  <div class="li-right">
                    <h5 class="reset twoline">
                      {{ tzItem.mas_article_title }}
                    </h5>
                    <div class="base">
                      <div class="left">
                        <img class="icon" src="/images/time.png" alt="" />
                        <span>{{ tzItem.mas_article_addtime }}</span>
                        <img class="icon" src="/images/chat.png" alt="" />
                        <span>{{ tzItem.commont_num }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>找方法</h2>
                  <nuxt-link
                    :to="{
                      name: indexData.articleZff.menu.mas_menu_url,
                      query: {
                        menuId: indexData.articleZff.menu.mas_menu_id,
                      },
                    }"
                    class="more"
                    >更多<span class="more-img"></span
                  ></nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li>
                  <div class="keyword_box">
                    <span
                      v-for="(item, index) in indexData.articleZff.tag"
                      :key="index"
                      @click="onHotWord(item.mas_tag_name, item.mas_tag_id)"
                      >{{ item.mas_tag_name }}</span
                    >
                  </div>
                </li>
                <li
                  v-for="(item, index) in indexData.articleZff.Zff"
                  :key="index"
                  @click="
                    goDetails(
                      indexData.articleZff.menu.mas_menu_url,
                      item.mas_article_id
                    )
                  "
                >
                  <h5 class="twoline">{{ item.mas_article_title }}</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>{{ item.mas_article_addtime }}</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>{{ item.commont_num }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>政策解读</h2>
                  <nuxt-link
                    :to="{
                      name: indexData.policy.menu.mas_menu_url,
                      query: {
                        menuId: indexData.policy.menu.mas_menu_id,
                      },
                    }"
                    class="more"
                    >更多<span class="more-img"></span
                  ></nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li
                  v-for="(zzItem, zzIndex) in indexData.policy.policy"
                  :key="zzIndex"
                  @click="
                    goDetails(
                      indexData.policy.menu.mas_menu_url,
                      zzItem.mas_article_id
                    )
                  "
                  class="two-ul-li"
                >
                  <div class="li-right">
                    <h5 class="reset twoline">
                      {{ zzItem.mas_article_title }}
                    </h5>
                    <div class="base">
                      <div class="left">
                        <img class="icon" src="/images/time.png" alt="" />
                        <span>{{ zzItem.mas_article_addtime }}</span>
                        <img class="icon" src="/images/chat.png" alt="" />
                        <span>{{ zzItem.commont_num }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="four-advert" data-aos="fade-up">
          <img src="/images/advert03.png" alt="" />
        </div>
        <div class="main-container" data-aos="fade-up">
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>看专题</h2>
                  <nuxt-link to="kzt" class="more"
                    >更多
                    <span class="more-img"></span>
                  </nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <div class="subject-list">
                <dl @click="kztDetails(1)">
                  <dt>
                    <img src="@/static/images/tip-yh-l.png" alt="" />
                  </dt>
                  <dd>
                    <h5 class="oneline">数字化转型</h5>
                    <p class="twoline">
                      在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                      …
                    </p>
                    <div class="base">
                      <div class="left">
                        <img class="icon" src="/images/time.png" alt="" />
                        <span>2022-03-14</span>
                        <img class="icon" src="/images/chat.png" alt="" />
                        <span>3</span>
                      </div>
                    </div>
                  </dd>
                </dl>
                <dl @click="kztDetails(1)">
                  <dt>
                    <img src="@/static/images/tip-yh-l.png" alt="" />
                  </dt>
                  <dd>
                    <h5 class="oneline">管理会计</h5>
                    <p class="twoline">
                      在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成
                      …
                    </p>
                    <div class="base">
                      <div class="left">
                        <img class="icon" src="/images/time.png" alt="" />
                        <span>2022-03-14</span>
                        <img class="icon" src="/images/chat.png" alt="" />
                        <span>3</span>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>逛书店</h2>
                  <nuxt-link
                    :to="{
                      name: indexData.bookstoreList.menu.mas_menu_url,
                      query: {
                        menuId: indexData.bookstoreList.menu.mas_menu_id,
                      },
                    }"
                    class="more"
                    >更多<span class="more-img"></span
                  ></nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <div class="two-content-mid">
                <dl
                  v-for="(bookIt, bookId) in indexData.bookstoreList.books"
                  :key="bookId"
                  @click="
                    goDetails(
                      indexData.bookstoreList.menu.mas_menu_url,
                      bookIt.mas_book_id
                    )
                  "
                >
                  <dt>
                    <div class="dt-l">
                      <img src="@/static/images/tip-1.png" alt="" />
                    </div>
                    <div class="dt-r">
                      <h5 class="oneline">{{ bookIt.mas_book_name }}</h5>
                      <span>{{ bookIt.mas_book_author }}</span>
                      <p class="twoline">
                        {{ bookIt.mas_book_describe }}
                      </p>
                    </div>
                  </dt>
                  <dd>
                    <img :src="bookIt.mas_book_img" alt="" />
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>投稿更多</h2>
                  <!-- <span class="more"
                    >更多
                    <span class="more-img"></span> -->
                  <!-- </span> -->
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-content-right">
                <li>
                  <nuxt-link to="/qyfw" class="img">
                    <img src="@/static/images/qytg.png" alt="" />
                    <img
                      class="img-icon"
                      src="@/static/images/tg-l-1.png"
                      alt=""
                    />
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/wytg" class="img">
                    <img src="@/static/images/mastg.png" alt="" />
                    <img
                      class="img-icon"
                      src="@/static/images/tg-l-1.png"
                      alt=""
                    />
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div>{{ password }}</div>
        <button @click="changePassword">修改密码</button> -->
        <!-- <ul>
        <li v-for="item in list" :key="item.id">
          {{ item.imageName }}
        </li>
      </ul> -->
      </div>
    </div>
    <!-- <span>{{create_time| timeAgo}}</span> -->
    <!-- <pdf :src="src" v-for="i in numPages" :key="i" :page="i"></pdf> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // middleware:'auth', //局部中间件
  data() {
    return {
      list: [],
      isFixed: false, //左侧是否固定
      create_time: "2027-08-01 21:55:28",
      pdfUrl: "",
      numPages: 0,
      src: "",
      vuePdf: null,
      indexData: "", //首页接口获取数据
      routerUrl: this.$route.path, //当前页面路由
    };
  },
  head() {
    //优化seo 动态设置title、keywprds和description
    return {
      title: "首页",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "淘宝 西瓜视频、今日头条、微博",
        },
        {
          hid: "description",
          name: "description",
          content:
            "元年科技是一家为企业数字化转型提供专业技术和服务的公司，具备业务中台和数据中台建设能力的厂商。为企业打造包括数字化转型、智能管理和数据分析平台、",
        },
      ],
    };
  },
  computed: {
    // ...mapState(['userName'])
    ...mapState({
      password: (state) => state.user.password,
    }),
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    // let res = await getSliders($axios);
    //  let res =await $axios.get('https://v2.chinamas.cn/api/slider/getSliders');
    // console.log(res.data.list);
    // asyncData 中没有this
    // return { list: res.list };
    // let timestamp = Date.parse(new Date());
    // let sign = md5(timestamp + store.state.secretKey);
    let res = await $axios.notNeedlogin({
      // sign: sign,
      // timespan: timestamp,
      className: "HomeController",
      classMethod: "home",
    });
    if (res.bol) {
      return { indexData: res.data };
    }
  },
  created() {
    this.$store.commit("setHeaderWidth", "1200px");
    this.$store.commit("setIsFixedHeader", true);
    this.$store.commit("setSubTabId", "");
  },
  mounted() {
    console.log(this.indexData, "indexData");
    // if (process.client) {
    //   this.vuePdf = require("vue-pdf");
    //   this.pdfLoadTask();
    // }
    // this.pdfUrl = this.$pdf.createLoadingTask(
    //   "https://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
    // );
    // console.log(this.pdfUrl, "pdfUrl");

    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations({
      changePassword: "user/changePassword",
    }),
    // pdfLoadTask() {
    //   this.src = this.vuePdf.default.createLoadingTask(
    //     "https://www.chinamas.cn/static/img/1.pdf"
    //   );
    //   this.src.promise.then((pdf) => {
    //     this.numPages = pdf.numPages;
    //   });
    // },

    // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      // 页面滚动高度
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      // 中间内容框高度
      let rightHight = document.querySelector(".layout-right").offsetHeight;
      //一级菜单高度 22 间距
      var headerTop = document.querySelector(".header").offsetHeight;
      // 二级菜单栏高度
      let subHight = document.querySelector(".sub-header").offsetHeight;
      let subTop = document.querySelector(".sub-header").offsetTop;
      // 总高度
      let allHeight = rightHight - subHight - 327; //404 底部高度

      if (scrollTop >= subHight && scrollTop < allHeight) {
        this.$refs.leftTab["style"].position = "fixed";
        this.$refs.leftTab["style"].top = headerTop + subHight + 30 + "px";
      } else if (scrollTop > allHeight) {
        this.$refs.leftTab["style"].position = "absolute";
        this.$refs.leftTab["style"].top = allHeight + "px";
      } else {
        this.$refs.leftTab["style"].position = "absolute";
        this.$refs.leftTab["style"].top = 30 + "px";
      }
    },
    //点击到详情
    goDetails(url, id) {
      this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },

    //看专题点击跳转
    kztDetails(id) {
      this.$router.push({
        path: `/kzt/${id}`,
      });
    },
    //点击站内热词
    onHotWord(val, id) {
      this.$store.commit("setSubTabId", -1);
      this.$router.push({
        path: "/search",
        query: { keyword: val, hotWordId: id },
      });
    },
  },
  destroyed() {
    this.$store.commit("setHeaderWidth", "1100px");
    this.$store.commit("setIsFixedHeader", false);
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>

<style lang="less" scoped>
/deep/.banxin {
  width: 1200px !important;
}
.main_container {
  padding-top: 168px !important;
}
.layout-container {
  display: flex;
  justify-content: space-between;
  padding: 30px 0px 50px 0px;
  position: relative;
  .layout-left {
    position: absolute;
  }
  .layout-right {
    margin-left: 210px;
    width: 990px;
    .advert {
      // width: 1002px;
      height: 404px;
    }
    .two-advert {
      // width: 1002px;
      height: 130px;
      margin: 22px 0px;
    }
    .main-container {
      display: flex;
      h2 {
        font-size: 18px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        text-align: justify;
        line-height: 22px;
      }
      h5 {
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        height: 48px;
        text-align: justify;
      }
      .base {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 22px;
        margin-top: 12px;
        .left {
          display: flex;
          align-items: center;
          .icon {
            width: 12px;
            height: 12px;
          }
          span {
            font-size: 12px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.25);
            padding-right: 4px;
            margin-top: -2px;
            margin-left: 2px;
          }
        }
        .right {
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.25);
          line-height: 12px;
        }
      }
      .skip-box {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          font-weight: 400;
          color: #fa6725;
          line-height: 22px;
        }
        img {
          width: 13px;
          height: 8px;
          margin-left: 5px;
        }
      }
      .keyword_box {
        margin: 20px 0px 10px;
        span {
          padding: 2px 7px;
          margin-right: 8px;
          margin-bottom: 8px;
          display: inline-block;
          background: rgba(0, 0, 0, 0.02);
          font-size: 12px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 17px;
          cursor: pointer;
        }
        span:hover {
          background: #fff2f0;
          color: #fa6725;
        }
      }
      .title-box {
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 18px;

          .more {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.35);
            line-height: 22px;
            cursor: pointer;
            &:hover {
              color: #fa6725;
              .more-img {
                background-image: url(@/static/images/more-arrow-light.png);
              }
            }
            .more-img {
              width: 7px;
              height: 10px;
              background-image: url(@/static/images/left.png);
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              margin-left: 4px;
              margin-top: 1px;
            }
          }
        }
        .line {
          width: 32px;
          height: 2px;
          background: #fa6725;
          margin-top: -2px;
        }
      }

      .container-one {
        width: 340px;
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 6px;
        margin-right: 14px;
        &:nth-child(3) {
          width: 282px;
          margin-right: 0px;
        }

        .container-one-left {
          padding: 20px 20px 0px;

          .left-content {
            margin-top: 28px;
            li {
              width: 306px;
              height: 92px;
              margin-top: 20px;
              cursor: pointer;
            }
            li:nth-child(1) {
              margin-top: 0px;
            }
          }
          .middle-content {
            margin-top: 28px;
            li {
              width: 306px;
              margin-top: 26px;
              border-bottom: 1px dashed #e7e7e7;
              padding-bottom: 13px;
              cursor: pointer;
              &:last-child {
                border-bottom: none;
              }
              &:nth-child(1) {
                margin-top: 0px;
              }
              p {
                font-size: 13px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.45);
                text-align: justify;
                line-height: 20px;
                margin-bottom: 18px;
              }
              .base {
                margin-bottom: 14px;
              }
            }
          }
          .right-content {
            margin-bottom: 22px;
            &:nth-child(3) .advert-box {
              border-bottom: none;
            }
          }
          .middle-line {
            width: 309px;
            height: 6px;
            opacity: 0.25;
            background: #d8d8d8;
            border-radius: 6px;
            margin: 18px 0px;
          }

          .advert-box {
            border-bottom: 1px dashed #e7e7e7;
            position: relative;
            cursor: pointer;
            display: block;
            .img {
              width: 242px;
              height: 116px;
              margin: 30px 0px;
            }
          }
        }
      }

      .container-two {
        width: 340px;
        background: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0);
        border-radius: 6px;
        margin-right: 14px;
        &:nth-child(3) {
          width: 282px;
          margin-right: 0px;
        }
        .two-content {
          padding: 20px 20px 0px;
          .two-ul {
            li {
              padding-top: 24px;
              height: 104px;
              border-bottom: 1px dashed #e7e7e7;
              cursor: pointer;
              &:last-child {
                border-bottom: none;
              }
              .li-left {
                display: none;
              }
            }
            li:nth-child(1) {
              display: flex;
              padding-top: 34px;
              height: 110px;
              .li-left {
                display: block;
                min-width: 112px;
                height: 85px;
                position: relative;
              }
              .li-right {
                margin-left: 14px;
                height: 85px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .reset {
                  width: 172px;
                }
                .base {
                  margin-top: 0px;
                }
              }
              .keyword_box {
                margin: 0px;
                span {
                  margin-right: 6px;
                }
              }
            }
            .two-ul-li {
              .li-right {
                margin-left: 0px !important;
                .reset {
                  width: 100% !important;
                }
              }
            }
          }
          .two-content-mid {
            cursor: pointer;
            .img-box {
              width: 149px;
              height: 164px;
              margin: 67px auto;
            }
            dl {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid rgba(0, 0, 0, 0.05);
              &:nth-child(1) {
                padding: 30px 0px 26px;
              }
              &:nth-child(2) {
                padding: 25px 0px 35px;
                border-bottom: none;
              }
              &:hover {
                dt .dt-r h5 {
                  color: #fa6725;
                }
              }
              dt {
                display: flex;
                .dt-l {
                  width: 21px;
                  height: 20px;
                  img {
                    border-radius: 0px;
                  }
                }
                .dt-r {
                  margin-left: 12px;
                  h5 {
                    font-size: 16px;
                    font-weight: 500;
                    text-align: justify;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 24px;
                    height: auto;
                    width: 160px;
                  }
                  span {
                    font-size: 13px;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.65);
                    line-height: 12px;
                    padding: 12px 0px 20px;
                    display: inline-block;
                  }
                  p {
                    width: 166px;
                    font-size: 13px;
                    font-weight: 400;
                    text-align: justify;
                    color: rgba(0, 0, 0, 0.45);
                    line-height: 20px;
                  }
                }
              }
              dd {
                width: 78px;
                height: 111px;
                img {
                  border-radius: 0px;
                }
              }
            }
          }
          .two-content-right {
            li {
              border-bottom: 1px solid rgba(0, 0, 0, 0.05);
              cursor: pointer;
              &:last-child {
                border-bottom: none;
              }
              .img {
                width: 242px;
                height: 116px;
                position: relative;
              }
              .img-icon {
                width: 24px;
                height: 24px;
                position: absolute;
                right: 14px;
                bottom: 14px;
              }
            }
            li:nth-child(1) {
              padding: 30px 0px 22px 0px;
            }
            li:nth-child(2) {
              padding: 25px 0px 30px 0px;
            }
          }
        }
        .subject-list {
          padding: 5px 0px 10px 0px;
          dl {
            display: flex;
            justify-content: space-between;
            padding: 25px 0px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            cursor: pointer;
            &:last-child {
              border-bottom: none;
            }
            &:hover {
              dd h5 {
                color: #fa6725;
              }
            }
            dt {
              width: 13px;
              height: 16px;

              img {
                border-radius: 0px;
              }
            }
            dd {
              margin-top: -2px;
              h5 {
                font-size: 16px;
                font-weight: 500;
                text-align: justify;
                color: rgba(0, 0, 0, 0.85);
                line-height: 24px;
                height: auto;
              }
              p {
                width: 268px;
                font-size: 13px;
                font-weight: 400;
                text-align: justify;
                color: rgba(0, 0, 0, 0.45);
                line-height: 20px;
                padding-top: 16px;
              }
              .base {
                height: auto;
                margin-top: 20px;
              }
            }
          }
        }
      }
    }
    .three-advert {
      display: flex;
      margin: 25px 0px;
      .advert-box-left {
        width: 830px;
        height: 95px;
        background: #e47b38;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      .advert-box-right {
        width: 160px;
        height: 95px;
        background: #4c4948;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
    .four-advert {
      // width: 1002px;
      height: 92px;
      margin: 23px 0px;
    }
  }
}
</style>
