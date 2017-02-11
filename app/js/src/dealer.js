// 4. Dealer logic
// Dealer should hand ut card to player one at a time
// So first one card to me then one face down to the Dealer
// Then another to me then a face-up to the dealer.

// we will splice(0, 1) to draw a card.

// How to place a card to the player.

// How to place a card to the dealer face-down.

const playerHand = [];

// Deals to players hand, now we can keep track of the order of cards. dealt.
// And what cards belong to player.
function dealToPlayer() {
  return playerHand.push(deck.splice(0,1)[0]);
}


// background-image: url(../images/cards/9_of_clubs.svg);
// style="background-image: url(../images/cards/${e.card)"
// render card face up can only render depending on the length of players hand
// style="background-image: url(${e.card})"
// <img src="${e.card}" data-src="${e.card}"/>
function renderCardFacedUp() {    
    playerHand.forEach(function(e){
    const card = `
      <div data-key="${e.card}" id="card">
       <figure class="card-front" style="background-image: url(${e.card})">
       </figure>
       <figure class="card-back"></figure>
    </div>
    `;

  $('#cardHolder').append(card);
});
}


function ifHas() {
    var x = document.querySelectorAll("#cardHolder > div")
        x.forEach(function(e) {
        e.hasAttribute('data-key') ? console.log(true) : console.log(false);
    })
}

// filter on the once that has the data-key, and take them out.
