$(function(){

  // modal ---------------------------------------------------------
  var commuModal = $('#modal-community');
  var commuBtn = $('.modal-commu-btn');
  $(commuBtn).click(function(){
    $(commuModal).css('display','flex');
    $('html,body').css('overflow-y','hidden');
  });
  $('.modal-top img').click(function(){
    $(commuModal).css('display','none');
    $('html,body').css('overflow-y','auto');
  });
  var shareModal = $('#modal-share');
  var shareBtn = $('.icon.share');
  $(shareBtn).click(function(){
    $(shareModal).css('display','flex');
    $('html,body').css('overflow-y','hidden');
  });
  $('.modal-top img').click(function(){
    $(shareModal).css('display','none');
    $('html,body').css('overflow-y','auto');
  });
  var langModal = $('#lang-modal');
  var langBtn = $('.icon.lang');
  $(langBtn).click(function(){
    $(langModal).css('display','flex');
    $(this).css('background','#000');
    $('.icon.lang img').css('filter','invert(100%)');
  });
  $('.lang-close-btn').click(function(){
    $(langModal).css('display','none');
    $(langBtn).css('background','#fff');
    $('.icon.lang img').css('filter','invert(0)');
  });
  var dwModal = $('#modal-dwload');
  var dwBtn = $('.icon.download');
  $(dwBtn).click(function(){
    $(dwModal).css('display','flex');
    $('html,body').css('overflow-y','hidden');
  });
  $('.modal-top img').click(function(){
    $(dwModal).css('display','none');
    $('html,body').css('overflow-y','auto');
  });
  var hamModal = $('#modal-hamburger');
  $('#modal-hamburger > img').click(function(){
    $(hamModal).css('display','none');
    $('html,body').css('overflow-y','auto');
  });
  $('.icon.hamburger').click(function(){
    $(hamModal).css('display','block');
    $('html,body').css('overflow-y','hidden');
  });

  $('#video').mouseover(function(){
    $('.play-btn.video').css('background-position','bottom');
  }).mouseout(function(){
    $('.play-btn.video').css('background-position','top');
  });
  $('.play-btn.left, .play-btn.right').hover(function(){
    $('.play-btn.video').removeClass('video').addClass('video-hover');
  },function(){
    $('.play-btn.video-hover').removeClass('video-hover').addClass('video');
  });

  $('.video-select button').each(function(){
    $(this).click(function(){
      $('.video-select button').removeClass('video-btn-clicked');
      $(this).addClass('video-btn-clicked');
    });
  });

  $('.cookie-right button').click(function(){
    $('#cookie').css('display','none');
  });

  $(window).scroll(function(){
    var wHeight = $(this).height();
    var thisScrollTop = $(this).scrollTop();
    if( thisScrollTop > 0 ) {
      $('#header-fixed-wrap').css('border-bottom','1px solid #ccc');
    }else if( thisScrollTop == 0 ) {
      $('#header-fixed-wrap').css('border-bottom','none');
    }
  });

  var hoverDataBg = $(this).data('bg');
  var findNonAct = $('.commu-box-hover').find('.nonactive');
  var findAct = $('.commu-box-hover').find('.active');
  $('.commu-box-wrap').each(function(){
    var findhov = $(this).find('.commu-box-hover');
    $(this).mouseenter(function(){
      findhov.removeClass('nonactive');
      findhov.addClass('active');
    }).mouseleave(function(){
      findhov.removeClass('active');
      findhov.addClass('nonactive');
    });
  });

  var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

  $( ".play-btn.left" ).click(function() {
    $( ".swiper-button-prev" ).trigger( "click" );
  });
  $( ".play-btn.right" ).click(function() {
    $( ".swiper-button-next" ).trigger( "click" );
  });

  $('.close-btn').click(function(){
    // $('#header').css('opacity','0');
    // $('#gnb ul').css('opacity','1');
    // $('#icon-wrap').css('z-index','1000');
    $('#gnb').toggle();
  });
  $('.menu-btn').click(function(){
    $('#icon-wrap').css('z-index','0');
    $('#gnb').css('opacity','1');
  })
});
