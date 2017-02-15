$(document).ready(function () {
  $('#project-images').owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
        navText: [],
        lazyLoad: true,
        autoHeight: true
      },
      768: {
        items: 1,
        loop: true,
        nav: true,
        navText: [],
        lazyLoad: true,
        autoHeight: false
      }
    }

  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1 && $('body').width() > 767) {
      $('#header').addClass("collapsed");
    }
    else {
      $('#header').removeClass("collapsed");
    }
  });
  $('.collapsable h3').click(function () {
    $(this).parent().toggleClass('active');
    $(this).siblings('p').toggle(300);
  });
  $('#mobile-menu-toggle').click(function () {
    $(this).toggleClass('active');
    $('.navigation.top').toggle(300);
  });
  // Interior toggle
  $('#interior-all').click(function () {
    $('.category').find('.live, .public').show();
    $('#interior-live, #interior-public').css('opacity', '0.3')
  });
  $('#interior-live').click(function () {
    $('.category').find('.public').hide();
    $('.category').find('.live').show();
    $('#interior-live').css('opacity', '1');
    $('#interior-public').css('opacity', '0.3')
  });
  $('#interior-public').click(function () {
    $('.category').find('.public').show();
    $('.category').find('.live').hide();
    $('#interior-live').css('opacity', '0.3');
    $('#interior-public').css('opacity', '1')
  })

});

var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function () {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      hellopreloader.style.display = "none";
    }
  }, 16);
}
window.onload = function () {
  setTimeout(function () {
    fadeOutnojquery(hellopreloader);
  }, 1000);
};