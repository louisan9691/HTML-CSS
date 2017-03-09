$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

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



   /* console log/ something triggers when <h1 class="venice"> hit the top of the browser */
   if(wScroll > $('.venice-pics').offset().top - ($(window).height()/ 1.2)){

    $('.venice-pics .row img').each(function(i){

      setTimeout(function(){
        $('.venice-pics .row img').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);

    /*  150 * (i+1))*/
    });
   }


   if(wScroll > $('.large-window').offset().top - $(window).height()){
     $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});


    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 4) ;
     $('.window-tint').css({'opacity': opacity})
   };



    /*Floating elements*/

    if(wScroll > $('.blog-posts').offset().top - $(window).height()){
      var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350) ;
      $('.post-1').css({'transform': 'translate('+ offset + 'px,'+ Math.abs(offset * .2) + 'px)'})

        $('.post-3').css({'transform': 'translate('+ Math.abs(offset) + 'px, ' + Math.abs(offset * .2) + 'px)'})
    }



}); /*how far user scrolls from the top*/
