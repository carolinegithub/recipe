$(document).ready(function() {
console.log("Script included!");

$('#btn_hide').click(function () {
    $("img").hide();
});

$('#btn_show').click(function () {
    $("img").show();
});

$('.recipe ul li').click(function() {
	
	if ($(this).hasClass("bought")) {
	$(this).removeClass("bought");
	}
	else{
		$(this).addClass("bought");
	};
	
});


$('.recipe ol li').click(function() {
	
	if ($('.recipe ol li').hasClass("list")) {
	$('.recipe ol li').removeClass("list");
	}
	$(this).addClass("list");
	
	
});



});