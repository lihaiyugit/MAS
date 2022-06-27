<template>
  <div class="article-main-right">
    <div class="module">
      <h2>相关文章</h2>
      <div class="module-main">
        <div class="top-line"></div>
        <ul>
          <li>
            <div class="li-l twoline">
              论文《 潜水期权与高管绩效薪酬敏感 度之间的…
            </div>
            <div class="li-r">
              <img src="@/static/images/article-img.png" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l twoline">
              论文《 潜水期权与高管绩效薪酬敏感 度之间的…
            </div>
            <div class="li-r">
              <img src="@/static/images/article-img.png" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l twoline">
              论文《 潜水期权与高管绩效薪酬敏感 度之间的…
            </div>
            <div class="li-r">
              <img src="@/static/images/article-img.png" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l twoline">
              论文《 潜水期权与高管绩效薪酬敏感 度之间的…
            </div>
            <div class="li-r">
              <img src="@/static/images/article-img.png" alt="" />
            </div>
          </li>
          <li>
            <div class="li-l twoline">
              论文《 潜水期权与高管绩效薪酬敏感 度之间的…
            </div>
            <div class="li-r">
              <img src="@/static/images/article-img.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="module" data-aos="fade-up">
      <h2>站内热词</h2>
      <div class="module-main">
        <div class="top-line"></div>
        <div class="keyword">
          <span :class="current == index ? 'active' : ''" v-for="(item,index) in hotList" :key="index" @click="onItem(index,item)">{{item}}</span>
          <!-- <span>管理会计</span>
          <span>数字化转型</span>
          <span>合并报表</span>
          <span>商旅</span>
          <span>云</span>
          <span>业财税共享</span>
          <span>大数据</span>
          <span>数据中台</span>
          <span>财务共享</span>
          <span>绩效管理</span> -->
        </div>
      </div>
    </div>
    <div class="module" data-aos="fade-up">
      <h2>杂志</h2>
      <div class="module-main">
        <div class="top-line"></div>
        <div class="magazine">
          <div class="magazine-img">
            <img src="@/static/images/way/zz.png" alt="" />
            <div class="point">新书</div>
          </div>
          <div class="headline">2022年第一期｜总第567期</div>
          <nuxt-link :to="'/zz/'+1" class="contribute">马上阅读</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current:0,
      hotList:['预算','管理会计','数字化转型','合并报表','商旅','云','业财税共享','大数据','数据中台','财务共享','绩效管理']
    };
  },
  methods: {
     onItem(index,item) {
      this.current = index;
      console.log( this.current)
       this.$router.push({
          path: "/search",
          query: { keyword: item ,index:index,},
          // params: {
          //   type: item,
          // },
        });
    },
  },
}
</script>
<style lang="less" scoped>
@import "../static/css/page-css/articleModule.less";
</style>
