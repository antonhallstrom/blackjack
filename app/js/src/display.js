

function animationDisplayResult(time) {
    $('.display-result').addClass('show-display-result');
    setTimeout( ()=> {
        $('.display-result').removeClass('show-display-result');
    }, time);
}


