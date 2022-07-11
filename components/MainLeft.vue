<template>
  <div class="main-left-container">
    <!-- :class="current == index ? 'active' : ''"  @click="oNitem(index)"-->
    <ul>
      <li
        v-for="(item, index) in tabList"
        :key="index"
        @click="oNitem(index, item)"
      >
        {{ item.mas_menu_name }}
        <!-- <nuxt-link :to="{name:'catalogue-id',params:{id:index+1,type:item}}">{{ item }}</nuxt-link> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      tabList: [],
    };
  },
  async fetch() {
    if (this.$store.state.tabList == undefined) {
      let res = await this.$axios.notNeedlogin({
        className: "NavigationController",
        classMethod: "getLeftNavigation",
      });
      if (res.bol) {
        console.log(res.data, "res.data");
        this.$store.commit("setTabList", res.data);
        return (this.tabList = res.data);
      }
    } else {
      this.tabList = this.$store.state.tabList;
    }
  },
  mounted() {},
  created() {},
  methods: {
    //点击每一个栏目
    oNitem(index, item) {
      document.body.scrollTop = 0;
      this.$store.commit("setSubTabId", item.mas_menu_id);
      this.$router.push({
        name: item.mas_menu_url,
      });
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
    }
    li:last-child {
      margin-bottom: 0px;
    }
    li:hover {
      background: #fff2ed;
      border-radius: 6px;
      color: #fa6725;
    }
  }
}
</style>
