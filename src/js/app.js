/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(function () {

    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        navText: [
            '<img src="build/images/recommendations/path-4-copy-2.png" srcset="build/images/recommendations/path-4-copy-2@2x.png 2x, build/images/recommendations/path-4-copy-2@3x.png 3x">',
            '<img src="build/images/recommendations/path-3-copy-2.png" srcset="build/images/recommendations/path-3-copy-2@2x.png 2x, build/images/recommendations/path-3-copy-2@3x.png 3x">'
        ],
        
        responsive:{
            320:{
                items:1,
                stagePadding:30,
                nav:false
            },
            575:{
                items:2,
                stagePadding:50,
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

    $("#burger").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $("#nav").toggleClass("active");
    });
});