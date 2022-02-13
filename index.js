$(function(){
  $('.box').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('animate__animated animate__bounceInLeft');
    }
  });
});
$(function(){
  $('.button').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('animate__animated animate__bounceInRight');
    }
  });
});
