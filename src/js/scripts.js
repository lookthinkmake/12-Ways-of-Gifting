'use strict';

$(document).ready(function(){
  $('.gift-section-header').click(function(){
    if($(this).hasClass('expanded')){
      $('.gift-section-expanded').slideUp(300);
      $('.gift-section-header').removeClass('expanded');
    }
    else{
      $('.gift-section-expanded').slideUp(300);
      $('.gift-section-header').removeClass('expanded');
      $(this).addClass('expanded');
      $(this).next('.gift-section-expanded').slideDown(300);
      $('html, body').animate({scrollTop: $(this).offset().top}, 400);
    }
  });
});
