(function($){"use strict";jQuery(document).ready(function($){$('.banner .scroll-down').on('click',function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},500);return false;}}});$('.single-price').on('mouseover',function(){$(this).addClass('special');});$('.single-price').on('mouseout',function(){$(this).removeClass('special');});});var lastScrollTop='';$(window).on('scroll',function(){var ScrollTop=$('.scroll-to-top');if($(window).scrollTop()>300){ScrollTop.fadeIn(1000);}else{ScrollTop.fadeOut(1000);}
var st=$(this).scrollTop();var mainMenuTop=$('.header-bottom');if($(window).scrollTop()>300){if(st>lastScrollTop){mainMenuTop.removeClass('nav-fixed');}else{mainMenuTop.addClass('nav-fixed');}}else{mainMenuTop.removeClass('nav-fixed ');}
lastScrollTop=st;});$(window).on('load',function(){var preLoder=$(".sec");preLoder.fadeOut(1000);});$('.carousel-control-prev').click(function(){let target=$(this).data('target')
$(target).carousel("prev");})
$('.carousel-control-next').click(function(){let target=$(this).data('target')
$(target).carousel("next");})}(jQuery));function displayButtonPost(){if($("#new-comment").val().length>0){$(" #button-facebook ").removeClass("hidden");}
else{$(" #button-facebook ").addClass("hidden");$(" #server_busy ").addClass("hidden");}}
function sendCommentFacebook(){$(" #server_busy ").removeClass("hidden");}