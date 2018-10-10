$('#popup_icon_close').on('click', function() {
  $('#popup_overlay-black').fadeOut();
});

$('.btn_popup').on('click', function() {
  $('#popup_overlay-black').fadeIn();
});