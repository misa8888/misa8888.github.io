$(function() {
  $('#past-show').on('click', function() {
    $('#past-modal').fadeIn();
  });

  $('#current-show').on('click', function() {
    $('#current-modal').fadeIn();
  });

  $('#future-show').on('click', function() {
    $('#future-modal').fadeIn();
  });

  $('.close-modal').on('click', function(){
    $("#past-modal, #current-modal, #future-modal").fadeOut();
  });

});
