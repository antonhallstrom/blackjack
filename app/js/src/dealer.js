// 4. Dealer logic
// Dealer should hand ut card to player one at a time
// So first one card to me then one face down to the Dealer
// Then another to me then a face-up to the dealer.

// we will splice(0, 1) to draw a card.

// How to place a card to the player.

// How to place a card to the dealer face-down.

// This might not be nessecary
const playerHand = [];
const dealerHand = [];
// playerHand.push(card); 
// Deals to players hand, now we can keep track of the order of cards. dealt.
// And what cards belong to player.


function dealsToPlayer(split = false) {
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

     split ? $('#splitZone').append(cardMarkup) : $('#cardHolder').append(cardMarkup);
};


function dealsToDealer(open = true) {
  // Deals top card to dealer face-down
  const card = deck.splice(0, 1)[0];
  dealerHand.push(card);
  // Creating a card
  const cardMarkup = `
      <div id="card" class="card-dealer">
        <figure class="card-front-dealer ${open ? 'open' : 'closed'}">
        </figure>
        <figure class="card-back-dealer ${open ? 'closed' : 'open'}" style="background-image: url(${card.img})"></figure>
      </div>
     `;
  $('#dealerCardZone').append(cardMarkup);

}

// Should only target the first card.
function flipCard() {    
  $('#card').addClass('flipped');
};






