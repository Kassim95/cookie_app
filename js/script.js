$(document).ready(function(){

	function values(key, value){
		value += 1;
		Cookies.set(key, value);
		return value

	};

	$('.sugar-count').html(Cookies.get("sugar")  + " eaten");
	$('.choco-count').html(Cookies.get("choco")  + " eaten");
	$('.lemon-count').html(Cookies.get("lemon")  + " eaten");

	$('.sugar').click(function(){
		$('.sugar-count').html(values("sugar",parseInt(Cookies.get("sugar")))  + " eaten");
	});

	$('.choco').click(function(){
		$('.choco-count').html(values("choco",parseInt(Cookies.get("choco")))  + " eaten");
	});

	$('.lemon').click(function(){
		$('.lemon-count').html(values("lemon",parseInt(Cookies.get("lemon")))  + " eaten");
	});

	$('.dump').click(function(){
		$('.sugar-count').html(values("sugar", 0 - 1)  + " eaten");
		$('.choco-count').html(values("choco", 0 - 1)  + " eaten");
		$('.lemon-count').html(values("lemon", 0 - 1)  + " eaten");
	});

})