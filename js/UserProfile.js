// Class: UserProfile
// Description: UserProfile class contains methods for editUserProfile form

class UserProfile {
  constructor() {

    // Elements
    this.form = document.forms["profile"];
    this.fieldName = this.form.elements.name;
    this.fieldJob = this.form.elements.job;
    this.errorName = this.form.querySelector("#error-profile-name");
    this.errorJob = this.form.querySelector("#error-profile-job");
    this.buttonSubmit = this.form.querySelector(".popup__button");

    // Events
    
    // on 'Edit' button press
    this.buttonEdit = document.querySelector(".user-info__edit");
    this.buttonEdit.addEventListener("click", this.show);

    // on form submit
    this.form.addEventListener("submit", this.submit);

    // form fields validation
    this.fieldName.addEventListener("input", this.validate);
    this.fieldJob.addEventListener("input", this.validate);
  }

  // Function to show popup with this form
  show = () => {
    // convention that popup id is 'profile'
    App.popup.init("profile");
    // get values from external elements
    this.fieldName.value = App.userInfoName.textContent;
    this.fieldJob.value = App.userInfoJob.textContent;
    App.popup.open();
  };

  // Function to validate form fields
  validate = () => {
    this.errorName.textContent = Validation.validateLength(this.fieldName.value,2,30);
    this.errorJob.textContent = Validation.validateLength(this.fieldJob.value,2,30);

    if (this.errorName.textContent || this.errorJob.textContent) {
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
    // set values in external elements
    App.userInfoName.textContent = this.fieldName.value;
    App.userInfoJob.textContent = this.fieldJob.value;
    App.popup.close();
  };
}
