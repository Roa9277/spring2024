console.log("Reply New Button -> Modal Window Load..........");

$(function(){
	
	var modal = $(".modal");
		
	var modalInputReply = modal.find("input[name='reply']");
	var modalInputReplyer = modal.find("input[name='replyer']");
	var modalInputReplyDate = modal.find("input[name='replyDate']");
	
	var modalModBtn = $("#modalModBtn");
	var modalRemoveBtn = $("#modalRemoveBtn");
	var modalRegisterBtn = $("#modalRegisterBtn");
	
	// 댓글 등록 버튼 (모달창 띄우기)
	$("#addReplyBtn").on("click", function(e) {
		
		modal.find("input").val("");
		modalInputReplyDate.closest("div").hide();
		modal.find("button[id != 'modalCloseBtn']").hide();
		
		modalRegisterBtn.show();
		
		$(".modal").modal("show");
	});
	
	// 클로즈 버튼 활성
	$("#modalCloseBtn").on("click", function(e) {
		
		modal.modal('hide');
	});
	
	// 등록 버튼 처리
	// var bnoValue = '<c:out value="${board.bno}"/>';
	var bnoValue = $("#operForm").find("#bno").val();
	
	var replyUL = $(".chat");
	
	modalRegisterBtn.on("click",function(e){
		
		var reply = {
					  reply: modalInputReply.val(),
					  replyer: modalInputReplyer.val(),
					  bno: bnoValue
					};
		replyService.add(reply, function(result){
			
			alert(result);
			
			modal.find("input").val("");
			modal.modal("hide");
			
			// showList(1);
			repyList.showList(1, bnoValue, replyUL);
			
		});
	});
	
});







