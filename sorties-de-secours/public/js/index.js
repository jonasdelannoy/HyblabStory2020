// variables
var $header_top = $('.header-top');
var $nav = $('nav');
var iScrollPos = 0;

// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

function noScroll() {
  //
}

function disableScroll() {
  window.addEventListener('scroll', noScroll);
}

function enableScroll() {
  window.removeEventListener('scroll', noScroll);
}

function goToByScroll(id) {
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
  }, 400);
}

//Desactivation du scroll horizontal
var $body = $(document);
$body.bind('scroll', function() {
    if ($body.scrollLeft() !== 0) {
        $body.scrollLeft(0);
    }
});
