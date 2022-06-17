<template>
  <div class="scroll-container">
    <button
      v-if="showScrollButtonLeft"
      @click="handleScroll('left')"
      color="primary"
      class="left-btn"
    >
      <img :src="computeLeftLogo" alt="Left" style="height: 16px !important"
    /></button>
    <button

      v-if="showScrollButtonRight"
      @click="handleScroll('right')"
      color="primary"
      class="right-btn"
    >
      <img :src="computeRightLogo" alt="Right" style="height: 16px !important"
    /></button>
    <div ref="parent" class="root">
      <ul class="nav-tabs" ref="scrollContent">
        <li
          v-for="(item, index) in tabs"
          :key="index"
          class="nav-item"
          @click="clickItem(index)"
          :class="{ active: item.bOn }"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import leftLogo from '../static/images/left.png'
import rightLogo from '../static/images/left.png'
export default {

  data() {
    return {
      tabs: [
        { value: 4001, text: "Loan Log", code: "LOAN_LOG" },
        { value: 4002, text: "Document Log", code: "DOCUMENT_LOG" },
        { value: 4003, text: "Note Log", code: "NOTE_LOG" },
        { value: 4004, text: "Operation Log", code: "OPERATION_LOG" },
        { value: 4005, text: "Payment Log", code: "PAYMENT_LOG" },
        { value: 4006, text: "Maintenance Log", code: "MAINTENANCE_LOG" },
        { value: 4007, text: "Transaction Log", code: "TRANSACTION_LOG" },
        { value: 4008, text: "Collection Log", code: "COLLECTION_LOG" },
        { value: 4001, text: "Loan Log", code: "LOAN_LOG" },
        { value: 4002, text: "Document Log", code: "DOCUMENT_LOG" },
        { value: 4003, text: "Note Log", code: "NOTE_LOG" },
        { value: 4004, text: "Operation Log", code: "OPERATION_LOG" },
        { value: 4005, text: "Payment Log", code: "PAYMENT_LOG" },
        { value: 4006, text: "Maintenance Log", code: "MAINTENANCE_LOG" },
        { value: 4007, text: "Transaction Log", code: "TRANSACTION_LOG" },
        { value: 4008, text: "Collection Log", code: "COLLECTION_LOG" },
        { value: 4001, text: "Loan Log", code: "LOAN_LOG" },
        { value: 4002, text: "Document Log", code: "DOCUMENT_LOG" },
        { value: 4003, text: "Note Log", code: "NOTE_LOG" },
        { value: 4004, text: "Operation Log", code: "OPERATION_LOG" },
        { value: 4005, text: "Payment Log", code: "PAYMENT_LOG" },
        { value: 4006, text: "Maintenance Log", code: "MAINTENANCE_LOG" },
        { value: 4007, text: "Transaction Log", code: "TRANSACTION_LOG" },
        { value: 4008, text: "Collection Log", code: "COLLECTION_LOG" },
      ],
      showScrollButtonRight: false,
      showScrollButtonLeft: false,
    };
  },
  mounted() {
    this.tabs.map(function (value) {
      value.bOn = false;
    });
    const {
      $refs: { parent, scrollContent },
    } = this;
    // 第一次加载时判断是否需要显示左右滚动按钮，如果父容器的宽度大于子容器的宽度就不用
    if (parent && scrollContent) {
      this.showScrollButtonRight =
        parent.offsetWidth < scrollContent.offsetWidth;
    }
  },
  computed: {
    computeLeftLogo() {
      return leftLogo;
    },
    computeRightLogo() {
      return rightLogo;
    },
  },
  methods: {
    clickItem(index) {
      const temp = this.tabs[index];
      temp.bOn = !this.tabs[index].bOn;
      this.$set(this.tabs, index, temp);
    },
    handleScroll(direction) {
      // 每10毫秒移动20，点击一次移动十次,根据自己需要调整
      let times = 0;
      const interval = 10;
      const moveInterval = 20;
      const totalTimes = 10;
      const vm = this;
      const scroll = () => {
        times++;
        const offset = vm.$refs.parent.scrollLeft;
        vm.$refs.parent.scrollLeft =
          direction === "right" ? offset + moveInterval : offset - moveInterval;
        if (times !== totalTimes) {
          setTimeout(scroll, interval);
        }
      };
      scroll();
      // console.log(
      //   this.$refs.parent.getBoundingClientRect().left -
      //     this.$refs.scrollContent.getBoundingClientRect().left
      // );
      // console.log(
      //   this.$refs.parent.getBoundingClientRect().right -
      //     this.$refs.scrollContent.getBoundingClientRect().right
      // );
      if (
        this.showScrollButtonLeft === true &&
        this.$refs.parent.getBoundingClientRect().left -
          this.$refs.scrollContent.getBoundingClientRect().left <
          200
      ) {
        this.showScrollButtonLeft = false;
      } else {
        this.showScrollButtonLeft = true;
      }
      if (
        this.showScrollButtonRight === true &&
        this.$refs.parent.getBoundingClientRect().right -
          this.$refs.scrollContent.getBoundingClientRect().right >
          -200
      ) {
        this.showScrollButtonRight = false;
      } else {
        this.showScrollButtonRight = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.scroll-container {
  position: relative;
  padding-top: 121px;
}
.left-btn {
  position: absolute;
  left: 0px;
  top: 137px;
  background: #fff;
}
.right-btn {
  position: absolute;
  right: 0px;
  top: 137px;
  background: #fff;
}
.root {
  overflow-x: auto;
  scrollbar-width: none; // Firefox隐藏滚动条
}
.root::-webkit-scrollbar {
  display: none; // Chrome隐藏滚动条
}
.nav-tabs {
  height: 60px;
  list-style: none;
  margin: 0px;
  padding: 16px 0;
  display: inline-block;
  white-space: nowrap;
  width: auto;
  background: #f9fafd;
}
.nav-item {
  background: #e5f0ff;
  color: #24252e;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 8px;
  text-align: center;
  display: inline;
  margin: 0 4px 0;
  border-radius: 16px;
}
.nav-item:hover,
.nav-item.active {
  background: #2f80ed;
  color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(101, 110, 132, 0.2);
}
</style>
