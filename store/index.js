// 全局操作
export const state = () => ({
  token: '',//后台返回token
  userName: 'admin',
  headerWidth: '1100px',//默认宽度
  secretKey: "mas20220520",//秘钥
  userInfo: {},//用户信息
  isFixedHeader:false,//是否固定header头
  tabIndex:'',//tab菜单栏默认选中项
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
  setIsFixedHeader(state, data){
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
    state.token = '';
    state.userInfo = {};
  },
  setTabIndex(state, data) {
    state.tabIndex = data
    this.$cookies.set('tabIndex',data)
  },
}
export const actions = {
  nuxtServerInit(store, content) {
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');
    store.commit('getToken');
    store.commit('setTabIndex',this.$cookies.get('tabIndex'));
    store.commit('setUserInfo', this.$cookies.get('userInfo'));
    console.log(store.state.userInfo, 'nuxtServerInit')
  }
}
