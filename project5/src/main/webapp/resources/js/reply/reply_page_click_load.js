console.log("Reply Page Num Click ");

$(function() {
	
	var pageUI = $(".panel-footer");
	
	pageUI.on("click", "li a", function(e) {
		
		e.preventDefault();
		console.log("page num click");
		
		var pageNum = $(this).attr("href");
		
		console.log("targetPageNum: " + pageNum);
		
		var bnoValue = $("#operForm").find("#bno").val();
		var replyUL = $(".chat");
		
		replyList.showList(pageNum, bnoValue, replyUL, pageUI);
	});
});






























