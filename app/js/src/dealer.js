// 4. Dealer logic
// Dealer should hand ut card to player one at a time
// So first one card to me then one face down to the Dealer
// Then another to me then a face-up to the dealer.

// we will splice(0, 1) to draw a card.

// How to place a card to the player.

// How to place a card to the dealer face-down.

// This might not be nessecary
const playerHand = [];
// playerHand.push(card); 
// Deals to players hand, now we can keep track of the order of cards. dealt.
// And what cards belong to player.


function dealsToPlayer() {
    // Deals top card to player, !need to check if user needs split.
     const card = deck.splice(0,1)[0];
     
     // Creating a card
     const cardMarkup = `
      <div id="card">
        <figure class="card-front" style="background-image: url(${card.img})">
        </figure>
        <figure class="card-back"></figure>
      </div>
     `;
     $('#cardHolder').append(cardMarkup);
};

function dealsToDealer() {
    // Deals top card to dealer face-down
     const card = deck.splice(0,1)[0];
    // Creating a card
     const cardMarkup = `
      <div id="card">
        <figure class="card-front-dealer">
        </figure>
        <figure class="card-back-dealer" style="background-image: url(${card.img})"></figure>
      </div>
     `;
     $('#dealerCardZone').append(cardMarkup);

};


// const preloadImage = url => 
//     new Promise((resolve, reject) => {
//     const img = new Image().src = url;
//     
//     img.onload = resolve(img);
//     img.onerror = reject;
// })

// Promise.all(cardData.map(card => 
// preloadImage(card.img))).then(res => 
// console.log('All Images Loaded Successfully'));


 const preloadImage = url => new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    setTimeout(() => {
        img.onload = resolve(img);
        img.onerror = reject;
    }, 3000)
     // img.onload = resolve(img);
    // img.onerror = reject;
});

Promise.all(cardData.map(card => preloadImage(card.card))).then(res => {

    $( "#gameWindow" ).remove();

});