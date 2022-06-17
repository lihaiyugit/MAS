import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use( BaiduMap, { ak : 'HQ878aCeCCFD4GPEFvaQOLANZSv8bKKw' } )


// 使用
{/* <baidu-map class='bm-view' zoom="17" @ready='init'></baidu-map> */}

// methods:{
//   init({BMap, map}){
//       this.map = map
//       var point = new BMap.Point(108.910752, 34.237372)  //设置城市经纬度坐标
//       map.centerAndZoom(point, 15)    //
//       map.setCurrentCity('上海')   // 设置地图显示的城市 此项是必须设置的
//       map.enableScrollWheelZoom(true)    //鼠标滚动缩放

//       #for(var i in mapdata) {
//       #    var pt = new BMap.Point(mapdata[i].longitude, mapdata[i].latitude )   //经纬度
//       #    var myicon = new BMap.Icon('图片路径', new BMap.Size(32, 32))   //设置对应图片和图片大小
//       #    var marker2 = new BMap.Marker(pt, { icon: myicon })  //创建标注
//       #    map.addOverLay(marker2)
//       #}
//   }

// handler ({BMap, map}) {
//   var point = new BMap.Point(121.34113,31.19590)//标注点的经纬度
//   map.centerAndZoom(point, 13)
//   var marker = new BMap.Marker(point) // 创建标注
//   map.addOverlay(marker) // 将标注添加到地图中
//   var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
//   map.addOverlay(circle)
// },
// },
// mounted(){
//   this.init()
// }


