const cards = document.querySelectorAll('.card-front');
const cardHolder = document.querySelector('#cardHolder');
const splitZone = document.querySelector('#splitZone');
const dealerCardZone = document.querySelector('#dealerCardZone');
const card = document.querySelectorAll('#card');
const array = [];
card.forEach(function(e){
    return array.push(e);
});

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
// $('#card').on('click', function(e) {
// 	e.preventDefault();
	
// 	$('#card').toggleClass('flipped');
// });


card.forEach(function(e){
 e.addEventListener('click',function() {
 this.classList.toggle("flipped");
 });
})
  
