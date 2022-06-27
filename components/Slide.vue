<template>
  <div class="slide">
    <div class="lx">
      <img src="@/static/images/zsh-img/hz.png" />
      <span>合作联系</span>
    </div>
    <div class="lx-info">
      <dl class="tel">
        <dt>
          <img src="@/static/images/zsh-img/tel.png" alt="" />
        </dt>
        <dd>
          <p>联系方式</p>
          <p>400-819-1255</p>
          <span></span>
        </dd>
      </dl>
      <dl class="tel">
        <dt>
          <img src="@/static/images/zsh-img/code.png" alt="" />
        </dt>
        <dd>
          <p>合作咨询</p>
          <div class="code">
            <img src="@/static/images/zsh-img/qx-code.png" alt="" />
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $(".slide .lx").mouseenter(function () {
      $(".slide .lx-info ").css("display", "block");
    });
    $(".slide .lx").mouseleave(function () {
      $(".slide .lx-info ").css("display", "none");
    });
  },
};
</script>
<style lang="less" scoped>
  /* 侧导航 slide start  */
.slide {
  width: 83px;
  position: fixed;
  top: 45%;
  right: 10px;
  z-index: 999;
}

.slide .lx {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 83px;
  height: 83px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(6, 13, 31, 0.1);
}

.slide .lx img {
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
}

.slide .lx span {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  color: #2a2a39;
  line-height: 17px;
  vertical-align: top;
}

.lx-info {
  display: none;
  width: 150px;
  height: 145px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(6, 13, 31, 0.1);
  position: absolute;
  top: 0px;
  right: 100px;
  padding: 20px 12px;
}

.lx-info .tel {
  position: relative;
  display: flex;
  padding-bottom: 12px;
}

.lx-info .tel dt img {
  width: 20px;
  height: 20px;
}

.lx-info .tel dd {
  margin-left: 6px;
}

.slide .lx-info .tel dd p:nth-child(1) {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #2a2a39;
  line-height: 20px;
}

.slide .lx-info .tel dd p:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #2a2a39;
  line-height: 17px;
}

.slide .lx-info .tel dd span {
  position: absolute;
  right: 0px;
  top: 5px;
  background-image: url(@/static/images/left.png);
  width: 6px;
  height: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.slide .lx-info .tel dd .code {
  width: 70px;
  height: 70px;
  background: #f6f7ff;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide .lx-info .tel dd .code img {
  width: 61px;
  height: 61px;
}
</style>
