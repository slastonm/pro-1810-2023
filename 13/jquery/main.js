// window.onload = function(){

// }
 	
// jQuery( document ).ready(function() {
//     let listEl = jQuery('ul li');
//     console.log(listEl);
// });

$( document ).ready(function() {
    $( "ul" ).on( "click", function() {
        alert( "Handler for `click` called." );
    } );
     	

    $("#clickme" ).on( "click", function() {
        $( "ul" ).toggle( "slow", function() {
        // Animation complete.
        });
    });

    
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
});