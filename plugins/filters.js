import Vue from 'vue';
import { format } from 'timeago.js';
//timeago处理时间
export function timeAgo(val) {
  return format(val, "zh_CN"); //转换成类似于几天前的格式
}


let filters = {
  timeAgo,
};

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
export default filters;
