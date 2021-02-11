var MenuSpy = require("menuspy")

class ActiveLink {
  constructor() {
    this.menuSpy()
  }

  menuSpy() {
    let elm = document.querySelector("#nav")
    let ms = new MenuSpy(elm)
  }
}

export default ActiveLink
