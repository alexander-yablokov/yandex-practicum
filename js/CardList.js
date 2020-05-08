// Class: CardList
// Description: CardList class renders a collection of image cards

class CardList {
  constructor(container, initialCards) {
    this.container = container;
    this.cards = initialCards;
  }

  // Functions to add new image card to collection
  addCard = ( name, link ) => {
    const oneCard = new Card(name, link);
    this.container.appendChild(oneCard.create());
  };

  // Function to render the initial array of cards
  render = () => {
    this.cards.forEach(({name, link}) => {
      const oneCard = new Card(name, link);
      this.container.appendChild(oneCard.create());
    });
  };
}
