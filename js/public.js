// JavaScript Document
$(function(){
	//语言
	
	$('.laguageToggle a').click(function(e){
		console.log("0");
		e.stopPropagation();
		$('.otherLanguage').toggle();
		$('.otherLanguage a').click(function(){
			var temp=$(this).clone();
			$('.laguageToggle a').replaceWith(temp);
		})
	  })
	$('body').click(function(){
		var ol=$('.otherLanguage');
		if(ol.is(':visible')){
			ol.hide();
			}
		})
	//导航部分
	$('.menuFirst ul li').hover(function(){
		var index=$(this).index();
		console.log(index);
		$(this).css({'background-color':'#541B1B'}).siblings()
		.css({'background-color':'#79282e'})
		$('.box_nav2 ul').eq(index).css({'background-color':'#541B1B'}).find('a')
		.css('color','#fff').end().siblings().css({'background-color':''}).find('a')
		.css('color','black')
	})
	$('.menuFirst ul li').mouseout(function () {
        $(this).css('background-color', '')
	})
	$('.box_nav2 ul').hover(function(){
		var index=$(this).index();
		$('.menuFirst ul li').eq(index).mouseover()
		},function(){
			$('.menuFirst ul li').css('background-color', '')
			})
	//监管资金安全栏目
	$('#jghz a').click(function(){
		 var index=$(this).index();
		 $(this).css({'background-color':'#79282e','color':'#fff'}).siblings().css({'background-color':'#fff','color':'#5f2024'})	
		 $('.safety .content').eq(index).show().siblings('.content').hide();
	  })
	 $('#jghz a:eq(0)').click();	
	 
	 //左边菜单栏
	 $('.level2Menu li').click(function(){
		 	var index=$(this).index();
				$(this).addClass('activeMenu').children('a').addClass('activeAlink')
			.end().siblings('li').removeClass('activeMenu').children('a').removeClass('activeAlink');
			$('.contentRightBox').eq(index).show().siblings('.contentRightBox').hide();
				})
	  
	  //我的cgm菜单
	  $('.myNav').find('li').click(function(){
		  $(this).children('a').addClass('myNavActive').end().siblings().children('a')
		  .removeClass('myNavActive')
		  })
		  
	//微型和标准账户切换
	
		$('.typeAccount span').click(function(){
			var index=$(this).index();
			$(this).addClass('typeAccountActive').children('i').show().end().siblings()
		.removeClass('typeAccountActive').children('i').hide(); 
			$(this).parent('.typeAccount').next('.dianchaBox').children().eq(index).show().siblings('.diancha').hide();
			})
		$('.typeAccount').find('span:eq(0)').click(); 
	//客服MM
	var Img,urlImg,lastUrl;
	$('.serviceMM a').hover(function(){	
		findObj($(this));
		console.log(lastUrl);
		  Img.attr('src','images/rightFixed01'+lastUrl);
		},function(){
			findObj($(this));
			Img.attr('src','images/rightFixed02'+lastUrl);
			})
	function findObj(obj){
		Img=obj.find('img');
		urlImg=Img.attr('src');
		lastUrl=urlImg.substring(urlImg.length-7,urlImg.length);
		}
	//返回顶部
		var goTop=$('#goTop');//返回顶部图标
		isShow();
		goTop.click(function(){ 
			$('body,html').animate({scrollTop:0},400)
			})
		 $(window).scroll(function(){
			isShow();
			})
		function isShow(){
			var h=$(document).scrollTop();
			  if(h>300){
				goTop.show(); 
				 }
				else{
			   goTop.hide();
				}
			}
})