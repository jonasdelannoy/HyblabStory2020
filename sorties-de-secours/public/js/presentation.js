$(document).ready(function() {

  var presentationPosTop = {
    top: $('#presentation-section').offset().top,
    bottom: $('#presentation-section').offset().top + $('#presentation-section').height()
  };

  var presentationPosBottom = {
    top: $(document).height() - $('#presentation-section').offset().top,
    bottom: $(document).height() - $('#presentation-section').offset().top - $('#presentation-section').height()
  };

  const logoAnimated = document.querySelector("#logo-sorties");

  let storedPosTop = 0;
  let storedPosBottom = 0;
  $(window).scroll(function() {

    let scrollPosTop = $(document).scrollTop();
    var scrollPosBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    //Scroll vers le bas et on remonte
    if( scrollPosTop > ((presentationPosTop.top + presentationPosTop.bottom) / 2.5) && scrollPosTop < presentationPosTop.bottom && storedPosTop < scrollPosTop ) {
      // FADE IN
      logoAnimated.classList.remove('fadeInUp');
      logoAnimated.classList.add('fadeOut');
    } else if( ( scrollPosTop > ((presentationPosTop.top + presentationPosTop.bottom) / 2.5) ) && scrollPosTop < presentationPosTop.bottom && storedPosTop > scrollPosTop ) {
      // FADE OUT
      logoAnimated.classList.remove('fadeOut');
      logoAnimated.classList.add('fadeInUp');
    //Scroll vers le haut et on redescend
    } else if( ( scrollPosBottom < presentationPosBottom.top - 200 ) && scrollPosBottom < presentationPosBottom.top && storedPosBottom > scrollPosBottom ) {
      // FADE IN
      logoAnimated.classList.remove('fadeOut');
      logoAnimated.classList.add('fadeInUp');
    } else if( ( scrollPosBottom > presentationPosBottom.top - 300 ) && scrollPosBottom < presentationPosBottom.top && storedPosBottom < scrollPosBottom ) {
      // FADE OUT
      logoAnimated.classList.remove('fadeInUp');
      logoAnimated.classList.add('fadeOut');
    }
    storedPosTop = scrollPosTop;
    storedPosBottom = scrollPosBottom;
  });

});
