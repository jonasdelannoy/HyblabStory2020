$(document).ready(function() {

    const pxBeforeTop = 50;

    var loading = {
        top: $('#loading-section').offset().top,
        bottom: $('#loading-section').offset().top + $('#loading-section').height()
    };

    var presentation = {
        playing: false,
        top: $('#presentation-section').offset().top,
        bottom: $('#presentation-section').offset().top + $('#presentation-section').height()
    };

    var menu = {
        top: $('#menu-section').offset().top,
        bottom: $('#menu-section').offset().top + $('#menu-section').height()
    };

    var music_workshop = {
        top: $('#music-workshop-section').offset().top,
        bottom: $('#music-workshop-section').offset().top + $('#music-workshop-section').height()
    };

    $(window).scroll(function() {

        let scrollPos = $(document).scrollTop();

        // loading
        if (   scrollPos >= loading.top - pxBeforeTop
            && scrollPos < loading.bottom ) {
            set_music_pause("voice");

            set_music_volume("generalMusic", 1);
            set_music_play("generalMusic");
        }

        // presentation
        if (   scrollPos >= presentation.top - pxBeforeTop
            && scrollPos < presentation.bottom ) {
            set_music_volume("generalMusic", 0.2);

            if (presentation.playing) {
                set_music_play("voice");
            } else {
                change_music("voice", 'sons/voices/presentation.mp3');
                presentation.playing = true;
            }
        }

        // menu
        if (    scrollPos >= menu.top - pxBeforeTop
            &&  scrollPos < menu.bottom) {
            set_music_pause("voice");
            set_music_volume("generalMusic", 1);
        }

        // music_workshop
        if (   scrollPos >= music_workshop.top - pxBeforeTop
            && scrollPos < music_workshop.bottom) {
            change_music("voice", 'sons/voices/music_workshop.mp3');
            set_music_volume("voice", 1);

            set_music_play("vinyl-noise");

            set_music_pause("generalMusic");
        }

        if (   scrollPos < music_workshop.top - pxBeforeTop
            || scrollPos >= music_workshop.bottom) {
            set_music_pause("vinyl");
            set_music_play("generalMusic");

            set_music_pause("vinyl-noise");
        }

    });

});