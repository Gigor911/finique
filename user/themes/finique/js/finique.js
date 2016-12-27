$(document).ready(function () {
  $('#project-images').owlCarousel({
    responsive: {
      0: {
        items:1,
        loop:true,
        nav: true,
        navText: [],
        lazyLoad: true,
        autoHeight: true
      },
      768: {
        items:1,
        loop:true,
        nav: true,
        navText: [],
        lazyLoad: true,
        autoHeight: false
      }
    }

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