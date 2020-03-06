<template>
  <div>
    <LoadingSpinner v-if="isLoading" :asSpace="true" />
    <div class="player" :class="isLoading ? 'player-loading' : ''">
      <video :src="src" id="videoPlayer">
        <!-- <source  /> -->
      </video>
      <div class="player-overlay"></div>
      <div class="player-overlay-shadow"></div>
      <div class="controls">
        <div class="timer">
          <div></div>
        </div>
        <div class="times">
          <span class="duration"></span>
          <span class="watched-time">00:00</span>
        </div>
        <!-- <button class="icon-button stop" data-icon="S" aria-label="stop"></button>
      <div class="timer">
        <div></div>
        <span aria-label="timer">00:00</span>
      </div> -->

        <div class="bottom-bar">
          <div>
            <span id="fullscreenBtn" class="lnr lnr-frame-expand"></span>
          </div>
          <div>
            <input
              type="range"
              id="volume-bar"
              title="volume"
              min="0"
              max="1"
              step="0.1"
              value="1"
            />
            <span id="btnMute" class="lnr lnr-volume-high"></span>
          </div>
          <div class="control-icons">
            <button
              class="fwd icon-button"
              data-icon="F"
              aria-label="fast forward"
            ></button>
            <button
              class="play icon-button"
              data-icon="P"
              aria-label="play pause toggle"
            ></button>
            <button
              class="rwd icon-button"
              data-icon="B"
              aria-label="rewind"
            ></button>
          </div>
          <div style="width:150px"></div>
          <div style="width: 26px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setTime,
  toggleFullScreen,
  changeButtonType,
  muteVolume,
  playPauseMedia,
  normalizeTime,
  stopMedia
} from "./VideoHelpers"

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

export default {
  name: "VideoPlayer",
  props: ["src"],
  components: { LoadingSpinner },
  data: function() {
    return {
      isLoading: true
    }
  },
  watch: {
    src: function() {
      // watch it

      const timerBar = document.querySelector(".timer div")
      timerBar.style.width = "0px"
    }
  },
  mounted() {
    const media = document.querySelector("#videoPlayer")
    const timerWrapper = document.querySelector(".timer")
    const playerOverlay = document.querySelector(".player-overlay")
    const timer = document.querySelector(".times .watched-time")
    const duration = document.querySelector(".times .duration")
    const timerBar = document.querySelector(".timer div")
    const btnMute = document.getElementById("btnMute")
    const volumeBar = document.getElementById("volume-bar")
    const fullscreenBtn = document.getElementById("fullscreenBtn")
    // const rwd = document.querySelector(".rwd")
    const fwd = document.querySelector(".fwd")

    const interval = setInterval(() => {
      if (media.readyState > 0) {
        this.isLoading = false
        clearInterval(interval)
      }
    }, 500)

    fwd.addEventListener("click", () => {
      media.pause()
      let intervalFwd = setInterval(() => {
        if (media.currentTime >= media.duration - 3) {
          fwd.classList.remove("active")
          clearInterval(intervalFwd)
          stopMedia()
        } else {
          media.currentTime += 1
        }
      }, 300)
    })

    fullscreenBtn.addEventListener("click", () => {
      toggleFullScreen(media)
    })

    volumeBar.addEventListener("change", function(evt) {
      media.volume = evt.target.value
    })
    media.addEventListener(
      "volumechange",
      function(e) {
        const { volume } = e.target
        if (media.muted) changeButtonType(btnMute, "mute")
        else {
          if (volume >= 0.7) {
            changeButtonType(btnMute, "high")
          } else if (volume >= 0.4 && volume < 0.7) {
            changeButtonType(btnMute, "medium")
          } else if (volume > 0 && volume < 0.4) {
            changeButtonType(btnMute, "low")
          } else {
            changeButtonType(btnMute, "mute")
          }
        }
      },
      false
    )
    btnMute.addEventListener("click", () => muteVolume(media, btnMute))

    const play = document.querySelector(".play")
    play.addEventListener("click", () => playPauseMedia(media, play))
    playerOverlay.addEventListener("click", () => playPauseMedia(media, play))

    media.addEventListener(
      "ended",
      function() {
        this.pause()
      },
      false
    )

    media.addEventListener("timeupdate", () => {
      setTime(media, timer, timerWrapper, timerBar)
      setInterval(function(t) {
        if (media.readyState > 0) {
          duration.textContent = normalizeTime(media.duration)
          clearInterval(t)
        }
      }, 500)
    })

    timerWrapper.addEventListener("click", e => {
      media.currentTime =
        media.duration * (e.offsetX / timerWrapper.clientWidth)
    })

    document.onkeypress = myKeyPressHandler

    function myKeyPressHandler(e) {
      if (e.keyCode === 32) {
        e.preventDefault()

        const media = document.querySelector("#videoPlayer")
        const play = document.querySelector(".play")
        if (media) {
          playPauseMedia(media, play)
        }
      }
    }
  }
}
</script>

<style scoped>
.player {
  position: relative;
  margin-bottom: 40px;
}
.player video {
  width: 100%;
}
.controls {
  opacity: 0;
  /* width: 400px; */
  /* border-radius: 10px; */
  position: absolute;
  bottom: 30px;
  right: 50px;
  left: 50px;
  /* left: 50%; */
  /* margin-left: -200px; */
  /* background-color: black; */
  /* box-shadow: 3px 3px 5px black; */
  transition: 0.5s all;
  /* display: flex; */
  /* justify-content: center; */
  z-index: 3;
}

.player:hover .controls,
.player:focus .controls {
  opacity: 1;
}

button.icon-button {
  border: 0;
  outline: 0;
  cursor: pointer;
}

button.icon-button:before {
  font-family: "Heydings Controls";
  /* font-size: 25px; */
  position: relative;
  content: attr(data-icon);
  /* color: #aaa; */
  /* text-shadow: 1px 1px 0px black; */
}

.play {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-right: 10px;
  margin-left: 10px;
}
.play:before {
  color: #000;
  font-size: 24px;
  bottom: 4px;
  left: 1px;
}

.fwd,
.rwd {
  background-color: transparent;
  position: relative;
  bottom: 5px;
}
.fwd:before,
.rwd:before {
  font-size: 28px;
  color: #fff;
}

.timer {
  /* line-height: 38px;
  font-size: 10px;
  font-family: monospace; */
  /* text-shadow: 1px 1px 0px black; */
  /* color: white; */
  /* flex: 5; */
  position: relative;
  background-color: #fff;
  height: 2px;
  cursor: pointer;
  /* transition: 0.1s all; */
}

.timer:hover {
  height: 4px;
  top: 1px;
}
.timer:hover div:before {
  width: 15px;
  height: 15px;
  top: -6px;
  right: -6px;
}

.timer div {
  position: absolute;
  background-color: #f37035ff;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  z-index: 2;
}

.timer div:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f37035ff;
  right: -4px;
  top: -4px;
}

.bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.control-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.times {
  margin-bottom: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
#fullscreenBtn {
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}
#btnMute {
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  margin-right: 10px;
}
[type="range"] {
  margin: 0;
  padding: 0;
  width: 7em;
  height: 1.5em;
  background: transparent;
  font: 1em/1 arial, sans-serif;
  direction: ltr;
}
[type="range"],
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
[type="range"]::-webkit-slider-runnable-track {
  box-sizing: border-box;
  border: none;
  width: 7em;
  height: 0.2em;
  background: #ccc;
}
[type="range"]::-moz-range-track {
  box-sizing: border-box;
  border: none;
  width: 7em;
  height: 0.2em;
  background: #ccc;
}
[type="range"]::-ms-track {
  box-sizing: border-box;
  border: none;
  width: 7em;
  height: 0.2em;
  background: #ccc;
}
[type="range"]::-webkit-slider-thumb {
  margin-top: -0.3em;
  box-sizing: border-box;
  border: none;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: #fff;
}
[type="range"]::-moz-range-thumb {
  box-sizing: border-box;
  border: none;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #f90;
}
[type="range"]::-ms-thumb {
  margin-top: 0;
  box-sizing: border-box;
  border: none;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: #f90;
}
[type="range"]::-ms-tooltip {
  display: none;
}

.player-overlay-shadow {
  /* background-color: #000; */
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 120px;
  transition: 0.6s all;
  opacity: 0;
}

.player:hover .player-overlay-shadow {
  opacity: 1;
}

.player-overlay {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.player-loading {
  visibility: hidden;
}
</style>
