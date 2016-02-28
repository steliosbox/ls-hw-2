$(function() {
    $('.link__brend').on('click', function(e) {
        e.preventDefault();
        $('.brend[type=checkbox]').attr('checked', false);
    });

    $('.link__os').on('click', function(e) {
        e.preventDefault();
        $('.os[type=checkbox]').attr('checked', false);
    });

});