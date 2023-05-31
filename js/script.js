$(document).ready(function(){
    media();
    function media(){
        let windiwWidth = $(window).width();
        if(windiwWidth >= 1800){
            //fullpage
            new fullpage('#wrap',{
                scrollBar: true,
                normalScrollElements: '.sec-6,.footer',
                fitToSection:false,
                scrollingSpeed: 500,
            })
        }


        if(windiwWidth >= 1020){
            //배너 스와이퍼
            var swiper = new Swiper(".mySwiper", {
                rewind: true,
                breakpoints :{
                        slidePerview: 'auto',
                        loop:true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                }
            });

        }else{}
    }

    $(window).resize(function(){
        windiwWidth = $(window).width();
        media();
    });


    //서브메뉴
    $('.user').click(function(){
        $('.sub-menu-box').addClass('active');
    });
    $('.close').click(function(){
        $('.sub-menu-box').removeClass('active');
    });

    //스크롤 이벤트
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;
        const sec6 = $('.sec-6').offset().top;
        const footer = $('.footer').offset().top;

        if(sct >= banner && sct < sec1){
            $('.header-area').removeClass('active');

            // $('.hamburger-menu').removeClass('active');

            $('.search input[type="text"]').removeClass('active');
        }else if(sct >= sec1 && sct < sec2){
            $('.header-area').addClass('active');

            $('.search input[type="text"]').addClass('active');
        }else if(sct >= sec2 && sct < sec3){
            $('.header-area').removeClass('active');
            $('.header-area').removeClass('add');

            $('.search input[type="text"]').removeClass('active');  
        }else if(sct >= sec3 && sct < sec4){
            $('.header-area').addClass('add');

            $('.search input[type="text"]').addClass('active');      
        }else if(sct >= sec4 && sct < sec5){
            $('.header-area').addClass('active');
            $('.header-area').removeClass('add');

            $('.search input[type="text"]').addClass('active');
        }else if(sct < sec5 && sct < sec6){
            $('.header-area').removeClass('active');

            $('.search input[type="text"]').removeClass('active');
        }else if(footer && sct < sec6){
            $('.header-area').removeClass('active');

            $('.search input[type="text"]').removeClass('active');
        }else if(sct >= footer){
            $('.header-area').addClass('active');

            $('.search input[type="text"]').addClass('active');
        }
    });

    // .hamburger-menu
    //.search input[type="text"]

    //탭메뉴
    $('.btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    const result = $(this).attr('data-alt');

        $('.tabs div').removeClass('active');
        $(`#${result}`).addClass('active');
    });

    //탑버튼
    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() >= 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });

    //햄버거 버튼
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.hamburger-menu').toggleClass('active');
        $('#hamburger span').toggleClass('active');
    });
});