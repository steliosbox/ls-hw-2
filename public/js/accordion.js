$(document).ready(function(){
    
    console.log('jquery OK'); 
    
    $('.accordion__trigger').on('click', function(event){
        
        event.preventDefault();
        
        var $this = $(this),
            list = $this.closest('.accordion__list'),
            item = $this.closest('.accordion__item'),
            items = list.find('.accordion__item'),
            content = item.find('.accordion__inner-list'),
            otherContent = list.find('.accordion__inner-list')
            duration = 900;
        
        if(!item.hasClass('active')){
            items.removeClass('active');
            item.addClass('active');
            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.removeClass('active');
        }
    });
});