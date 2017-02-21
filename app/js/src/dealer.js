let playerHand = [];
let playerSplitHand = [];
let dealerHand = [];


const validSplit = {
    
    state: false,
   
    reset() {
       this.set = false;
    }
};


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
    if(array[0].value === array[1].value && maxSplit === false && playerBalance >= maxBet) {
         validSplit.state = true;
          $('.double-button').attr("disabled", "disabled").addClass('button-disabled');
         playerBets.forEach((chip) => {
         const bet = chip;
           renderBalance(playerBalance = playerBalance - bet);
           getBetChip(bet, true);
           getOrplaceBetAnimation(bet);
           displayPlayerBets();
        });
           playerSplitHand = playerHand.slice(0, 1);
            playerHand.splice(0,1);
            $('#cardHolder').children(':first-child').appendTo('#splitZone');
            $('.split-button').attr("disabled", "disabled").addClass('button-disabled');
           

            setTimeout(updateForOneCard, 300);
    } else false;
   
 }

$('.split-button').on('click', () => {
    validateSplit(playerHand, validSplit.state);
    
});


$('.hit-button').on('click', function() {

    if(validSplit.state === false) {
        $('.split-button').attr("disabled", "disabled").addClass('button-disabled')
        dealsToPlayer(open = false);
        displayPlayerHand();
        evaluateOnHit();
    } else return ifSplitTrue();
});

function ifSplitTrue() {
    validSplit.state === true ? dealsToPlayer(open = true) + dealsToPlayer(open = false): false;
     setTimeout(displayPlayerHand(),displayPlayerSplit(), 1000); 
     evaluateTwoHands();
}

