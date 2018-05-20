$(function () {
    $('#wifi').on('swipeup',swipeHandler);
    $('#wifi').on('swipedown',swipeHandler2);

    function swipeHandler( event ){
		$('#kava').css("filter", "blur(3px)");
		$('#wifi').css({"bottom":"0px", "transition": "1s"});
		$('#arrow').css({"background-image":"url('img/4_1.png')","height":"22px","margin":"-6% auto 0","animation":"none","transition":"1s"});
    };
    function swipeHandler2( event ){
		$('#kava').css("filter", "blur(0px)");
		$('#wifi').css({"bottom":"-130px", "transition": "1s"});
		$('#arrow').css({"background-image":"url('img/4.png')","height":"62px","margin":"-66px auto 0","animation":"blinker 2s linear infinite","transition":"1s"});
    };
})