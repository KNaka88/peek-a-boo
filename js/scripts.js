$(document).ready(function() {
  $(".clickable#walruses1").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".clickable#walruses2").click(function() {
    $("#walruses-showing").toggle();
    $("#walruses-hidden").toggle();
  });
});
