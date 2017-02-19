// function that initiate after user clicks start.
// Ready to play.
// And got some rules avliable to him or her.
$('.start-button').on('click', startTurn);

 function startTurn() {
    
     
     if(validateBet(maxBet) === 0) {
        $('.display-result').text('Sorry, you dont have enough chips! Max Bet is ' + maxBet);
         animationDisplayResult(3500);
         
         disableButtons();
         setTimeout(() => {
              $('.display-result').text('Thanks Come Again!');
         animationDisplayResult(3500);
         },3800);
    } else {
    $('.start-window').remove();
    disableButtons();
    displayTurn();
    playerBets = [];
    changeTurn();
    setTimeout(() => {
        displayMaxBet();
        placeBet(maxBet);
        getBetChip(maxBet, false);
        
        $('.addSub-tooltip').addClass('show-tooltip');
        
        setTimeout(dealsToPlayer, 1200);
       
        setTimeout(dealsToDealer(false), 1400);

        setTimeout(() => {
            $('.addSub-tooltip').removeClass('show-tooltip');
        }, 700);

        setTimeout(dealsToPlayer, 1600);

        setTimeout(dealsToDealer, 1800);
        
        setTimeout(() => {
            displayDealerHand()
            displayPlayerHand();
        }, 2000);

        setTimeout(() => {
         $('.display-result').text('Dealer is checking your hand for blackjack...');
         animationDisplayResult(1800);
        }, 2200);
        
        setTimeout(evaluateBestHand, 5000);

     }, 1500);
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

