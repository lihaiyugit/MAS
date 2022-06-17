<template>
  <div class="back-top" v-if="showBtn" @click="backTop">
    <i class="el-icon-top"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBtn: false, // 回到顶部，默认是false，就是隐藏起来
    };
  },

  created() {},
  mounted() {
    window.addEventListener("scroll", this.showbtn, true);
  },
  methods: {
    // 回到顶部
    showbtn() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
        let borwserHeight=window.innerHeight;
      if (scrollTop > borwserHeight) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    },

    backTop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
  destroyed() {
    window.removeEventListener('scroll',this.showbtn)
  },
};
</script>

<style lang="less" scoped>
.back-top {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 4px 4px #ecefef;
  position: fixed;
  right: 2%;
  bottom: 10%;
  font-size: 24px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-icon-top {
    margin-left: -1px;
  }
}
</style>


