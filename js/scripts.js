//FRONT END
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".introPage").fadeOut(1000);
    $(".questionnaire").delay(1000).fadeIn(1000);
  });

  $("formTwo").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());

  });

});

//BACK END
var java = 0;
var cSharp = 0;
var php = 0;
var ruby = 0;

if(q1 === 1) {
  cSharp += 1;
  java += 1;
} else if (q1 === 2) {
  php += 1;
  ruby += 1;
}
