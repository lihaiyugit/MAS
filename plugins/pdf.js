import Vue from 'vue'
import pdf from "vue-pdf";

Vue.component('pdf', pdf)


//挂载到全局，用于 createLoadingTask 功能
export default function ({ app, redirect }, inject) {
  inject('pdf', pdf);
}
