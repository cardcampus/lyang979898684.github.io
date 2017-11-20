var g_Interval = 1;
var g_PersonCount = 50000;//参加抽奖人数
var g_Timer;
var running = false;
var num;
function beginRndNum(trigger){
	if(running){
		running = false;
		clearTimeout(g_Timer);
		$(trigger).val("开始");
		$("#addp").append("<p style='font-size:50px; margin-top:0;margin-bottom:5px;'>"+num+"</p>")
		// $('#ResultNum').css('color','#FCCB5D');
	}
	else{
		running = true;
		// $('#ResultNum').css('color','#FCCB5D');
		$(trigger).val("停止");
		beginTimer();

	}
}

function updateRndNum(){
	 num = Math.floor(Math.random()*g_PersonCount+10000);
	$('#ResultNum').html(num);
}

function beginTimer(){
	g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
	g_Timer = setTimeout(beat, g_Interval);
	updateRndNum();
}
