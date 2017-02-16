// function that initiate after user clicks start.
// Ready to play.
// And got some rules avliable to him or her.
$('.start-button').on('click', function() {
    $('.start-window').remove();
    $('.hit-button').removeAttr("disabled");
    $('.split-button').removeAttr("disabled");
    $('.double-button').removeAttr("disabled");
    $('.stay-button').removeAttr("disabled");
    setTimeout(() => {
        $('.addSub-tooltip').addClass('show-tooltip');
        placeBet(maxBet);
        getBetChip(maxBet, false);
        
        setTimeout(() => {
            dealsToPlayer();
        }, 400);

        setTimeout(dealsToDealer(false), 600);

         setTimeout(() => {
            $('.addSub-tooltip').removeClass('show-tooltip');
        }, 700);

        setTimeout(() => {
            dealsToPlayer();
        }, 900);
        
        setTimeout(() => {
            dealsToDealer();
        }, 1100);
     }, 500);
    });

$('.hit-button').on('click', function() {
    
});

// Need to count value in dealer array.
$('.stay-button').on('click', function() {
     flipCard();
     giveToDealer();
});



// Set buttons to disable
$('.hit-button').attr("disabled", "disabled");
$('.split-button').attr("disabled", "disabled");
$('.double-button').attr("disabled", "disabled");
$('.stay-button').attr("disabled", "disabled");
