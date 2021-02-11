class Video {
  constructor() {
    this.playBtn = document.querySelector(".hero__play-btn")
    this.stopBtn = document.querySelector(".modal__close--video")
    this.modalVideo = document.querySelector(".modal__video")
    this.playVideo()
    this.stopVideo()
  }

  playVideo() {
    this.playBtn.addEventListener("click", e => {
      this.modalVideo.play()
    })
    this.playBtn.addEventListener("touchstart", () => {
      this.modalVideo.play()
    })
  }
  stopVideo() {
    this.stopBtn.addEventListener("click", () => {
      this.modalVideo.pause()
      this.modalVideo.currentTime = 0
    })
    this.playBtn.addEventListener("touchstart", () => {
      this.modalVideo.pause()
      this.modalVideo.currentTime = 0
    })
  }
}

export default Video
