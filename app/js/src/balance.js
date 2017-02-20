let playerBalance = 100;
let playerBet = 0;
let turn = 1;
let maxBet = 20;
let playerBets = [];
let playerSplitBets = [];
renderBalance(playerBalance);

function renderBalance(playerBalance) {
    $('#balance').text(playerBalance + '.00');
} 




function changeTurn() {
    maxBet = turn++ < 8 ? 20 : 50;
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

function placeBet(bet) {
    renderBalance(playerBalance = playerBalance - validateBet(bet));
    getOrplaceBetAnimation(bet);
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

 $('.double-button').on('click', () => {
      placeBet(maxBet);
      getBetChip(maxBet, false);
      displayPlayerBets();
      animationDoubleBet();
      $('.double-button').attr("disabled", "disabled").addClass('button-disabled');
 });

function animationDoubleBet() {
 $('.double-animation').addClass('show-double-animation');
    setTimeout(() => {
     $('.double-animation').removeClass('show-double-animation');  
    },1000);
}
 
