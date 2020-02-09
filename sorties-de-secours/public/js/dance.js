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
