//Quando clicco Li con classe .dropdown si dovrebbe attivare il menu a tendina | La classe visible contiene solo display: block; , da sostituire al display: none;
$('.dropdown').click(function() {
    $(this).find('.box-1').toggleClass('visible');
})

$('.dropdown').click(function() {
    $(this).find('.box').toggleClass('visible');
})

//Varie prove con hover

// if ($('.dropdown').hasClass('visible')) {
    
//     $('.dropdown').mouseleave(function() {
//         $('.box-1').removeClass('visible');
//     })
    
//     $('.dropdown').mouseleave(function() {
//         $('.box').removeClass('visible');
//     })

// }

// $('.dropdown').mouseenter(function() {
//     $('.box-1').removeClass('visible');
// })

// $('.dropdown').mouseenter(function() {
//     $('.box').removeClass('visible');
// })