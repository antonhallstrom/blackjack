const cards = document.querySelectorAll('.card-front');
const cardHolder = document.querySelector('#cardHolder');
const splitZone = document.querySelector('#splitZone');
const dealerCardZone = document.querySelector('#dealerCardZone');


// Lay out the cards with a and extra margin from the first.
// Then reverse the array to get it to do splay right to left.
// function run() {
//   var  count = -2;
//   array.reverse();
//  for (var i = 0; i < array.length; i++) {
//     console.log(count--);
//     array[i].style.marginLeft = "" + count + 'em' + "";
//  } 
//  return array.reverse(),
//  cardHolder.style.marginLeft = "" +  array.length + 'em' + "",
//  splitZone.style.marginLeft = "" + -(array.length) + 'em' + "",
//  dealerCardZone.style.marginLeft = "" + (array.length) + 'em' + "";
// }


// Jquery way of updating them



$('#dealerCardZone').on('click','#card', function(e) {
    e.preventDefault();
	
	$( this ).toggleClass('flipped');
});








  
