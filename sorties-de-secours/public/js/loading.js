<<<<<<< HEAD
$(document).ready(function() {



});
=======
$(document).ready(function() {

  var loadingPosTop = {
    top: $('#loading-section').offset().top,
    bottom: $('#loading-section').offset().top + $('#loading-section').height()
  };

  var loadingPosBottom = {
    top: $(document).height() - $('#loading-section').offset().top,
    bottom: $(document).height() - $('#loading-section').offset().top - $('#loading-section').height()
  };

  const soundAnimated = document.querySelector("#sound-content-loading");
  const mouseAnimated = document.querySelector("#mouse-animated");

  let storedPosTop = 0;
  let storedPosBottom = 0;
  $(window).scroll(function() {

    let scrollPosTop = $(document).scrollTop();
    var scrollPosBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    //Scroll vers le bas et on remonte
    if( scrollPosTop > ((loadingPosTop.top + loadingPosTop.bottom) / 2.5) && scrollPosTop < loadingPosTop.bottom && storedPosTop < scrollPosTop ) {
      // FADE IN
      soundAnimated.classList.remove('fadeInUp');
      soundAnimated.classList.add('fadeOut');
      mouseAnimated.classList.remove('fadeInUp');
      mouseAnimated.classList.add('fadeOut');
    } else if( ( scrollPosTop > ((loadingPosTop.top + loadingPosTop.bottom) / 2.5) ) && scrollPosTop < loadingPosTop.bottom && storedPosTop > scrollPosTop ) {
      // FADE OUT
      soundAnimated.classList.remove('fadeOut');
      soundAnimated.classList.add('fadeInUp');
      mouseAnimated.classList.remove('fadeOut');
      mouseAnimated.classList.add('fadeInUp');
    //Scroll vers le haut et on redescend
    } else if( ( scrollPosBottom < loadingPosBottom.top - 200 ) && scrollPosBottom < loadingPosBottom.top && storedPosBottom > scrollPosBottom ) {
      // FADE IN
      soundAnimated.classList.remove('fadeOut');
      soundAnimated.classList.add('fadeInUp');
      mouseAnimated.classList.remove('fadeOut');
      mouseAnimated.classList.add('fadeInUp');
    } else if( ( scrollPosBottom > loadingPosBottom.top - 500 ) && scrollPosBottom < loadingPosBottom.top && storedPosBottom < scrollPosBottom ) {
      // FADE OUT
      soundAnimated.classList.remove('fadeInUp');
      soundAnimated.classList.add('fadeOut');
      mouseAnimated.classList.remove('fadeInUp');
      mouseAnimated.classList.add('fadeOut');
    }
    storedPosTop = scrollPosTop;
    storedPosBottom = scrollPosBottom;
  });

});
>>>>>>> origin/sorties-de-secours
