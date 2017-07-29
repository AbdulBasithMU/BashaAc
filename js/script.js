$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
        $("[data-nav-top]").addClass("nav-scroll-bg");
    }
    else{
    	$("[data-nav-top]").removeClass("nav-scroll-bg");
    }
});