$(window).on('scroll', function () {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();

  // Background layers scrolling speed
  $('.layer-1').css('top', (0 - (scrolled * 0.2)) + 'px');
  $('.layer-2').css('top', (0 - (scrolled * 0.4)) + 'px');
  $('.layer-3').css('top', (0 - (scrolled * 0.6)) + 'px');

  // Porsche models scrolling speed (kept original parallax depth values)
  $('.car-1').css('top', (400 - (scrolled * 0.6)) + 'px');
  $('.car-2').css('top', (250 - (scrolled * 0.4)) + 'px');
  $('.car-3').css('top', (500 - (scrolled * 0.5)) + 'px');
  $('.car-4').css('top', (500 - (scrolled * 0.6)) + 'px');
  $('.car-5').css('top', (500 - (scrolled * 0.5)) + 'px');
  $('.car-6').css('top', (500 - (scrolled * 0.4)) + 'px');
}