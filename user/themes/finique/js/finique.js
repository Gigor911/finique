$(document).ready(function () {
  $('#project-images').owlCarousel({
    loop:true,
    nav: true,
    navText: [],
    items: 1,
    lazyLoad: true,
    center: true

  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1 && $('body').width() > 767) {
      $('#header').addClass("collapsed");
    }
    else{
      $('#header').removeClass("collapsed");
    }
  });
  $('.collapsable h3').click(function () {
    $(this).parent().toggleClass('active');
    $(this).siblings('p').toggle(300);
  });
  $('#mobile-menu-toggle').click(function () {
      $('.navigation.top').toggle(300);
  })
});