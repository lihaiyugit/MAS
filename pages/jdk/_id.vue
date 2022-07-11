<template>
  <div class="main_container">
    <singleHeader />
    <div class="pdge-details banxin">
      <div class="rw-banner">
        <div class="banner-main">
          <div class="rw-name">
            <span></span>
            <h5>{{ detailsData.mas_master_user_name }}</h5>
          </div>
          <!-- <p>{{detailsData.mas_master_golden}}</p> -->
          <p>
            要破解预算管理“理想与现实”的难题，预算必须从商业计划开始，建立自下而上的计划－预算体系。
          </p>
        </div>
      </div>
      <div class="master-information">
        <div class="information-title">
          <a class="selection" @click="skip('#information')">基本信息</a>
          <a @click="skip('#js')">介绍</a>
          <a @click="skip('#Work')">著作</a>
          <a v-if="detailsData.books.length > 0" @click="skip('#book')">出版书籍</a>
          <a @click="skip('#achievement')">学术成就</a>
          <a @click="course()">TA的课程</a>
        </div>
        <div class="information-main" id="information">
          <div class="information-main-l">
            <dl>
              <dt><img :src="detailsData.mas_master_photo" alt="" /></dt>
              <dd>
                <h5>{{ detailsData.mas_master_user_name }}</h5>
                <div class="research-box">
                  研究领域：
                  <span
                    v-for="(keyIt, keyIn) in detailsData.newData"
                    :key="keyIn"
                    >{{ keyIt }}</span
                  >
                  <!-- <span>管理会计</span>
                  <span>人工智能</span> -->
                </div>
                <div class="experience-box">
                  <span>经{{ sepDot }}历：</span>
                  <!-- <p>{{detailsData.mas_master_experienc}}</p> -->
                  <p class="experience">
                    1993年受聘为硕士研究生导师；1993年7月开始在职攻读博士学位1996年8月获得博士学位；现任对外经贸大学国际商学院院长，博士生导师。
                  </p>
                </div>
              </dd>
            </dl>
          </div>
          <div class="information-main-r">
            <img src="../../static/images/zwkc.png" alt="" />
          </div>
        </div>
      </div>
      <div class="section-box">
        <div class="section-l">
          <div class="module" id="js">
            <div class="module-title">
              <span></span>
              介绍
            </div>
            <div class="introduce-main">
              <p>
                汤谷良，男，1962年生于湖南，经济学博士，2012年教育部长江学者特聘教授。现任对外经贸大学国际商学院教授，博士生导师。1987年北京工商大学（原北京商学院）会计系硕士研究生毕业，获得经济学硕士学位,毕业留校任教.1992年12月破格取得副教授职称，1995年12月又破格取得教授职称。1993年受聘为硕士研究生导师。1993年7月开始在职攻读博士学位，师从著名财务专家黄菊波教授，1996年8月获得博士学位，曾任北京工商大学会计学院院长。除校内工作外，他还兼任全国高等财经院校商业财会研究会副会长兼秘书长，中国商业会计学会学术委员、《会计研究》特约编审。1994年受聘于中央电大，任企业财务学课程的主讲教师，是《企业财务学》教材的主编之一。全国高等教育自学考试企业财务管理专业高级财务管理课程教材主编。1990年被授予商业部系统优秀教师称号。1993年被北京商学院树为科研标兵。1996年被评为北京市优秀青年骨干教师。
              </p>
              <p>
                汤教授一直从事企业财务的研究，在集团公司财务、资本结构、财务政策、公司预算管理、财务体制等方面有所创建。是公司"经营者财务"学说的倡导者。汤教授经过多年的积累，科研成果颇丰，现已出版《公司财务政策》，《汤博士点评中国财务案例》等专著3部，主编《预算管理的构造与运行》，合著《高级财务学》，《企业财务学》等30部财务专著，发表论文40多篇，并多次获得国内贸易部、北京市、中国会计学会、北京商学院等有关单位的奖励。
              </p>
              <p>
                近年来，汤教授在财务咨询、策划方面具有较高的社会知名度。他是中国新兴集团等上市公司的财务顾问，先后为山东鲁北化工、沈阳好利来公司、北京好邻居连锁店、安徽科苑集团、中国建筑一局等大型集团公司进行资产重组、全面预算管理、财务诊断。
              </p>
              <p>
                企业发展，理念先行，公司管理，财务为重。新世纪的市场竞争激烈而刺激，其实质就是企业核心竞争力和财务控制力的较量，企业管理者素质的高低决定了企业的命运。努力提高企业员工的整体素质，加强再教育培训，是企业的当务之急。
              </p>
              <p>
                强调财务控制应该从多方面入手，包括：在现代企业制度框架内，要建立专业化、社会化，并能够确保极具财务控制力的董事会制度；要建立战略控制、组织控制、授权控制、责任制度、全面预算管理、定额标准控制、实物控制、财务结算中心与财务公司、财务总监委派制、业绩评价与薪酬等制度。
              </p>
              <p>
                全面认识财务风险，但是财务控制的角度，主要是企业内部非系统性风险。企业除了建立各种控制制度外，还要建立企业的财务预警系统，充分发挥预期的作用，实现风险的监测、诊断、治疗，进而达到"强身健体"的功能。企业有针对性地建立起三大管理机制：财务风险分析机制、财务风险处理机制、财务风险责任机制，将企业风险牢牢控制在一定水平内。
                汤谷良教授的讲课内容深入企业实际，实用性、针对性强。讲课时，深入浅出、语言精练。购买和认真学习该套光盘，对于企业的经营管理者转变经营观念，促进企业的发展，起到了积极的推动作用。
              </p>
            </div>
          </div>
          <div class="module" id="Work">
            <div class="module-title">
              <span></span>
              著作
            </div>
            <ul class="work-main">
              <li>
                <div class="li-l">
                  <span>理论前沿</span>
                  <p>
                    论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
                  </p>
                </div>
                <div class="li-r">2020-10-26</div>
              </li>
              <li>
                <div class="li-l">
                  <span>理论前沿</span>
                  <p>
                    论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
                  </p>
                </div>
                <div class="li-r">2020-10-26</div>
              </li>
              <li>
                <div class="li-l">
                  <span>理论前沿</span>
                  <p>
                    论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
                  </p>
                </div>
                <div class="li-r">2020-10-26</div>
              </li>
              <li>
                <div class="li-l">
                  <span>理论前沿</span>
                  <p>
                    论文《 潜水期权与高管绩效薪酬敏感 度之间的动态关系》的评述
                  </p>
                </div>
                <div class="li-r">2020-10-26</div>
              </li>
            </ul>
          </div>
          <div class="module" id="book" v-if="detailsData.books.length > 0">
            <div class="module-title">
              <span></span>
              出版书籍
            </div>
            <div class="books-main">
              <dl>
                <dt>
                  <img :src="detailsData.books[0].mas_book_img" alt="" />
                </dt>
                <dd>
                  <h5>{{ detailsData.books[0].mas_book_name }}</h5>
                  <div class="rw-introduction">
                    简介：
                    <p>
                      {{ detailsData.books[0].mas_book_describe }}
                    </p>
                  </div>
                  <nuxt-link
                    :to="{
                      name: 'jdk-book-details',
                      query: { bookId: detailsData.books[0].mas_book_id },
                    }"
                    >查看更多
                    <img src="../../static/images/arrows-left.png" alt="" />
                  </nuxt-link>
                </dd>
              </dl>
            </div>
          </div>
          <div class="module" id="achievement">
            <div class="module-title">
              <span></span>
              学术成就
            </div>
            <div class="academic-main">
              <p class="title"><b>研究项目：</b></p>
              <p>1、财政部课题：打造vbm的财务管理理论体系；</p>
              <p>2、世界银行资助课程开发《公司预算：计划与控制》；</p>
              <p>
                3、在研国家自然基金课题：中外合资企业管理控制问题的比较案例研究。
              </p>
              <p class="title top"><b>研究成果：</b></p>
              <p>1、论文：企业集团获利能力与价值挖掘，《国际贸易问题》2007.3</p>
              <p>2、论文：管理控制工具的整合模式，《会计研究》2007.9</p>
              <p>
                3、论文：长期“双高”现象之谜：债务融资、制度环境与大股东特征《管理世界》2007.8
              </p>
              <p>4、著作：《高级财务管理》，中信出版社，2006年</p>
              <p>
                5、著作：《vbm框架下财务管理理论体系重构》，中国财经出版社，2007年5月
              </p>
            </div>
          </div>
        </div>
        <div class="section-r">
          <div class="module">
            <h5>人物新闻</h5>
            <div class="new-mian">
              <div class="top-line"></div>
              <ul class="new-content">
                <li v-for="(itNews, idx) in masterNews" :key="idx">
                  <p class="twoline">
                    {{ itNews.mas_article_title }}
                  </p>
                  <span>来源：{{ itNews.mas_article_author }}</span>
                </li>
                <!-- <li>
                  <p class="twoline">
                    长江证券独董汤谷良辞职 曾任泛海控股独立非执行董事…
                  </p>
                  <span>来源：新浪网</span>
                </li>
                <li>
                  <p class="twoline">
                    长江证券独董汤谷良辞职 曾任泛海控股独立非执行董事…
                  </p>
                  <span>来源：新浪网</span>
                </li>
                <li>
                  <p class="twoline">
                    长江证券独董汤谷良辞职 曾任泛海控股独立非执行董事…
                  </p>
                  <span>来源：新浪网</span>
                </li>
                <li>
                  <p class="twoline">
                    长江证券独董汤谷良辞职 曾任泛海控股独立非执行董事…
                  </p>
                  <span>来源：新浪网</span>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="module">
            <h5>猜你喜欢</h5>
            <div class="new-mian">
              <div class="top-line"></div>
              <div class="guess-like">
                <p
                  v-for="(itLike, idx) in masterLike"
                  :key="idx"
                  @click="goDetail(itLike.mas_article_id)"
                >
                  {{ itLike.mas_article_title }}
                </p>
              </div>
            </div>
          </div>
          <div class="module">
            <h5>人物推荐</h5>
            <div class="new-mian">
              <div class="top-line"></div>
              <div class="recommended">
                <dl
                  v-for="(itRw, index) in masterShare"
                  :key="index"
                  @click="details(itRw.mas_master_user_id)"
                >
                  <dt>
                    <img :src="itRw.mas_master_photo" alt="" />
                  </dt>
                  <dd>
                    <span>{{ itRw.mas_master_user_name }}</span>
                    <p>{{ itRw.mas_master_duty }}</p>
                  </dd>
                </dl>
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
      sepDot: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ", //空格
      detailsData: {}, //详情数据
      masterLike: [], //猜你喜欢
      masterNews: [], //人物新闻
      masterShare: [], //人物推荐
    };
  },
  async asyncData({ $axios, route, store, env, params, query, error }) {
    let res = await $axios.notNeedlogin({
      className: "MasterController",
      classMethod: "masterDetails",
      data: {
        mas_master_user_id: params.id,
      },
    });
    if (res.bol) {
      let newData = [];
      newData = res.data.masMasterDetails.tag_name.split(",");
      res.data.masMasterDetails.newData = newData;
      return {
        detailsData: res.data.masMasterDetails,
        masterLike: res.data.masterLike,
        masterNews: res.data.masterNews,
        masterShare: res.data.masterShare,
      };
    }
  },
  methods: {
    skip(id) {
      const target = document.querySelector(id);
      var anchor = $(".information-title").outerHeight();
      document.documentElement.scrollTop = target.offsetTop - anchor - 121;
    },
    course() {
      this.$message.info("暂未开课");
    },
    //跳转到文章详情
    goDetail(id) {
      this.$router.push({
        path: `/dy/${id}`,
      });
    },
    //点击到详情
    details(id) {
      this.$router.push({
        path: `/jdk/${id}`,
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "@/static/css/page-css/dkdetails.less";
</style>
