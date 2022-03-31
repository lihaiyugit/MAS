<template>
  <div>
    <h1>登录</h1>
    <input type="text" name="" v-model="userName" />
    <input type="text" name="" v-model="userPwd" />
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { login } from "../request/api";
import { mapMutations } from "vuex";
import qs from "qs";
export default {
  name: "Loginpage",
  layout: 'not',
  data() {
    return {
      userName: "",
      userPwd: "",
    };
  },
  // async asyncData({ $axios }) {
  //    let res =await $axios.get('/api/list');
  //   console.log(res,'=====');
  //   return { a: res.data.a};
  // },
  methods: {
    ...mapMutations(["setToken"]),
    login() {
      // let data= qs.stringify ({
      //     username:this.userName,
      //     password:this.userPwd
      // });
      // this.$$axios({
      //   url:'/api/u/logByJson',
      //   method:'post',
      //   data
      // }).then(res=>{
      //   console.log(res)
      // })

      // login(this.$axios, {
      //   username: this.userName,
      //   password: this.userPwd,
      // }).then(async (res) => {
      //   console.log(res, "login");
        // this.setToken('admin123456')
        // this.$router.push('/')
        // this.$router.push({
        //   name:'login'
        // })
      // });
      if (this.userName != "admin") return;
      if (this.userPwd != "123456") return;
      this.setToken('admin123456')
      this.$router.push('/')
    },
  },
};
</script>
