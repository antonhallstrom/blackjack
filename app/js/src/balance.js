const playerBalance = 100;
const turn = 0;
let bet = 20;
// Animation on load, so numbers tick up?

$('#balance').text(playerBalance + '.00');


// function place inital bet.
// then raise bet after 3 turns.

// Function that place bet
// function that can split bet into betzone

// Bet 20 as a minimum, when bet max is 50.
function initalBet() {
 turn < 3 ? bet = 20 : bet = 50;
 return placeBet(bet)
}

// Render chip
function renderChip(chipImg, chipClass) {
    const chipMarkup = `
    <div class="${chipClass}" style="background-image: url(${chipImg}">
    </div>
    `;
    $('#playerBetZone').append(chipMarkup);
    console.log(chipMarkup);
}
// Fix so that the value cant be fucked up
function placeBet(value) {
playerBalance = Number(playerBalance) - value;
$('#balance').text(playerBalance + '.00');
}

function getBetChip() {
    let x, y;
    chipData.forEach(function(e) {
        if(e.value === bet) {
        return x = e.img, y = e.class;
    }
    });
 return renderChip(x, y);
};


