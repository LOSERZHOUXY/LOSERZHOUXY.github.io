$(document).ready(function() {
	var more_row=$("#more_row");
	var loadmore=$(".loadmore");
	
	loadmore.click(function(){
	   more_row.show();
	   loadmore.hide();
	});
});