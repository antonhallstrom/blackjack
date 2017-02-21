let playerBalance = 100;
let playerBet = 0;
let turn = 1;
let maxBet = 20;
let minBet = 10;
let playerBets = [];
let playerSplitBets = [];
renderBalance(playerBalance);

function renderBalance(playerBalance) {
    $('#balance').text(playerBalance + '.00');
} 

function changeTurn() {
    maxBet = turn++ < 6 ? 20 : 50;
    if(turn <6) {
        return maxBet = 20;
    } else if (turn >= 6) {
         maxBet = 50;
         minBet = 20;
        
    } else {
        maxBet = 100;
        minBet = 50;
    }
}


function renderChip(chipImg, chipClass, split = false) {
    const chipElement = `
        <div 
            class="${chipClass}"
            style="background-image: url(${chipImg}">
        </div>
  `;
    split ? $('#splitBetZone').append(chipElement) : $('#playerBetZone').append(chipElement);

}



function validateBet(bet) {
    return playerBet = (bet <= playerBalance && bet <= maxBet) ? bet : 0;
}



function placeBet(bet, split) {
    if(bet + reduceBets() > maxBet) {
       $('.display-result').text('Your bet is over Max Bet!');
       animationDisplayResult(2000);
    } else {
        renderBalance(playerBalance = playerBalance - bet);
        getBetChip(bet, split);
        getOrplaceBetAnimation(bet);
        displayPlayerBets();
    }
 }

function getBetChip(bet, split) {
    const chip = chipData[`chip_${bet}`];
    split ? playerSplitBets.push(chip.value) : playerBets.push(chip.value);
    return renderChip(chip.img, chip.class, split || '');
};

function getOrplaceBetAnimation(bet) {
    return $('.addSub-text').text(bet + '.00');
}

function getSum(total, num) {
    return total + num;
}

function timesTwo(a) {
 return a * 2;
}

function reduceBets() {
   return playerBets.reduce(getSum,0);
}

function reduceBetsSplit() {
   return playerSplitBets.reduce(getSum,0);
}

 $('.double-button').on('click', () => {
      playerBets.forEach((chip) => {
         const bet = chip;
           renderBalance(playerBalance = playerBalance - bet);
           getBetChip(bet, false);
           getOrplaceBetAnimation(bet);
           displayPlayerBets();
           animationDoubleBet();
      });
     
      $('.double-button').attr("disabled", "disabled").addClass('button-disabled');

 });

function animationDoubleBet() {
 $('.double-animation').addClass('show-double-animation');
    setTimeout(() => {
     $('.double-animation').removeClass('show-double-animation');  
    },1000);
}

function betAnimation() {
    $('.addSub-tooltip').addClass('show-tooltip');
    setTimeout(() => {
    $('.addSub-tooltip').removeClass('show-tooltip');
    }, 700);
};

// Dialog Place bet.

$('#bet-one').on('click', () => {
     const bet = 1;
     placeBet(bet, false);
});

$('#bet-two').on('click', () => {
    const bet = 2;
    placeBet(bet, false);
});

$('#bet-five').on('click', () => {
    const bet = 5;
     placeBet(bet, false);
});

$('#bet-ten').on('click', () => {
    const bet = 10;
      placeBet(bet, false);
});

$('#bet-tweenty').on('click', () => {
    const bet = 20;
     placeBet(bet, false);
});

$('#bet-fifthy').on('click', () => {
    const bet = 50;
      placeBet(bet, false);
});

$('#bet-hundred').on('click', () => {
    const bet = 100;
      placeBet(bet, false);
});

   