$(function () {
    $('body').on('swipeup',swipeHandler);
    $('body').on('swipedown',swipeHandler2);

    function swipeHandler( event ){
        $('body').removeClass("swipeDown");
        $('body').addClass( "swipeUp" );
    };
    function swipeHandler2( event ){
        $('body').addClass( "swipeDown" );
        $('body').removeClass("swipeUp");
    };
})