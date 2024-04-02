console.log("Reply List Load..........");

$(function(){

var bnoValue = $("#operForm").find("#bno").val();

	var replyUL = $(".chat");
	
	replyList.showList(1, bnoValue, replyUL);
	
});