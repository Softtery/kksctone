$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.b-header').toggleClass('b-header_active');
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $('.b-footer').toggleClass('b-footer_active');
})