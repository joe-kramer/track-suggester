$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();

    $(".introPage").fadeOut(1000);
    $(".questionnaire").delay(1000).fadeIn(1000);
  });
});
