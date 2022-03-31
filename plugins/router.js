//全局路由守卫配置
export default({app})=>{
  app.router.beforeEach((to,from,next)=>{
    console.log('plugins');
    next();
  })
}
