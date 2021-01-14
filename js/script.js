//Quando clicco Li con classe .dropdown si dovrebbe attivare il menu a tendina | La classe visible contiene solo display: block; , da sostituire al display: none;
$('.dropdown').click(function() {
    $(this).find('.box-1').toggleClass('visible');
})

$('.dropdown').click(function() {
    $(this).find('.box').toggleClass('visible');
})

