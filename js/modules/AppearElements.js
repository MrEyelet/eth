import { gsap, TimelineMax, Power1, Power4 } from "gsap"
gsap.registerPlugin()

class AppearElements {
  constructor() {
    this.body = document.querySelector("body")
    this.preloader = document.querySelector(".preloader")
    this.tlShowElements = new TimelineMax({})

    this.events()
  }

  events() {
    document.addEventListener("DOMContentLoaded", () => {
      window.onload = () => {
        window.requestAnimationFrame(() => {
          window.scrollTo(0, 0)
          this.showElements()
        })
      }
    })
  }

  showElements() {
    this.tlShowElements.from(".preloader__cover", { duration: 1.5, x: "200%", ease: Power1.easeOut })
    this.tlShowElements.to(".preloader__outer-circle", { duration: 0.5, opacity: 0, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.to(".preloader", { duration: 1.5, x: "-100%", ease: Power4.easeOut }, "=-1")
    this.tlShowElements.from(".shape", { duration: 1.5, rotate: "-25deg", transformOrigin: "top left", stagger: 0.15, ease: Power4.easeOut }, "=-1.4")
    this.tlShowElements.from(".hero__intro h1", { duration: 1, scale: 1.1, opacity: 0, ease: Power1.easeOut }, "=-1.4")
    this.tlShowElements.from(".hero__img-overlay", { duration: 1, scaleX: 0, transformOrigin: "left", ease: Power4.easeOut }, "=-1.2")
    this.tlShowElements.to(".hero__img img", { duration: 0, opacity: 1, ease: Power4.easeOut })
    this.tlShowElements.to(".hero__img-overlay", { duration: 1, scaleX: 0, transformOrigin: "right", ease: Power4.easeOut })
    this.tlShowElements.to(".subscribe__form-group", { duration: 1, width: "100%", opacity: 1, ease: Power4.easeOut }, "=-1.1")
    this.tlShowElements.from(".subscribe__title", { duration: 1.5, opacity: 0, ease: Power4.easeOut }, "=-1.1")
    this.tlShowElements.from(".header", { duration: 0.35, y: "-100%", ease: Power1.easeOut }, "=-2")
    setTimeout(() => {
      this.body.classList.remove("scroll-disabled")
    }, 600)
    setTimeout(() => {
      this.preloader.remove()
    }, 2500)
  }
}

export default AppearElements
