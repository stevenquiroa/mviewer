/**
 * Manga Viewer
 * 
 *
 * Copyright (c) 2014 Steven Quiroa
 * 
*/
jQuery(function($){
	$(window).on('load', function() {
		var n = 1, content = $('#manga-container');
		$('#new').on('click', function(event) {
			event.preventDefault();
			Pace.restart();
			content.append('<li><img class="image-manga" src="images/claymore/'+n+'.jpg"></li>');
			n++;			
		});
	});
});