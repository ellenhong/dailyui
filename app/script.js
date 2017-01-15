$(document).ready(function() {
	sizeImage();

  // Resize image grid, responsive to browser size
	$(window).resize(function() {
		sizeImage();
	});

	function sizeImage() {
		var imgwidth = $(".square-grid__cell--7").width();
		$(".grid-img").css("width", imgwidth);
		$(".grid-img").css("height", imgwidth);
	};

  // Number/prompt pop-up on hover
	$('.square-grid__content').hover(function() {
			$(this).find('.overlay').css('opacity', '0');
			$(this).find('.info').css('opacity', '1');
		},
		function() {
			$(this).find('.overlay').css('opacity', '0.25');
			$(this).find('.info').css('opacity', '0');
		}
	);

  var prev;
  var next;

  // Open detailed view on click
	$('.square-grid__content').click(function() {
		// var imgNum = $(this).find('.number').attr('id');
		// var imgPath = 'url("app/img/' + imgNum + '.png")';

	 //    prev = parseInt(imgNum) - 1;
	 //    prev = ("00" + prev.toString()).slice(-3);
	 //    next = parseInt(imgNum) + 1;
	 //    next = ("00" + next.toString()).slice(-3);
	 //    console.log(next);

		// // $("#full-img").css('background-image', imgPath);
		$(".full-img").css('opacity', '1');
		$(".full-img").css('z-index', '200');

	    $(".full-text").css('opacity', '1');
	    $(".full-text").css('z-index', '200');

		$(".full-overlay").css('opacity', '0.5');
		$(".full-overlay").css('z-index', '200');
	});

  // Close detailed view
	$('.close').click(function() {
	$(".full-img").css('opacity', '0');
	$(".full-img").css('z-index', '-100');

    $(".full-text").css('opacity', '0');
    $(".full-text").css('z-index', '-100');

	$(".full-overlay").css('opacity', '0');
	$(".full-overlay").css('z-index', '-100');
	});



  // Sort by latest or chronological
	$('.category-button').click( function() {
		if ($(this).siblings().hasClass('selected')) {
			$(this).siblings().removeClass('selected');
		}
		$(this).addClass('selected');
	});
});