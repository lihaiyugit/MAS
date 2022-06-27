<template>
  <div class="sub-selections">
    <div class="title">
      <h3>杂志</h3>
      <nuxt-link to="/zz/list" class="more">查看更多</nuxt-link>
    </div>
    <div class="magazine-img">
      <img src="@/static/images/way/zz.png" alt="" />
      <div class="point">新书</div>
    </div>
    <div class="headline">2022年第一期｜总第567期</div>
    <nuxt-link to="/wytg" class="contribute">我要投稿</nuxt-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.sub-selections {
  width: 306px;
  height: 311px;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 6px;
  padding: 20px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    .more {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.35);
      line-height: 22px;
      cursor: pointer;
    }
  }
  .magazine-img {
    margin: 22px 0px;
    width: 305px;
    height: 146px;
    position: relative;
  }
  .headline {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    line-height: 28px;
  }
  .contribute {
    display: inline-block;
    width: 306px;
    height: 32px;
    border: 1px solid #ed6d38;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #ed6d38;
    line-height: 30px;
    margin-top: 28px;
    cursor: pointer;
  }
  .contribute:hover {
    background: #ed6d38;
    color: #fff;
  }
}
</style>
