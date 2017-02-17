

const cardData = [
{
    img: 'images/cards/10_of_clubs.svg',
    value: 10
}, {
    img: 'images/cards/10_of_diamonds.svg',
    value: 10
}, {
    img: 'images/cards/10_of_hearts.svg',
    value: 10
}, {
    img: 'images/cards/10_of_spades.svg',
    value: 10
}, {
    img: 'images/cards/2_of_clubs.svg',
    value: 2
}, {
    img: 'images/cards/2_of_diamonds.svg',
    value: 2
}, {
    img: 'images/cards/2_of_hearts.svg',
    value: 2
}, {
    img: 'images/cards/2_of_spades.svg',
    value: 2
}, {
    img: 'images/cards/3_of_clubs.svg',
    value: 3
}, {
    img: 'images/cards/3_of_diamonds.svg',
    value: 3
}, {
    img: 'images/cards/3_of_hearts.svg',
    value: 3
}, {
    img: 'images/cards/3_of_spades.svg',
    value: 3
}, {
    img: 'images/cards/4_of_clubs.svg',
    value: 4
}, {
    img: 'images/cards/4_of_diamonds.svg',
    value: 4
}, {
    img: 'images/cards/4_of_hearts.svg',
    value: 4
}, {
    img: 'images/cards/4_of_spades.svg',
    value: 4
}, {
    img: 'images/cards/5_of_clubs.svg',
    value: 5
}, {
    img: 'images/cards/5_of_diamonds.svg',
    value: 5
}, {
    img: 'images/cards/5_of_hearts.svg',
    value: 5
}, {
    img: 'images/cards/5_of_spades.svg',
    value: 5
}, {
    img: 'images/cards/6_of_clubs.svg',
    value: 6
}, {
    img: 'images/cards/6_of_diamonds.svg',
    value: 6
}, {
    img: 'images/cards/6_of_hearts.svg',
    value: 6
}, {
    img: 'images/cards/6_of_spades.svg',
    value: 6
}, {
    img: 'images/cards/7_of_clubs.svg',
    value: 7
}, {
    img: 'images/cards/7_of_diamonds.svg',
    value: 7
}, {
    img: 'images/cards/7_of_hearts.svg',
    value: 7
}, {
    img: 'images/cards/7_of_spades.svg',
    value: 7
}, {
    img: 'images/cards/8_of_clubs.svg',
    value: 8
}, {
    img: 'images/cards/8_of_diamonds.svg',
    value: 8
}, {
    img: 'images/cards/8_of_hearts.svg',
    value: 8
}, {
    img: 'images/cards/8_of_spades.svg',
    value: 8
}, {
    img: 'images/cards/9_of_clubs.svg',
    value: 9
}, {
    img: 'images/cards/9_of_diamonds.svg',
    value: 9
}, {
    img: 'images/cards/9_of_hearts.svg',
    value: 9
}, {
    img: 'images/cards/9_of_spades.svg',
    value: 9
}, {
    img: 'images/cards/ace_of_clubs.svg',
    value: 1
    
}, {
  img: 'images/cards/ace_of_diamonds.svg',
    value: 1
    
}, {
    img: 'images/cards/ace_of_hearts.svg',
    value: 1
    
}, {
    img: 'images/cards/ace_of_spades.svg',
    value: 1
    
}, {
    img: 'images/cards/jack_of_clubs2.svg',
    value: 10
}, {
    img: 'images/cards/jack_of_diamonds2.svg',
    value: 10
}, {
    img: 'images/cards/jack_of_hearts2.svg',
    value: 10
}, {
    img: 'images/cards/jack_of_spades2.svg',
    value: 10
}, {
    img: 'images/cards/king_of_clubs2.svg',
    value: 10
}, {
    img: 'images/cards/king_of_diamonds2.svg',
    value: 10
}, {
    img: 'images/cards/king_of_hearts2.svg',
    value: 10
}, {
    img: 'images/cards/king_of_spades2.svg',
    value: 10
}, {
    img: 'images/cards/queen_of_clubs2.svg',
    value: 10
}, {
    img: 'images/cards/queen_of_diamonds2.svg',
    value: 10
}, {
    img: 'images/cards/queen_of_hearts2.svg',
    value: 10
}, {
    img: 'images/cards/queen_of_spades2.svg',
    value: 10
}];

const testCardData = [
{
  img: 'images/cards/ace_of_diamonds.svg',
    value: 1
    
}, {
    img: 'images/cards/queen_of_spades2.svg',
    value: 1
}, {
  img: 'images/cards/ace_of_diamonds.svg',
    value: 10
    
} , {
  img: 'images/cards/ace_of_diamonds.svg',
    value: 1
    
},  {
  img: 'images/cards/ace_of_diamonds.svg',
    value: 1
    
}

];


 const preloadImage = url => new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    setTimeout(() => {
        img.onload = resolve(img);
        img.onerror = reject;
    }, 100)
});

Promise.all(cardData.map(card => preloadImage(card.img))).then(res => {

    $( "#gameWindow" ).remove();

});







// Work in the console for now. then append results in dom.

// 1. Build Array of card Object, with image names and values.

// 2. We want to return a new Array, shuffled deck.
// Wich can either be, that i take out a random card, or I will
// assemble the order of the deck randomly. 

// 3. Draw card from top of the deck.

// 4. Dealer logic
// Dealer should hand ut card to player one at a time
// So first one card to me then one face down to the Dealer
// Then another to me then a face-up to the dealer.
