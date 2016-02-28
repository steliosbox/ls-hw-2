$(function() {
    $( "#price1" ).keyup(function() {
        console.log("change");
        var price = $(this).val();
        $( ".slider" ).slider( "values", 0, price);
    });
    
    $( "#price2" ).keyup(function() {
        console.log("change");
        var price = $(this).val();
        $( ".slider" ).slider( "values", 1, price);
    });

    $( ".slider" ).slider({
      
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
      
        slide: function( event, ui ) {
            $( "#price1" ).val( ui.values[ 0 ] );
            $( "#price2" ).val(ui.values[ 1 ] );
        }

    });

    $( "#price1" ).val( $( ".slider" ).slider( "values", 0 ) );

    $( "#price2" ).val( $( ".slider" ).slider( "values", 1 ) );

});


