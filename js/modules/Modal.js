import MicroModal from "micromodal" // es6 module

class Modal {
  constructor() {
    // this.modalBtn = document.querySelectorAll(".person__modal-trigger")
    // this.modal = document.querySelector(".person__modal")
    // this.close = document.getElementsByClassName("close")[0]
    // this.openModal()
    this.triggerModal()
  }

  triggerModal() {
    MicroModal.init()
  }

  openModal() {
    // for (let i = 0; i < this.modalBtn.length; i++) {
    //   this.modalBtn[i].addEventListener("click", function () {
    //     this.classList.toggle("active")
    //     var panel = this.nextElementSibling
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none"
    //     } else {
    //       panel.style.display = "block"
    //     }
    //   })
    // }
    // this.close.addEventListener("click", () => {
    //   this.modal.style.display = "none"
    // })
    var modalparent = document.getElementsByClassName("person__modal")

    // Get the button that opens the modal

    var modal_btn_multi = document.getElementsByClassName("person__modal-trigger")

    // Get the <span> element that closes the modal
    var span_close_multi = document.getElementsByClassName("close")

    // When the user clicks the button, open the modal
    function setDataIndex() {
      for (var i = 0; i < modal_btn_multi.length; i++) {
        modal_btn_multi[i].setAttribute("data-index", i)
        modalparent[i].setAttribute("data-index", i)
        span_close_multi[i].setAttribute("data-index", i)
      }
    }

    for (var i = 0; i < modal_btn_multi.length; i++) {
      modal_btn_multi[i].onclick = function () {
        var ElementIndex = this.getAttribute("data-index")
        modalparent[ElementIndex].style.display = "block"
      }

      // When the user clicks on <span> (x), close the modal
      span_close_multi[i].onclick = function () {
        var ElementIndex = this.getAttribute("data-index")
        modalparent[ElementIndex].style.display = "none"
      }
    }

    window.onload = function () {
      setDataIndex()
    }

    window.onclick = function (event) {
      if (event.target === modalparent[event.target.getAttribute("data-index")]) {
        modalparent[event.target.getAttribute("data-index")].style.display = "none"
      }

      // OLD CODE
    }
  }
}

export default Modal
