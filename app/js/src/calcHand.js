


function getSum(acc, cur) {
    return acc.value + cur.value;
}

function compareHand(arr) {
    return arr.reduce(getSum);
}


function filterAce(arr) {
    const sum = arr;
    if(arr.some((e) => e === 12)) {
        return (arr.reduce(getSum) - 11 <= 21);
    }
    return true;
}


function findBestHand(handA, handB) {
    return Math.max(handA, handB);
}

function checkBestHand(handA, handB) {
  return findBestHand(compareHand(handA), compareHand(handB));
}


function cardStatus(playerCards) {
  const firstCardValue = playerCards[0].value;
  const secondCardValue = playerCards[1].value;
  const totalValue = playerCards.reduce((last, current) => last + current.value, 0);
  const totalValueWithAce = totalValue + (playerCards.some(card => card.value === 1) ? 10 : 0);
  const count = playerCards.reduce(function(acc, cur) {
    return acc + (cur.value === 11);
  }, 0);
  if (firstCardValue === 10 && secondCardValue === 1 ||
      firstCardValue === 1 && secondCardValue === 10) return 'blackjack';
  if (totalValueWithAce === 21 || totalValue === 21) return '21';
  if (totalValueWithAce < 21 || totalValue < 21) return 'keep going?', totalValue;
  if (totalValueWithAce > 21 || totalValue > 21) {
     if((totalValueWithAce - (count * 10) + validateSoftHand(count, totalValueWithAce)) < 21) {
        return console.log(`keep soft hand of ${totalValueWithAce - (count * 10) + validateSoftHand(count, totalValueWithAce)}`);
    }  else return console.log("bust");
  } else return console.log("bust");
}

function validateSoftHand(count,totalValueWithAce) {
    console.log(totalValueWithAce);
    if(count === 4 || count === 3 || count === 2 || count === 1) {
        if((totalValueWithAce - (count * 10)) < 21) {
            return  0;
        } return 10;
    } 
}



function giveToDealer() {
    while (cardStatus(dealerHand) < 17) {
          dealsToDealer(open = true);
    }
    return console.log(cardStatus(dealerHand));
}

// compare playerHand, with the card status.
// if this cardStatus winner or lose.
// Also to concider ace ace 10, 3 11, 14. check for each -10, if under < 21., while loop.
// check for win, if hand ace. count, up < 21. thats its total value.

// dealsToDealer(open = true);


// recursion
// function giveToDealer() {
//     if (cardStatus(dealerHand) < 17) {
//          dealsToDealer(open = true);
//          return  giveToDealer();
//     } else console.log(cardStatus(dealerHand));
// };


