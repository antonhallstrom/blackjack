// Displays Min and Max Bet
   displayMaxBet();
   displayMinBet();
 

$('.start-button').on('click', () => {
    if(reduceBets() < minBet) {
        $('.display-result').text('Bet must be equal or higher than Min Bet!');
         animationDisplayResult(2000);
    } else {
     startTurn();
     disableBetButtons();
    }
  });


$('.start-window').addClass('show-start-window');
 function startTurn() {
     
    $('.start-window').removeClass('show-start-window');
    displayMaxBet();
    displayMinBet();

     if(validateBet(maxBet) === 0) {
        $('.display-result').text('Sorry, you dont have enough chips! Max Bet is ' + maxBet);
         animationDisplayResult(3500);
         disableButtons();
         setTimeout(() => {
         $('.display-result').text('Thanks Come Again!');
         animationDisplayResult(3500);
         },3800);
    } else {
        
        disableButtons();
        displayTurn();
        changeTurn();
        
        displayMaxBet();
        displayMinBet();
        displayPlayerBets();

const runTurn = setTimeout(() => {
        
        dealsToDealer(false);
        dealsToPlayer();
        dealsToDealer();
        dealsToPlayer();
        
        setTimeout(() => {
            displayDealerHand()
            displayPlayerHand();
        }, 2000);

        setTimeout(() => {
         $('.display-result').text('Dealer is checking your hand for blackjack...');
         animationDisplayResult(1200);
        }, 1000);
        
        setTimeout(evaluateFirstBlackJack, 2500);
           setTimeout(() => {
           clearTimeout(runTurn);

         },3000)
      }, 300); 
    }
  
    };

$('.stay-button').on('click', function() {
     flipCard();
     return dealerDraw();
});


function disableButtons() {
    $('.hit-button').attr("disabled", "disabled");
    $('.split-button').attr("disabled", "disabled");
    $('.double-button').attr("disabled", "disabled");
    $('.stay-button').attr("disabled", "disabled");
} disableButtons();


function enableButtons() {
    $('.hit-button').removeAttr("disabled");
    $('.split-button').removeAttr("disabled");
    $('.double-button').removeAttr("disabled");
    $('.stay-button').removeAttr("disabled");
}

function disableBetButtons() {
    $('#bet-two').attr("disabled", "disabled");
    $('#bet-five').attr("disabled", "disabled");
    $('#bet-one').attr("disabled", "disabled");
    $('#bet-ten').attr("disabled", "disabled");
    $('#bet-tweenty').attr("disabled", "disabled");
    $('#bet-fifthy').attr("disabled", "disabled");
    $('#bet-hundred').attr("disabled", "disabled");
}

function enableBetButtons() {
    $('#bet-two').removeAttr("disabled");
    $('#bet-five').removeAttr("disabled");
    $('#bet-one').removeAttr("disabled");
    $('#bet-ten').removeAttr("disabled");
    $('#bet-tweenty').removeAttr("disabled");
    $('#bet-fifthy').removeAttr("disabled");
    $('#bet-hundred').removeAttr("disabled");
}

