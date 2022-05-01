<template>
  <div class="main_container">
    <singleHeader />
    <div class="main">
      <div class="audio-box">
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
                @click="handlePlay"
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
</template>
<script>
export default {
  data() {
    return {
      showPlay: false,
      audioFile:
        "https://cmas-lis.oss-cn-hangzhou.aliyuncs.com/c5fc19c8df334bea8ae6d952fa0c311c/TRANSCODE_1620640654182/%E6%BA%AF%20%28Reverse%E6%B2%BB%E6%84%88%E7%89%88%29",
      currentTime: "00:00",
      duration: "00:00",
      isMute: false,
      sliderTime: 0,
      volume: 0,
    };
  },
  methods: {
    //点击音频播放按钮
    handlePlay() {
      if (!this.audioFile) {
        return;
      }
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
      this.sliderTime = 0;
      this.currentTime = "00:00";
      this.showPlay = false;
      this.$refs.progressbar.style.backgroundSize = "0% 100%";
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
    },
    //下一曲
    nextClick() {
      console.log("自定义", "下一曲点击");
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  .audio-box {
    width: 319px;
    height: 93px;
    border: 1px solid #ccc;
    padding: 0px 15px 0px 12px;
    background-image: url(@/static/images/audio-box.png);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .left {
      width: 50px;
      height: 50px;
      img {
        border-radius: 0px;
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
          &:hover{
            .mute-bar{
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
        padding-top: 8px;

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

        .base-r {
        }
      }
    }
  }
}
</style>
