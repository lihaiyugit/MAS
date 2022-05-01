<template>
  <div class="contain" id="contain">
    <div class="img-box">
      <ul class="single-ul" v-if="isBuy != 1">
        <li class="single-li" v-for="(item, i) in list" :key="i" :page="i">
          <img v-lazy="item" class="lazy" alt="" />
        </li>
        <li class="single-li" :page="list.length" v-if="!isPay">
          <div class="last-page">
            <img src="../static/images/read.png" alt="" class="img" />
            <h2>试读结束...</h2>
            <h3>意犹未尽，立即购买，后面内容更精彩！</h3>
            <div class="book-link" @click="buyFn">下载</div>
            <!-- <button @click="getPdf(url)">下载paf</button> -->
          </div>
        </li>
        <li class="single-li" :page="list.length" v-else>
          <div class="last-page">
            <img src="../static/images/read.png" alt="" class="img" />
            <h2>试读结束...</h2>
            <h3>意犹未尽，立即购买，后面内容更精彩！</h3>
            <div class="pay-tip">*该文档为付费内容，需付费下载</div>
            <div class="radio-group">
              <div class="radio-box">
                <input
                  name="type"
                  type="checkbox"
                  value="0"
                  checked
                  @click="checkedThis(0)"
                />
                <label>¥10.00</label>
              </div>
              <div class="radio-box">
                <input
                  name="type"
                  type="checkbox"
                  value="1"
                  @click="checkedThis(1)"
                />
                <label>10积分</label>
              </div>
            </div>
            <div class="book-link" @click="buyFn">下载</div>
          </div>
        </li>
      </ul>
      <ul class="single-ul" v-else>
        <li class="single-li" v-for="(item, i) in list" :key="i" :page="i">
          <img v-lazy="item" class="lazy" alt="" />
        </li>
        <li class="single-li" :page="list.length">
          <div class="last-page">
            <div class="book-link">已购买</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="right-mean">
      <div class="cntr">
        <ul class="pageBtn">
          <li class="buy" @click="buyFn">
            <a target="_blank">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/isbuy.png"
                title="购买全本"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/buy.png"
                title="购买全本"
              />
            </a>
          </li>
          <li class="details">
            <a target="_blank" @click="detailsFn">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/detail1.png"
                title="电子刊详情页"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/detail2.png"
                title="电子刊详情页"
              />
            </a>
          </li>
        </ul>
        <ul class="changePage">
          <li class="changePage_pre" @click="pre">
            <img
              class="img1"
              src="https://www.chinamas.cn/static/img/journal/leftPage1.png"
              title="上一页（PageUp，向左键）"
            />
            <img
              class="img2"
              src="https://www.chinamas.cn/static/img/journal/leftPage2.png"
              title="上一页（PageUp，向左键）"
            />
          </li>
          <li class="changePage_next" @click="next">
            <img
              class="img1"
              src="https://www.chinamas.cn/static/img/journal/rightPage1.png"
              title="下一页（PageDown，向右键）"
            />
            <img
              class="img2"
              src="https://www.chinamas.cn/static/img/journal/rightPage2.png"
              title="下一页（PageDown，向右键）"
            />
          </li>
        </ul>
      </div>
      <div class="pageFun">
        <ul>
          <li class="JD_changePage" id="pageFn">
            <div class="singlePage">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/singlePage1.png"
                title="切换为单页"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/singlePage2.png"
                title="切换为单页"
              />
            </div>
            <div class="doublePage">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/doublePage1.png"
                title="切换为双页"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/doublePage2.png"
                title="切换为双页"
              />
            </div>
          </li>
          <li class="JD_chaScreen" id="fullscreen">
            <div class="no_all_screen">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/fitPage1.png"
                title="退出全屏"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/fitPage2.png"
                title="退出全屏"
              />
            </div>
            <div class="all_screen">
              <img
                class="img1"
                src="https://www.chinamas.cn/static/img/journal/fitWidth1.png"
                title="全屏"
              />
              <img
                class="img2"
                src="https://www.chinamas.cn/static/img/journal/fitWidth2.png"
                title="全屏"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading_tips">
      <img src="https://cread.jd.com/img/loader2.gif" />
      <span>数据加载中...</span>
    </div>
  </div>
</template>
<script>
import { saveAs } from "file-saver";
export default {
  layout: "not",
  data() {
    return {
      pageindex: 0, //当前索引
      pageHeight: 880, //一页高度
      readType: 1, // 1:横屏模式 2:竖屏模式
      isBuy: 0, //判断是否购买0没有购买1 购买成功
      fullscreen: 1, //单屏1 双屏2
      magazineId: this.$route.query.id, //获取当前杂志id
      journalData: "", //从缓存中取值
      journalMonry: "36.00", //价钱
      login: this.$store.state.token, //是否登录
      list: [
        "https://images.chinamas.cn/Pdfimg/2022/03/22/b3c013c57d741a22cfd20ec1b6d34b4b.png",
        "https://images.chinamas.cn/Pdfimg/2022/03/22/9fbf52cadcfd8c3d47ee38ed25e4458c.png",
      ], //电子刊图片列表数据
      // url: "https://www.chinamas.cn/static/img/1.pdf",
      isPay: true, //是否为付费文章
    };
  },

  asyncData({ $axios }) {
    // let res =await $axios.get('/api/XX');
    // return {res}
    //获取用户购买杂志电子刊的状态
    // $.ajax({
    //     type: "GET",
    //     url: '/getUserPayMagazineStatus?mid=' + this.magazineId + '',
    //     success: function (data) {
    //         if (data.bol) {
    //             this.isBuy == 1;
    //             this.readFn();//请求阅读接口
    //             $(".buy img").attr({title: '已购买'});
    //             $(".buy").removeAttr('onclick');
    //         } else {
    //             this.tryRead();//请求试读接口
    //         }
    //     }
    // })
  },
  mounted() {
    let that = this;
    document.body.style.backgroundColor = '#000';
    //初始化置顶
    window.onunload = unload;
    function unload(e) {
      window.scrollTo(0, 0);
    }
    if (that.isBuy == 1) {
      $(".buy img").attr({ title: "已购买" });
      $(".buy").removeAttr("onclick");
    }
    //监听滚动条获取index索引
    window.addEventListener("scroll", that.handleScroll);

    //获取键盘按键按下事件
    $(document).bind("keydown", function (e) {
      //获取按键键值
      let key = window.event ? e.keyCode : e.which;
      if (
        key.toString() == "33" ||
        key.toString() == "37" ||
        key.toString() == "38"
      ) {
        //跳转到上一页
        that.pre();
      } else if (
        key.toString() == "32" ||
        key.toString() == "34" ||
        key.toString() == "39" ||
        key.toString() == "40"
      ) {
        //跳转到下一页
        that.next();
      }
    });
    //购买全本
    $(".buy").hover(
      function () {
        $(".buy .img2").show();
        $(".buy .img1").hide();
      },
      function () {
        $(".buy .img1").show();
        $(".buy .img2").hide();
      }
    );
    //详情
    $(".details").hover(
      function () {
        $(".details .img2").show();
        $(".details .img1").hide();
      },
      function () {
        $(".details .img1").show();
        $(".details .img2").hide();
      }
    );

    //上一页
    $(".changePage_pre").hover(
      function () {
        $(".changePage_pre .img2").show();
        $(".changePage_pre .img1").hide();
      },
      function () {
        $(".changePage_pre .img1").show();
        $(".changePage_pre .img2").hide();
      }
    );
    //下一页
    $(".changePage_next").hover(
      function () {
        $(".changePage_next .img2").show();
        $(".changePage_next .img1").hide();
      },
      function () {
        $(".changePage_next .img1").show();
        $(".changePage_next .img2").hide();
      }
    );
    //全屏退出全屏切换
    $(".all_screen").hover(
      function () {
        $(".all_screen .img2").show();
        $(".all_screen .img1").hide();
      },
      function () {
        $(".all_screen .img1").show();
        $(".all_screen .img2").hide();
      }
    );
    $(".no_all_screen").hover(
      function () {
        $(".no_all_screen .img2").show();
        $(".no_all_screen .img1").hide();
      },
      function () {
        $(".no_all_screen .img1").show();
        $(".no_all_screen .img2").hide();
      }
    );
    //单双页切换
    $(".singlePage").hover(
      function () {
        $(".singlePage .img2").show();
        $(".singlePage .img1").hide();
      },
      function () {
        $(".singlePage .img1").show();
        $(".singlePage .img2").hide();
      }
    );
    $(".doublePage").hover(
      function () {
        $(".doublePage .img2").show();
        $(".doublePage .img1").hide();
      },
      function () {
        $(".doublePage .img1").show();
        $(".doublePage .img2").hide();
      }
    );
    //全屏
    $("#fullscreen").on("click", function () {
      that.fullscreen % 2 == 1 ? that.enterfullscreen() : that.exitfullscreen();
    });
    //切换单双屏
    $("#pageFn").on("click", function () {
      that.readType % 2 == 1 ? that.single() : that.pair();
    });
  },
  created() {},
  methods: {
     // 滚动监听  滚动触发的效果写在这里
    handleScroll() {
      let that=this;
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t <= 0) {
        that.$message({ message: "已经是第一页了", duration: 1000 });
      } else {
        if (that.readType == 1) {
          that.pageindex = Math.floor(t / that.pageHeight);
        } else {
          that.pageindex = parseInt(t / that.pageHeight) * 2;
        }
      }
      //处理滚动加载
      var src = $(".single-li img").eq(that.pageindex).attr("src");
      if (src == "") {
        $(".loading_tips").css({ display: "block" });
      } else {
        $(".loading_tips").css({ display: "none" });
      }
    },
    //单选按钮
    checkedThis(obj) {
      //  let gender=$("input[name='type']:checked").val();
      var boxArray = document.getElementsByName("type");
      for (var i = 0; i <= boxArray.length - 1; i++) {
        if (boxArray[i].value == obj && boxArray[i].checked) {
          boxArray[i].checked = true;
        } else {
          boxArray[i].checked = false;
        }
      }
    },
    //下载pdf文件
    getPdf(url) {
      let name = "测试";
      this.fileLinkToStreamDownload(url);
      // this.downloadFileByBlob(url, name);
      // this.downloadFile(url, "file.pdf").then((res) => {
      //   console.log(url, "===");
      //   // 下载成功后的操作
      //   console.log("下载成功！");
      // });
    },
    // 下载文件 获取链接接口添加responseType: 'blob'
    downloadFile(fileStream, saveFileName) {
      return new Promise((resolve, reject) => {
        const blob = new Blob([fileStream]);
        if (navigator.msSaveBlob) {
          // 兼容IE
          navigator.msSaveBlob(blob, saveFileName);
        } else {
          const url = window.URL.createObjectURL(blob);
          saveAs(url, saveFileName);
        }
        resolve();
      });
    },
    fileLinkToStreamDownload(url) {
      console.log(url, "-00");
      let fileName = this.getDay();
      console.log(fileName, "11");
      let reg =
        /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
      if (!reg.test(url)) {
        throw new Error("传入参数不合法,不是标准的文件链接");
      } else {
        console.log("22");
        let xhr = new XMLHttpRequest();
        console.log(xhr, "33");
        xhr.open("get", url, true);
        xhr.setRequestHeader("Content-Type", `application/pdf`);
        xhr.responseType = "blob";
        let that = this;
        xhr.onload = function () {
          if (this.status == 200) {
            //接受二进制文件流
            var blob = this.response;

            that.downloadExportFile(blob, fileName);
          }
        };
        xhr.send();
      }
    },
    downloadExportFile(blob, tagFileName) {
      console.log(blob, "blob");
      let downloadElement = document.createElement("a");
      let href = blob;
      if (typeof blob == "string") {
        downloadElement.target = "_blank";
      } else {
        href = window.URL.createObjectURL(blob); //创建下载的链接
      }
      downloadElement.href = href;
      downloadElement.download =
        tagFileName +
        //下载后文件名
        document.body.appendChild(downloadElement);
      downloadElement.click(); //点击下载
      document.body.removeChild(downloadElement); //下载完成移除元素
      if (typeof blob != "string") {
        window.URL.revokeObjectURL(href); //释放掉blob对象
      }
    },
    getDay() {
      let time = new Date(),
        year = time.getFullYear(),
        month = time.getMonth() + 1,
        day = time.getDate(),
        timeStem = time.getTime();
      return `${year}/${month}/${day}/${timeStem}.jpg`;
    },
    // 下载文件的流
    downloadFileByBlob(res, fileName) {
      const blobUrl = window.URL.createObjectURL(new Blob([res]));
      const filename = fileName || "file";
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        try {
          const blob = new Blob([res], { type: "application/pdf" });
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } catch (e) {
          console.log(e);
        }
      } else {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = blobUrl;
        link.setAttribute("download", filename);
        // 模拟
        document.body.appendChild(link);
        link.click();
        // 释放URL 对象
        window.URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
      }
    },
    //上一页
    pre() {
      if (this.pageindex == 0) {
        this.$message("已经是第一页了");
      } else {
        if (this.readType == 1) {
          this.pageindex -= 1;
          window.scrollTo(
            0,
            this.pageindex * this.pageHeight + this.pageindex * 10
          );
        } else {
          this.pageindex = this.pageindex - 2;
          window.scrollTo(
            0,
            (this.pageindex / 2) * this.pageHeight + (this.pageindex / 2) * 10
          );
        }
      }
    },
    //下一页
    next() {
      if (this.pageindex == this.list.length) {
        this.$message("已经是最后一页了");
      } else {
        if (this.readType == 1) {
          this.pageindex++;
          window.scrollTo(
            0,
            this.pageindex * this.pageHeight + this.pageindex * 10
          );
        } else {
          this.pageindex = this.pageindex + 2;
          window.scrollTo(
            0,
            (this.pageindex / 2) * this.pageHeight + (this.pageindex / 2) * 10
          );
        }
      }
    },
    //控制全屏
    enterfullscreen() {
      //进入全屏
      this.fullscreen = 2;
      $(".no_all_screen").css({ display: "block" });
      $(".all_screen").css({ display: "none" });
      var docElm = document.documentElement;
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }
      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
      //IE11
      else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    },
    //退出全屏
    exitfullscreen() {
      this.fullscreen = 1;
      $(".no_all_screen").css({ display: "none" });
      $(".all_screen").css({ display: "block" });
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },

    //控制单页
    single() {
      this.readType = 2;
      $(".singlePage").css({ display: "block" });
      $(".doublePage").css({ display: "none" });
      $(".img-box ul").addClass("pair-ul").removeClass("single-ul");
      $(".img-box ul li").addClass("pair-li").removeClass("single-li");
      $(".right-mean").css({
        right: "80px",
      });
    },

    //控制单双页
    pair() {
      this.readType = 1;
      $(".doublePage").css({ display: "block" });
      $(".singlePage").css({ display: "none" });
      $(".img-box ul").addClass("single-ul").removeClass("pair-ul");
      $(".img-box ul li").addClass("single-li").removeClass("pair-li");
      $(".right-mean").css({
        right: "230px",
      });
    },

    //跳转到详情
    detailsFn() {
      this.$router.push({
        name: "catalogue-zz",
        query: { id: this.magazineId },
        // params: {
        //   type: item,
        // },
      });
    },
    //点击购买按钮
    buyFn() {
      //判断是否登录
      if (this.login == null || this.login == undefined) {
        this.$message.error("登陆后可购买");
        this.$router.push({
          name: "login",
        });
      } else {
        // journalData = getCookie("journalData");
        // setcookie("data", journalData);
        // location.href = "/orderpay";
        //携带存值跳到购买页面
      }
    },
    // 阅读请求后台数据
    readFn() {
      let result = "";
      let last = ""; //最后一个页面
      // $.ajax({
      //   type: "GET",
      //   url: "/PurchaseReadingApi?id=" + this.magazineId + "",
      //   success: function (data) {
      //     if (data.bol) {
      //       this.list = data.data.array_pdf;
      //       this.journalMonry = data.data.electronics;
      //       for (var i = 0; i < this.list.length; i++) {
      //         if (this.list[i] != "") {
      //           result += `
      //                       <li class="single-li" page=${i}>
      //                           <img src="" class="lazy" data-original="${this.list[i]}" alt="">
      //                       </li>`;
      //         }
      //       }
      //       last = `
      //           <li class="single-li" page=${this.list.length}>
      //              <div class="last-page">
      //               <div class="book-link">已购买</div>
      //              </div>
      //           </li>`;
      //       $(".img-box .single-ul").append(result).append(last);
      //       //图片懒加载
      //       $("img.lazy").lazyload({ effect: "fadeIn", threshold: 400 });
      //     } else {
      //       this.$message.error(data.msg);
      //     }
      //   },
      //   error: function () {},
      // });
    },

    //试读请求后台接口
    tryRead() {
      let result = "";
      let last = ""; //最后一个页面
      let noData = ""; //无数据时展示
    //   $.ajax({
    //     type: "GET",
    //     url: "/TrialReadingApi?id=" + this.magazineId + "",
    //     success: function (data) {
    //       if (data.bol) {
    //         this.list = data.data.electronic_t_read_pdf_img;
    //         this.journalMonry = data.data.electronics;
    //         for (var i = 0; i < this.list.length; i++) {
    //           if (this.list[i] != "") {
    //             result += `
    //                         <li class="single-li" page=${i}>
    //                             <img src="" class="lazy" data-original="${this.list[i]}" alt="">
    //                         </li>`;
    //           }
    //         }
    //         last = `<li class="single-li" page=${this.list.length}>
    //                 <div class="last-page">
    //                     <img src="/static/img/journal/last-page.png" alt="" class="img" >
    //                     <h2>试读结束...</h2>
    //                     <h3>意犹未尽，立即购买，后面内容更精彩！</h3>
    //                     <div class="book-link" @click="buyFn">￥${
    //                       this.journalMonry ? this.journalMonry : "--"
    //                     }</div>
    //                 </div>
    //             </li>`;
    //         $(".img-box .single-ul").append(result).append(last);
    //         //图片懒加载
    //         $("img.lazy").lazyload({ effect: "fadeIn", threshold: 400 });
    //       } else {
    //         this.$$message.error(data.data.msg);
    //         noData = `<li class="single-li" page=${this.list.length}>
    //                 <div class="last-page">
    //                     <h2>${data.data.msg}...</h2>
    //                 </div>
    //             </li>`;
    //       }
    //       $(".img-box .single-ul").append(noData);
    //     },
    //     error: function () {},
    //   });
    },
  },
  beforeDestroy() {
     document.querySelector('body').removeAttribute('style')
  },

  destroyed() {
    window.removeEventListener("scroll",this.handleScroll); // 离开页面 关闭监听 不然会报错
  },
};
</script>
<style lang='less' scoped>
// body{
//   background: #000000;
// }
.loading_tips {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -23px;
  margin-left: -90px;
  width: 220px;
  height: 60px;
  line-height: 46px;
  text-align: center;
  background-color: #000000;
  opacity: 0.85;
  -o-opacity: 0.85;
  -moz-opacity: 0.85;
  -webkit-opacity: 0.85;
  -ms-opacity: 0.85;
  /* filter: alpha(opacity: 85); */
  border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  display: none;
}
.loading_tips img {
  position: absolute;
  top: 13px;
  left: 35px;
  height: 30px;
  width: 30px;
}
.loading_tips span {
  color: #ffffff;
  font-size: 16px;
  display: block;
  text-align: right;
  padding-right: 30px;
  line-height: 60px;
  font-style: normal;
}

.contain {
  height: auto;
  width: 100%;
}

.img-box .single-ul {
  width: 660px;
  height: 880px;
  margin: 0 auto;
}

.img-box .pair-ul {
  display: flex;
  flex-wrap: wrap;
  width: 1300px;
  height: 880px;
  margin: 0 auto;
}

.img-box .single-li {
  width: 660px;
  height: 880px;
  background-color: #fff;
  margin-bottom: 10px;
  flex: none;
  display: flex;
  flex-direction: column;
}

.img-box .pair-li {
  width: 650px;
  height: 880px;
  /*height: 600px;*/
  background-color: #fff;
  margin-bottom: 10px;
  flex: none;
  display: flex;
  flex-direction: column;
}

.img-box li img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

.last-page {
  width: 520px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.last-page .img {
  margin: 0 auto 11px auto;
  width: 70px;
  height: 55px;
}

.last-page h2 {
  font-size: 18px;
  color: #773c17;
  font-weight: 500;
  line-height: 25px;
  padding-bottom: 35px;
}

.last-page h3 {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
  line-height: 22px;
}
.last-page .pay-tip {
  font-size: 14px;
  font-weight: 400;
  color: #ed6d38;
  line-height: 16px;
  padding: 17px 0px;
}

.last-page .book-link {
  width: 136px;
  height: 44px;
  background: linear-gradient(90deg, #f34250 0%, #f28a51 81%, #ff7d3b 100%);
  font-size: 18px;
  color: #ffffff;
  line-height: 44px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  margin-top: 35px;
}

.right-mean {
  position: fixed;
  right: 230px;
  top: 20%;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 36px;
}

.right-mean .cntr .pageBtn {
  width: 34px;
  margin-bottom: 7px;
}

.right-mean .cntr ul {
  border: 1px solid #646161;
  border-radius: 4px;
  overflow: hidden;
  background-color: #252323;
}

.right-mean .cntr .pageBtn li {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #646161;
  margin-bottom: -1px;
  cursor: pointer;
  position: relative;
}

.right-mean .cntr .pageBtn li img {
  position: absolute;
  left: 7px;
  top: 10px;
  width: 20px;
  height: 20px;
}

.right-mean .cntr .img2 {
  display: none;
}

.right-mean .cntr .changePage li {
  height: 70px;
  width: 100%;
  border-bottom: 1px solid #646161;
  margin-bottom: -1px;
  cursor: pointer;
  position: relative;
}

.right-mean .cntr .changePage li img {
  position: absolute;
  left: 8px;
  top: 27px;
  width: 18px;
  height: 18px;
}

.pageFun {
  width: 36px;
  margin-top: 10px;
}

.pageFun ul li {
  height: 36px;
  width: 36px;
  cursor: pointer;
  margin-bottom: 8px;
  position: relative;
  background-color: #252323;
  border-radius: 4px;
}

.pageFun .JD_changePage .singlePage,
.pageFun .JD_chaScreen .no_all_screen,
.pageFun ul li .img2 {
  display: none;
}

.pageFun ul li img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
