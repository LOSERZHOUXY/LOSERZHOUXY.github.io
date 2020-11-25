$(document).ready(function() {
	var case_nav_one=$(".project .case_nav .case_nav_one");
	var case_nav_two=$(".project .case_nav .case_nav_two");
	var list = $(".project .wrapper ul>li");
	var switch_left=$(".project .btn_box .btn_group .switch_left");
	var switch_right=$(".project .btn_box .btn_group .switch_right");
	var media_case_one=$(".media  .media_case_one");
	var media_case_two=$(".media  .media_case_two");
	var switch_left=$(".switch_left");
	var switch_right=$(".switch_right");
	var case_one=$(".case_one");
	var case_two=$(".case_two");
	var qh=$(".switch_point .active");
	
	case_two.hide();
	
	
	case_nav_one.hover(function() {
		$(this).addClass("active");
		case_nav_two.removeClass("active");
		case_one.show();
		case_two.hide();
	});
	
	/* switch_left.click(function(){
		project_one.css("transform","translate3d(0px, 0px, 0px)");
		project_one.css(" transition-duration","2ms");
		console.log($(this));
		qh.addClass("active").siblings().removeClass("active");
	})
	
	switch_right.click(function(){
		project_one.css("transform","translate3d(-100%, 0px, 0px)");
		project_one.css(" transition-duration","2ms");
		qh.removeClass("active").siblings().addClass("active");
	}) */
	
	case_nav_two.hover(function() {
		$(this).addClass("active");
		case_nav_one.removeClass("active");
		case_two.show();
		case_one.hide();
	});
	
	
	list.hover(function() {
		$(this).addClass("on").siblings().removeClass("on");
		$(this).removeClass("hidden-xs").siblings().addClass("hidden-xs");
	});
	
	
	
	media_case_one.hover(function() {
		$(this).addClass("active");
		media_case_two.removeClass("active");
		$(".media .content_one").show();
		$(".media .content_two").hide();
	});
	
	media_case_two.hover(function() {
		$(this).addClass("active");
		media_case_one.removeClass("active");
		$(".media .content_two").show();
		$(".media .content_one").hide();
	});
});

	