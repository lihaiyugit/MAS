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
export default {
  data() {
    return {
      list,
      current: 0,
    };
  },
  methods: {
    oNitem(index, item) {
      document.body.scrollTop = 0;
      this.current = index;
      if (index == 1) {
        this.$router.push({
          name: "zff",
        });
      } else if (index == 2) {
        this.$router.push({
          name: "xal",
        });
      }else if (index == 3) {
        this.$router.push({
          name: "jdk",
        });
      }else if (index == 4) {
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
      }else if (index == 7) {
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
  // margin-right: 22px;
  ul {
    padding: 10px 14px;
    li {
      width: 160px;
      height: 47px;
      border-bottom: 1px solid#e7e7e7;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.85);
      line-height: 47px;
      &:nth-child(1){
        display: none;
      }
    }
    li:last-child {
      border-bottom: none;
    }
    .active {
      background: linear-gradient(90deg, #f34250 0%, #f28a51 81%, #ff7d3b 100%);
      border-radius: 3px;
      border-bottom: 1px solid transparent;
      color: #ffffff;
    }
    li:hover {
      background: linear-gradient(90deg, #f34250 0%, #f28a51 81%, #ff7d3b 100%);
      border-radius: 3px;
      border-bottom: 1px solid transparent;
      color: #ffffff;
    }
  }
}
</style>
