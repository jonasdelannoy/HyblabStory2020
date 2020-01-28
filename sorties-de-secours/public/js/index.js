/* =========================
    FULLPAGE INITIALISATION
   ========================= */

// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

// enable the first music to play
document.addEventListener('click', musicPlay);
function musicPlay() {
    music = document.getElementById('music1');
    if (!(music.duration > 0 && !music.paused))
          music.play();
   // document.removeEventListener('click', musicPlay);
}

// fullpage customization
$('#fullpage1').fullpage({
  sectionsColor: ['white', 'black', 'black', '#F2AE72', '#5C832F', 'black'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: false,
  slidesNavigation: true,
  controlArrows: false,
  scrollOverflow:true,
  anchors: ['home', 'sound', 'choice', 'expo', 'dance'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  }
});
/* =============================
    END FULLPAGE INITIALISATION
   ============================= */
