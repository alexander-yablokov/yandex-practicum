// Class: Popup
// Description: The Popup class displays popup boxes

class Popup {
  // Function to get popup with specified ID
  init(popupId) {
    this.popupBox = document.querySelector(`#${popupId}`);
    const crossButton = this.popupBox.querySelector(".popup__close");
    crossButton.addEventListener("click", this.close);
  }

  // Function to show popup
  open = () => {
    this.popupBox.classList.add("popup_is-opened");
    this.popupBox.addEventListener("click", this.onClick);
    document.addEventListener("keydown", this.onKeydown);
  };

  // Function to hide popup
  close = () => {
    this.popupBox.removeEventListener("click", this.onClick);
    document.removeEventListener("keydown", this.onKeydown);
    this.popupBox.classList.remove("popup_is-opened");
  };

  // Function to hide popub on click on the popup backdrop
  onClick = (e) => {
    if (e.target === this.popupBox) {
      this.close();
    }
    e.stopPropagation();
  };

  // Function to hide popub on ESC press
  onKeydown = (e) => {
    if (e.keyCode === 27) {
      this.close();
    }
    e.stopPropagation();
  };
}
