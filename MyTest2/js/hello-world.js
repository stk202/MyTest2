// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    $('div.ui-page').live("swipeleft", function(){
        var nextpage = $(this).next('div[data-role="page"]');
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide"}, false, true);
        }
    });
    
    $('div.ui-page').live("swiperight", function(){
        var prevpage = $(this).prev('div[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
    });
    
    $('#myTestSpot').live("tap", function(event){
        //$('#myPopupDiv').popup();
    });
}
