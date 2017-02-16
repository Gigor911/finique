
$(document).ready(function () {
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
  $('#interior-live').click(function () {
    $('#interior-public').removeClass('active');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.category').find('.public, .live').show();
    } else {
      $('.category').find('.public').hide();
      $('.category').find('.live').show();
      $(this).addClass('active');
    }
  });
  $('#interior-public').click(function () {
    $('#interior-live').removeClass('active');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.category').find('.public, .live').show();
    } else {
      $('.category').find('.public').show();
      $('.category').find('.live').hide();
      $(this).addClass('active');
    }
  });

  $(".mdl-textfield__input").blur(function (){
    if( !this.value ){
      $(this).prop('required', true);
      $(this).parent().addClass('is-invalid');
    }
  });
  $(".recaptcha-submit button").click(function (e) {
    $('.mdl-textfield__input').each(function() {
      if ($(this).val() == "") {
        $(this).parents(".mdl-textfield").children(".mdl-textfield__input").prop('required', true);
        $(this).parents(".mdl-textfield").addClass('is-invalid');
        e.preventDefault();
      }
    });
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
      e.preventDefault();
    }
  });

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
$(window).load(function () {
  setTimeout(function () {
    fadeOutnojquery(hellopreloader);
  }, 1000);
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
      992: {
        items: 1,
        loop: true,
        nav: true,
        navText: [],
        lazyLoad: true,
        autoHeight: false
      }
    }
  });
});