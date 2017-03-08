$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  console.log(wScroll);

  $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll / 2.5 +'%)'

  });
   /*when user scrolls, logo is moved down half the user's scroll speed*/

   $('.far-boat').css({
       'transform' : 'translate(0px, '+ wScroll /2 +'%)'

   });

   $('.near-boat').css({
       'transform' : 'translate(0px, '+ wScroll /1.5 +'%)'

   });


}); /*how far user scrolls from the top*/
