
define(['jquery','masonry'],function($,masonry){
	$(function(){
		var masonry_ul_li = function(){
			masonry($("#mansionable-list"),"10px");
		};
		masonry_ul_li();
		$(window).resize(masonry_ul_li);
	});
});
