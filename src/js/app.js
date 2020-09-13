/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(function () {

    $('.recommendation__carousel').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        navText: [
            '<img src="build/images/recommendations/path-4-copy-2.png">',
            '<img src="build/images/recommendations/path-3-copy-2.png">'
        ],
        
        responsive:{
            320:{
                items:2,
                stagePadding:22,
                nav:false
            },
            575:{
                items:2,
                stagePadding:47,
                nav:false
            },
            770:{
                items:3,
                nav: true,
            },
            990:{
                items:4,
                nav:true
            },
            1230:{
                items:5,
                nav:true
            }
            
        }
    });

    $('.social__carousel').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:false,
        dots:false,
        
        responsive:{
            320:{
                items:2,
                stagePadding:22,
                nav:false
            },
            575:{
                items:2,
                stagePadding:47,
                nav:false
            },
            770:{
                items:3,
                nav: false,
            },
            990:{
                items:4,
                nav:false
            }   
        }
    });

    $("#burger").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $("#nav").toggleClass("active");
    });

    $("#up").on("click", function(event){
        event.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500)
    });
});