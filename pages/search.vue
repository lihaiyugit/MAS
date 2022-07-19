<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-search">
      <div class="search-box banxin">
        <div class="search-left">
          <input
            placeholder="输入搜索的内容"
            v-model="searchValue"
            @onSearch="searchFn"
          />
          <div class="search" @click="searchFn">
            <img src="@/static/images/search-icon.png" alt="" />
          </div>
        </div>
        <img class="search-right" src="@/static/images/search-l.png" alt="" />
      </div>
      <div class="search-content">
        <div class="search-content-main banxin">
          <div class="content-l">
            <div class="search-info">
              <div class="search-word">
                <div class="word">
                  {{ searchValue }}
                  <img
                    class="hot"
                    src="@/static/images/search-hot.png"
                    alt=""
                  />
                </div>
                <div class="tip-text">相关信息</div>
              </div>
              <div class="word-explain" v-show="hotWordId != undefined">
                <h5>{{ describe.mas_tag_name }}</h5>
                <p>
                  {{ describe.mas_tag_describe }}
                </p>
              </div>
            </div>
            <ul class="search-list" v-if="listShowType == 1">
              <li
                v-for="(item, index) in listData"
                :key="index"
                @click="
                  goDetail(item.mas_article_type_url, item.mas_article_id)
                "
              >
                <h5>{{ item.mas_article_title }}</h5>
                <p class="twoline">
                  {{ item.mas_article_introduce }}
                </p>
                <div class="base">
                  <span class="base-l">{{ item.mas_article_type_name }}</span>
                  <div class="base-r">
                    <span class="name">{{ item.mas_article_author }}</span>
                    <img
                      class="time-icon"
                      src="@/static/images/time.png"
                      alt=""
                    />
                    <span class="time">{{ item.mas_article_addtime }}</span>
                    <img
                      class="chat-icon"
                      src="@/static/images/chat.png"
                      alt=""
                    />
                    <span class="time">{{
                      item.mas_article_comments_num
                    }}</span>
                  </div>
                </div>
              </li>
              <div v-show="!finished" class="more-btn">查看更多</div>
            </ul>
            <div class="no-data-box" v-if="listShowType == 2">
              <img src="@/static/images/no-data.png" alt="" />
              <div class="tip">目前还没有内容哦～</div>
            </div>
          </div>
          <!-- 右侧文章相关部分 -->
          <div class="article-main-right">
            <div class="module">
              <h2>热点推荐</h2>
              <div class="module-main">
                <div class="top-line"></div>
                <ul class="hot-word">
                  <li v-for="(item, index) in hotRecommend" :key="index">
                    <a
                      @click="
                        goDetail(item.mas_article_type_url, item.mas_article_id)
                      "
                    >
                      <span
                        v-if="index + 1 == 1"
                        :style="`${
                          index + 1 == 1 ? 'background: #ea3a3a' : ''
                        }`"
                        >{{ index + 1 }}</span
                      >
                      <span
                        v-else-if="index + 1 == 2"
                        :style="`${
                          index + 1 == 2 ? 'background: #fa6725' : ''
                        }`"
                        >{{ index + 1 }}</span
                      >
                      <span
                        v-else-if="index + 1 == 3"
                        :style="`${
                          index + 1 == 3 ? 'background: #f4a74d' : ''
                        }`"
                        >{{ index + 1 }}</span
                      >
                      <span v-else>{{ index + 1 }}</span>
                      <p class="oneline">{{ item.mas_article_title }}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="module">
              <h2>站内热词</h2>
              <div class="module-main">
                <div class="top-line"></div>
                <div class="keyword">
                  <span
                    :class="current == index ? 'active' : ''"
                    v-for="(item, index) in hotWord"
                    :key="index"
                    @click="onItem(item.mas_tag_name, item.mas_tag_id, index)"
                    >{{ item.mas_tag_name }}</span
                  >
                </div>
              </div>
            </div>
            <div class="module">
              <h2>杂志</h2>
              <div class="module-main">
                <div class="top-line"></div>
                <a
                  @click="goMagezine(magazineLeft.mas_magazine_id)"
                  class="magazine"
                >
                  <div class="magazine-img">
                    <img :src="magazineLeft.mas_magazine_master_img" alt="" />
                    <div class="point">新书</div>
                  </div>
                  <div class="headline">
                    {{ magazineLeft.mas_magazine_title_main }}
                  </div>
                  <div class="contribute">马上阅读</div>
                </a>
              </div>
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
      searchValue: this.$route.query.keyword, //搜索内容
      hotWordId: this.$route.query.hotWordId, //站内热词id
      listData: [], //总列表数据
      describe: {}, //热词描述
      pageIndex: 1, //当前页
      pageSize: 6, //当前页
      total: "", //总条数
      hotRecommend: [], //右侧热点推荐
      magazineLeft: {}, //右侧杂志数据
      hotWord: [], //右侧站内热词
      showlaoding: true, // 是否显示loading效果
      finished: false, //数据是否加载完毕
      moretype: "", //加载更多 取值 ‘list’
      listShowType: 1, // 列表显示状态 0加载中 1有数据 2无数据
      current: 0,
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      data: {
        page: 1,
        limit: 6,
        searchVal: query.hotWordId ? "" : query.keyword,
        searchTag: query.hotWordId,
      },
      className: "HomeController",
      classMethod: "search",
    });
    if (res.bol) {
      return {
        listData: res.data.searchList.searchData,
        describe: res.data.searchList.describe,
        total: res.data.searchList.searchCount,
        hotRecommend: res.data.hotspot,
        magazineLeft: res.data.newMagazine,
        hotWord: res.data.hotWord,
        showlaoding: false,
        finished: res.data.searchList.searchCount > 6 ? false : true,
        listShowType: res.data.searchList.searchCount > 0 ? 1 : 2,
      };
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getData(to.query.hotWordId);
    this.hotWordId = to.query.hotWordId;
    this.searchValue = to.query.keyword;
    next();
  },
  created() {},
  mounted() {
    // scroll事件并监听
    window.addEventListener("scroll", this.searchScroll);
  },
  methods: {
    //当前页面点击热词跳转
    getData(id) {
      this.$axios
        .notNeedlogin({
          data: {
            page: 1,
            limit: 6,
            searchTag: id,
            searchVal: id ? "" : this.$route.query.keyword,
          },
          className: "HomeController",
          classMethod: "search",
        })
        .then((res) => {
          if (res.bol) {
            this.listData = res.data.searchList.searchData;
            this.describe = res.data.searchList.describe;
            this.total = res.data.searchList.searchCount;
            this.hotRecommend = res.data.hotspot;
            this.magazineLeft = res.data.newMagazine;
            this.hotWord = res.data.hotWord;
            this.showlaoding = false;
            this.finished = res.data.searchList.searchCount > 6 ? false : true;
            this.listShowType = res.data.searchList.searchCount > 0 ? 1 : 2;
          } else {
            this.$message.error(res.msg);
          }
        });
    },
    //scroll事件并监听
    searchScroll() {
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

          this.moreFn();
        }
      }
    },
    //点击搜索
    searchFn() {
      this.hotWordId = undefined;
      this.pageIndex = 1;
      this.listShowType = 1;
      this.finished = false;
      this.moretype = "list";
      this.getList();
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
      this.moretype = "list";
      let res = await this.$axios.notNeedlogin({
        data: {
          page: pageIndex,
          limit: this.pageSize,
          searchTag: this.hotWordId,
          searchVal: this.searchValue,
          type: this.moretype,
        },
        className: "HomeController",
        classMethod: "search",
      });
      if (res.bol) {
        let searchArr = res.data.searchData;
        this.total = res.data.searchCount;
        this.showlaoding = false;
        this.listShowType = this.total ? 1 : 2;
        if (this.total / this.pageSize > this.pageIndex) {
          this.pageIndex = pageIndex;
        } else {
          this.finished = true; // 数据全部加载完成
        }
        // 将新请求到的数据添加到之前的数据后
        console.log(this.pageIndex, "this.pageIndex");
        this.listData = this.listData.concat(searchArr);
      }
    },
    //点击每个热词
    onItem(val, id, index) {
      this.$store.commit("setSubTabId", -1);
      console.log(this.$store.state.subTabId, val, id, index, "---");
      this.current = index;
      this.searchValue = ""; //搜索内容
      this.hotWordId = "";
      this.$router.push({
        path: "/search",
        query: { keyword: val, hotWordId: id },
      });
    },
    //点击跳转到文章详情
    goDetail(url, id) {
      this.$store.commit("setSubTabId", url);
      this.$router.push({
        path: `/${url}/${id}`,
      });
    },
    //点击跳转到杂志详情
    goMagezine(id) {
      this.$store.commit("setSubTabId", "dzz");
      this.$router.push({
        path: `/dzz/${id}`,
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.searchScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang="less" scoped>
.page-search {
  .search-box {
    height: 101px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-left {
      width: 803px;
      height: 36px;
      position: relative;
      input {
        width: 747px;
        height: 36px;
        background: #ffffff;
        border-radius: 4px 0px 0px 4px;
        border: none;
        text-indent: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      input:focus {
        outline: none;
        border: none;
        box-shadow: none;
      }
      input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }

      .search {
        width: 56px;
        height: 36px;
        background: linear-gradient(
          90deg,
          #ff4e5c 0%,
          #ff9261 82%,
          #fe9062 100%
        );
        border-radius: 0px 4px 4px 0px;
        position: absolute;
        top: 0px;
        right: 0px;
        text-align: center;
        line-height: 52px;
        cursor: pointer;
        img {
          width: 26px;
          height: 26px;
        }
      }
    }
    .search-right {
      width: 196px;
      height: 101px;
      margin-right: -20px;
    }
  }
  .search-content {
    background: #fff;
    padding: 38px 0px 54px 0px;
    .search-content-main {
      display: flex;
      justify-content: space-between;
      .content-l {
        width: 660px;
        .search-info {
          border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
          .search-word {
            display: flex;
            align-items: center;
            padding-bottom: 25px;
            .word {
              display: inline-block;
              padding: 10px 22px;
              background: #f7f8fa;
              font-size: 16px;
              font-weight: 500;
              text-align: left;
              color: #fa6725;
              line-height: 14px;
              position: relative;
              .hot {
                width: 15px;
                height: 7px;
                position: absolute;
                top: 0px;
                right: 0px;
                border-radius: 0px;
              }
            }
            .tip-text {
              font-size: 16px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.85);
              line-height: 16px;
              margin-left: 16px;
            }
          }
          .word-explain {
            width: 100%;
            height: 145px;
            background: #f7f8fa;
            margin-bottom: 37px;
            background-image: url(../static/images/bg-right.png);
            background-size: 306px 145px;
            background-position: right bottom;
            background-repeat: no-repeat;
            h5 {
              font-size: 18px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 16px;
              padding: 33px 0px 20px 22px;
            }
            p {
              padding: 0px 30px 0px 22px;
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
              margin: 0 auto;
            }
          }
        }
        .search-list {
          li {
            width: 100%;
            height: 168px;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            &:nth-child(1) {
              padding-top: 12px;
            }
            &:hover {
              h5 {
                color: #fa6725;
              }
            }
            h5 {
              font-size: 18px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
            }
            p {
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
              text-align: justify;
              margin: 12px 0px 22px 0px;
            }
            .base {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 12px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.25);
              line-height: 20px;
              .base-l {
                color: #fa6725;
              }
              .base-r {
                display: flex;
                align-items: center;
                .name {
                  margin-right: 30px;
                }
                .time {
                  margin-top: -2px;
                  margin-left: 2px;
                }
                .time-icon {
                  width: 12px;
                  height: 12px;
                }
                .chat-icon {
                  width: 12px;
                  height: 10px;
                  margin-left: 7px;
                }
              }
            }
          }
        }
        .more-btn {
          width: 146px;
          height: 32px;
          background: #ffffff;
          border: 1px solid #fa6725;
          border-radius: 2px;
          box-shadow: 0px 2px 0px 0px rgb(0 0 0 / 2%);
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #fa6725;
          line-height: 30px;
          margin: 0 auto;
          margin-top: 32px;
          cursor: pointer;
        }
        .more-btn:hover {
          background: #fa6725;
          color: #fff;
        }
      }
    }
  }
  //无数据样式
  .no-data-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;

    img {
      width: 380px;
      height: 254px;
    }

    .tip {
      margin-top: 22px;
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
    }
  }
}

@import "@/static/css/page-css/articleModule.less";
.hot-word {
  li {
    margin-bottom: 0px !important;
  }
  li a {
    display: flex;
    margin-bottom: 18px;
    cursor: pointer;
    span {
      display: inline-block;
      min-width: 16px;
      height: 16px;
      background: #bfbfbf;
      border-radius: 2px;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 16px;
    }
    p {
      width: 271px;
      font-size: 14px;
      font-weight: 400;
      text-align: justify;
      color: rgba(0, 0, 0, 0.85);
      line-height: 14px;
      margin-left: 7px;
    }
    &:hover {
      p {
        color: #fa6725;
      }
    }
  }
  li:last-child a {
    margin-bottom: 0px;
  }
}
</style>
