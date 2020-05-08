// Class: NewCard
// Description: NewCard class contains methods for addCard form

class NewCard {
  constructor() {
    // Elements
    this.form = document.forms["new"];
    this.nameField = this.form.elements.name;
    this.linkField = this.form.elements.link;
    this.errorName = this.form.querySelector("#error-card-name");
    this.errorLink = this.form.querySelector("#error-card-link");
    this.buttonSubmit = this.form.querySelector(".popup__button");

    // Events

    // on '+' button press
    this.plusButton = document.querySelector(".user-info__button");
    this.plusButton.addEventListener("click", this.show);

    // on form submit
    this.form.addEventListener("submit", this.submit);

    // form fields validation
    this.nameField.addEventListener("input", this.validate);
    this.linkField.addEventListener("input", this.validate);
  }

  // Function to show popup with this form
  show = () => {
    // convention that popup id is 'add-card'
    App.popup.init("add-card");
    App.popup.open();
  };

  // Function to validate form fields
  validate = () => {
    // use functions from Validate static class
    this.errorName.textContent = Validation.validateLength(this.nameField.value,2,30);
    this.errorLink.textContent = Validation.validateURL(this.linkField.value);

    if (this.errorName.textContent || this.errorLink.textContent) {
      this.buttonSubmit.classList.remove("popup__button_enable");
    } else {
      this.buttonSubmit.classList.add("popup__button_enable");
    }
  };

  // Function to submit form
  submit = (e) => {
    e.preventDefault();

    if (!this.buttonSubmit.classList.contains("popup__button_enable")) {
      return;
    }
    // hide popup with form
    App.cardList.addCard(this.nameField.value, this.linkField.value);
    App.popup.close();
    this.reset();
  };

  // Function to clear form fields
  reset = () => {
    this.form.reset();
  };
}
