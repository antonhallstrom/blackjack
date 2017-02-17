



function findBestHand(handA, handB) {
    return Math.max(handA, handB);
}

function checkBestHand(handA, handB) {
  return findBestHand(compareHand(handA), compareHand(handB));
}

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

function displayPlayerHand() {
    $('#player-stats').text('Player Hand: ' + cardStatus(playerHand));
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
  if (totalValueWithAce === 21 || totalValue === 21) return '21', totalValueWithAce;
  if (totalValueWithAce < 21 || totalValue < 21) return 'keep going?', totalValueWithAce;
  if (totalValueWithAce > 21 || totalValue > 21) return 'FATTY FATTY', totalValueWithAce;
}

function dealerDraw() {
   const totalValue = cardStatus(dealerHand);
 setTimeout( () => {
   revealAllDealerHand();
  if(totalValue === 'blackjack') return 'blackjack'
  if(totalValue === 21) return '21'
  if(totalValue > 17 && totalValue < 21)  return 'stay!'
  if(totalValue > 21) return 'busted'
  if(totalValue <= 17) {
  setTimeout(dealsToDealer(open = true),revealAllDealerHand(), dealerDraw(), 1200);
  }
  },1000)
 }



function evaluateBestHand() {
    setTimeout(() => {
  if(cardStatus(playerHand) === 'blackjack') {
      flipCard(); 
      dealerDraw();
    if (cardStatus(dealerHand) === 'blackjack') {
        $('.display-result').text(cardStatus(playerHand) + '! Tie!');
        animationDisplayResult(2500);
        renderBalance(playerBalance + reduceBets());
        setTimeout(cleanTable,2000)
        setTimeout(startTurn,3000)
     } else {
         $('.display-result').text(cardStatus(playerHand) + '! You win!');
         animationDisplayResult(2500);
         renderBalance(playerBalance + timesTwo(reduceBets()));
         changeTurn();
         setTimeout(cleanTable,2000)
         setTimeout(startTurn,3000)
     }
  } else {
      $('.display-result').text('Sorry, no blackjack! Keep going?');
       animationDisplayResult(2500);
       enableButtons();
  } 
  },500);
}

 
