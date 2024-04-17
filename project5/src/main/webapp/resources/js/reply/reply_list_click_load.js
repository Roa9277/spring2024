console.log("Reply List Click -> Modal window Load.........");

$(function() {
	
	var modal = $(".modal");
		
	var modalInputReply = modal.find("input[name='reply']");
	var modalInputReplyer = modal.find("input[name='replyer']");
	var modalInputReplyDate = modal.find("input[name='replyDate']");
	
	var modalModBtn = $("#modalModBtn");
	var modalRemoveBtn = $("#modalRemoveBtn");
	var modalRegisterBtn = $("#modalRegisterBtn");
	
	// 댓글 조회 클릭 이벤트 처리
	$(".chat").on("click","li",function(e){
		
		var rno = $(this).data("rno");
		
		replyService.get(rno, function(reply){
			
			modalInputReply.val(reply.reply);
			modalInputReplyer.val(reply.replyer);
			modalInputReplyDate.val(replyService.displayTime(reply.replyDate))
												.attr("readonly","readonly");
			modal.data("rno",reply.rno);
			
			modal.find("button[id != 'modalCloseBtn']").hide();
			modalModBtn.show();
			modalRemoveBtn.show();
			
			$(".modal").modal("show");
		});
	});
	
	// 댓글 수정
	
	var bnoValue = $("#operForm").find("#bno").val();
	var replyUL = $(".chat");
	
	modalModBtn.on("click", function(e){
		
		var reply = {rno:modal.data("rno"), reply: modalInputReply.val()};
		
		replyService.update(reply, function(result){
			
			alert(result);
			modal.modal("hide");
			
			//showList(1);
			replyList.showList(1, bnoValue, replyUL);
		});
	});
	
	// 댓글 삭제
	modalRemoveBtn.on("click",function(e) {
	
		var rno = modal.data("rno")	;
		
		replyService.remove(rno, function(result){
			
			alert(result);
			modal.modal("hide");
			
			//showList(1);
			replyList.showList(1, bnoValue, replyUL);
			
		});
	});
	
});


















