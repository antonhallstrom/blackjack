

function displayDealerHand() {
    dealerHand.map(function(e){
      if (dealerHand.indexOf(e) !== 0){
        $('#dealer-stats').append(' ' + e.value);
      } else false;
    });
}

function displayTurn() {
    $('#turn').text('Round: ' + turn);
}

function revealAllDealerHand() {
    $('#dealer-stats').text('Dealer Hand: ' + cardStatus(dealerHand));
}

function displayPlayerBets() {
    $('#bet-stats').text('Player Bets: ' + reduceBets());
}

function displayPlayerHand() {
    $('#player-stats').text('Player Hand: ' + cardStatus(playerHand));
}

function displayMaxBet() {
    $('#maxBet-stats').text('Max Bet: $ ' + maxBet);
 }

 function displayMinBet() {
    $('#minBet-stats').text('Min Bet: $ ' + minBet);
 }

 function displayPlayerSplit() {
    $('#split-stats').text('Player Split: ' + cardStatus(playerSplitHand));
 }

function updateForOneCard() {
      $('#split-stats').text('Player Split: ' + playerSplitHand[0].value);
      $('#player-stats').text('Player Hand: ' + playerHand[0].value);
}

function cardStatus(playerCards) {
  const firstCardValue = playerCards[0].value;
  const secondCardValue = playerCards[1].value;
  const totalValue = playerCards.reduce((last, current) => last + current.value, 0);
  const totalValueWithAce = totalValue + (playerCards.some(card => card.value === 1) ? 10 : 0);
  if ( firstCardValue === 10 && secondCardValue === 1 ||
    firstCardValue === 1 && secondCardValue === 10) return 'blackjack';
  if (totalValueWithAce === 21 || totalValue === 21) return totalValueWithAce;
  if (totalValueWithAce < 21 || totalValue < 21) return totalValueWithAce;
  if (totalValueWithAce > 21 || totalValue > 21) return totalValueWithAce;
}

// Recursion
function dealerDraw() {
   const totalValue = cardStatus(dealerHand);
 setTimeout( () => {
   revealAllDealerHand();

  if(totalValue < 17) {
    setTimeout( () => {
      dealsToDealer(open = true);
      revealAllDealerHand();
       dealerDraw();
    }, 1200);
  } else {
    compareHands();
}
  },1000)
 }

function compareHands() {
    const playerValue = cardStatus(playerHand);
    const dealerValue = cardStatus(dealerHand);

    if(dealerValue === 'blackjack') {
        $('.display-result').text('Dealer ' + cardStatus(dealerHand) + '! Dealer Wins!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance);
        setTimeout(setup, 2500);
        console.log('dealer blackjack');
    } else if(dealerValue > 21) {
         $('.display-result').text('Dealer Bust! You win!');
         animationDisplayResult(2500);
         renderBalance(playerBalance = playerBalance + timesTwo(reduceBets()));
         setTimeout(setup, 2500);
         console.log('Dealer Bust');
    } else if(playerValue === dealerValue) {
        $('.display-result').text(cardStatus(playerHand) + '! Tie!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance + reduceBets());
        setTimeout(setup, 2500);
        console.log('Tie');
    } else if(playerValue < dealerValue && dealerValue >= 17 && dealerValue <= 21) {
        $('.display-result').text(cardStatus(dealerHand) + '! Dealer Wins!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance);
        setTimeout(setup, 2500);
        console.log('Less than dealer');
    } else if(playerValue >= 17 && playerValue <= 21 && dealerValue >= 17 && dealerValue <= 21) {
        console.log('Over 17 but Less than 21');
        if(dealerValue > playerValue) {
        $('.display-result').text(cardStatus(dealerHand) + '! Dealer Wins!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance);
        setTimeout(setup, 2500);
        console.log('You lower than dealer');
    } else if(playerValue > dealerValue){
        $('.display-result').text(cardStatus(playerHand) + '! You win!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance + timesTwo(reduceBets()));
        setTimeout(setup, 2500);
        console.log('You closer than dealer');
    } else if(playerValue === dealerValue) {
        $('.display-result').text(cardStatus(playerHand) + '! Tie!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance + reduceBets());
        setTimeout(setup, 2500);
        console.log('Close! Tie');
    } else {
         setTimeout(setup, 2500);
    }
    } else {
        setTimeout(setup, 2500);
    }
}

// For blackjack

function evaluateFirstBlackJack() {
    console.log('called evaultation')
    if(cardStatus(playerHand) === 'blackjack') {
       flipCard();
    if(cardStatus(dealerHand) === 'blackjack') {
        $('.display-result').text(cardStatus(playerHand) + '! Tie!');
        animationDisplayResult(2500);
        renderBalance(playerBalance = playerBalance + reduceBets());
        setTimeout(setup, 2500);
    } else {
        $('.display-result').text(cardStatus(playerHand) + '! You win!');
         animationDisplayResult(2500);
         renderBalance(playerBalance = playerBalance + timesTwo(reduceBets()));
         setTimeout(setup, 2500);
    }
} else {
       $('.display-result').text('Sorry, no blackjack! Keep going?');
       animationDisplayResult(2000);
       enableButtons();
    }
}


function evaluateOnHit() {
    if(cardStatus(playerHand) > 21) {
        disableButtons();
        displayPlayerHand();
        $('.display-result').text(cardStatus(playerHand) + '! You Bust!');
        animationDisplayResult(2500);
        renderBalance(playerBalance - reduceBets());
        setTimeout(setup, 2500);
        
      } else {
          $('.display-result').text('Keep going?');
          animationDisplayResult(2000);
      }
};


function evaluateTwoHands() {
      if(cardStatus(playerHand) > 21 || cardStatus(playerSplitHand) > 21) {
        disableButtons();
        displayPlayerHand();
        $('.display-result').text('You Bust!');
        animationDisplayResult(2500);
        renderBalance(playerBalance - reduceBetsSplit());
        renderBalance(playerBalance - reduceBets());
        setTimeout(setup, 2500);
        
      } else {
          $('.display-result').text('Keep going?');
          animationDisplayResult(2000);
      }
}


function setup() {
    cleanTable();
     enableBetButtons();
    $('.start-window').addClass('show-start-window');
}


        // Make a curry of thats display text.
        // place bet, cant be bet over max bet. 
        // and then have a min bet.

