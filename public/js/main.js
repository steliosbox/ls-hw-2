$(':radio').change(function() {   
    $('.rating__result').text( this.value );
});

$(document).ready(function(){
	console.log("done");
});

$('').on('click', function(){

});


$(function(){
    //- $('h1').addClass('dontend');
    
    $('.columnizer').columnize({
        width : 530,
        // height: 413,
        columns: 2,
    });




    $('.view__1').on('click', function(){
        $('.product').removeClass('product__view-2')
        $('.product').removeClass('product__view-3')
        $('.product').addClass('product__view-1');
        $('.view__2').removeClass('view__active-2');
        $('.view__3').removeClass('view__active-3');
        $('.view__1').addClass('view__active-1');
        console.log($('this'));
    });
    $('.view__2').on('click', function(){
        $('.product').removeClass('product__view-1')
        $('.product').removeClass('product__view-3')
        $('.product').addClass('product__view-2');
        $('.view__1').removeClass('view__active-1');
        $('.view__3').removeClass('view__active-3');
        $('.view__2').addClass('view__active-2');
    	console.log($('this'));
    });
    $('.view__3').on('click', function(){
        $('.product').removeClass('product__view-1')
        $('.product').removeClass('product__view-2')
        $('.product').addClass('product__view-3');
        $('.view__1').removeClass('view__active-1');
        $('.view__2').removeClass('view__active-2');
        $('.view__3').addClass('view__active-3');
    	console.log($('this'));
    });  
});


