import sal from "sal.js"

class InView {
  constructor() {
    this.appear()
  }

  appear() {
    sal({
      once: true
    })
  }
}

export default InView
