<template>
  <div class="content-container">
    <div class="banxin article-main">
      <div class="article-main-left">
        <div class="title">首页 / 学案例 / <span>文章详情</span></div>
        <h1>贯彻落实全面依法治国新理念新思想新战略 扎实推进会计法治建设</h1>
        <div class="details-info">
          <span>财政部</span>
          <span class="line"></span>
          <span class="type">政策解读</span>
          <span class="line"></span>
          <img src="../../static/images/time.png" alt="" />
          <span>2022-03-14</span>
        </div>
        <div class="content">
          “法者，治之端也。”习近平总书记多次强调：“法治兴则民族兴，法治强则国家强。”全面依法治国，是国家治理领域一场广泛而深刻的变革。在“四个全面”战略布局中，全面依法治国具有基础性、保障性作用，落实好这一重大战略任务，对推动经济持续健康发展具有十分重要的意义。会计工作是市场经济活动的重要基础，也是经济管理的重要组成部分。加快完善中国特色社会主义会计法律规范体系，扎实推进会计法治建设，是落实《会计改革与发展“十四五”规划纲要》的重要举措，是社会主义市场经济正常运行的根本保障。
          “法者，治之端也。”习近平总书记多次强调：“法治兴则民族兴，法治强则国家强。”全面依法治国，是国家治理领域一场广泛而深刻的变革。在“四个全面”战略布局中，全面依法治国具有基础性、保障性作用，落实好这一重大战略任务，对推动经济持续健康发展具有十分重要的意义。会计工作是市场经济活动的重要基础，也是经济管理的重要组成部分。加快完善中国特色社会主义会计法律规范体系，扎实推进会计法治建设，是落实《会计改革与发展“十四五”规划纲要》的重要举措，是社会主义市场经济正常运行的根本保障。
          “法者，治之端也。”习近平总书记多次强调：“法治兴则民族兴，法治强则国家强。”全面依法治国，是国家治理领域一场广泛而深刻的变革。在“四个全面”战略布局中，全面依法治国具有基础性、保障性作用，落实好这一重大战略任务，对推动经济持续健康发展具有十分重要的意义。会计工作是市场经济活动的重要基础，也是经济管理的重要组成部分。加快完善中国特色社会主义会计法律规范体系，扎实推进会计法治建设，是落实《会计改革与发展“十四五”规划纲要》的重要举措，是社会主义市场经济正常运行的根本保障。
        </div>
        <div class="support-box">
          <img class="triangle" src="../../static/images/triangle.png" alt="" />
          <div class="login-info" style="display: none">
            <div class="info-tip">
              <p><span>登录</span> 后继续阅读文章</p>
            </div>
            <div class="vip-tip">MAS收费文章请订阅后查看全文</div>
            <button class="upgrade-btn">订阅/升级会员</button>
          </div>
          <div class="login-info">
            <div class="vip-tip">本文为付费文章，更多精彩内容可付费查看！</div>
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
            <button class="upgrade-btn">立即购买</button>
            <button class="dy-btn">订阅/升级会员</button>
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
                  <a class="login" href="" target="_blank">登录</a>
                  |
                  <a class="login" href="" target="_blank">立即注册</a>
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
      <articleModule />
    </div>
  </div>
</template>
<script>
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
  asyncData({
    app,
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {},
  // asyncData({ query, params }) {
  //   // this.$route.params.id
  //   // let res= await ArticleIdApi({id:query.id})
  // },
  mounted() {
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
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.content-container {
  padding: 48px 0px 200px 0px;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgb(114 76 76 / 10%);
  .article-main {
    display: flex;
    justify-content: space-between;
    .article-main-left {
      width: 696px;
      .title {
        font-size: 14px;
        font-family: PingFang, PingFang-Regular;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.45);
        line-height: 12px;
        span {
          color: rgba(0, 0, 0, 0.85);
        }
      }
      h1 {
        font-size: 34px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 50px;
        padding-top: 20px;
      }
      .details-info {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 14px;
        padding: 24px 0px 20px;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
        .line {
          width: 0px;
          height: 18px;
          border: 1px dashed rgba(0, 0, 0, 0.15);
          margin: 0px 16px;
        }
        .type {
          color: #ed6d38;
        }
        img {
          width: 14px;
          height: 14px;
          border-radius: 0px;
        }
        span {
          margin-left: 3px;
        }
      }
      .content {
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 30px;
        padding: 36px 0px 64px;
      }
      .support-box {
        margin-bottom: 72px;
        .triangle {
          width: 20px;
          height: 5px;
          margin: 0 auto;
          display: block;
          margin-bottom: 30px;
        }
        .login-info {
          .info-tip {
            width: 100%;
            height: 64px;
            background: #f7f8fa;
            margin-bottom: 47px;
            p {
              font-size: 16px;
              font-weight: 500;
              text-align: center;
              line-height: 60px;
              color: rgba(0, 0, 0, 0.65);
              span {
                color: #ea3a3a;
                border-bottom: 1px solid #ea3a3a;
              }
            }
          }
          .vip-tip {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            color: #bc996d;
            line-height: 22px;
          }
          .upgrade-btn {
            display: block;
            margin: 22px auto 27px;
            width: 182px;
            height: 44px;
            background: linear-gradient(
              90deg,
              #f34250 0%,
              #f28a51 81%,
              #ff7d3b 100%
            );
            border-radius: 22px;
            border: none;
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
          }
          .radio-group {
            justify-content: center;
            margin-top: 22px;
          }
          .dy-btn {
            display: block;
            margin: 0 auto;
            width: 182px;
            height: 44px;
            border: 2px solid #ed6d38;
            border-radius: 24px;
            background: #fff;
            font-size: 18px;
            font-weight: 600;
            color: #ed6d38;
          }
        }
      }
      .share {
        width: 644px;
        height: 24px;
        background: #fafbff;

        padding: 20px 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .share-l {
          display: flex;
          align-items: center;
          span {
            font-size: 14px;
            font-weight: 400;
            text-align: left;
            color: rgba(0, 0, 0, 0.65);
            line-height: 12px;
          }

          img {
            width: 24px;
            height: 24px;

            border-radius: 0px;
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 27px;
            position: relative;
          }
          a[deta-title]:after {
            content: attr(deta-title);
            position: absolute;
            left: 50%;
            bottom: 100%;
            transform: translate(-50%, 0);
            width: 130px;
            height: 80px;
            background: url(https://www.tmtpost.com/public/img/common/bg_tips.png);
            background-size: 100% 100%;
            color: gray;
            font-size: 14px;
            line-height: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
          }
          a[deta-title]:hover:after {
            transition-delay: 100ms;
            visibility: visible;
            transform: translate(-50%, -6px);
            opacity: 1;
          }

          .dropdown-menu-part {
            position: relative;
            white-space: normal;
            i {
              display: flex;
              align-items: center;
            }
          }
          .dropdown-menu {
            padding: 15px 20px;
            position: absolute;
            top: 54px;
            background: #fff;
            border: 1px solid rgba(26, 53, 71, 0.12);
            border-radius: 4px;
            box-shadow: 0 1px 2px rgba(26, 53, 71, 0.1);
            opacity: 0;
            filter: alpha(opacity=0);
            -ms-filter: alpha(opacity=0);
            zoom: 1;
            pointer-events: none;
            transition: 0.25s cubic-bezier(0.3, 0, 0, 1.3);
            &::before {
              content: "";
              position: absolute;
              top: -7px;
              right: calc(50% - 9px);
              right: -webkit-calc(50% - 9px);
              right: -moz-calc(50% - 9px);
              width: 13px;
              height: 7px;
              z-index: 4;
              background: url(https://www.tmtpost.com/public/css/img/dropdown-menu-arrow.svg);
            }
          }
          .dropdown-menu.visible {
            opacity: 1;
            filter: alpha(opacity=100);
            -ms-filter: alpha(opacity=100);
            zoom: 1;
            pointer-events: auto;
            -webkit-transform: none;
            transform: none;
            z-index: 3;
            display: none;
          }
          .dropdown-menu-part:hover .visible {
            display: block;
          }
          .dropdown-menu:before {
            transform: rotate(180deg);
            bottom: -7px;
            top: unset;
          }
          .dropdown-menu {
            top: -164px;
            left: -30px;
          }

          .dropdown-menu {
          transform: scale(0.8) translateY(-30%);
          }

          .w_txt {
            text-align: center;
            font-size: 12px;
          }
          /deep/#qrcode {
            img {
              width: 88px;
              height: 88px;
              border-radius: 0px;
            }
          }
        }
        .share-r {
          display: flex;
          align-items: center;
          .share-r-item {
            margin-left: 22px;
            display: flex;
            align-items: center;
            &:nth-child(1) img {
              width: 20px;
            }
            img {
              width: 16px;
              border-radius: 0px;
            }
            span {
              font-size: 14px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.65);
              margin-left: 8px;
              margin-top: -4px;
            }
          }
        }
      }
      .fixedShare {
        position: fixed;
        bottom: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.15);
        z-index: 999;
        transition: all 0.3s ease;
      }
      .comment-box {
        width: 100%;
        margin: 0 auto;
        margin-top: 22px;
        .comments_mod_v1 {
          .comment {
            padding: 5px 16px;
            background: #ed6d38;
            border-radius: 2px;
            font-size: 14px;
            font-weight: 400;
            color: #ffffff;
            border: none;
            margin-top: 22px;
          }
          .post-comment {
            padding-top: 22px;
            h6 {
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
              margin-bottom: 24px;
              text-align: center;
            }
            .login-tip {
              height: 128px;
              border: 4px solid #f7f7f7;
              display: flex;
              justify-content: center;
              align-items: center;
              p {
                font-size: 14px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.85);
                line-height: 20px;
                .login {
                  color: #ed6d38;
                }
              }
            }

            /deep/.el-textarea__inner {
              height: 124px;

              border: 1px solid #e5e5e5;
              color: rgba(0, 0, 0, 0.85);
              font-size: 14px;
            }
            /deep/.el-textarea__inner:focus {
              outline: none !important;
              border: 1px solid #ed6d38;
            }
          }
          .comment-list {
            ul {
              padding-top: 36px;
              li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 36px;
                .li-l {
                  min-width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
                .li-r {
                  margin-left: 12px;
                  padding-bottom: 32px;
                  border-bottom: 1px solid #e5e5e5;
                  .li-r-info {
                    font-size: 14px;
                    line-height: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    h6 {
                      font-weight: 400;
                      color: rgba(0, 0, 0, 0.85);
                    }
                    span {
                      margin-left: 10px;
                      color: rgba(0, 0, 0, 0.45);
                    }
                  }
                  .li-r-comment {
                    font-size: 16px;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.85);
                    line-height: 24px;
                    padding: 18px 0px;
                  }
                  .li-r-base {
                    display: flex;
                    align-items: center;
                    img {
                      width: 16px;
                      height: 14px;
                      border-radius: 0px;
                    }

                    span {
                      font-size: 14px;
                      font-weight: 400;
                      color: rgba(0, 0, 0, 0.45);
                      line-height: 20px;
                      margin: 0px 22px 0px 6px;
                    }
                  }
                }
              }
            }
            .li-r-reply {
              margin-top: 38px;
              background: #f7f7f7;
              ul {
                padding: 22px;
                li {
                  margin-bottom: 22px;
                  .li-l {
                    min-width: 28px;
                    height: 28px;
                  }
                  .li-r {
                    width: 94%;
                  }
                  &:last-child {
                    margin-bottom: 0px;
                  }
                  &:last-child .li-r {
                    padding-bottom: 0px;
                    border-bottom: none;
                  }
                }
              }
            }

            .post-comment {
              padding-top: 0px;
            }
          }
        }
      }
    }
  }
}
</style>
