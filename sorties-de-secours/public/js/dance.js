<<<<<<< HEAD
$(document).ready(function() {
  $("body").scroll(function() {
    console.log("scrolled");
    $("#img-dancers-annotations").css("opacity", "1");
  });
  $('body').bind('mousewheel DOMMouseScroll', function (e) {
    //console.log('bingo');
  });

  $("#dance-section").css("overflow-x", "scroll");
  $('#dance-section').on('mousewheel', function(e, delta) {
    this.scrollLeft -= (delta * 60);
    //e.preventDefault();
  });
});
=======
$(document).ready(function() {

  var dancePosTop = {
    top: $('#dance-section').offset().top,
    bottom: $('#dance-section').offset().top + $('#dance-section').height()
  };

  var musicPosTop = {
    top: $('#music-workshop-section').offset().top,
    bottom: $('#music-workshop-section').offset().top + $('#music-workshop-section').height()
  };

  $(window).scroll(function() {

  });

  $("#hover-dancers-crayons").hover(function() {
    $("#img-dancers-3").css("transform", "scale(1.05)");
  }, function() {
    $("#img-dancers-3").css("transform", "scale(1)");
  });

});
>>>>>>> origin/sorties-de-secours
