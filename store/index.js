// 全局操作
export const state=() => ({
  token:'',
  userName:'admin',
  headerWidth: '1100px',//默认宽度

})
export const mutations={
  setToken(state,token){
    state.token=token;
    this.$cookies.set('token',token)
  },
  getToken(state){
    state.token=this.$cookies.get('token')
  },
  setHeaderWidth(state, data) {
    state.headerWidth = data
  },
}
export const actions={
  nuxtServerInit(store,content){
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');

    console.log(store.state.token,'nuxtServerInit')
  }
}
