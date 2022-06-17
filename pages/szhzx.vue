<template>
  <div class="main_container">
    <singleHeader />
    <div class="digital-container banxin">
      <div class="banner">
        <img src="../static/images/szh-banner.png" alt="" />
      </div>
      <div class="introduce">
        <dl class="common-dl">
          <dt>
            <img src="../static/images/szh-book.png" alt="" />
          </dt>
          <dd>
            <h6>“数字化”文章订阅</h6>
            <p>
              在全球经济加速从工业经济向数字经济过渡的大背景下，企业数字化转型已经成为时代的共识——数字化时代。在数字化时代，如何将数字化转型落到实处，成为全球企业需要面对的首要问题。CMAS聚焦数字化转型，从政策热点到专家观点，从理论前沿到精益实践，带您深入理解在企业的数字化中会有怎样的变化。
            </p>
            <div class="introduce-base">
              <div class="left">
                ￥<span class="price">68</span><span class="yue">/月</span>
              </div>
              <button @click="buyFn()">立即订阅</button>
            </div>
          </dd>
        </dl>
      </div>
      <div class="main-container">
        <div class="container-two">
          <div class="two-content">
            <div class="title-box">
              <div class="top">
                <h2>淘咨讯</h2>
                <span>查看更多</span>
              </div>
              <div class="line"></div>
            </div>
            <ul class="two-ul">
              <li>
                <div class="li-left">
                  <img src="/images/sub-advert06.png" alt="" />
                  <div class="point">推荐</div>
                </div>
                <div class="li-right">
                  <h5 class="reset twoline">
                    36氪首发｜构建品牌东南亚出海高速路…
                  </h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>2022-03-14</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                <div class="base">
                  <div class="left">
                    <img class="icon" src="/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="icon" src="/images/chat.png" alt="" />
                    <span>3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>中国石油刘跃珍： <br />业财融合新模式，财务人员新角色</h5>
                <div class="base">
                  <div class="left">
                    <img class="icon" src="/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="icon" src="/images/chat.png" alt="" />
                    <span>3</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-two">
          <div class="two-content">
            <div class="title-box">
              <div class="top">
                <h2>学案例</h2>
                <span>查看更多</span>
              </div>
              <div class="line"></div>
            </div>
            <ul class="two-ul">
              <li class="two-ul-li">
                <div class="li-right">
                  <h5 class="reset twoline">
                    数字化转型：<br />数字化转型文章数字化转型1
                  </h5>
                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>2022-03-14</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <h5>数字化转型：<br />数字化转型文章数字化转型1</h5>
                <div class="base">
                  <div class="left">
                    <img class="icon" src="/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="icon" src="/images/chat.png" alt="" />
                    <span>3</span>
                  </div>
                </div>
              </li>
              <li>
                <h5>数字化转型：<br />数字化转型文章数字化转型1</h5>
                <div class="base">
                  <div class="left">
                    <img class="icon" src="/images/time.png" alt="" />
                    <span>2022-03-14</span>
                    <img class="icon" src="/images/chat.png" alt="" />
                    <span>3</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-two">
          <div class="two-content">
            <div class="title-box">
              <div class="top">
                <h2>热点推荐--听音频</h2>
                <span>查看更多</span>
              </div>
              <div class="line"></div>
            </div>
            <ul class="audio-ul">
              <li v-for="(item, index) in menuData" :key="index">
                <div class="li-left" @click="audioPlay(index, item)">
                  <img src="/images/sub-advert06.png" alt="" />
                  <img
                    v-show="!showPlay || currentIndex != index"
                    class="audio-img video-play"
                    src="../static/images/play.png"
                    alt=""
                  />
                  <img
                    v-show="showPlay && currentIndex == index"
                    class="audio-img video-pause"
                    src="../static/images/pause.png"
                    alt=""
                  />
                  <div v-if="index == 0" class="point">推荐</div>
                </div>
                <div class="li-right">
                  <div class="li-right-top">
                    <h5 class="twoline">{{ item.title }}</h5>
                    <img
                      v-if="showPlay && currentIndex == index"
                      src="../static/images/audio/pl.png"
                      alt=""
                    />
                  </div>

                  <div class="base">
                    <div class="left">
                      <img class="icon" src="/images/time.png" alt="" />
                      <span>2022-03-14</span>
                      <img class="icon" src="/images/chat.png" alt="" />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="audio-box"
            :style="{ opacity: showPlay || isAudio ? '1' : '0' }"
          >
            <audio
              id="audioPlayer"
              ref="audio"
              preload="metadata"
              :src="audioFile"
              controlslist="nodownload"
              @loadedmetadata="onLoadedmetadata"
              @timeupdate="onTimeupdate"
              @volumechange="onVolumechange"
              @ended="onAudioEnded"
            ></audio>
            <div class="left">
              <img src="../static/images/audio/img.png" alt="" />
              <img src="../static/images/audio/film.png" alt="" />
            </div>
            <div class="right">
              <div class="top">
                <div class="top-l">
                  <img
                    src="../static/images/audio/pre.png"
                    alt=""
                    @click="prevClick"
                  />
                  <img
                    @click="audioHandlePlay"
                    class="play"
                    :src="
                      showPlay
                        ? require('@/static/images/audio/pause.png')
                        : require('@/static/images/audio/play.png')
                    "
                    alt=""
                  />
                  <img
                    src="../static/images/audio/nuxt.png"
                    alt=""
                    @click="nextClick"
                  />
                </div>
                <div class="top-r">
                  <!-- 音量操作 -->
                  <input
                    slot="content"
                    class="mute-bar"
                    ref="mutebar"
                    type="range"
                    :value="volume"
                    step="any"
                    min="0"
                    max="100"
                    @input="hancleChangeVolume($event)"
                  />
                  <img
                    @click.stop="handleMute"
                    :src="
                      isMute
                        ? require('@/static/images/audio/mute.png')
                        : require('@/static/images/audio/no-mute.png')
                    "
                    alt=""
                  />
                </div>
              </div>
              <!-- 播放进度条 -->
              <div class="base">
                <div class="base-l" id="currentTime">{{ currentTime }}</div>
                <input
                  class="progress-bar"
                  ref="progressbar"
                  type="range"
                  :value="sliderTime"
                  step="any"
                  min="0"
                  max="100"
                  @input="handleProgress($event)"
                />

                <div class="base-r" id="duration">{{ duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="module">
        <div class="module-l">
          <div class="title-box">
            <div class="top">
              <h2>大咖说</h2>
              <span>查看更多</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="module-swiper">
            <swiper
              :options="swiperOption"
              ref="mySwiper"
              class="swiper-wrapper"
            >
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/2021/04/01/16172596716524.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>内容详情</dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/2021/03/25/16166566872079.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>内容详情</dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/2021/04/01/16172596716524.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>内容详情</dd>
                </dl>
              </swiper-slide>
              <swiper-slide>
                <dl>
                  <dt>
                    <img
                      src="https://www.chinamas.cn/upload/2021/03/25/16166566872079.jpg"
                      alt=""
                    />
                  </dt>
                  <dd>内容详情</dd>
                </dl>
              </swiper-slide>
            </swiper>
            <div class="btn-left">
              <img
                class="left01"
                src="../static/images/way/left01.png"
                alt=""
              />
              <img class="left1" src="../static/images/way/left1.png" alt="" />
            </div>
            <div class="btn-right">
              <img
                class="right02"
                src="../static/images/way/right02.png"
                alt=""
              />
              <img
                class="right2"
                src="../static/images/way/right2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="module-r">
          <div class="title-box">
            <div class="top">
              <h2>热点推荐--看视频</h2>
              <span>查看更多</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="video-box">
            <video
              ref="movie"
              poster="https://www.chinamas.cn/upload/2021/01/14/16106158037960.jpg"
              src="https://cmas-wendao-out.oss-cn-hangzhou.aliyuncs.com/Act-ss-mp4-hd/65bbef8bc28f4f0aa7c93f0f43166c42/%E9%97%AE%E9%81%932%E6%9C%9F%E8%A1%A5%E6%8B%8D5.0.mp4"
              controls
            ></video>
            <img
              v-show="isplay"
              class="video-play"
              src="../static/images/play.png"
              alt=""
              @click="handlePlay"
            />
            <img
              v-show="!isplay"
              class="video-pause"
              src="../static/images/pause.png"
              alt=""
              @click="handlePause"
            />
          </div>
        </div>
      </div>
      <div class="module">
        <div class="module-l">
          <div class="title-box">
            <div class="top">
              <h2>听课程</h2>
              <span>更多课程</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="classroom">
            <dl>
              <dt>
                <img
                  src="https://www.chinamas.cn/upload/2020/12/18/16082829422449.jpg"
                  alt=""
                />
              </dt>
              <dd>
                <h6>第16期：数字化赋能产业互联</h6>
                <p><span class="name">喻翊翔</span>金凤科技 CIO</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <img
                  src="https://www.chinamas.cn/upload/2021/03/26/16167267228744.jpg"
                  alt=""
                />
              </dt>
              <dd>
                <h6>第16期：数字化赋能产业互联</h6>
                <p><span class="name">喻翊翔</span>金凤科技 CIO</p>
              </dd>
            </dl>
          </div>
        </div>
        <div class="module-r">
          <div class="title-box">
            <div class="top">
              <h2>找方法</h2>
              <span>查看更多</span>
            </div>
            <div class="line"></div>
          </div>
          <ul class="module-r-ul">
            <li>
              <div class="keyword_box">
                <span>预算</span>
                <span>管理会计</span>
                <span>数字化转型</span>
                <span>数字化转型 </span>
                <span>关键字</span>
                <span>管理会计</span>
                <span>数字化转型</span>
                <span>数字化转型</span>
                <span>关键字</span>
                <span>管理会计</span>
                <span>数字化转型</span>
                <span>数字化转型</span>
              </div>
            </li>
            <li>
              <h5>
                中国石油刘跃珍：
                <br />业财融合新模式，财务人员新角色
              </h5>
              <div class="base">
                <div class="left">
                  <img src="/images/time.png" alt="" class="icon" />
                  <span>2022-03-14</span>
                  <img src="/images/chat.png" alt="" class="icon" />
                  <span>3</span>
                </div>
              </div>
            </li>
            <li>
              <h5>
                中国石油刘跃珍：
                <br />业财融合新模式，财务人员新角色
              </h5>
              <div class="base">
                <div class="left">
                  <img src="/images/time.png" alt="" class="icon" />
                  <span>2022-03-14</span>
                  <img src="/images/chat.png" alt="" class="icon" />
                  <span>3</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="module">
        <div class="module-l">
          <div class="title-box">
            <div class="top">
              <h2>逛书店</h2>
              <span>更多课程</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="magazine">
            <dl>
              <dt>
                <div class="dt-img">
                  <div class="cj"></div>
                  <img src="@/static/images/zz.png" alt="" />
                </div>
              </dt>
              <dd>
                <h6>2022年第一期 总第22期</h6>
                <p>重塑核心能力</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <div class="dt-img">
                  <div class="cj"></div>
                  <img src="@/static/images/zz.png" alt="" />
                </div>
              </dt>
              <dd>
                <h6>2022年第一期 总第22期</h6>
                <p>重塑核心能力</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <div class="dt-img">
                  <div class="cj"></div>
                  <img src="@/static/images/zz.png" alt="" />
                </div>
              </dt>
              <dd>
                <h6>2022年第一期 总第22期</h6>
                <p>重塑核心能力</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <div class="dt-img">
                  <div class="cj"></div>
                  <img src="@/static/images/zz.png" alt="" />
                </div>
              </dt>
              <dd>
                <h6>2022年第一期 总第22期</h6>
                <p>重塑核心能力</p>
              </dd>
            </dl>
          </div>
        </div>
        <div class="module-r">
          <div class="title-box">
            <div class="top">
              <h2>更多专题</h2>
              <span>查看更多</span>
            </div>
            <div class="line"></div>
          </div>
          <div class="subject-swiper">
            <swiper
              :options="swiperTwoOption"
              ref="myTwoSwiper"
              class="swiper-wrapper"
            >
              <swiper-slide>
                <div class="subject-item">
                  <img src="../static/images/way/zz-img.png" alt="" />
                  <div class="point">管理会计专题</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="subject-item">
                  <img src="../static/images/way/zz-img1.png" alt="" />
                  <div class="point">管理会计专题</div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <img src="../static/images/way/zz-img2.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="../static/images/way/zz-img3.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img src="../static/images/way/zz-img.png" alt="" />
              </swiper-slide>
            </swiper>
            <!-- Optional controls -->
            <div class="btn-left-two">
              <img class="left01" src="@/static/images/way/left01.png" alt="" />
              <img class="left1" src="@/static/images/way/left1.png" alt="" />
            </div>
            <div class="btn-right-two">
              <img
                class="right02"
                src="@/static/images/way/right02.png"
                alt=""
              />
              <img class="right2" src="@/static/images/way/right2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        centeredSlides: false,
        slidesPerView: 2.4, // 设置slider容器能够同时显示的slides数量(轮播模式)
        spaceBetween: 20, // 在slide之间设置距离
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left", //上一张标签类名可以自定义
        },
      },
      swiperTwoOption: {
        initialSlide: 1, //默认显示第二张在中心位置
        slidesPerView: 1.5,
        loop: true, // 无限循环
        spaceBetween: -40,
        centeredSlides: true,
        // 如果需要前进后退按钮
        navigation: {
          //下一张
          nextEl: ".btn-right-two", //下一张标签类名可以自定义
          //上一张
          prevEl: ".btn-left-two", //上一张标签类名可以自定义
        },
      },
      isplay: true, //视频是否播放
      //音频
      isAudio: false, //控制音频控件显示隐藏
      showPlay: false, //音频是否播放
      audioFile: "", //音频来源
      currentTime: "00:00",
      duration: "00:00",
      isMute: false,
      sliderTime: 0,
      volume: 0, //静音
      currentIndex: 0, //当前索引
      menuData: [
        {
          title: "数字化转型文章 数字化转型-音频1",
          id: "1",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/eded7683aa074000ba6a0dd1e26be901/TRANSCODE_1620640654182/gc-liuqin-all",
        },
        {
          title: "数字化转型文章 数字化转型-音频2",
          id: "2",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/e556c807309a4de393237b56bd76e48e/TRANSCODE_1620640654182/Still%20Doll",
        },
        {
          title: "数字化转型文章 数字化转型-音频3",
          id: "3",
          url: "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/c5fc19c8df334bea8ae6d952fa0c311c/TRANSCODE_1620640654182/%E6%BA%AF%20%28Reverse%E6%B2%BB%E6%84%88%E7%89%88%29",
        },
      ], //播放列表
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.$refs.movie.addEventListener("play", this.handlePlay);
    this.$refs.movie.addEventListener("pause", this.handlePause);
  },
  methods: {
    //点击立即订阅
    buyFn() {
      this.$router.push({
        name: "dy-pay",
      });
    },
    //点击视频播放按钮
    handlePlay() {
      this.$refs.movie.play();
      this.isplay = false;
    },
    //点击视频暂停按钮
    handlePause() {
      this.$refs.movie.pause();
      this.isplay = true;
    },

    //播放音频组件
    audioPlay(index, item) {
      this.isAudio = true;
      if (index != this.currentIndex) {
        //关闭当前播放音乐
        // this.$refs.audio.pause();
        this.audioFile = item.url;
        //更改src后需要重新加载音乐
        this.$refs.audio.load();
        // this.sliderTime = 0;
        // this.currentTime = "00:00";
        // this.$refs.audio.currentTime = 0;
        // this.$refs.progressbar.style.backgroundSize = "0% 100%";
        this.showPlay = true;
        this.currentIndex = index;
        setTimeout(() => {
          this.$refs.audio.play();
        }, 500);
      } else if (index == this.currentIndex && this.$refs.audio.paused) {
        this.currentIndex = index;
        this.audioFile = item.url;
        this.showPlay = true;
        setTimeout(() => {
          this.$refs.audio.play();
        }, 500);
      } else {
        this.showPlay = false;
        this.$refs.audio.pause();
      }
    },

    //点击音频控件播放按钮
    audioHandlePlay() {
      if (!this.audioFile) {
        return;
      }
      // 判断是否正在播放 返回布尔值
      if (this.$refs.audio.paused) {
        // 开始
        this.showPlay = true;
        this.$refs.audio.play();
      } else {
        // 暂停
        this.showPlay = false;
        this.$refs.audio.pause();
      }
    },
    //原数据被加载时运行的脚本
    onLoadedmetadata(res) {
      this.duration = this.formatTime(res.target.duration);
      this.volume = res.target.volume * 100;
      this.isMute = res.target.muted;
      this.$refs.mutebar.style.backgroundSize = `${
        res.target.volume * 100
      }% 100%`;
    },

    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      this.updateProgress();
    },

    // 当音量改变时
    onVolumechange(res) {
      this.$refs.audio.muted = !Boolean(res.target.volume);
      this.isMute = !Boolean(res.target.volume);
    },
    //进度条事件
    handleProgress(e) {
      let rate = e.target.value / 100;
      this.$refs.audio.currentTime = this.$refs.audio.duration * rate;
      this.updateProgress();
    },
    //更新进度条
    updateProgress() {
      this.sliderTime =
        (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100 || 0;
      this.currentTime = this.formatTime(this.$refs.audio.currentTime);
      this.$refs.progressbar.style.backgroundSize = `${this.sliderTime}% 100%`;
    },
    //音量操作
    hancleChangeVolume(e) {
      if (!this.audioFile) {
        return;
      }
      this.volume = e.target.value;
      let _volume = e.target.value / 100;
      this.$refs.audio.volume = _volume;
      this.$refs.mutebar.style.backgroundSize = `${e.target.value}% 100%`;
    },
    //静音
    handleMute() {
      if (this.$refs.audio.muted) {
        //取消静音
        this.isMute = false;
        this.$refs.audio.muted = false;
      } else {
        //静音
        this.isMute = true;
        this.$refs.audio.muted = true;
      }
    },

    //播放完成
    onAudioEnded() {
      // this.sliderTime = 0;
      // this.currentTime = "00:00";
      // this.showPlay = false;
      // this.$refs.progressbar.style.backgroundSize = "0% 100%";
      // this.$refs.audio.load();
      this.nextClick(); //下一首
    },
    //格式化时长
    formatTime(s) {
      let t = "";
      s = Math.floor(s);
      if (s > -1) {
        let min = Math.floor(s / 60) % 60;
        let sec = s % 60;
        if (min < 10) {
          t += "0";
        }
        t += min + ":";
        if (sec < 10) {
          t += "0";
        }
        t += sec;
      }
      return t;
    },
    //上一首
    prevClick() {
      console.log("自定义", "上一曲点击");
      //关闭当前播放音乐
      this.$refs.audio.pause();
      this.currentIndex =
        this.currentIndex > 0
          ? this.currentIndex - 1
          : this.menuData.length - 1;

      //自动播放当前音乐
      setTimeout(
        function () {
          this.audioPlay(this.currentIndex, this.menuData[this.currentIndex]);
        }.bind(this),
        100
      );
    },
    //下一曲
    nextClick() {
      console.log("自定义", "下一曲点击");
      //关闭当前播放音乐
      this.$refs.audio.pause();
      this.currentIndex =
        this.currentIndex < this.menuData.length - 1
          ? this.currentIndex + 1
          : 0;
      //自动播放当前音乐
      setTimeout(
        function () {
          this.audioPlay(this.currentIndex, this.menuData[this.currentIndex]);
        }.bind(this),
        100
      );
    },
  },
};
</script>
<style lang="less" scoped>
.digital-container {
  padding: 20px 0px 40px;
  .banner {
    height: 391px;
  }
  .introduce {
    padding: 30px 0px;
    .common-dl {
      height: 250px;
      display: flex;
      dt {
        min-width: 504px;
        height: 100%;
        img {
          border-radius: 6px 0px 0px 6px;
        }
      }
      dd {
        width: 551px;
        background: #fff;
        border-radius: 0px 6px 6px 0px;
        padding: 30px 20px 27px 22px;
        h6 {
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 24px;
        }
        p {
          width: 534px;
          font-size: 13px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
          line-height: 20px;
          padding: 24px 0px 30px;
        }
        .introduce-base {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            font-size: 14px;
            color: #ed6d38;
            font-weight: 400;
          }
          .price {
            font-size: 22px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 1.07px;
            margin-left: -2px;
            vertical-align: bottom;
          }
          .yue {
            color: rgba(0, 0, 0, 0.85);
          }
          button {
            width: 88px;
            height: 32px;
            border-radius: 2px;
            background: #ed6d38;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            line-height: 22px;
            border: none;
            display: block;
            cursor: pointer;
          }
        }
      }
    }
  }
  .title-box {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e7e7e7;
      padding-bottom: 18px;
      h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: left;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
      }
      span {
        font-size: 14px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        cursor: pointer;
      }
    }
    .line {
      width: 82px;
      height: 2px;
      background: #ed6d38;
      margin-top: -2px;
    }
  }
  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 12px;
        height: 12px;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.25);
        padding-right: 7px;
        margin-top: -2px;
        margin-left: 2px;
      }
    }
    .right {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
    }
  }
  .main-container {
    display: flex;
    align-items: center;
    h5 {
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      color: rgba(0, 0, 0, 0.85);
      line-height: 24px;
    }

    .container-two {
      width: 346px;
      height: 462px;
      background: linear-gradient(245deg, #e9ebf1 0%, #f6f7f9 23%, #ffffff 95%);
      border-radius: 6px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
      margin-right: 29px;
      &:nth-child(3) {
        margin-right: 0px;
        position: relative;
      }
      .two-content {
        padding: 20px 20px 0px;
        .two-ul {
          li {
            padding-top: 24px;
            height: 100px;
            border-bottom: 1px dashed #e7e7e7;
            &:last-child {
              border-bottom: none;
            }
          }
          li:nth-child(1) {
            display: flex;
            padding-top: 34px;
            height: 110px;
            .li-left {
              min-width: 112px;
              height: 85px;
              position: relative;
              .audio-img {
                width: 48px;
                height: 48px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
                // opacity: 0.85;
                &.video-pause {
                  opacity: 0;
                  transition: all 0.4s;
                }
              }
              &:hover {
                .video-pause {
                  opacity: 1;
                }
              }
            }
            .li-right {
              margin-left: 14px;
              height: 85px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .reset {
                width: 172px;
              }
              .base {
                margin-top: 0px;
              }
            }
          }
          .two-ul-li {
            .li-right {
              margin-left: 0px !important;
              .reset {
                width: 100% !important;
              }
            }
          }
        }
        .audio-ul {
          margin-top: 20px;
          li {
            display: flex;
            align-items: center;
            padding-top: 0px;
            height: 124px;
            border-bottom: 1px dashed #e7e7e7;

            &:last-child {
              border-bottom: none;
            }
            .li-left {
              min-width: 112px;
              height: 85px;
              position: relative;
              .audio-img {
                width: 48px;
                height: 48px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
                // opacity: 0.85;
                &.video-pause {
                  opacity: 0;
                  transition: all 0.4s;
                }
              }
              &:hover {
                .video-pause {
                  opacity: 1;
                }
              }
            }
            .li-right {
              margin-left: 14px;
              height: 85px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .li-right-top {
                display: flex;
                justify-content: space-between;
                width: 172px;
                h5 {
                  width: 120px;
                }
                img {
                  width: 18px;
                  height: 15px;
                  margin-top: 8px;
                }
              }
              .base {
                margin-top: 0px;
              }
            }
          }
        }
        .two-content-mid {
          .img-box {
            width: 149px;
            height: 164px;
            margin: 67px auto;
          }
        }
        .two-content-right {
          li {
            .img {
              width: 242px;
              height: 116px;
              position: relative;
            }
            .img-base {
              padding: 12px 0px;
              span {
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #262626;
                line-height: 22px;
              }
              p {
                font-size: 13px;
                font-weight: 400;
                text-align: left;
                color: #a7a7a7;
                line-height: 22px;
                margin-bottom: 0px;
              }
            }
          }
          li:nth-child(1) {
            margin-top: 18px;
          }
        }
      }
    }
  }
  .audio-box {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 319px;
    height: 93px;
    background: #fafafa;
    padding: 0px 15px 0px 12px;
    // background-image: url(@/static/images/audio-box.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    cursor: pointer;
    .left {
      display: flex;
      align-items: center;
      width: 50px;
      height: 50px;
      img {
        border-radius: 0px;
        &:nth-child(2) {
          width: 9px;
          height: 30px;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      width: 78%;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 14px;
          height: 15px;
          border-radius: 0px;
        }
        .top-l {
          display: flex;
          align-items: center;
          .play {
            width: 30px;
            height: 30px;
            margin: 0px 12px;
          }
        }
        .top-r {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 120px;
          img {
            width: 17px;
            height: 14px;
            border-radius: 0px;
          }
          .mute-bar {
            width: 100px;
            background-color: #e5e7e8;
            height: 4px;
            cursor: pointer;
            opacity: 0;
          }
          input[type="range"] {
            -webkit-appearance: none; /*清除系统默认样式*/
            outline: none;
            // width: 100%;
            background: -webkit-linear-gradient(
                  90deg,
                  #f34250 0%,
                  #f28a51 82%,
                  #ff7d3b 100%
                )
                no-repeat,
              #f1f2f6; /*背景颜色，俩个颜色分别对应上下*/
            background-size: 0% 100%; /*设置左右宽度比例，这里可以设置为拖动条属性*/
            height: 4px; /*横条的高度，细的真的比较好看嗯*/
            border-radius: 4px;
          }
          /*拖动块的样式*/
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none; /*清除系统默认样式*/
            height: 8px; /*拖动块高度*/
            width: 8px; /*拖动块宽度*/
            background: #ff7d3b; /*拖动块背景*/
            border-radius: 50%; /*外观设置为圆形*/
          }
          &:hover {
            .mute-bar {
              opacity: 1;
            }
          }
        }
      }

      .base {
        font-size: 8px;
        font-weight: 400;
        color: #8f8f8f;
        line-height: 11px;
        display: flex;
        align-items: center;
        .progress-bar {
          width: 180px;
          height: 4px;
          cursor: pointer;
          margin: 2px 10px 0px;
        }

        // // 去除进度条边框
        input[type="range"]:focus {
          outline: none;
        }
        // 控件
        input[type="range"] {
          -webkit-appearance: none; /*清除系统默认样式*/
          outline: none;
          width: 100% !important;
          background: -webkit-linear-gradient(
                90deg,
                #f34250 0%,
                #f28a51 82%,
                #ff7d3b 100%
              )
              no-repeat,
            #f1f2f6; /*背景颜色，俩个颜色分别对应上下*/
          background-size: 0% 100%; /*设置左右宽度比例，这里可以设置为拖动条属性*/
          height: 4px; /*横条的高度，细的真的比较好看嗯*/
          border-radius: 4px;
        }

        /*拖动块的样式*/
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; /*清除系统默认样式*/
          height: 8px; /*拖动块高度*/
          width: 8px; /*拖动块宽度*/
          background: #ff7d3b; /*拖动块背景*/
          border-radius: 50%; /*外观设置为圆形*/
        }
        ​ input[type="range"]::-webkit-slider-thumb:hover {
          -webkit-appearance: none;
          border: 6px solid #ff7d3b; /*设置边框*/
        }
        ​ input[type="range"]::-moz-range-thumb {
          height: 8px; /*拖动块高度*/
          width: 8px; /*拖动块宽度*/
          background: #ff7d3b; /*拖动块背景*/
          border-radius: 50%; /*外观设置为圆形*/
          color: transparent; //去除内阴影
          border-color: transparent; //去除原有边框
        }
        ​ input[type="range"]::-moz-range-thumb:hover {
          -webkit-appearance: none;
          border: 2px solid #ff7d3b; /*设置边框*/
        }
      }
    }
  }
  .module {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    .title-box {
      padding: 20px 20px 0px;
    }
    .btn-left,
    .btn-right,
    .btn-left-two,
    .btn-right-two {
      width: 38px;
      height: 38px;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 8px;
        height: 14px;
      }
      .right2,
      .left1 {
        display: none;
      }
    }

    .btn-left,
    .btn-left-two {
      position: absolute;
      top: 37%;
      left: 20px;
      z-index: 997;
    }
    .btn-right,
    .btn-right-two {
      position: absolute;
      top: 37%;
      right: 20px;
      z-index: 997;
    }
    .btn-left:hover,
    .btn-right:hover,
    .btn-left-two:hover,
    .btn-right-two:hover {
      background: #ed6d38;
    }
    .btn-left:hover .left1,
    .btn-left-two:hover .left1 {
      display: block;
    }

    .btn-left:hover .left01,
    .btn-left-two:hover .left01 {
      display: none;
    }
    .btn-right:hover .right2,
    .btn-right-two:hover .right2 {
      display: block;
    }
    .btn-right:hover .right02,
    .btn-right-two:hover .right02 {
      display: none;
    }
    .module-l {
      width: 721px;
      background: #ffffff;
      border-radius: 6px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
      .module-swiper {
        padding: 23px 0px 23px 20px;
        height: 183px;
        position: relative;
        .swiper-wrapper {
          width: 91%;
          float: right;
          overflow: hidden;
        }
        .swiper-slide {
          width: 245px !important;
        }
        dl {
          width: 245px;
          height: 184px;
          dt {
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0) 48%,
              #000000 100%
            );
            border-radius: 6px;
          }
          dd {
            margin-left: 19px;
            margin-top: -36px;
            font-size: 18px;
            font-weight: 500;
            color: #ffffff;
            line-height: 25px;
          }
        }
      }
      .classroom {
        padding: 24px 28px 38px;
        display: flex;
        justify-content: space-between;
        dl {
          width: 323px;
          dt {
            width: 100%;
            height: 241px;
          }
          dd {
            h6 {
              font-size: 16px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              padding: 20px 0px 6px;
            }
            p {
              font-size: 13px;
              font-weight: 400;
              color: #bfbfbf;
              line-height: 20px;
              .name {
                font-weight: 500;
                color: #ed6d38;
                margin-right: 12px;
              }
            }
          }
        }
      }
      .magazine {
        display: flex;
        justify-content: space-between;
        padding: 24px 18px;
        dl {
          width: 154px;
          dt {
            .dt-img {
              width: 152px;
              height: 200px;
              border: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              img {
                width: 152px;
                height: 198px;
                border-radius: 0px;
              }
            }
          }
          dd {
            h6 {
              width: 152px;
              height: 48px;
              font-size: 16px;
              font-weight: 600;
              color: rgba(0, 0, 0, 0.85);
              line-height: 24px;
              padding: 18px 0px 6px;
            }
            p {
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 20px;
            }
          }
        }
        dl:hover .cj {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.25);
          position: absolute;
          left: 0;
          top: 0;
          z-index: 99;
        }
      }
    }
    .module-r {
      width: 346px;
      background: #ffffff;
      border-radius: 6px;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
      .video-box {
        width: 309px;
        height: 184px;
        background: radial-gradient(rgba(0, 0, 0, 0), #000000);
        border-radius: 6px;
        margin: 23px auto;
        position: relative;
        video {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          object-fit: cover;
        }
        img {
          width: 62px;
          height: 62px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          // opacity: 0.85;
          &.video-pause {
            opacity: 0;
            transition: all 0.4s;
          }
        }
        &:hover {
          .video-pause {
            opacity: 1;
          }
        }
      }

      .module-r-ul {
        padding: 0px 20px;
        .keyword_box {
          margin: 20px 0px 14px;
          span {
            padding: 2px 6px;
            margin-right: 8px;
            margin-bottom: 8px;
            display: inline-block;
            background: #f3f3f3;
            font-size: 12px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 17px;
          }
          span:hover {
            background: #fff2f0;
            color: #d71d1d;
          }
        }
        li {
          height: 122px;
          border-bottom: 1px dashed #e7e7e7;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:last-child {
            border-bottom: none;
          }
          h5 {
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            color: rgba(0, 0, 0, 0.85);
            line-height: 24px;
          }
        }
      }
      .subject-swiper {
        position: relative;
        .subject-item {
          position: relative;
        }
        .btn-left-two {
          top: 50%;
          left: 0px;
        }
        .btn-right-two {
          top: 50%;
          right: 0px;
        }
        .swiper-container {
          width: 306px;
          padding: 24px 0px;
        }
        .swiper-slide {
          text-align: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          transition: 300ms;
          transform: scale(0.8);
        }
        .swiper-slide-active,
        .swiper-slide-duplicate-active {
          transform: scale(1);
          z-index: 997;
        }
      }
    }
  }
}
</style>
