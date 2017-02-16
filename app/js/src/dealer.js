// 4. Dealer logic
// Dealer should hand ut card to player one at a time
// So first one card to me then one face down to the Dealer
// Then another to me then a face-up to the dealer.

// we will splice(0, 1) to draw a card.

// How to place a card to the player.

// How to place a card to the dealer face-down.

let playerHand = [];
let playerSplitHand = [];
let dealerHand = [];


const validSplit = {
    
    state: false,
   
    reset() {
       this.set = false;
    }
};

// playerHand.push(card); 
// Deals to players hand, now we can keep track of the order of cards. dealt.
// And what cards belong to player.


function dealsToPlayer(split) {
    // Deals top card to player, !need to check if user needs split.
     const card = deck.splice(0,1)[0];
     split ? playerSplitHand.push(card) : playerHand.push(card);
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

// if user wants to split
// take array if want to change rule.
// if split true, can only by applied once.
function validateSplit(array, maxSplit) {
    if(array[0].value !== array[1].value && maxSplit === false && playerBalance >= maxBet) {
         validSplit.state = true;
          placeBet(maxBet);
           getBetChip(maxBet, true);
            playerSplitHand.push(array.splice(0,1)[0]);
            $('#cardHolder').children(':first-child').appendTo('#splitZone');
    } else false;
 }

// Event listner for button.
$('.split-button').on('click', () => {
    validateSplit(playerHand, validSplit.state);
});



$('.hit-button').on('click', function() {
    ifSplitTrue();
});

function ifSplitTrue() {
    validSplit.state === true ? dealsToPlayer(open = true) + dealsToPlayer(open = false) : false;
}
