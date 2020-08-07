$(function () {
    $(".footer  ul li").prepend('<i class="fas fa-angle-right"></i>');

    $(".navbar-toggler").click(function () {
        // $(".sectio-top .container .row-top h1").toggle(10)
        if($(".sectio-top").height() == "700"){
            $(".sectio-top").css("height","1035");            
        }
        else{
            $(".sectio-top").css("height","700")
        }

    });



    $(".navbar-nav .nav-link").click(function (e) {
        e.preventDefault()
    });

    $(".navbar-nav .nav-link").click(function () {        
        $("html, body").animate({         
            scrollTop: $("." + $(this).data("scroll")).offset().top
        },1000)
    });
    $('.total-1 , .total-2, .total-3').counterUp({
        delay: 10,
        time: 7000
    });

    // Start Button Scroll top 

    //Get the button
    var buttonscroll = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonscroll.style.display = "block";
    } else {
        buttonscroll.style.display = "none";
    }
    };    
    buttonscroll.onclick = function () {
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
        $("html, body").animate({
            scrollTop: 0
        },300)
    }
    
    // End Button Scroll top
})
