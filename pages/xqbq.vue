<template>
  <div class="main_container">
    <singleHeader />
    <div class="page-interests">
      <div class="interests-title">
        <h2>推荐你设置感兴趣的内容</h2>
        <p>可多选，随时可在「关注」中管理修改</p>
      </div>
      <ul class="interests-type">
        <li
          id="1"
          v-for="(item, index) in listArr"
          :key="index"
          @click="clickItem(index)"
          :class="{ select: item.check }"
        >
          {{ item.val }}
        </li>
      </ul>
      <button @click="btn">下一步</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listArr: [
        { id: 1, val: "数字化转型" },
        { id: 2, val: "数字化转型" },
        { id: 3, val: "数字化转型" },
        { id: 4, val: "数字化转型" },
        { id: 5, val: "数字化转型" },
        { id: 6, val: "数字化转型" },
        { id: 7, val: "数字化转型" },
        { id: 8, val: "数字化转型" },
        { id: 9, val: "数字化转型" },
        { id: 10, val: "数字化转型" },
        { id: 11, val: "数字化转型" },
        { id: 12, val: "数字化转型" },
        { id: 13, val: "数字化转型" },
        { id: 14, val: "数字化转型" },
        { id: 15, val: "数字化转型" },
      ],
    };
  },
  mounted() {
    // var arr = [];
    // $(".interests-type li").click(function () {
    //   if (!$(this).hasClass("select")) {
    //     $(this).addClass("select");
    //     // console.log($(this));
    //     var kid = parseFloat($(this)).attr("id");

    //     arr.push(kid);
    //     console.log(arr)
    //   } else {
    //     $(this).removeClass("select");
    //     // var kid = parseFloat(body.find($(this)).attr("id"));
    //     // var local = $.inArray(kid, json); //根据元素值查找下标，不存在返回-1
    //     // var cc = arr.splice($.inArray(kid, arr), 1);
    //   }
    // });
    this.listArr.map(function (value) {
      value.check = false;
    });
  },
  methods: {
    clickItem(index) {
      const temp = this.listArr[index];
      temp.check = !this.listArr[index].check;
      this.$set(this.listArr, index, temp);
    },
    btn: function () {
      let arr = [];
      for (var i = 0; i < this.listArr.length; i++) {
        if (this.listArr[i].check) {
          arr.push(this.listArr[i].id);
          console.log(this.listArr[i].id);
        }
      }
      // this.arr = arr;
      console.log(arr);
    },

    // item(val){
    //   console.log(val)
    //   if (!$(this).hasClass("select")) {
    //     console.log('--')
    //      $(this).addClass("select");
    //   }
    // }
  },
};
</script>
<style lang="less" scoped>
.main_container {
  background-color: #fff;
}
.page-interests {
  .interests-title {
    height: 200px;
    border-bottom: 1px solid #e7e7e7;
    h2 {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      color: rgba(0, 0, 0, 0.65);
      line-height: 40px;
      padding-top: 76px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      text-align: center;
      line-height: 40px;
    }
  }
  .interests-type {
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 66px;
    li {
      width: 111px;
      height: 37px;
      border: 1px solid rgba(0, 0, 0, 0.35);
      border-radius: 21px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.35);
      line-height: 36px;
      margin-right: 22px;
      margin-bottom: 34px;
      cursor: pointer;
      &:nth-child(6n) {
        margin-right: 0px;
      }
    }
    .select {
      width: 113px;
      height: 39px;
      line-height: 38px;
      color: #ffffff;
      border: transparent;
      background: linear-gradient(90deg, #f34250 0%, #f28a51 82%, #ff7d3b 100%);
    }
  }
  button {
    width: 74px;
    height: 32px;
    background: #ed6d38;
    border-radius: 2px;
    border: transparent;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    line-height: 22px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 52px;
  }
}
</style>
