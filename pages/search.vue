<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-search">
      <div class="search-box banxin">
        <div class="search-left">
          <input
            placeholder="输入搜索的内容"
            v-model="$route.query.keyword"
            @onSearch="search"
          />
          <div class="search" @click="search">
            <img src="../static/images/search-icon.png" alt="" />
          </div>
        </div>
        <img class="search-right" src="../static/images/search-l.png" alt="" />
      </div>
      <div class="search-content">
        <div class="search-content-main banxin">
          <div class="content-l">
            <div class="search-info">
              <div class="search-word">
                <div class="word">
                  管理会计
                  <img
                    class="hot"
                    src="../static/images/search-hot.png"
                    alt=""
                  />
                </div>
                <div class="tip-text">相关信息</div>
              </div>
              <div class="word-explain" v-if="$route.query.index!=undefined">
                <h5>管理会计</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
              </div>
            </div>
            <ul class="search-list">
              <li>
                <h5>管理会计发展的趋势与机遇</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
                <div class="base">
                  <span class="base-l">政策解读</span>
                  <div class="base-r">
                    <span class="name">财政部</span>
                    <img
                      class="time-icon"
                      src="../static/images/time.png"
                      alt=""
                    />
                    <span class="time">2022-03-14</span>
                    <img
                      class="chat-icon"
                      src="../static/images/chat.png"
                      alt=""
                    />
                    <span class="time">3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>管理会计控制系统、 信息系统与企业绩效研究综述</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
                <div class="base">
                  <span class="base-l">理论前沿</span>
                  <div class="base-r">
                    <span class="name">孙健</span>
                    <img
                      class="time-icon"
                      src="../static/images/time.png"
                      alt=""
                    />
                    <span class="time">2022-03-14</span>
                    <img
                      class="chat-icon"
                      src="../static/images/chat.png"
                      alt=""
                    />
                    <span class="time">3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>管理会计发展的趋势与机遇</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
                <div class="base">
                  <span class="base-l">政策解读</span>
                  <div class="base-r">
                    <span class="name">孙健</span>
                    <img
                      class="time-icon"
                      src="../static/images/time.png"
                      alt=""
                    />
                    <span class="time">2022-03-14</span>
                    <img
                      class="chat-icon"
                      src="../static/images/chat.png"
                      alt=""
                    />
                    <span class="time">3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>管理会计发展的趋势与机遇</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
                <div class="base">
                  <span class="base-l">政策解读</span>
                  <div class="base-r">
                    <span class="name">孙健</span>
                    <img
                      class="time-icon"
                      src="../static/images/time.png"
                      alt=""
                    />
                    <span class="time">2022-03-14</span>
                    <img
                      class="chat-icon"
                      src="../static/images/chat.png"
                      alt=""
                    />
                    <span class="time">3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>管理会计发展的趋势与机遇</h5>
                <p>
                  启发式效应一直是行为学及心理学关注的焦点，这一效应影响着人们的信息决策，甚至往往引起决策误差，但当前对启发式效应在管理会计决策中的讨论仍属少数…
                </p>
                <div class="base">
                  <span class="base-l">政策解读</span>
                  <div class="base-r">
                    <span class="name">孙健</span>
                    <img
                      class="time-icon"
                      src="../static/images/time.png"
                      alt=""
                    />
                    <span class="time">2022-03-14</span>
                    <img
                      class="chat-icon"
                      src="../static/images/chat.png"
                      alt=""
                    />
                    <span class="time">3</span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="more-btn">查看更多</div>
          </div>
          <!-- 右侧文章相关部分 -->
          <ArticleModule/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: this.$route.query.keyword,
      current:this.$route.query.index
    };
  },
  mounted() {
  },
  methods: {
    //点击立即咨询
    consultFn() {
      // this.$router.push({
      //   name: "dy-pay",
      // });
    },
    //点击搜索
    search() {},
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
          #f34250 0%,
          #f28a51 82%,
          #ff7d3b 100%
        );
        border-radius: 0px 4px 4px 0px;
        position: absolute;
        top: 0px;
        right: 0px;
        text-align: center;
        line-height: 52px;
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
              color: #ed6d38;
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
            &:nth-child(1) {
              padding-top: 12px;
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
              padding: 12px 0px 22px 0px;
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
                color: #ed6d38;
              }
              .base-r {
                display: flex;
                align-items: center;
                .name {
                  margin-right: 30px;
                }
                .time {
                  margin-top: -2px;
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
          border: 1px solid #ed6d38;
          border-radius: 2px;
          box-shadow: 0px 2px 0px 0px rgb(0 0 0 / 2%);
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #ed6d38;
          line-height: 30px;
          margin: 0 auto;
          margin-top: 32px;
        }
      }
    }
  }
}
</style>
