let playerBalance = 100;
let playerBet = 0;
let turn = 0;
let maxBet = 20;
let playerBets = [];
let playerSplitBets = [];
renderBalance(playerBalance);

function renderBalance(playerBalance) {
    $('#balance').text(playerBalance + '.00');
}

function changeTurn() {
    maxBet = turn++ < 3 ? 20 : 50;
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
    renderBalance(playerBalance = playerBalance - validateBet(bet)),
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

function payToPlayer() {
    
}

// BlackJack
function paysThreeToTwo() {
    
}

// Insurance
function paysTwoToOne() {
    
}


// SPLITTING 
// Has to be equal to my amout.

// DOUBLING
// If your first 2 cards = a 9, 10 or 11. you may
// doubling down, with a = or > amount.
// if win will get paid for 2 and lose lose 2
// if doubling down or 12 or higher, are either wasted or cheating.



// HITTING
// you are aloud to hit until you get 18-21 or until bust.
// you can hit if you 1-17 seventeen

// But if I will be paid in chips, say like 40.
// How would i render that logic out.


// const playerBalance = 100;
// const betsInPlayerZone = [];
// const turn = 0;
// let bet = 20;
// // Animation on load, so numbers tick up?

// $('#balance').text(playerBalance + '.00');


// // function place inital bet.
// // then raise bet after 3 turns.

// // Function that place bet
// // function that can split bet into betzone

// // Bet 20 as a minimum, when 
// function initalBet() {
//  turn < 3 ? bet = 20 : bet = 50;
// //  return placeBet(bet)
// }

// function initalBet() {
//  return bet = turn < 3 ? 20 : 50;
//  //return placeBet(bet)
// }

// // Render chip
// function renderChip(chipImg, chipClass) {
//     const chipMarkup = `
//     <div class="${chipClass}" style="background-image: url(${chipImg}">
//     </div>
//     `;
//     $('#playerBetZone').append(chipMarkup);
//     console.log(chipMarkup);
// }
// // Fix so that the value cant be fucked up
// function placeBet(value) {
// playerBalance = Number(playerBalance) - value;
// $('#balance').text(playerBalance + '.00');
// }

// function getBetChip() {
//     let x, y;
//     chipData.forEach(function(e) {
//         if(e.value === bet) {
//         return x = e.img, y = e.class, betsInPlayerZone.push(e.value);
//     }
//     });
//  return renderChip(x, y);
// };