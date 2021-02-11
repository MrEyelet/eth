var MenuSpy = require("menuspy")

class ActiveLink {
  constructor() {
    this.nav = document.querySelector(".nav")
    this.links = this.nav.querySelectorAll(".nav__list-el")
    // console.log(MenuSpy)
    this.menuSpy()
    // this.toggleActiveLink()
  }

  menuSpy() {
    let elm = document.querySelector("#nav")
    let ms = new MenuSpy(elm)
  }

  // toggleActiveLink() {
  //   for (let i = 0; i < this.links.length; i++) {
  //     this.links[i].addEventListener("click", e => {
  //       let current = document.getElementsByClassName("active")
  //       current[0].className = current[0].className.replace(" active", "")
  //       e.currentTarget.className += " active"
  //     })
  //   }
  // }
}

export default ActiveLink
