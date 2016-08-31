// JavaScript Document
$(function(){
	$('.menu').click(function(){
			 $(this).children('a').toggleClass('arrowChange').parent().next('.detail').slideToggle(100);
			})
})