(function ($) {
  Drupal.behaviors.ctaddcal = {
    attach: function (context, settings) {

      $('.ct-addcal-list').addClass('addcal-closed');

      $('.ct-addcal-toggle').click(function(e) {
        e.preventDefault();

        var list_class = $('.' + $(this).attr('data-ct-list-class'));

        if($(list_class).is(':visible')) {
          $(list_class).slideUp();
          $(list_class).addClass('addcal-closed');
        } else {
          $(list_class).slideDown();
          $(list_class).removeClass('addcal-closed');
        }
      });
    }
  };
})(jQuery);

