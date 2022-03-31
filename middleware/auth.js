//判断 全局、局部导航守卫 做拦截 1.nuxt.config.js 进行配置 router:{middleware:'auth'}
export default({store,route,redirect,params,query,req,res})=>{
  // let token=store.state.token;
  // if(!token){
  //   redirect('/home');
  // }
  store.commit('getToken');
  if(!store.state.token){
    redirect('/login');
  }
  console.log(store.state,'middleware auth');
}
