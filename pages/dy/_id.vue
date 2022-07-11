<template>
  <div class="content-container">
    <div class="banxin article-main">
      <div class="article-main-left">
        <div class="title">首页 / 学案例 / <span>文章详情</span></div>
        <h1>{{ detailsData.article.mas_article_title }}</h1>
        <div class="details-info">
          <span>{{ detailsData.article.mas_article_author }}</span>
          <span class="line"></span>
          <span class="type">政策解读</span>
          <span class="line"></span>
          <img src="../../static/images/time.png" alt="" />
          <span>{{ detailsData.article.mas_article_addtime }}</span>
        </div>
        <div
          class="content"
          v-for="(item, index) in detailsData.articleDetails.articleDetails"
          :key="index"
          v-html="item.mas_article_details_content"
        ></div>
        <div class="support-box">
          <!-- v-if="isPay == 0" -->
          <div style="border-bottom: 1px solid #f00">
            <img
              class="triangle"
              src="../../static/images/triangle.png"
              alt=""
            />
            <div class="info-tip">本文为付费文章，更多精彩内容可付费查看！</div>
            <div class="radio-group">
              <div class="radio-box">
                <input
                  name="type"
                  type="checkbox"
                  value="0"
                  checked
                  @click="checkedThis(0)"
                />
                <label>¥10.00</label>
              </div>
              <div class="radio-box">
                <input
                  name="type"
                  type="checkbox"
                  value="1"
                  @click="checkedThis(1)"
                />
                <label>10积分</label>
              </div>
            </div>
            <button class="buy-btn" @click="goLogin">立即购买</button>
            <div class="open-box">
              <p>畅读学案例栏目所有内容！</p>
              <div class="go-open">
                去开通
                <img src="../../static/images/light-arrow.png" alt="" />
              </div>
            </div>
          </div>
          <!-- v-else-if="isPay == 1" -->
          <div style="border-bottom: 1px solid #f00">
            <div class="open-box">
              <p>畅读学案例栏目所有内容！</p>
              <div class="go-open">
                去开通
                <img src="../../static/images/light-arrow.png" alt="" />
              </div>
            </div>
          </div>
          <!-- v-else -->
          <div style="border-bottom: 1px solid #f00">
            <div class="dy-tip">
              <div class="dy-tip-l">
                <img src="../../static/images/hy.png" alt="" />
                <span
                  >您已订阅本文章所属栏目，可以畅读栏目所有付费文章，订阅剩余时长</span
                >
                <span class="day">100天</span>
              </div>
              <div class="dy-tip-r">
                <span>去续费</span>
                <img src="../../static/images/way/right02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- <share :config="config"></share> -->
        <div class="share" :class="{ fixedShare: isFixed }">
          <div class="share-l">
            <span>分享文章</span>
            <a
              href="http://v.t.sina.com.cn/share/share.php?url=http://www.tmtpost.com/6064793.html&amp;title=【若觉人生难动容，劝君听听张国荣】听懂了这三首歌，或许你就听懂了张国荣。&amp;appkey=1898705929&amp;pic=https://images.tmtpost.com/uploads/images/2022/04/ec37daf3e7728a95b1ca221d56014f5b_1648810695.png?imageMogr2/auto-orient/strip/interlace/1/quality/85/format/jpg/thumbnail/1400x1192/gravity/center/crop/!1400x1192&amp;ext=.png"
              target="_blank"
              deta-title="微博分享"
              ><img src="../../static/images/tsina.png"
            /></a>

            <div class="dropdown-menu-part">
              <a
                class="circle-wechat qcode_pop_open"
                data-share="wechat_friend_circle"
                href="javascript:void(0);"
                title="微信分享"
                ><i data-share-url="http://www.tmtpost.com/6064793.html"
                  ><img src="../../static/images/weixin.png" /></i
              ></a>
              <div class="dropdown-menu wx-dropdown visible">
                <div id="qrcode"></div>
                <div class="w_txt">微信扫码</div>
              </div>
            </div>

            <a
              href="https://accounts.douban.com/passport/login?redir=https%3A//www.douban.com/share/service%3Fhref%3Dhttps%253A%252F%252Fwww.chinamas.cn%252Fxw%252F305%25230-douban-1-2036-8281435cf7fd5566f1df466eda875057%26name%3D2022%25E4%25B8%25AD%25E5%259B%25BD%25EF%25BC%2588%25E5%258C%2597%25E4%25BA%25AC%25EF%25BC%2589%25E5%259B%25BD%25E9%2599%2585%25E6%2599%25BA%25E6%2585%25A7%25E8%25B4%25A2%25E5%258A%25A1%25E5%25B1%2595%25E8%25A7%2588%25E4%25BC%259A%25E6%259A%25A8%25E8%25AE%25BA%25E5%259D%259B%2520-%2520%25E7%25AE%25A1%25E7%2590%2586%25E4%25BC%259A%25E8%25AE%25A1%25E7%25A0%2594%25E7%25A9%25B6%26text%3D"
              target="_blank"
              deta-title="豆瓣分享"
              @click="shareToDouban"
              ><img src="../../static/images/db.png"
            /></a>
          </div>
          <div class="share-r">
            <div class="share-r-item">
              <img src="../../static/images/watch.png" alt="" />
              <span>888</span>
            </div>
            <div class="share-r-item" @click="collectFn">
              <img
                v-if="isCollect == false"
                src="../../static/images/collect.png"
                alt=""
              />
              <img v-else src="../../static/images/collect-active.png" alt="" />
              <span>收藏</span>
            </div>
            <div class="share-r-item" @click="goInput">
              <img src="../../static/images/reply.png" alt="" />
              <span>8</span>
            </div>
          </div>
        </div>
        <div class="comment-box">
          <div class="comments_mod_v1">
            <!-- 没有登陆提示登录后评论 -->
            <div class="post-comment">
              <h6 class="total_num">暂无评价</h6>
              <div class="login-tip">
                <p>
                  您需要登录后才可以评论
                  <nuxt-link
                    target="_blank"
                    :to="{
                      path: `/login?path=${this.$router.currentRoute.fullPath}`,
                    }"
                    class="login"
                    >登录</nuxt-link
                  >
                  |
                  <nuxt-link
                    target="_blank"
                    :to="{
                      path: `/login?path=${this.$router.currentRoute.fullPath}`,
                    }"
                    class="login"
                    >立即注册</nuxt-link
                  >
                </p>
              </div>
              <button class="comment">评论</button>
            </div>
            <div class="post-comment">
              <h6 class="total_num">暂无评价</h6>
              <el-input
                type="textarea"
                placeholder="请输入评论内容"
                v-model="textarea"
              >
              </el-input>
              <button class="comment">评论</button>
            </div>
            <div class="comment-list">
              <ul>
                <li>
                  <div class="li-l">
                    <img src="../../static/images/photo.png" alt="" />
                  </div>
                  <div class="li-r">
                    <div class="li-r-info">
                      <h6>TAKI <span>童生</span></h6>
                      <span>3天前</span>
                    </div>
                    <p class="li-r-comment">
                      本杂志可以进行单期杂志购买与订阅及一年期订阅，同时可以满足电子刊以及刊内文章单独订阅。集团订阅请直接和我们联系（400-819-1255）。
                    </p>
                    <div class="li-r-base">
                      <img src="../../static/images/praise.png" alt="" />
                      <span>赞1</span>
                      <img src="../../static/images/reply.png" alt="" />
                      <span>回复</span>
                    </div>
                    <div class="li-r-reply">
                      <ul>
                        <li>
                          <div class="li-l">
                            <img src="../../static/images/photo.png" alt="" />
                          </div>
                          <div class="li-r">
                            <div class="li-r-info">
                              <h6>TAKI <span>童生</span></h6>
                              <span>3天前</span>
                            </div>
                            <p class="li-r-comment">
                              集团订阅请直接和我们联系（400-819-1255）。
                            </p>
                            <div class="li-r-base">
                              <img
                                src="../../static/images/praise.png"
                                alt=""
                              />
                              <span>赞1</span>
                              <img src="../../static/images/reply.png" alt="" />
                              <span>回复</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="li-l">
                            <img src="../../static/images/photo.png" alt="" />
                          </div>
                          <div class="li-r">
                            <div class="li-r-info">
                              <h6>TAKI <span>童生</span></h6>
                              <span>3天前</span>
                            </div>
                            <p class="li-r-comment">
                              集团订阅请直接和我们联系（400-819-1255）。
                            </p>
                            <div class="li-r-base">
                              <img
                                src="../../static/images/praise.png"
                                alt=""
                              />
                              <span>赞1</span>
                              <img src="../../static/images/reply.png" alt="" />
                              <span>回复</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="li-l">
                    <img src="../../static/images/photo.png" alt="" />
                  </div>
                  <div class="li-r">
                    <div class="li-r-info">
                      <h6>TAKI <span>童生</span></h6>
                      <span>3天前</span>
                    </div>
                    <p class="li-r-comment">
                      本杂志可以进行单期杂志购买与订阅及一年期订阅，同时可以满足电子刊以及刊内文章单独订阅。集团订阅请直接和我们联系（400-819-1255）。
                    </p>
                    <div class="li-r-base">
                      <img src="../../static/images/praise.png" alt="" />
                      <span>赞1</span>
                      <img src="../../static/images/reply.png" alt="" />
                      <span>回复</span>
                    </div>
                  </div>
                </li>
              </ul>
              <pagination
                v-show="total > 0"
                :total="total"
                :page.sync="page"
                :limit.sync="limit"
                @pagination="getList"
              />
              <div class="post-comment">
                <div class="login-tip">
                  <p>
                    您需要登录后才可以评论
                    <a class="login" href="" target="_blank">登录</a>
                    |
                    <a class="login" href="" target="_blank">立即注册</a>
                  </p>
                </div>
                <button class="comment">评论</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧文章相关部分 -->
      <div class="article-main-right">
        <div class="module">
          <h2>相关文章</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <ul>
              <li v-for="(item, index) in detailsData.list" :key="index">
                <div class="li-l twoline">
                  {{ item.mas_article_title }}
                </div>
                <div class="li-r">
                  <img :src="item.mas_article_img" alt="" />
                </div>
              </li>
              <!-- <li>
                <div class="li-l twoline">
                  论文《 潜水期权与高管绩效薪酬敏感 度之间的…
                </div>
                <div class="li-r">
                  <img src="@/static/images/article-img.png" alt="" />
                </div>
              </li>
              -->
            </ul>
          </div>
        </div>
        <div class="module" data-aos="fade-up">
          <h2>站内热词</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <div class="keyword">
              <span
                :class="current == index ? 'active' : ''"
                v-for="(item, index) in detailsData.hotWord"
                :key="index"
                @click="onItem(index, item.mas_tag_name)"
                >{{ item.mas_tag_name }}</span
              >
            </div>
          </div>
        </div>
        <div class="module" data-aos="fade-up">
          <h2>杂志</h2>
          <div class="module-main">
            <div class="top-line"></div>
            <div class="magazine">
              <div class="magazine-img">
                <img
                  :src="detailsData.magazine.mas_magazine_master_img"
                  alt=""
                />
                <div class="point">新书</div>
              </div>
              <div class="headline">
                {{ detailsData.magazine.mas_magazine_title_main }}
              </div>
              <nuxt-link
                :to="'/dzz/' + detailsData.magazine.mas_magazine_id"
                class="contribute"
                >马上阅读</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 未登录未支付 -->
      <el-dialog
        :lock-scroll="false"
        :visible.sync="loginVisible"
        width="420px"
        class="login-box"
        center
      >
        <LoginBox />
      </el-dialog>
      <!-- 已登录未支付 -->
      <el-dialog
        title="扫码订阅支付"
        :lock-scroll="false"
        :visible.sync="payVisible"
        width="316px"
        center
      >
        <div class="pay-box">
          <p>扫码完成付费，可订阅本模块</p>
          <div class="code-box">
            <img
              src="	https://www.chinamas.cn/static/picImG/header-footer/footer.jpg"
              alt=""
            />
          </div>
          <div class="base-tip">
            <img src="../../static/images/weixin.png" alt="" />
            <span>扫码支付</span>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
// import { notNeedlogin } from "@/request/api";
// import md5 from "js-md5";
export default {
  data() {
    return {
      total: 1,
      page: 1,
      limit: 10,
      commentStatus: 3, //1未登录 2暂无评论 3有评论
      textarea: "",
      isFixed: false,
      isLogin: false,
      isPay: 3, // 0未登录未付款状态 1已登录已支付未订阅
      isLoginIsPay: 0, //0 未登录未付款状态 1已登录未付款
      loginVisible: false, //未登录弹框
      payVisible: false, //已登录未支付
      // config: {
      //   url: window.location.href, // 网址，默认使用 window.location.href
      //   source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
      //   title: document.title , // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
      //   description: document.description, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
      //   image: "", // 图片, 默认取网页中第一个img标签
      //   sites: ["weibo", "wechat", "douban"], // 启用的站点
      //   // disabled: ["google", "facebook", "twitter"], // 禁用的站点
      //   wechatQrcodeHelper: "<p>微信扫码</p>",
      // },
      keywords: "淘宝 西瓜视频、今日头条、微博",
      isCollect: false, //是否收藏
      detailsData: {}, //文章详情数据
      current: 0,
    };
  },
  head() {
    //优化seo 动态设置title、keywprds和description
    return {
      title: "订阅详情页",
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
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
  async asyncData({ $axios, query, params, store }) {
    // let timestamp = Date.parse(new Date());
    // let sign = md5(timestamp + store.state.secretKey);
    let res = await $axios.notNeedlogin({
      className: "ArticleController",
      classMethod: "articleDetails",
      // sign: sign,
      // timespan: timestamp,
      data: {
        articleId: params.id,
        token: store.state.token,
      },
    });
    console.log(res, "res-文章详情");
    if (res.bol) {
      return {
        detailsData: res.data,
      };
    }
  },
  mounted() {
    AOS.init({
      once: true,
    });
    // console.log("document.meta.keywords",document.meta.name,'this.head.meta.name')
    // 开启滚动监听
    window.addEventListener("scroll", this.handleScroll);
    console.log(window.location.href, this.$route.path);
    // 生成二维码
    let qr = new QRCode("qrcode", {
      width: 88,
      height: 88, // 高度
      text: "http://www.tmtpost.com/6064793.html", // 二维码内容
      render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
      background: "#f0f",
      foreground: "#ff0",
    });
  },

  methods: {
    //点击立即支付未登录状态
    goLogin() {
      if (this.isLoginIsPay == 0) {
        this.loginVisible = true;
      } else {
        this.payVisible = true;
      }
    },
    // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      // 页面滚动高度
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 可视区域高度
      let clientHeight = document.documentElement.clientHeight;
      // 距离至页面顶部的距离
      let offsetTop = document.querySelector(".support-box").offsetTop;
      // let info = document.querySelector('.support-box').offsetHeight + 'px';
      // console.log(info)
      if (scrollTop >= clientHeight / 4 && scrollTop <= offsetTop - 200) {
        this.isFixed = true;
        // this.$refs.scrollBox["className"] = "toptab";
      } else {
        this.isFixed = false;
      }
    },
    //点击回复滚动到输入框
    goInput() {
      this.$nextTick(() => {
        let domToTop = document.querySelector(".comment-box").offsetTop;
        // document.body.scrollTop = domToTop;
        // document.documentElement.scrollTop =domToTop
        $("html,body").animate(
          {
            scrollTop: domToTop,
          },
          500
        );
      });
    },
    //分享的微博
    shareToSinaWB(event) {
      event.preventDefault();
      var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?title="123"'; //真实的appkey，必选参数
      _shareUrl += "&url=" + encodeURIComponent(document.location); //参数url设置分享的内容链接|默认当前页location，可选参数
      _shareUrl += "&title=" + encodeURIComponent(document.title); //参数title设置分享的标题|默认当前页标题，可选参数
      _shareUrl += "&source=" + encodeURIComponent(_source || "");
      _shareUrl += "&sourceUrl=" + encodeURIComponent(_sourceUrl || "");
      _shareUrl += "&content=" + "utf-8"; //参数content设置页面编码gb2312|utf-8，可选参数
      _shareUrl += "&pic=" + encodeURIComponent(_pic || ""); //参数pic设置图片链接|默认为空，可选参数
      window.open(_shareUrl, "_blank");
    },
    //分享到豆瓣
    shareToDouban(event) {
      event.preventDefault();
      var _shareUrl = "http://shuo.douban.com/!service/share?";
      _shareUrl +=
        "href=" + encodeURIComponent("https://36kr.com/p/1752078125334147"); //分享的链接
      _shareUrl += "&name=" + encodeURIComponent(document.title); //分享的标题
      _shareUrl += "&image=" + encodeURIComponent(""); //分享的图片
      window.open(_shareUrl, "_blank");
      console.log(_shareUrl);
    },

    getList() {},
    //点击收藏
    collectFn() {
      this.isCollect = !this.isCollect;
      this.$message.success("收藏成功");
    },
    //单选按钮
    checkedThis(obj) {
      //  let gender=$("input[name='type']:checked").val();
      var boxArray = document.getElementsByName("type");
      for (var i = 0; i <= boxArray.length - 1; i++) {
        if (boxArray[i].value == obj && boxArray[i].checked) {
          boxArray[i].checked = true;
        } else {
          boxArray[i].checked = false;
        }
      }
    },
    //点击每个热词
    onItem(index, item) {
      this.current = index;
      console.log(this.current);
      this.$router.push({
        path: "/search",
        query: { keyword: item, index: index },
        // params: {
        //   type: item,
        // },
      });
    },
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/article.less";
@import "@/static/css/page-css/articleModule.less";
</style>
