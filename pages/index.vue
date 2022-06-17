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
          <!-- <img src="@/static/images/advert01.png" alt="" /> -->
        </div>
        <div class="two-advert">
          <!-- <img src="@/static/images/advert02.png" alt="" /> -->
          <img :src="indexData.advertising[0].mas_advertising_img" alt="" />
        </div>
        <div class="main-container" data-aos="fade-up">
          <div class="container-one">
            <div class="container-one-left">
              <div class="title-box">
                <div class="top">
                  <h2>{{ indexData.master.title }}</h2>
                  <nuxt-link to="/jdk" class="more">查看更多</nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="left-content">
                <li
                  v-for="(item, index) in indexData.master.masterTheory"
                  :key="index"
                >
                  <h5>{{ item.mas_master_list_title }}</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="@/static/images/time.png" alt="" />
                      <span>{{ item.mas_master_list_addtime }}</span>
                      <img class="icon" src="@/static/images/chat.png" alt="" />
                      <span>{{ item.commont_num }}</span>
                    </div>
                    <span class="right">{{ item.mas_master_user_name }}</span>
                  </div>
                </li>
                <!-- <li>
                  <h5>财务共享中心的功能定位、成功因素与未来趋势探讨</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                    <span class="right">刘勤</span>
                  </div>
                </li>
                <li>
                  <h5>财务共享中心的功能定位、成功因素与未来趋势探讨</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                    <span class="right">刘勤</span>
                  </div>
                </li>
                <li>
                  <h5>财务共享中心的功能定位、成功因素与未来趋势探讨</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                    <span class="right">刘勤</span>
                  </div>
                </li> -->
              </ul>
              <div class="middle-line"></div>
              <h5 style="height: auto">猜你想认识的大咖</h5>
              <div class="keyword_box">
                <span
                  v-for="(item, index) in indexData.master.masterList"
                  :key="index"
                  >{{ item.mas_master_user_name }}</span
                >
                <span>于增彪</span>
                <span>郝宇晓</span>
                <span>叶康涛 </span>
                <span>何年初</span>
                <span>李连清</span>
                <span>王秀明</span>
                <span>冈野浩</span>
              </div>
              <nuxt-link to="/jdk" class="skip-box">
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
                  <p style="height: 40px">
                    {{ jdItem.mas_article_introduce }}
                  </p>
                  <div class="skip-box">
                    <span>阅读详情</span>
                    <img src="../static/images/arrows-left.png" alt="" />
                  </div>
                </li>
                <!-- <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                  <p>
                    企业财务人员不仅是企业的价值管理者，而且业财融合新模式正在赋予财务人员更多新角色。
                  </p>
                  <div class="skip-box">
                    <span>阅读详情</span>
                    <img src="../static/images/arrows-left.png" alt="" />
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                  <p>
                    企业财务人员不仅是企业的价值管理者，而且业财融合新模式正在赋予财务人员更多新角色。
                  </p>
                  <div class="skip-box">
                    <span>阅读详情</span>
                    <img src="/images/arrows-left.png" alt="" />
                  </div>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="container-one">
            <div class="container-one-left">
              <div class="right-content">
                <div class="title-box">
                  <div class="top">
                    <h2>课程推荐</h2>
                    <span class="more">查看更多</span>
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
                    <nuxt-link to="/activity" class="more">查看更多</nuxt-link>
                  </div>
                  <div class="line"></div>
                </div>
                <div class="advert-box">
                  <div class="img">
                    <!-- <img src="/images/sub-advert02.png" alt="" /> -->
                    <img :src="indexData.newActivity.mas_activity_img" alt="" />
                  </div>
                </div>
              </div>
              <div class="right-content">
                <div class="title-box">
                  <div class="top">
                    <h2>新一期杂志</h2>
                    <nuxt-link to="/zz" class="more">查看更多</nuxt-link>
                  </div>
                  <div class="line"></div>
                </div>
                <div class="advert-box">
                  <div class="img">
                    <!-- <img src="/images/way/zz.png" alt="" /> -->
                    <img
                      :src="indexData.newMagazine.mas_magazine_master_img"
                      alt=""
                    />
                    <div class="point">新书</div>
                  </div>
                </div>
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
                  <nuxt-link to="/tzx" class="more">查看更多</nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li
                  v-for="(tzItem, tzIndex) in indexData.articleTzx"
                  :key="tzIndex"
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
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
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
                  <nuxt-link to="/zff" class="more">查看更多</nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li>
                  <div class="keyword_box">
                    <span
                      v-for="(item, index) in indexData.articleZff.tag"
                      :key="index"
                      >{{ item.mas_tag_name }}</span
                    >
                  </div>
                </li>
                <li
                  v-for="(item, index) in indexData.articleZff.Zff"
                  :key="index"
                >
                  <h5>{{ item.mas_article_title }}</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>{{ item.mas_article_addtime }}</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>{{ item.commont_num }}</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
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
                  <h2>共创内容</h2>
                  <span class="more">查看更多</span>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li class="two-ul-li">
                  <div class="li-right">
                    <h5 class="reset twoline">
                      做15后的生意，把迪士尼装进商场，室内亲子乐园…
                    </h5>
                    <div class="base">
                      <div class="left">
                        <span>共创｜价值</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>焦点分析｜极兔不想成为字节跳动的“菜鸟”，而是…</h5>
                  <div class="base">
                    <div class="left">
                      <span>共创｜价值</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>车厘子价格腰斩？记者走访全国最大果菜批发市场…</h5>
                  <div class="base">
                    <div class="left">
                      <span>共创｜价值</span>
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
                  <nuxt-link to="kzt" class="more">查看更多</nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-ul">
                <li>
                  <div class="li-left">
                    <img src="/images/sub-advert06.png" alt="" />
                    <div class="point">推荐</div>
                  </div>
                  <div class="li-right">
                    <h5 class="reset twoline">
                      36氪首发｜构建品牌东南亚出海高速路…
                    </h5>
                    <div class="base">
                      <div class="left">
                        <img class="icon" src="/images/time.png" alt="" />
                        <span>JULY 1, 2019</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                </li>
                <li>
                  <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>DECEMBER 30, 2016</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
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
                  <h2>逛书店</h2>
                  <nuxt-link to="/gsd" class="more">查看更多</nuxt-link>
                </div>
                <div class="line"></div>
              </div>
              <div class="two-content-mid" @click="details(1)">
                <div class="img-box">
                  <img src="/images/sub-advert05.png" alt="" />
                  <!-- <img :src="indexData.bookstoreList[0].mas_book_img" alt="" /> -->
                </div>
                <h5>
                  {{ indexData.bookstoreList[0].mas_book_name }}
                </h5>
                <div class="base">
                  <div class="left">
                    <img class="icon" src="/images/time.png" alt="" />
                    <span>{{
                      indexData.bookstoreList[0].mas_book_addtime
                    }}</span>
                    <img class="icon" src="/images/chat.png" alt="" />
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-two">
            <div class="two-content">
              <div class="title-box">
                <div class="top">
                  <h2>投稿更多</h2>
                  <!-- <span class="more">查看更多</span> -->
                </div>
                <div class="line"></div>
              </div>
              <ul class="two-content-right">
                <li>
                  <div class="img">
                    <img src="/images/sub-advert02.png" alt="" />
                    <div class="point">了解详情</div>
                  </div>
                  <div class="img-base">
                    <span>社交营销</span>
                    <p>多种拼团玩法，满足商家不同需求</p>
                  </div>
                </li>
                <li>
                  <div class="img">
                    <img src="/images/sub-advert04.png" alt="" />
                  </div>
                  <div class="img-base">
                    <span>社交营销</span>
                    <p>多种拼团玩法，满足商家不同需求</p>
                  </div>
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
import { getSliders, notNeedlogin } from "@/request/api";
import md5 from "js-md5";
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
    let timestamp = Date.parse(new Date());
    let sign = md5(timestamp + store.state.secretKey);
    let res = await notNeedlogin($axios, {
      sign: sign,
      timespan: timestamp,
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
  },
  mounted() {
    this.$store.commit("setIsFixedHeader", true);
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
    details(id) {
      this.$router.push({
        path: `/gsd/${id}`,
        // name: "",
        // query: { id: index, type: item },
        // params: {
        //   type: item,
        // },
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
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
      }
      h5 {
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.85);
        line-height: 24px;
        height: 48px;
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
          font-size: 14px;
          font-weight: 400;
          text-align: left;
          color: rgba(0, 0, 0, 0.65);
          line-height: 22px;
        }
      }
      .skip-box {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          font-weight: 400;
          color: #ed6d38;
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
        }
        span:hover {
          background: #fff2f0;
          color: #d71d1d;
        }
      }
      .title-box {
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e7e7e7;
          padding-bottom: 18px;

          .more {
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.35);
            line-height: 22px;
            cursor: pointer;
          }
        }
        .line {
          width: 82px;
          height: 2px;
          background: #ed6d38;
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
                line-height: 20px;
                margin-bottom: 18px;
              }
              .base {
                margin-bottom: 13px;
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
        // height: 462px;
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
              &:last-child {
                border-bottom: none;
              }
            }
            li:nth-child(1) {
              display: flex;
              padding-top: 34px;
              height: 110px;
              .li-left {
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
            .img-box {
              width: 149px;
              height: 164px;
              margin: 67px auto;
            }
          }
          .two-content-right {
            li {
              .img {
                width: 242px;
                height: 116px;
                position: relative;
              }
              .img-base {
                padding: 12px 0px;
                span {
                  font-size: 16px;
                  font-weight: 500;
                  text-align: left;
                  color: #262626;
                  line-height: 22px;
                }
                p {
                  font-size: 13px;
                  font-weight: 400;
                  text-align: left;
                  color: #a7a7a7;
                  line-height: 22px;
                  margin-bottom: 0px;
                }
              }
            }
            li:nth-child(1) {
              margin-top: 18px;
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
