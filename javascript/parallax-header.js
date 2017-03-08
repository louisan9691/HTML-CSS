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

   /* console log/ something triggers start when <h1 class="venice"> hit the top of the browser */
   if(wScroll > $('.venice-pics').offset().top - ($(window).height()/ 1.2)){

    $('.venice-pics .row img').each(function(i){

      setTimeout(function(){
        $('.venice-pics .row img').eq(i).addClass('is-showing');
      },150 * (i+1));
    });
   }
}); /*how far user scrolls from the top*/
