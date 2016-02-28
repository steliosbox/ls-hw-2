
$(document).ready(function(){

	$('.img__small_item').on('click', function(){
		var $this = $(this),
			$img = $this.find('img'),
			list = $this.parent('.img__small_list'),
			imgBig = list.prev('.img__big');

		imgBig.find('img').attr('src',$img.attr("src")).css({'height':'126px'});
		
		$this.parent();
			console.log(imgBig);
	});

});