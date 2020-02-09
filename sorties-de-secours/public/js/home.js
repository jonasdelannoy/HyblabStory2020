<<<<<<< HEAD
$(document).ready(function() {

  $("#arrow-down").click(function(e) {
    goToByScroll("loading-section");
  });

});
=======
$(document).ready(function() {

  $("#button-start").click(function(e) {
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("loading-section", 500);

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
    bodyScrollLock.disableBodyScroll(container);
    mouseAnimated.addEventListener('animationend', function() { bodyScrollLock.enableBodyScroll(container); });

    set_music_play("generalMusic");
  });

  $("#link-presentation").click(function(e) {
    document.getElementById("hamburger-checkbox").checked = false;
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("presentation-section");

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $("#link-menu").click(function(e) {
    document.getElementById("hamburger-checkbox").checked = false;
    bodyScrollLock.enableBodyScroll(container);
    goToByScroll("menu-section");

    const soundAnimated = document.querySelector("#sound-content-loading");
    const mouseAnimated = document.querySelector("#mouse-animated");
    soundAnimated.classList.add('animated', 'fadeInUp');
    mouseAnimated.classList.add('animated', 'fadeInUp', 'delay-1s');
  });

  $("#button-start").hover(function() {
    $("#img-start").css("opacity", "1");
  },
  function() {
    $("#img-start").css("opacity", "0");
  });


  /*var video_logo = document.getElementById("video_logo");
  video_logo.play();*/
});
>>>>>>> origin/sorties-de-secours
