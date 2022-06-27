<template>
  <div class="main-left-container">
    <!-- :class="current == index ? 'active' : ''"  @click="oNitem(index)"-->
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="oNitem(index, item)"
      >
        {{ item }}
        <!-- {{ item.mas_menu_name }} -->
        <!-- <nuxt-link :to="{name:'catalogue-id',params:{id:index+1,type:item}}">{{ item }}</nuxt-link> -->
      </li>
    </ul>
  </div>
</template>
<script>
const list = [
  "听课程",
  "找方法",
  "学案例",
  "见大咖",
  "读杂志",
  "逛书店",
  "淘资讯",
  "看专题",
];
import { notNeedlogin } from "@/request/api";
import md5 from "js-md5";
export default {
  data() {
    return {
      list,
      current: 0,
      listData: [],
    };
  },
  async fetch() {
    // let res = await axios.get('https://xuexiluxian.cn/');
    let timestamp = Date.parse(new Date());
    let sign = md5(timestamp + this.$store.state.secretKey);
    let res = await notNeedlogin(this.$axios, {
      sign: sign,
      timespan: timestamp,
      className: "NavigationController",
      classMethod: "getLeftNavigation",
    });
    if (res.bol) {
      return (this.listData = res.data);
      // return { this.listData=res.data };
    }
  },
  mounted() {},
  created() {},
  methods: {
    //点击每一个栏目
    oNitem(index, item) {
      document.body.scrollTop = 0;
      this.current = index;
      this.$store.commit("setSubTabIndex", index);
      if (index == 1) {
        this.$router.push({
          name: "zff",
        });
      } else if (index == 2) {
        this.$router.push({
          name: "xal",
        });
      } else if (index == 3) {
        this.$router.push({
          name: "jdk",
        });
      } else if (index == 4) {
        this.$router.push({
          name: "zz",
        });
      } else if (index == 5) {
        this.$router.push({
          name: "gsd",
          // query: { id: index, type: item },
          // params: {
          //   type: item,
          // },
        });
      } else if (index == 6) {
        this.$router.push({
          name: "tzx",
        });
      } else if (index == 7) {
        this.$router.push({
          name: "kzt",
        });
      }
      // if (index == 2) {
      //   this.$router.push("/home/case");
      // }
      // if (index == 3) {
      //   this.$router.push("/home/master");
      // }
    },
  },
};
</script>
<style lang="less" scoped>
.main-left-container {
  width: 188px;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  ul {
    padding: 16px 14px;
    li {
      width: 160px;
      height: 47px;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.85);
      line-height: 47px;
      margin-bottom: 4px;
      cursor: pointer;
      &:nth-child(1) {
        display: none;
      }
    }
    li:last-child {
      margin-bottom: 0px;
    }
    li:hover {
      background: #fff2ed;
      border-radius: 6px;
      color: #ed6d38;
    }
  }
}
</style>
