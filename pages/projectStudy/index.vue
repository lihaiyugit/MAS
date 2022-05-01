<template>
  <div class="project">
    <div class="banner">
      <div class="banner-main banxin">
        <h1>课题研究</h1>
        <p>管理会计创新研究平台设CMAS研究中心</p>
      </div>
    </div>
    <div class="content banxin">
      <h2>CMAS课题</h2>
      <p class="describe">
        管理会计创新研究平台设CMAS研究中心，深度致力于以数据驱动为主线的企业管理创新应用研究，将广泛连接各界优势资源，开展数字化管理、业财融合、管理会计、数据分析、财务共享、新技术融合等领域的课题研究和智慧传承工作，助力我国数字化管理的理论创新和企事业单位的管理进步。
      </p>
      <div class="achievement">
        <div class="title">
          <div class="title-l">
            <h5>课题成果</h5>
            <div class="select-group">
              <div class="input-group" @click="selectClick">
                <span class="title">{{ defaultValue }}</span>
                <img
                  :class="selectList ? 'select_img_rotate' : ''"
                  src="https://b.yzcdn.cn/static/app-web/img/ying-yong-revision/arrow-down.png"
                  alt=""
                />
              </div>
              <ul class="select-item" v-show="selectList">
                <li
                  v-for="(item, index) in typeData"
                  :key="index"
                  :class="current == index ? 'active' : ''"
                  @click="cutValue(item, index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="title-r">查看更多</div>
        </div>
        <div class="type-list">
          <swiper
            :options="swiperOption"
            ref="myTwoSwiper"
            class="swiper-wrapper"
          >
            <swiper-slide>
              <dl>
                <dt>
                  <img src="../../static/images/way/kt-01.png" alt="" />
                </dt>
                <dd>
                  <h6>数字智能时代中国企业财务共享的创新与升级调研报告</h6>
                  <p class="info">
                    肇始于20世纪80年代的财务共享模式，在今天的数据智能时代会有哪些“出圈”、“跨界”的变化？由上海国家会计学院智能财务研究中心、元年研究院、《管理会计研究》CMAS智库联合制作的《数字智能时代，中国企业财务共享的创新与升级调研报告》正式发布，报告用翔实的调研数据和专业的洞察结论系统回答了这个业界非常关心的热门话题。
                  </p>
                  <p>
                    <span>联合发布：</span
                    >上海国家会计学院智能财务研究中心、元年研究院、《管理会计研究》CMAS智库
                  </p>
                  <p><span>报告专家：</span>刘勤，韩向东，贾小强</p>
                  <p class="time"><span>发布时间：</span>2021年9月28日</p>
                  <div class="btn">
                    <button @click="tryRead()">试读</button>
                    <button>下载</button>
                  </div>
                </dd>
              </dl>
            </swiper-slide>
            <swiper-slide>
              <dl>
                <dt>
                  <img src="../../static/images/way/kt-01.png" alt="" />
                </dt>
                <dd>
                  <h6>数字智能时代中国企业财务共享的创新与升级调研报告</h6>
                  <p class="info">
                    肇始于20世纪80年代的财务共享模式，在今天的数据智能时代会有哪些“出圈”、“跨界”的变化？由上海国家会计学院智能财务研究中心、元年研究院、《管理会计研究》CMAS智库联合制作的《数字智能时代，中国企业财务共享的创新与升级调研报告》正式发布，报告用翔实的调研数据和专业的洞察结论系统回答了这个业界非常关心的热门话题。
                  </p>
                  <p>
                    <span>联合发布：</span
                    >上海国家会计学院智能财务研究中心、元年研究院、《管理会计研究》CMAS智库
                  </p>
                  <p><span>报告专家：</span>刘勤，韩向东，贾小强</p>
                  <p class="time"><span>发布时间：</span>2021年9月28日</p>
                  <div class="btn">
                    <button>试读</button>
                    <button>下载</button>
                  </div>
                </dd>
              </dl>
            </swiper-slide>
          </swiper>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="btn-left">
            <img
              class="left01"
              src="../../static/images/way/left01.png"
              alt=""
            />
            <img class="left1" src="../../static/images/way/left1.png" alt="" />
          </div>
          <div class="btn-right">
            <img
              class="right02"
              src="../../static/images/way/right02.png"
              alt=""
            />
            <img
              class="right2"
              src="../../static/images/way/right2.png"
              alt=""
            />
          </div>
        </div>
        <div class="title" style="margin-top: 63px">
          <div class="title-l">
            <h5>课题合作</h5>
          </div>
        </div>
        <div class="type-list" style="margin-left: 68px">
          <dl>
            <dt>
              <img src="../../static/images/way/kt-02.png" alt="" />
            </dt>
            <dd>
              <h6>课题合作</h6>
              <p class="info" style="width: 706px">
                我们基于开放、分享、合作、共创的原则，现面向高等院校、企事业单位、学术机构、专业机构等单位和个人招募合作研究者，共同组建或参与数字化管理、业财融合、管理会计、数据分析、财务共享、新技术融合等相关课题的联合研究团队，共同推动以各方研究成果为基础的课题合作。我们将为学者老师提供课题指导、活动交流、成果数据分享、论文投稿推荐、出版专著推荐、成果发表等支持，赋能研究人员的课题研究工作。
              </p>
              <div class="btn">
                <button @click="JGVisible = true">机构合作</button>
                <button @click="personalVisible = true">个人合作</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="academic">
      <div class="content banxin">
        <h2>学术交流</h2>
        <p class="describe">
          我们将根据课题进度需要不定期举办课题讨论会，邀请CMAS智库专家（包括企事业单位CFO\CIO，高校知名教授等）对课题研究工作进行指导，为课题研究成果进行评审。我们还将定期举办走进企业、CFO圆桌会、课题发布会等活动，加强企事业单位与学术单位的交流合作，推动课题研究工作的高效开展和课题成果的有效转化。
        </p>
        <div class="activity">
          <div class="title">近期交流会活动</div>
          <div class="list">
            <dl>
              <dt>
                <img src="../../static/images/way/kt-03.png" alt="" />
              </dt>
              <dd>
                <span class="dd-title"
                  >活动标题活动标题活动标题活动标题活动标题</span
                >
                <p class="oneline">
                  我们将根据课题进度需要不定期举办课题讨论...
                </p>
                <div class="details">
                  <div class="left">
                    <span>阅读详情</span>
                    <img src="../../static/images/arrows-left.png" alt="" />
                  </div>
                  <div class="right">
                    <img src="../../static/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="map" src="../../static/images/map.png" alt="" />
                    <span>北京</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../../static/images/way/kt-03.png" alt="" />
              </dt>
              <dd>
                <span class="dd-title"
                  >活动标题活动标题活动标题活动标题活动标题</span
                >
                <p class="oneline">
                  我们将根据课题进度需要不定期举办课题讨论...
                </p>
                <div class="details">
                  <div class="left">
                    <span>阅读详情</span>
                    <img src="../../static/images/arrows-left.png" alt="" />
                  </div>
                  <div class="right">
                    <img src="../../static/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="map" src="../../static/images/map.png" alt="" />
                    <span>北京</span>
                  </div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt>
                <img src="../../static/images/way/kt-03.png" alt="" />
                <div class="point">已结束</div>
              </dt>
              <dd>
                <span class="dd-title"
                  >活动标题活动标题活动标题活动标题活动标题</span
                >
                <p class="oneline">
                  我们将根据课题进度需要不定期举办课题讨论...
                </p>
                <div class="details">
                  <div class="left">
                    <span>阅读详情</span>
                    <img src="../../static/images/arrows-left.png" alt="" />
                  </div>
                  <div class="right">
                    <button>已结束</button>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="课题合作（机构）"
      :visible.sync="JGVisible"
      width="600px"
      center
      :lock-scroll="false"
    >
      <el-form :model="JGform" size="mini" label-width="70px">
        <el-form-item label="机构名称：">
          <el-input v-model="JGform.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="合作形式：">
          <div class="radio-group">
            <div class="radio-box">
              <input
                name="type"
                type="checkbox"
                value="0"
                checked
                @click="checkedThis(0)"
              />
              <label>共建</label>
            </div>
            <div class="radio-box">
              <input
                name="type"
                type="checkbox"
                value="1"
                @click="checkedThis(1)"
              />
              <label>参与</label>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="合作方向：">
          <el-select v-model="JGform.direction" placeholder="请选择">
            <el-option
              v-for="item in typeData"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式：">
          <el-input
            v-model="JGform.contact"
            maxlength="11"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="tip">
        感谢您的合作邀约，我们将在7个工作日内给您答复，或者您可以直接联系···
      </div>

      <span slot="footer" class="dialog-footer">
        <button @click="JGVisible = false">提交</button>
      </span>
    </el-dialog>
    <el-dialog
      title="课题合作（个人）"
      :visible.sync="personalVisible"
      width="600px"
      center
      :lock-scroll="false"
    >
      <el-form :model="personalform" size="mini" label-width="70px">
        <el-form-item label="姓名：">
          <el-input v-model="personalform.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="工作单位：">
          <el-input
            v-model="personalform.company"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="职务：">
          <el-input v-model="personalform.post" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：">
          <el-input
            v-model="personalform.contact"
            maxlength="11"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input
            v-model="personalform.email"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="合作方向：">
          <el-select v-model="personalform.direction" placeholder="请选择">
            <el-option
              v-for="item in typeData"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="tip">
        感谢您的合作邀约，我们将在7个工作日内给您答复，或者您可以直接联系···
      </div>

      <span slot="footer" class="dialog-footer">
        <button @click="personalVisible = false">提交</button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      defaultValue: "业务",
      typeData: ["数字化", "人工智能", "数据挖掘", "数据中台", "智能财务"],
      selectList: false, //先将下拉框隐藏
      current: "-1", //下拉默认选中项
      swiperOption: {
        watchOverflow: true, //当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航。
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        effect: "slide", //切换效果：默认为“位移切换”
        loop: true, // 无限循环
        autoplay: false, //可选选项，自动滑动
        speed: 3000,
        slidesPerView: 1, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 0, // 在slide之间设置距离
        slidesPerGroup: 1, // 在轮播模式下定义slides的数量多少为一组。
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // 允许点击小圆点跳转
        },
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      JGVisible: false, //课题合作（机构）弹框
      JGform: {
        name: "",
        type: "",
        direction: "数字化",
        contact: "",
      }, //机构表单
      personalVisible: false, //课题合作（个人）弹框
      personalform: {
        name: "",
        company: "",
        post: "",
        contact: "",
        email: "",
        direction: "数字化",
      }, //个人表单
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    //点击试读
    tryRead() {
      this.$router.push({
        name: "journal",
        query: { id: 30 },
        // params: {
        //   type: item,
        // },
      });
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
    //类型下拉框
    selectClick() {
      this.selectList = !this.selectList; //点击显示或隐藏下拉框
    },
    //点击下拉框
    cutValue(item, index) {
      this.selectList = false;
      this.defaultValue = item;
      this.current = index;
    },
  },
};
</script>
<style lang="less" scoped>
.project {
  width: 100%;
  margin-top: 121px;
  .banner {
    height: 240px;
    background-image: url(@/static/images/way/kt-banner.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .banner-main {
      h1 {
        padding: 57px 0px 27px;
        font-size: 36px;
        font-weight: 400;
        color: #ffffff;
        line-height: 44px;
        letter-spacing: 2.3px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.65);
        line-height: 12px;
      }
    }
  }
  .content {
    h2 {
      font-size: 24px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 32px;
      padding: 50px 0px 23px 0px;
    }
    .describe {
      width: 965px;
      font-size: 13px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
    }
    .achievement {
      padding: 50px 0px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-l {
          display: flex;
          align-items: center;
          h5 {
            font-size: 20px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.85);
            line-height: 32px;
          }
          .select-group {
            height: 28px;
            cursor: pointer;
            margin-left: 12px;
            .input-group {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 74px;
              height: 28px;
              background: #f2f3f5;
              border-radius: 2px;
              padding: 0px 10px 0px 12px;
              .title {
                font-size: 12px;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.65);
                line-height: 16px;
              }
              img {
                width: 10px;
                height: 6px;
              }
              .select_img_rotate {
                transform: rotate(180deg);
                transition: transform 0.25s, -webkit-transform 0.25s,
                  -moz-transform 0.25s;
              }
            }
            .select-item {
              position: relative;
              z-index: 997;
              width: 96px;
              padding: 4px 0px;
              background: #ffffff;
              border-radius: 2px;
              box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
                0px 6px 16px 0px rgba(0, 0, 0, 0.08),
                0px 3px 6px -4px rgba(0, 0, 0, 0.12);
              li {
                width: 77px;
                height: 26px;
                background-color: #fff;
                display: block;
                outline: none;
                padding: 0px 7px 0px 12px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: rgba(0, 0, 0, 0.65);
                line-height: 26px;
              }
              li:hover {
                background-color: #edf4ff;
              }
              li.active {
                font-weight: 500;
                background: #f2f3f5;
              }
            }
          }
        }
        .title-r {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
        }
      }
      .type-list {
        padding-top: 22px;
        position: relative;
        dl {
          display: flex;
          dt {
            width: 240px;
            height: 303px;
            img {
              border-radius: 0px;
            }
          }
          dd {
            width: 635px;
            height: 263px;
            padding: 22px 112px 18px 40px;
            background: linear-gradient(90deg, #fcfcfd, #f9fafb 94%, #f7f8fa);
            h6 {
              font-size: 16px;
              font-weight: 500;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
            }
            p {
              width: 635px;
              font-size: 12px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.65);
              line-height: 13px;
              padding-bottom: 13px;
              span {
                &:nth-child(1) {
                  color: rgba(0, 0, 0, 0.85);
                }
                &:nth-child(2) {
                  color: rgba(0, 0, 0, 0.45);
                }
              }
            }
            .info {
              padding: 14px 0px 34px;
              line-height: 20px;
            }
            .time {
              padding-bottom: 30px;
            }
            .btn {
              button {
                padding: 5px 16px;
                border: 1px solid #ed6d38;
                font-size: 14px;
                font-weight: 400;
                color: #ffffff;
                line-height: 22px;
                &:nth-child(1) {
                  background: #ed6d38;
                  border-radius: 2px;
                }
                &:nth-child(2) {
                  background: #fff;

                  border-radius: 2px;
                  color: #ed6d38;
                  margin-left: 32px;
                }
              }
            }
          }
        }

        .swiper-wrapper {
          width: 1027px;
          margin-left: 68px;
        }
        .swiper-pagination {
          left: 50%;
          bottom: -25px;
          transform: translateX(-50%);
        }
        /deep/.swiper-pagination-bullet {
          margin-left: 10px;
        }
        /deep/.swiper-pagination-bullet-active {
          background: #ed6d38;
        }
        .btn-left,
        .btn-right {
          width: 38px;
          height: 38px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 8px;
            height: 14px;
          }
          .right2,
          .left1 {
            display: none;
          }
        }

        .btn-left {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0px;
          z-index: 997;
        }
        .btn-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 30px;
          z-index: 997;
        }
        .btn-left:hover,
        .btn-right:hover {
          background: #ed6d38;
        }
        .btn-left:hover .left1 {
          display: block;
        }

        .btn-left:hover .left01 {
          display: none;
        }
        .btn-right:hover .right2 {
          display: block;
        }
        .btn-right:hover .right02 {
          display: none;
        }
      }
    }
  }
  .academic {
    height: 634px;
    background: linear-gradient(90deg, #fcfcfd, #f9fafb 94%, #f7f8fa);
    .activity {
      .title {
        width: 125px;
        height: 30px;
        background: #bc996d;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        line-height: 30px;
        text-align: center;
        margin: 23px 0px 15px;
      }
      .list {
        display: flex;
        justify-content: space-between;
        dl {
          dt {
            width: 327px;
            height: 184px;
            position: relative;
            .point {
              background: #ed6d38;
            }
            img {
              border-radius: 6px 6px 0px 0px;
            }
          }
          dd {
            width: 296px;
            height: 145px;
            padding: 18px 15px 20px;
            background: #ffffff;
            box-shadow: 0px 2px 14px 0px rgba(195, 195, 195, 0.29);
            .dd-title {
              width: 305px;
              font-size: 18px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              display: inline-block;
            }
            p {
              width: 296px;
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
              padding: 12px 0px 43px;
            }
            .details {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .left {
                display: flex;
                align-items: center;
                span {
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.85);
                  line-height: 22px;
                }
                img {
                  width: 13px;
                  height: 8px;
                  margin-left: 5px;
                  margin-top: 2px;
                }
              }
              .right {
                display: flex;
                align-items: center;
                img {
                  width: 12px;
                  height: 12px;
                  margin-left: 9px;
                  margin-top: 1px;
                }
                .map {
                  width: 9px;
                  height: 11px;
                }
                span {
                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.25);
                  line-height: 17px;
                  margin-left: 2px;
                }
                button {
                  width: 52px;
                  height: 22px;
                  background: #fafafa;
                  border: 1px solid #d9d9d9;
                  border-radius: 2px;

                  font-size: 12px;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 0.65);
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  /deep/.el-dialog__header {
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
    .el-dialog__headerbtn:focus .el-dialog__close,
    .el-dialog__headerbtn:hover .el-dialog__close {
      color: #ed6d38;
    }
  }
  /deep/.el-dialog__title {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }
  /deep/.el-dialog--center .el-dialog__body {
    text-align: left;
    text-align: initial;
    padding: 35px 28px 0px;
    .el-select {
      width: 100%;
    }
    .el-form-item__label {
      padding: 0px;
    }
    .el-form-item__label {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
    }
    .tip {
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      color: #ed6d38;
      line-height: 14px;
      padding-bottom: 26px;
    }
  }
  /deep/.el-dialog__footer {
    padding: 22px 20px 22px;
    border-top: 1px solid #f0f0f0;
    button {
      width: 60px;
      height: 32px;
      background: #ed6d38;
      border-radius: 2px;
      border: none;
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
    }
  }
}
</style>
