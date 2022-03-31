export const state=() => ({
  password:'123456'
})
export const mutations={
  changePassword(state){
    state.password='12345678'
  }
}


// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// const store=()=>new Vuex.Store({
//   state:{
//     password:'123456'
//   }
// })
// export default store;
