class ActiveLink {
  constructor() {
    this.nav = document.querySelector(".nav")
    this.links = this.nav.querySelectorAll("a")

    this.toggleActiveLink()
  }

  toggleActiveLink() {
    for (let i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener("click", e => {
        let current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        e.currentTarget.className += " active"
      })
    }
  }
}

export default ActiveLink
