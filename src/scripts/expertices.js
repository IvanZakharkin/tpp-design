$(function (){
  $('.expertises__item-header').on('click', function(){
    var $this = $(this);
    var expertice = $this.parents('.expertises__item');
    expertice.toggleClass('expertises__item_active');
  })
});