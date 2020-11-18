$(document).ready(function () {
    
    $('#modal-free-lunch, #modal-sleep, #modal-workforce, #modal-disasters, #modal-hydroponics, #modal-aquaponics, #modal-bioponics, #modal-more').on('hide.bs.modal', function(){
        const video = [];
        for (let v = 0; v < $(".embed-responsive-item").length; v++) {
            video.push($(".embed-responsive-item").eq(v).attr("src"));
        }
        // console.log(video);
        for (let i = 0; i < $(".embed-responsive-item").length; i++) {
            $(".embed-responsive-item").eq(i).attr("src", "");
        }
        for (let index = 0; index < $(".embed-responsive-item").length; index++) {
            $(".embed-responsive-item").eq(index).attr("src", video[index]);
        }
    })

    function chooseItemsIntro(event, indexItems){
        event.preventDefault();
        for(let i = 0; i < $('.position-tabs').length; i++){
            if($('.position-tabs').eq(i).hasClass('tabs-active')){
                $('.position-tabs').eq(i).removeClass('tabs-active');
            }
        }
        for(let i = 0; i < $('.btn-play-video').length; i++){
            if($('.btn-play-video').eq(i).hasClass('tabs-active')){
                $('.btn-play-video').eq(i).removeClass('tabs-active');
            }
        }
        for(let j = 0; j < $('.position-tabs').length; j++){
            if($('.tab-item').eq(j).hasClass('tab-btn-active')){
                $('.tab-item').eq(j).removeClass('tab-btn-active')
            }
        }
        
        $('.position-tabs').eq(indexItems).addClass('tabs-active');
        $('.tab-item').eq(indexItems).addClass('tab-btn-active');
        $('.btn-play-video').eq(indexItems).addClass('tabs-active');
    }
    function hoverItemsIntro(event, indexItems){
        for(let i = 0; i < $('.btn-play-video').length; i++){
            if($('.btn-play-video').eq(i).hasClass('tabs-active')){
                $('.btn-play-video').eq(i).removeClass('tabs-active');
            }
        }
        for(let j = 0; j < $('.position-tabs').length; j++){
            if($('.tab-item').eq(j).hasClass('tab-btn-active')){
                $('.tab-item').eq(j).removeClass('tab-btn-active')
            }
        }
        
        $('.tab-item').eq(indexItems).addClass('tab-btn-active');
        $('.btn-play-video').eq(indexItems).addClass('tabs-active');
    }
    for (let index = 0; index < $('.tab-item').length; index++) {
        $('.tab-item').eq(index).click(function(){
            chooseItemsIntro(event, index);
        });
        $('.tab-item').eq(index).hover(function(){
            hoverItemsIntro(event,index);
        });
        $('.tab-item').eq(index).mouseleave(function(){
            let j = 0;
            for(j; j < $('.position-tabs').length; j++){
                if($('.position-tabs').eq(j).hasClass('tabs-active')){
                    break;
                }
            }
            chooseItemsIntro(event,j);
        })
    }

    $('.hamburger-icon a').click(function(event){
        event.preventDefault();
        $('.primary-menu').toggleClass('show-menu');
        $('.background-black').toggleClass('show-opacity');
    })
    $('.background-black').click(function(){
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
    })


    $('.menu-btn').click(function(event){
        event.preventDefault();
        $('.side-menu').toggleClass('open-event-menu');
        $('.close-menu').toggleClass('toggle-margin');
        if($('.side-menu').hasClass('open-event-menu')){
            $('.open-menu-btn-left').removeClass('btn-side-menu-active');
            $('.open-menu-btn-right').addClass('btn-side-menu-active');
        }
        else{
            $('.open-menu-btn-right').removeClass('btn-side-menu-active');
            $('.open-menu-btn-left').addClass('btn-side-menu-active');
        }
    })
    setTimeout(() => {
        $('.side-menu').addClass('open-event-menu');
        $('.close-menu').addClass('toggle-margin');
        if($('.side-menu').hasClass('open-event-menu')){
            $('.open-menu-btn-left').removeClass('btn-side-menu-active');
            $('.open-menu-btn-right').addClass('btn-side-menu-active');
        }
        else{
            $('.open-menu-btn-right').removeClass('btn-side-menu-active');
            $('.open-menu-btn-left').addClass('btn-side-menu-active');
        }
        // console.log('settimeout');
    }, 7000);

    $(window).scroll(function(event){
        var vitrihientai = $('html').scrollTop();
        // console.log(vitrihientai);
        if(vitrihientai > 200){
            $('.wrapper-scrolltop').addClass('show-scrolltop');
        }
        else{
            $('.wrapper-scrolltop').removeClass('show-scrolltop');
        }
        if(vitrihientai > 300){
            $('.img-responsive').addClass('adjust-width');
            $('.header-menu').addClass('adjust-height');
        }
        else{
            $('.img-responsive').removeClass('adjust-width');
            $('.header-menu').removeClass('adjust-height');
        }
    })

    $('.wrapper-scrolltop').click(function(event) {
        event.preventDefault();
		$('html').animate({scrollTop:0}, 500);
	});

	$('.n1').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#ourplanId').offset().top - 46}, 500);
		return false;
	});
	$('.n2').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#freelunchId').offset().top - 46}, 500);
		return false;
	});
	$('.n3').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#homelessId').offset().top - 46}, 500);
		return false;
	});
	$('.n4').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#workforceId').offset().top - 46}, 500);
		return false;
	});
	$('.n5').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#disastersId').offset().top - 46}, 500);
		return false;
	});
	$('.n6').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#stibpayId').offset().top - 46}, 500);
		return false;
	});
	$('.n7').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#donateId').offset().top - 46}, 500);
		return false;
	});
	$('.n8').click(function(event) {
        event.preventDefault();
        if($('.img-responsive').hasClass('show-logo')){
            $('.img-responsive').removeClass('show-logo');
        }
        if($('.primary-menu').hasClass('show-menu')){
            $('.primary-menu').removeClass('show-menu');
        }
        if($('.background-black').hasClass('show-opacity')){
            $('.background-black').removeClass('show-opacity');
        }
		$('html').animate({scrollTop:$('#contactId').offset().top - 46}, 500);
		return false;
    });
    
    $('.vn').click(function(event){
        event.preventDefault();
        
    })
    $('.en').click(function(event){
        event.preventDefault();
        
    })

    //////////// Switch language ///////////////////////////
    var set_lang;

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $("#lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    // Set initial language to English
    set_lang(dictionary.en);
    
});