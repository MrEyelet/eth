import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    this.initSlider()
  }

  initSlider() {
    const breakpoint = window.matchMedia("(min-width:769px)")
    let mySwiper
    const breakpointChecker = () => {
      if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true)
        return
      } else if (breakpoint.matches === false) {
        return enableSwiper()
      }
    }
    const enableSwiper = () => {
      mySwiper = new Swiper(".swiper-container", {
        loop: true,
        slidesPerView: 3,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 25
          }
        },
        // centeredSlides: true,
        grabCursor: true,
        pagination: ".swiper-pagination",
        paginationClickable: true
      })
    }

    breakpoint.addEventListener("change", () => {
      breakpointChecker()
    })

    breakpointChecker()
  }
}

export default Slider
