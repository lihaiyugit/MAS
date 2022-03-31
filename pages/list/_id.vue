<template>
  <div>
    <!-- 详情{{$route.query.id}} -->
    <!-- <div v-html="content"></div> -->
    <ul @scroll="listenScroll">
      <li v-for="item in list" :key="item">{{ item }}屏</li>
    </ul>
    <div class="more-btn" v-if="!finished&&!loading" @click="loadMore">查看更多</div>
    <div class="more-btn" v-if="!finished&&loading" @click="loadMore">努力加载中...</div>
    <div class="more-btn" v-if="finished">数据加载完毕</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      loading: false, // 是否加载
      finished: false, //数据是否全部加载完成
      page_index: 1,
      page_size: 10,
      totalNum: 0,
    };
  },
  asyncData({ query }) {
    console.log(query.id);
    // let res= await ArticleIdApi({id:query.id})
  },
  mounted() {
    //添加滚动事件，检测滚动到页面底部
    // window.addEventListener("scroll", this.scrollBottom);
  },
  methods: {
    loadMore() {
      this.loading=true;
      this.getListFn();
    },
    // 滚动到页面底部时，请求内容
    // scrollBottom() {
    //   this.loading = false;
    //   let scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   let clientHeight = document.documentElement.clientHeight;
    //   let scrollHeight = document.documentElement.scrollHeight;
    //   let bottomOfWindow = scrollTop + clientHeight >= scrollHeight - 4;
    //   console.log(scrollHeight);
    //   if (
    //     scrollTop != 0 &&
    //     bottomOfWindow &&
    //     this.loading == false &&
    //     this.finished == false
    //   ) {
    //     this.loading = true;
    //     this.offset = this.offset + this.limit;
    //     let param = {
    //       offset: this.offset,
    //       limit: this.limit,
    //     };
    //     getArea(param).then((res) => {
    //       if (res.code == 200) {
    //         this.loading = false;
    //         this.area = this.area.concat(res.data); //追加数据
    //         if (res.data.length == 0) {
    //           //数据全部加载完成
    //           this.finished = true;
    //         } else {
    //           this.finished = false;
    //         }
    //       }
    //     });
    //   }
    // },

    // 获取数据
    getListFn() {
      let that = this;
      getCashaudit({
        page_index: this.page_index,
        page_size: this.page_size,
      }).then((res) => {
        if (res.code != 200) {
          return wx.showToast({ title: res.msg, icon: "none" });
        }

        //  分页判断
        if (res.response.total / this.page_size > this.page_index) {
         this.page_size+=1;
        } else {
          this.finished=true
         // 数据全部加载完成
        }
        this.loading = false;
        this.totalNum= res.response.total;
        this.list=this.list.concat(res.response.data);
          //  this.code_result = this.code_result.concat(ret.data.code_result); //将请求回来的数据和上一次进行组合
        // that.setData({
        //   this.totalNum= res.response.total,
        //   msgList: this.msgList.concat(res.response.data),
        // });
      });
    },
  },
};
</script>
<style lang="less" scoped>
ul {
  li {
    width: 100%;
    height: 200px;
    background-color: aqua;
    text-align: center;
    &:nth-child(even) {
      background-color: aquamarine;
    }
  }
}
.more-btn {
  width: 146px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #ed6d38;
  border-radius: 2px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #ed6d38;
  line-height: 30px;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 12px;
}
</style>
