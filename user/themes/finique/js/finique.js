$(document).ready(function () {
  $('#project-images').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    autoHeight: true,
    lazyLoad:true
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('#header').addClass("collapsed");
    }
    else{
      $('#header').removeClass("collapsed");
    }
  });
  $('.collapsable h3').click(function () {
    $(this).parent().toggleClass('active');
    $(this).siblings('p').toggle(300);
  })
});