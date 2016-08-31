// JavaScript Document
$(function(){
	
	 //企业动态广告轮播
	 var qydtImgLength= $('.ad_qydt img').length;
	 var timer,index;
	 console.log(qydtImgLength);
	 $('.order a').mouseover(function(){
		  index=$(this).index();
		 $(this).addClass('orderChange').siblings('a').removeClass('orderChange');
		 $('.ad_qydt img').eq(index).show().siblings('img').hide();
	  })
	  $('.order a:eq(0)').mouseover();
	  timer=setInterval(function(){
		 var index2=(index+1)%qydtImgLength;
		   $('.order a').eq(index2).mouseover();
		  },4000)
	//电话回拨
		$('.zixun span').click(function(){
			 var index=$(this).index();
			 $(this).addClass('zixunActive').siblings().removeClass('zixunActive');
			 $('.ask .content').eq(index).show().siblings('.content').hide();
		})
		 $('.zixun span:eq(0)').click();
	
})