// 全局操作
export const state = () => ({
  token: '',//后台返回token
  userName: 'admin',
  headerWidth: '1100px',//默认宽度
  secretKey: "mas20220520",//秘钥
  userInfo: {},//用户信息
  isFixedHeader: false,//是否固定header头
  subTabId: '',//二级菜单选中项id
  tabList: [],//菜单列表
})
export const mutations = {
  setToken(state, token) {
    state.token = token;
    this.$cookies.set('token', token)
  },
  getToken(state) {
    state.token = this.$cookies.get('token')
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    this.$cookies.set('userInfo', userInfo)
  },
  setHeaderWidth(state, data) {
    state.headerWidth = data
  },
  setIsFixedHeader(state, data) {
    state.isFixedHeader = data
  },
  /**
  * 退出登录 清空 VUEX & Cookie
  * @param  {[type]} state [description]
  * @return {[type]}       [description]
  */
  loginOut(state) {
    this.$cookies.remove("token");
    this.$cookies.remove("userInfo");
    this.$cookies.remove("autoLogin");
    this.$cookies.remove("tabList");
    this.$cookies.remove("subTabId");
    state.token = '';
    state.userInfo = {};
    state.tabList = [];
    state.subTabId = '';
  },

  setTabList(state, data) {
    state.tabList = data
    this.$cookies.set('tabList', data)
  },
  setSubTabId(state, data) {
    state.subTabId = data
    this.$cookies.set('subTabId', data)
  }
}
export const actions = {
  nuxtServerInit(store, content) {
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');
    store.commit('getToken');
    store.commit('setUserInfo', this.$cookies.get('userInfo'));
    store.commit('setTabList', this.$cookies.get('tabList'));
    store.commit('setSubTabId', this.$cookies.get('subTabId'));
    console.log(store.state.subTabId, 'nuxtServerInit')
  }
}
