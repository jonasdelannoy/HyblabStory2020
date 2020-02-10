$(document).ready(function() {

  var dancePosTop = {
    top: $('#dance-section').offset().top,
    bottom: $('#dance-section').offset().top + $('#dance-section').height()
  };

  var musicPosTop = {
    top: $('#music-section').offset().top,
    bottom: $('#music-section').offset().top + $('#music-section').height()
  };

  $(window).scroll(function() {

  });

  $("#hover-dancers-crayons").hover(function() {
    $("#img-dancers-3").css("transform", "scale(1.05)");
  }, function() {
    $("#img-dancers-3").css("transform", "scale(1)");
  });

});
