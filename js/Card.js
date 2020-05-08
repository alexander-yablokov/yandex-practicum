// Class: Card
// Description: Card class creates image card

  
class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  // Function to show popup with full-size image
  show = e => {
    if (e.currentTarget === e.target) {
      // convention that image element has 'popup__image' class
      const popupImage = document.querySelector(".popup__image");
      popupImage.src = e.target.style.backgroundImage.slice(5, -2);
      // convention that popup id is "big-size-image"
      App.popup.init("big-size-image");
      App.popup.open();
    }
  };

  // Function to add like to image card
  like = e => {
     if (e.currentTarget === e.target) {
      e.target.classList.toggle("place-card__like-icon_liked");
    } 
  };

  // Function to remove image card from collection
  remove = e => {
    if (e.currentTarget === e.target) {
      e.target.parentNode.parentNode.parentNode.removeChild(this.oneCard);
    }
  };

  // Function to build and return DOM-element for image card
  create = () => {
    // card
    this.oneCard = document.createElement("div");
    this.oneCard.classList.add("place-card");

    // image
    const imgCard = document.createElement("div");
    imgCard.classList.add("place-card__image");
    imgCard.style.backgroundImage = `url(${this.link})`;
    imgCard.addEventListener("click", this.show);

    // delete button
    const btnImgCard = document.createElement("button");
    btnImgCard.classList.add("place-card__delete-icon");
    btnImgCard.addEventListener("click", this.remove);

    // description
    const descCard = document.createElement("div");
    descCard.classList.add("place-card__description");

    // title
    const h3Card = document.createElement("h3");
    h3Card.classList.add("place-card__name");
    h3Card.textContent = this.name;

    // like button
    const btnLike = document.createElement("button");
    btnLike.classList.add("place-card__like-icon");
    btnLike.addEventListener("click", this.like);

    // combine all elements into one
    this.oneCard.appendChild(imgCard);
    imgCard.appendChild(btnImgCard);
    this.oneCard.appendChild(descCard);
    descCard.appendChild(h3Card);
    descCard.appendChild(btnLike);

    // return DOM-element
    return this.oneCard;
  };
}
