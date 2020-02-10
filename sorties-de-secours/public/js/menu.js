$(document).ready(function() {

    const menuSection = document.querySelector("#menu-section");

    var menuFixed = false;
    var $exp_selected = undefined;
    var choicesId = ["expChoiceExpo", "expChoiceMusique", "expChoiceDance"];

    function choiceClick(id) {
        $("#"+id).click(function() {
            var canScroll = false;
            var countScroll = 0;
            let isExperience = true;
            let endAnimationDance = false;
            bodyScrollLock.clearAllBodyScrollLocks(); // enable to avoid mousewheel event

            $(".expChoice").addClass('expChoiceHidden');

            $exp_selected = $(this);
            $exp_selected.removeClass("expChoiceHidden");
            $exp_selected.addClass("expChoiceExpand");

            let mouseAnimatedExpo = document.querySelector("#mouse-animated-menuExpo");
            let mouseAnimatedMusic = document.querySelector("#mouse-animated-menuMusic");
            let mouseAnimatedDance = document.querySelector("#mouse-animated-menuDance");
            setTimeout(function() {
                mouseAnimatedExpo.classList.remove('fadeOut');
                mouseAnimatedExpo.classList.add('fadeInUp');
                mouseAnimatedMusic.classList.remove('fadeOut');
                mouseAnimatedMusic.classList.add('fadeInUp');
                mouseAnimatedDance.classList.remove('fadeOut');
                mouseAnimatedDance.classList.add('fadeInUp');
            }, 5000);

            setTimeout(function() {
                canScroll = true;
            }, 2500);

            $(window).scroll(function(e) {
                if (!canScroll) {
                    $('html, body').stop().animate({
                        scrollTop: $("#menu-section").offset().top
                    }, 0);
                } else if (countScroll < 1) {
                    mouseAnimatedExpo.classList.remove('fadeInUp');
                    mouseAnimatedExpo.classList.add('fadeOut');
                    mouseAnimatedMusic.classList.remove('fadeInUp');
                    mouseAnimatedMusic.classList.add('fadeOut');
                    mouseAnimatedDance.classList.remove('fadeInUp');
                    mouseAnimatedDance.classList.add('fadeOut');
                    $('html, body').stop().animate({
                        scrollTop: $("#menu-section").offset().top
                    }, 0);
                    let expId = $exp_selected.attr('id');
                    let top = 0;

                    switch(expId) {
                        case "expChoiceMusique":
                        top = $('#music-section').offset().top;
                        break;
                        case "expChoiceDance":
                        top = $('#dance-section').offset().top;
                        break;
                        case "expChoiceExpo":
                        top = $('#expo-section').offset().top;
                        break;
                    }
                    $exp_selected.addClass("expChoiceOut");
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: top
                        }, 0, function () {
                            // Transition Experience Dance
                            bodyScrollLock.disableBodyScroll("#container"); // enable to avoid mousewheel event

                            if(expId === "expChoiceDance") {

                                $("#dance-first-slide").css("background-color", "white");
                                $("#img-dancers").css("opacity", "1");

                                setTimeout(function() {
                                    let mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                                    mouseAnimatedDance.classList.remove('fadeOut');
                                    mouseAnimatedDance.classList.add('fadeInUp');
                                    isExperience = false;
                                }, 10000);

                                $('#dance-section').on('mousewheel', function(e, delta) {
                                    if(!isExperience) {
                                        $("#img-dancers-2").css("opacity", "1");
                                        let mouseAnimatedDance = document.querySelector("#mouse-animated-dance");
                                        mouseAnimatedDance.classList.remove('fadeInUp');
                                        mouseAnimatedDance.classList.add('fadeOut');
                                        $("#img-dancers-3").css("opacity", "1");
                                        mouseAnimatedDance.addEventListener('animationend', function() { endAnimationDance = true; });
                                        if(endAnimationDance) {
                                            initArticle('dance');
                                        }
                                    }
                                    //e.preventDefault();
                                });
                            }

                        });
                        countScroll++;
                    }, 500);
                }

            });
        });
    }

    choicesId.forEach(choiceId => {
        choiceClick(choiceId);
    });

    let menuPos = $("#menu-section").position();
    $(window).scroll(function(e) {

        let scrollPos = $(window).scrollTop();

        if (!menuFixed && $exp_selected === undefined && scrollPos > menuPos.top - 500) {
            // expo not selected yet, block scroll
            menuFixed = true;

            e.preventDefault();
            bodyScrollLock.disableBodyScroll(menuSection);
            goToByScroll("menu-section", 400);
        }

    });


});
