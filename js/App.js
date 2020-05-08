// Class: App
// Description: App is static class to initialize application variables
//              and use the objects such as popup and cardList 
//              throughout the application
class App {
  static init() {
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');

    const cards = document.querySelector(".places-list");
    const initialCards = [
      {
        name: "Архыз",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
      },
      {
        name: "Челябинская область",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
      },
      {
        name: "Иваново",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
      },
      {
        name: "Камчатка",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
      },
      {
        name: "Холмогорский район",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
      },
      {
        name: "Байкал",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      },
      {
        name: "Нургуш",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg",
      },
      {
        name: "Тулиновка",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg",
      },
      {
        name: "Остров Желтухина",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg",
      },
      {
        name: "Владивосток",
        link:
          "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg",
      },
    ];

    this.popup = new Popup();

    this.cardList = new CardList(cards, initialCards); 
    this.cardList.render();

    this.addCardForm = new NewCard();
    this.editUserProfileForm = new UserProfile();
  }
}


App.init();
