export const normalizeTime = time => {
  if (isNaN(time)) {
    return "00:00"
  }
  let minutes = Math.floor(time / 60)
  let seconds = Math.floor(time - minutes * 60)
  let minuteValue
  let secondValue

  if (minutes < 10) {
    minuteValue = "0" + minutes
  } else {
    minuteValue = minutes
  }

  if (seconds < 10) {
    secondValue = "0" + seconds
  } else {
    secondValue = seconds
  }
  return minuteValue + ":" + secondValue
}

export const setTime = (media, timer, timerWrapper, timerBar) => {
  let mediaTime = normalizeTime(media.currentTime)
  timer.textContent = mediaTime

  let barLength =
    timerWrapper.clientWidth * (media.currentTime / media.duration)
  timerBar.style.width = barLength + "px"
}

export const toggleFullScreen = player => {
  if (player.requestFullscreen)
    if (document.fullScreenElement) {
      document.cancelFullScreen()
    } else {
      player.requestFullscreen()
    }
  else if (player.msRequestFullscreen)
    if (document.msFullscreenElement) {
      document.msExitFullscreen()
    } else {
      player.msRequestFullscreen()
    }
  else if (player.mozRequestFullScreen)
    if (document.mozFullScreenElement) {
      document.mozCancelFullScreen()
    } else {
      player.mozRequestFullScreen()
    }
  else if (player.webkitRequestFullscreen)
    if (document.webkitFullscreenElement) {
      document.webkitCancelFullScreen()
    } else {
      player.webkitRequestFullscreen()
    }
  else {
    alert("Fullscreen API is not supported")
  }
}

export const changeButtonType = (btn, value) => {
  btn.title = value
  // btn.innerHTML = value
  if (value === "mute") {
    btn.className = "lnr lnr-volume"
  } else {
    btn.className = "lnr lnr-volume-" + value
  }
}

export const muteVolume = (player, btnMute) => {
  if (player.muted) {
    // Change the button to a mute button
    changeButtonType(btnMute, "mute")
    player.muted = false
  } else {
    // Change the button to an unmute button
    changeButtonType(btnMute, "unmute")
    player.muted = true
  }
}

export const playPauseMedia = (media, play) => {
  if (media.paused) {
    play.setAttribute("data-icon", "u")
    media.play()
  } else {
    play.setAttribute("data-icon", "P")
    media.pause()
  }
}

export const stopMedia = (media, play) => {
  media.pause()
  media.currentTime = 0
  play.setAttribute("data-icon", "P")
}
