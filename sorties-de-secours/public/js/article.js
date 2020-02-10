// BRUSHES
    //expo
    let $articleExpoYellow1;

    let $articleExpoOrange5;
    let $articleExpoBlue5;

    let $articleExpoBlue3;
    let $articleExpoOrange1;

    let $articleExpoYellow5;
    let $articleExpoOrange6;

    // music
    let $articleMusicBlue2;
    let $articleMusicOrange4;

    let $articleMusicBlue5;
    let $articleMusicYellow4;

    let $articleMusicYellow3;
    let $articleMusicOrange3;

    let $articleMusicYellow6;
    let $articleMusicBlue6;


let currentSlide = 0;
let scrollRecently = false;

/* JQuery elements */
let $articleContainer;
let $articleImgCrayon;
let $slideTo;
let $slideFrom;
let $articleTextWrapper;
let $articleTitleWrapper;
let $ssButtonsWrapper;

function initArticle(sectionName) {

    //expo brushes
    $articleExpoYellow1 = $("#article-expo-yellow1");
    $articleExpoOrange5 = $("#article-expo-orange5");
    $articleExpoBlue5 = $("#article-expo-blue5");
    $articleExpoBlue3 = $("#article-expo-blue3");
    $articleExpoOrange1 = $("#article-expo-orange1");
    $articleExpoYellow5 = $("#article-expo-yellow5");
    $articleExpoOrange6 = $("#article-expo-orange6");

    // music brushes
    $articleMusicBlue2 = $("#article-music-blue2");
    $articleMusicOrange4 = $("#article-music-orange4");
    $articleMusicBlue5 = $("#article-music-blue5");
    $articleMusicYellow4 = $("#article-music-yellow4");
    $articleMusicYellow3 = $("#article-music-yellow3");
    $articleMusicOrange3 = $("#article-music-orange3");
    $articleMusicYellow6 = $("#article-music-yellow6");
    $articleMusicBlue6 = $("#article-music-blue6");

    // JQuery elements
    $articleContainer = $('#article-container-' + sectionName);
    $articleImgCrayon = $('#article-img-crayon-'+sectionName);
    $articleTextWrapper = $('#article-text-wrapper-'+sectionName);
    $articleTitleWrapper = $('#article-title-wrapper-'+sectionName);
    $ssButtonsWrapper = $('#ss-buttons-wrapper-'+sectionName);

    $articleContainer.addClass("article-container-show");

    $('#' + sectionName + '-section').on('mousewheel', function(event, delta) {

        if (!scrollRecently) {

            if (event.deltaY < 0) {
                nextSlide(sectionName);
            } else if (event.deltaY > 0) {
                previousSlide(sectionName);
            }

        }

        triggeredScroll();

    });
}

function triggeredScroll() {
    scrollRecently = true;
    setTimeout(function () {
        scrollRecently = false;
    }, 500);
}

function goFromTo(sectionName, slideFrom, slideTo) {

    $slideTo = $('#article-img-' + sectionName + slideTo);
    $slideFrom = $('#article-img-' + sectionName + slideFrom);

    if (slideFrom === 0 && slideTo === 1) {
        /* cache le texte */
        $articleTextWrapper.addClass("article-text-wrapper-hidden");
        // deplace le titre
        $articleTitleWrapper.addClass("article-title-wrapper-fullscreen");
        /* active les boutons du slideshow */
        $ssButtonsWrapper.removeClass("ss-buttons-wrapper-hidden");
    } else if (slideFrom === 1 && slideTo === 0) {
        $articleTextWrapper.removeClass("article-text-wrapper-hidden");
        $articleTitleWrapper.removeClass("article-title-wrapper-fullscreen");
        $ssButtonsWrapper.addClass("ss-buttons-wrapper-hidden");
    }

    if (slideTo === 4) {
        $articleContainer.addClass("article-container-fullscreen");
        $articleImgCrayon.addClass("article-img-crayon-show");
    } else {
        $articleContainer.removeClass("article-container-fullscreen");
        $articleImgCrayon.removeClass("article-img-crayon-show");

        $slideFrom.removeClass('article-img-show');
        if (slideFrom > slideTo) {
            $slideTo.addClass('article-img-show');
        } else {
            if (slideTo !== 0) {
                $slideFrom.addClass('article-img-hidden');
            }
        }
    }

    $slideTo.removeClass('article-img-hidden');

    if (slideTo >= 1 && slideTo <= 3) {
        activeButton(sectionName, slideTo);
    }

    // BRUSHES
    animateBrush(sectionName, slideTo);
}

function nextSlide(sectionName) {
    let slideFrom = currentSlide;
    currentSlide++;
    if (currentSlide > 4) {
        goBackToMenu(sectionName);
    }
    if (slideFrom !== currentSlide) {
        goFromTo(sectionName, slideFrom, currentSlide);
    }
}

function previousSlide(sectionName) {
    let slideFrom = currentSlide;
    currentSlide--;
    if (currentSlide < 0) currentSlide = 0;
    goFromTo(sectionName, slideFrom, currentSlide);
}

function activeButton(sectionName, id) {
    $('.ss-dot').removeClass('ss-dot-selected');
    $('#'+sectionName+'-dot'+id).addClass('ss-dot-selected');
}

function animateBrush(sectionName, id) {

    if (sectionName === "expo") {
        $articleExpoYellow1.removeClass('brush-show');
        $articleExpoOrange5.removeClass('brush-show');
        $articleExpoBlue5.removeClass('brush-show');
        $articleExpoBlue3.removeClass('brush-show');
        $articleExpoOrange1.removeClass('brush-show');
        $articleExpoYellow5.removeClass('brush-show');
        $articleExpoOrange6.removeClass('brush-show');

        switch (id) {
            case 0:
                $articleExpoYellow1.addClass('brush-show');
                break;
            case 1:
                $articleExpoOrange5.addClass('brush-show');
                $articleExpoBlue5.addClass('brush-show');
                break;
            case 2:
                $articleExpoBlue3.addClass('brush-show');
                $articleExpoOrange1.addClass('brush-show');
                break;
            case 3:
                $articleExpoYellow5.addClass('brush-show');
                $articleExpoOrange6.addClass('brush-show');
                break;
            case 4:
            default:
                break;
        }
    } else if (sectionName === "music") {

        $articleMusicBlue2.removeClass('brush-show');
        $articleMusicOrange4.removeClass('brush-show');
        $articleMusicBlue5.removeClass('brush-show');
        $articleMusicYellow4.removeClass('brush-show');
        $articleMusicYellow3.removeClass('brush-show');
        $articleMusicOrange3.removeClass('brush-show');
        $articleMusicYellow6.removeClass('brush-show');
        $articleMusicBlue6.removeClass('brush-show');

        switch (id) {
            case 0:
                $articleMusicBlue2.addClass('brush-show');
                $articleMusicOrange4.addClass('brush-show');
                break;
            case 1:
                $articleMusicBlue5.addClass('brush-show');
                $articleMusicYellow4.addClass('brush-show');
                break;
            case 2:
                $articleMusicYellow3.addClass('brush-show');
                $articleMusicOrange3.addClass('brush-show');
                break;
            case 3:
                $articleMusicYellow6.addClass('brush-show');
                $articleMusicBlue6.addClass('brush-show');
                break;
            case 4:
            default:
                break;
        }

    }

}

function goBackToMenu(sectionName) {
    /* go to menu and remove style */
    goToByScroll('menu-section', 0);
    $('.expChoice').removeClass("expChoiceHidden");
    $('.expChoice').removeClass("expChoiceExpand");
    $('.expChoice').removeClass("expChoiceOut");

    switch (sectionName) {
      case "expo":
        $("#hover-expo").removeClass("menu-hover");
        $("#expChoiceExpo").unbind('click');
        $("#hachure-expo").css("opacity", "1");
        $("#hachure-expo").css("cursor", "auto");
        break;
      case "music":
        $("#hover-music").removeClass("menu-hover");
        $("#expChoiceMusique").unbind('click');
        $("#hachure-music").css("opacity", "1");
        $("#hachure-music").css("cursor", "auto");
        break;
      case "dance":
        $("#hover-dance").removeClass("menu-hover");
        $("#expChoiceDance").unbind('click');
        $("#hachure-dance").css("opacity", "1");
        $("#hachure-dance").css("cursor", "auto");
        break;
    }

    /* reset parameters*/
    currentSlide = 0;
    scrollRecently = false;

}
