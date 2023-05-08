//*************************
// GSAP
//*************************
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


//*************************
// LOADING
//*************************
function loading() {
    //jQuery('#loader, #loader_2').addClass('nascosto');
    gsap.to("#loader", {
        x: "-100%",
        duration: .4,
        ease: "sine.out"
    });
    
    gsap.to("#loader_2", {
        x: "-100%",
        duration: .5,
        ease: "sine.out"
    });
}



//*************************
// START
//*************************
function start() {
    loading();
    lazyload();
    parallax();
    fancyPop();
    aside_menu();
    menu();
    emozioniSwiper();
    //partnersFilter();
    locationsSwiper();
//    wow();
    
    
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if(!isMobile) {
        jQuery('#cursor').fadeIn();
        init_pointer();
    }

    
}



//***********************
// MENU
//*************************
function menuCollapse() {
	//h = jQuery(window).innerHeight() / 4;

	if ( jQuery("header").offset().top > 70 ) {
        jQuery("header").addClass("top");
    }
    else {
        jQuery("header").removeClass("top");
    }
}


function menu() {
    
    var tweenMenu = gsap.fromTo("#drawer .menu-item", {autoAlpha: 0}, {
        delay: 0.5,
        autoAlpha: 1,
        duration: 1.5,
        stagger: 0.3,
    });
    
    
	jQuery('#hamburger').click(function () {
        jQuery('#drawer').addClass('in');
        jQuery('body').addClass('noscroll');
        
        tweenMenu.restart(1);
        
        return false;
    });
    
	jQuery('#hamburger_close, #drawer_overlay').click(function () {
        jQuery('#drawer').removeClass('in');
        jQuery('body').removeClass('noscroll');
        return false;
    });
    
    
    /* MENU STICKY */
    menuCollapse()

    jQuery(window).scroll(function() {
        menuCollapse()
    });
}



//*************************
// ASIDE MENU
//*************************
function aside_menu() {
    
    document.getElementById("ha_1").addEventListener("mouseover", mouseOverUp);
    document.getElementById("ha_3").addEventListener("mouseover", mouseOverDwn);
    document.getElementById("header_aside").addEventListener("mouseout", mouseOut);

    function mouseOverUp() {
        gsap.to("#header_aside nav", {
            x: "-10%",
            duration: 2,
            ease: Power1.easeOut,
        });
    }
    
    function mouseOverDwn() {
        gsap.to("#header_aside nav", {
            x: "10%",
            duration: 2,
            ease: Power1.easeOut,
        });
    }

    function mouseOut() {
        gsap.to("#header_aside nav", {
            x: 0,
            duration: 2,
            ease: Power1.easeOut,
        });
    }
    
}



//*************************
// PARALLAX
//*************************
function parallax() {
    // apply parallax effect to any element with a data-speed attribute    
//    gsap.to("[data-speed]", {
//        yPercent: (i, el) => -(el.getAttribute("data-speed")),
//        ease: "none",
//        scrollTrigger: {
//            //trigger: "#shoot",
//            start: "top top",
//            end: "bottom top",
//            scrub: 5,
//            //markers: true,
//        }
//    });
    
    gsap.utils.toArray("[data-speed]").forEach((el, i) => {
        el_speed = el.getAttribute("data-speed");

        gsap.to(el, {
            yPercent: -el_speed,
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "-=50% top",
                scrub: 5,
                //markers: true,
            }
        });
        
    });
}





//*************************
// EMOZIONI
//*************************
function emozioniParallax() {
//    gsap.utils.toArray(".emozione").forEach((emozione, i) => {
//        emozione.bg = emozione.querySelector(".bg");
//
//        // Do the parallax effect on each emozione
//        if (i) {
//            emozione.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
//
//            gsap.to(emozione.bg, {
//                backgroundPosition: `50% ${innerHeight / 2}px`,
//                ease: "none",
//                scrollTrigger: {
//                    trigger: emozione,
//                    scrub: true
//                }
//            });
//        }
//
//        // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
//        else {
//            emozione.bg.style.backgroundPosition = "50% 0px";
//
//            gsap.to(emozione.bg, {
//                backgroundPosition: `50% ${innerHeight / 2}px`,
//                ease: "none",
//                scrollTrigger: {
//                    trigger: emozione,
//                    start: "top top",
//                    end: "bottom top",
//                    scrub: true
//                }
//            });
//        }
//    });

    
    gsap.to(".emozione-fig:not(:last-child)", {
        yPercent: -200,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#emozioni",
            start: "top top",
            end: "+=300%",
            scrub: true,
            pin: true
        }
    });
    
    gsap.to(".emozione-c", {
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.5,
        scrollTrigger: {
            trigger: "#emozioni",
            start: "top top",
            end: "+=300%",
            scrub: 1.5,
            pin: true
        },
    });


    gsap.set(".emozione", {
        zIndex: (i, target, targets) => targets.length - i
    });
    
    
}


//*************************
// PARTNERS
//*************************
function partnersFilter() {
    
    jQuery(".partner-cat:not(#partner_all)").click(function () {
        jQuery('.partner, .partner-cat').removeClass('off');
        
        $this = jQuery(this);
        $cat = $this.attr('data-cat');
        jQuery('.partner:not(.'+$cat+'), .partner-cat').addClass('off');
        $this.removeClass('off');
    });
    
    jQuery("#partner_all").click(function () {
        jQuery('.partner, .partner-cat').removeClass('off');
    });

    jQuery("#partners").mouseleave(function () {
        jQuery('.partner, .partner-cat').removeClass('off');
    });
}


//***********************
// LAZYLOAD
//*************************
function lazyload() {
	jQuery('.lazy').Lazy({
		scrollDirection: 'vertical',
	    effect: 'fadeIn',
	    effectTime: 750,
	    visibleOnly: true
	    //delay: 3000
	    //removeAttribute: false
    })
}




//*************************
// TOGGLE PLAY AUDIO
//*************************
function audioEmozioni() {
    var audioElement= document.getElementById("audio_emozioni");
    var audioToggle= document.getElementById("sound_toggle");
    
    
    //provo a riprodurre se non Mobile
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if(!isMobile) {
        
        audioElement.play();
        audioToggle.classList.add("playing");
        
        jQuery("#emozioni_skip").click(function () {
            audioElement.play();
            audioToggle.classList.add("playing");
        });
        
    }
}


function togglePlay() {
    var audioElement= document.getElementById("audio_emozioni");
    var audioToggle= document.getElementById("sound_toggle");
    
    if (audioElement.paused) {
        audioElement.play();
        audioToggle.classList.add("playing");
    }
    else {
        audioElement.pause();
        audioToggle.classList.remove("playing");
    }
};



//*************************
// FANCYBOX
//*************************
function fancyPop() {

	jQuery(".shoot-oembed, .slide-oembed, .hero-pop, .hero-inner-oembed").fancybox({
        baseClass: 'fancybox-nw',
        hash: false,
        loop: false,
        gutter: 50,
        buttons: [
            //"zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
    });

	jQuery(".gallery-link").fancybox({
        baseClass: 'fancybox-nw',
        hash: false,
        loop: true,
        gutter: 50,
        buttons: [
            //"zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            //"thumbs",
            "close"
        ],
    });

//    jQuery("[data-fancybox]").fancybox({
//        // Options will go here
//    });

}


//*************************
// SWIPER
//*************************
function locationsSwiper() {
    var locationsSwiper = new Swiper ('#locations .swiper', {
        speed: 1200,
        spaceBetween: 15,
        slidesPerView: 1,
        loop: false,
        centeredSlides: true,
        preloadImages: false,
        //parallax: true,
        mousewheel: {
            forceToAxis: true,
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            dynamicBullets: true,
            el: '.swiper-pagination',
            clickable: true,
            dynamicMainBullets: 1,
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 'auto',
                spaceBetween: 60,
            },
        },
    });
}

function emozioniSwiper() {
    var emozioniSwiper = new Swiper ('#emozioni_swiper .swiper', {
        direction: 'vertical',
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        parallax: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                translate: [0, 0, -400],
            },
            next: {
                translate: [0, '100%', 0],
            },
        },
        preloadImages: false,
        mousewheel: false,
        shortSwipes: false,
        simulateTouch: true,
        allowTouchMove: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },
        on: {
//            click: function() {
//                emozioniSwiper.slideNext();
//            },
            afterInit: function () {
                audioEmozioni();
            },
        },
    });
    
    jQuery( ".emz-prev" ).click(function() {
        emozioniSwiper.slidePrev();
    });
    
    jQuery( ".emz-next" ).click(function() {
        emozioniSwiper.slideNext();
    });
}

//*************************
// SMOOTH SCROLL
//*************************
// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
    if (
        link.protocol !== window.location.protocol ||
        link.host !== window.location.host ||
        link.pathname !== window.location.pathname ||
        link.search !== window.location.search
    ) {
        return false;
    }

    return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
        if (e) e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: elem,
            ease: Power3.easeOut
        });
    }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('.scroll').forEach(a => {
    a.addEventListener('click', e => {
        scrollToHash(getSamePageAnchor(a), e);
    });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);




//*************************
// SINGLE ORIZZONTALE
//*************************
function singleX() {
    
    /* HORIZONTAL SCROLL */
    var container = document.querySelector("#single_x .sng-wrp");

    var tl = gsap.timeline({
        scrollTrigger: {
            pin: true,
            scrub: 2,
            trigger: container,
            end: () => container.scrollWidth - document.documentElement.clientWidth
        },
        defaults: {
            ease: "none",
            duration: 1
        }
    });

    tl.to(".title-ghost", { x: 300 }).to(".slide", { x: () => -(container.scrollWidth - document.documentElement.clientWidth) }, 0);
    

    
    
    /* PARALLAX X */
    gsap.utils.toArray("[data-speed-x]").forEach((el, i) => {
        el_speed = el.getAttribute("data-speed-x");

        gsap.to(el, {
            xPercent: -el_speed,
            ease: "none",
            scrollTrigger: {
//                trigger: el,
                scrub: 5,
            }
        });        
    });
    
    
    
    
    /* FIX Z-INDEX HOVER */
    jQuery("#single_x .slide-cnt").hover(function() {
       jQuery(this).closest(".slide").toggleClass("hover");
    });

}




//*************************
// CURSORE
//*************************
const ring = document.getElementById("cursor__element")
const label = document.getElementById("cursor__lbl")
var mouseX = -100;
var mouseY = -100;
var lastMouseX = -100;
var lastMouseY = -100;
var ringX = -100;
var ringY = -100;
var mouseDown = false;
var speed = 0;
var scale = 1
const init_pointer = (options) => {

    function movite(mouse){
        mouseX = mouse.clientX;
        mouseY = mouse.clientY + window.scrollY;
        
        if( Math.abs(mouseX-lastMouseX) > 30 || Math.abs(mouseY-lastMouseY) > 100 ) {
            speed = Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2);
            
            lastMouseX = mouseX;
            lastMouseY = mouseY;
        }
        else {
            speed = 0;
        }
    }

    window.onmousemove = (mouse) => {
        movite(mouse);
    }

    window.onwheel = (mouse) => {
        movite(mouse);
    }
    
    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }



    const render = () => {
        // Mostra o nascondi elemento
       
//        jQuery("[data-cursor]")
//            .mouseout(function () {
//                jQuery("#cursor__lbl").text('');
//            })
//            .mouseover(function () {
//                jQuery("#cursor__lbl").text(jQuery(this).attr('data-cursor'));
//            });
        
        
        
//        if (document.querySelector('#hero:hover')) {
//            ring.classList.add("cursor__element_skip");
//        } else {
//            ring.classList.remove("cursor__element_skip");
//        }
        
        if (document.querySelector('#banner_50:hover')) {
            ring.classList.add("cursor__element_start");
        } else {
            ring.classList.remove("cursor__element_start");
        }
        
        if (document.querySelector('#locations .slide-wrapper:hover, #header_aside li a:hover, #shoots .shoot-link:hover, #shoot .shoot-link:hover, #archive .arc-link:hover, #default_page .press-ext:hover, #next .next-to:hover')) {
            ring.classList.add("cursor__element_scopri");
        } else {
            ring.classList.remove("cursor__element_scopri");
        }
        
        if (document.querySelector('#partners .prt-li:hover, #archive .arc-prt a:hover, #credits .cr-link:hover, #default_page .press-pdf:hover, #default_page.page-social .ff-item:hover, #emozioni_swiper .box-link:hover')) {
            ring.classList.add("cursor__element_link");
        } else {
            ring.classList.remove("cursor__element_link");
        }
        
        if (document.querySelector('#shoots .shoot-oembed:hover, #shoot .shoot-oembed:hover, #hero_inner .hero-inner-oembed:hover')) {
            ring.classList.add("cursor__element_play");
        } else {
            ring.classList.remove("cursor__element_play");
        }
        
        if (document.querySelector('#emozioni_swiper .swiper-slide .emz-next:hover')) {
            ring.classList.add("cursor__element_emozione");
        } else {
            ring.classList.remove("cursor__element_emozione");
        }
        
        if (document.querySelector('#emozioni_swiper .swiper-slide .emz-prev:hover')) {
            ring.classList.add("cursor__element_emozione_prev");
        } else {
            ring.classList.remove("cursor__element_emozione_prev");
        }
        
        if (document.querySelector('#hero:hover')) {
            ring.classList.add("cursor__element_corpvideo");
        } else {
            ring.classList.remove("cursor__element_corpvideo");
        }

        
        
        // Effetto zoom in base alla velocita  del mouse o del click
        if( mouseDown ) {
            scale = 0.75;
        }
        else {
            scale = 1 + Math.sqrt(speed/11000);
            if( scale > 1.5 ) {
                scale = 1.5;
            }
        }
        
        ring.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px) scale('+ scale +')';


        requestAnimationFrame(render)
    }
    
    requestAnimationFrame(render)
}
