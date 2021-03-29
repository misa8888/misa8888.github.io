$(function() {
  $('.past-show').on('click', function() {
    $('#past-modal').fadeIn();
  });

  $('.current-show').on('click', function() {
    $('#current-modal').fadeIn();
  });

  $('.future-show').on('click', function() {
    $('#future-modal').fadeIn();
  });

  $('.major-show').on('click', function() {
    $('#major-modal').fadeIn();
  });

  $('.archery-show').on('click', function() {
    $('#archery-modal').fadeIn();
  });

  $('.study-show').on('click', function() {
    $('#study-modal').fadeIn();
  });

  $('.close-modal').on('click', function(){
    $("#past-modal, #current-modal, #future-modal, #major-modal, #archery-modal, #study-modal").fadeOut();
  });

});
