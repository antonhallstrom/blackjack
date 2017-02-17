
function cleanTable() {
        validSplit.reset();
        removeChips();
        returnCards(playerHand);
        returnCards(dealerHand);
        returnCards(playerSplitHand);
        clearHands();
        removeCards();
        clearStats();
        resetSplitButton();
    }

function removeChips() {
    $('#splitBetZone').empty();
    $('#playerBetZone').empty();
}

function removeCards() {
    $('#splitZone').empty();
    $('#cardHolder').empty();
    $('#dealerCardZone').empty();
}

function returnCards(array) {
   array.forEach( (e,index) => {
    return deck.push(e);
   });
} 

function clearHands() {
    playerHand = [];
    dealerHand = [];
    playerSplitHand = [];
}

function clearStats() {
    $('#dealer-stats').text('Dealer Hand: ');
    $('#player-stats').text('Player Hand: ');
    $('#split-stats').text('Player Split: ');
}

function resetSplitButton() {
     $('.split-button').removeAttr("disabled").removeClass('button-disabled');
}