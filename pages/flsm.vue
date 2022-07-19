<template>
  <div class="protocol">
    <div class="header">
      <nuxt-link to="/">
        <img src="@/static/images/logo.png" alt="" />
      </nuxt-link>
    </div>
    <div class="content">
      <div class="content-main">
        <div class="content-main-main">
          <div class="title">法律声明</div>
          <div class="content-box">
            <p class="two">
              一、
              管理会计研究独立拥有或与相关内容提供者共同拥有管理会计研究（网址为：http://www.chinamas.cn
              ）站内相关内容（包括但不限于文字、图片、音频、视频资料及页面设计、编排、软件等）的版权和/或其他相关知识产权。
            </p>
            <p class="two">二、关于转载本网内容：</p>
            <p>
              2.1.
              凡本网注明“管理会计研究”或者“管理会计研究合作伙伴”的所有文字、图片和音视频资料，任何媒体、网站或个人未经本网授权不得转载、链接、转贴或以其他方式复制发布/发表等。
            </p>
            <p>
              2.2.
              除注明'来源：管理会计研究'或者“管理会计研究合作伙伴”的内容外，本网以下内容亦不可任意转载：
            </p>
            <p>2.2.1. 本网所指向的非本网内容的相关链接内容；</p>
            <p>2.2.2. 已作出不得转载或未经许可不得转载声明的内容；</p>
            <p>
              2.2.3. 未由本网署名或本网引用、转载的他人作品等非本网版权内容；
            </p>
            <p>2.2.4. 本网中特有的图形、标志、页面风格、编排方式、程序等；</p>
            <p>
              2.2.5. 本网中必须具有特别授权或具有注册用户资格方可知晓的内容；
            </p>
            <p>2.2.6. 其他法律不允许或本网认为不适合转载的内容。</p>
            <p>
              2.3.
              经本网授权的媒体、网站，在使用本网稿件时须注明稿件来源：“管理会计研究”或者“管理会计研究合作伙伴”，否则本网将依法追究相关责任。
            </p>
            <p>
              2.4.
              转载或引用本网内容必须是以新闻性或资料性公共免费信息为使用目的的合理、善意引用，不得对本网内容进行如下改动：
            </p>
            <p>2.4.1. 自行进行曲解、修改；</p>
            <p>2.4.2. 损害本网或他人利益；</p>
            <p>2.4.3. 任何违法行为；</p>
            <p>2.4.4. 任何可能破坏公秩良俗的行为；</p>
            <p>2.4.5. 擅自同意他人继续转载、引用本网内容等。</p>
            <p>
              2.4.6.
              转载同时必须保留本网注明的'稿件来源'，并标明转自（或引自）“管理会计研究www.chinamas.cn”
              字样，并自负版权等法律责任。
            </p>
            <p>2.5. 转载或引用本网中的署名文章，请按规定向稿件作者支付稿酬。</p>
            <p class="two">三、本网其他来源内容</p>
            <p>
              3.1.
              凡注明“来源：xxx”作品，文章版权属于原始出处单位及原作者所有，本网不承担此稿侵权责任。
            </p>
            <p>
              3.2. 凡本网注明'来源：XXX
              （非本站）'的文/图等稿件，本网转载出于传递更多信息之目的，并不意味着赞同其观点或证实其内容的真实性。如其他媒体、网站或个人从本网下载使用，必须保留本网注明的“稿件来源”，并自负版权等法律责任。如擅自篡改为'稿件来源：管理会计研究'，本网将依法追究责任。如对稿件内容有疑议，请及时与我们联系。
            </p>
            <p class="two">
              四、
              对于不当转载或引用本网内容而引起的民事纷争、行政处理或其他损失，本网不承担责任。对不遵守本声明或其他违法、恶意使用本网内容者，本网保留追究其法律责任的权利。
            </p>

            <p class="two">
              五、
              如著作人对本网刊载内容、版权有异议，请于知道该作品发表之日起30日内联系本网，否则视为自动放弃相关权利。
            </p>

            <p class="two">
              六、
              本网站尊重他人的任何权利，同时也要求我们的使用者也尊重他人之权利。本网站在适当情况下，有权自主决定删除在本网上侵犯他人权利的文章等，停止对别人的侵害。
            </p>

            <p class="two">
              七、
              用户利益保障：本站将定期对用户数据进行备份工作，如因为操作失误、黑客攻击以及服务器故障引起的数据损失，本网将尽可能地恢复，但这种情况下所导致的损失为不可抗拒因素，本站具有免责权利。
            </p>

            <p class="two">
              八、
              关于版权及言论问题：用户在使用本站系统过程中，不得发布侵犯党和国家利益的言论，不得发布泄露国家机密的言论，不得发布有损害他人声誉的言论，不得发布侵犯他人版权的言论等。
            </p>

            <p class="two">
              九、欢迎各类型媒体积极与本站联络，互相签订转载协议。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "not",
  data() {
    return {};
  },
  asyncData({ $axios }) {
    // let res =await $axios.get('/api/XX');
    // return {res}
  },
  created() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.protocol {
  width: 100%;
  background: #f7f8fa;
  .header {
    height: 64px;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    img {
      width: 48px;
      height: 20px;
      border-radius: 0px;
      margin-top: 21px;
      margin-left: 47px;
    }
  }
  .content {
    min-height: 100%;
    padding: 28px 47px 47px;
    .content-main {
      background-color: #ffffff;
      .content-main-main {
        width: 1004px;
        margin: 0 auto;
        padding-top: 70px;
        .title {
          margin: 0 auto;
          width: 140px;
          height: 28px;
          background-image: url(@/static/images/wytg.png);
          background-size: 100% 100%;
          background-position: top left;
          background-repeat: no-repeat;
          font-size: 28px;
          font-weight: 600;
          text-align: center;
          color: #bc996d;
          line-height: 22px;
          letter-spacing: 1px;
        }
        .content-box {
          padding-top: 55px;
          padding-bottom: 50px;
          p {
            font-size: 12px;
            font-weight: 400;
            text-align: justify;
            color: rgba(0, 0, 0, 0.45);
            line-height: 24px;
            padding-bottom: 15px;
          }
          .one {
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
          }
          .two {
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            padding: 15px 0px 30px 0px;
          }
        }
      }
    }
  }
}
</style>
