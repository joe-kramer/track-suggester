//FRONT END
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".introPage").fadeOut(1000);
    $(".questionnaire").delay(1000).fadeIn(1000);
  });

  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    question1(q1);
    $(".q1Page").slideUp(500);
    $(".q2Page").delay(500).slideDown(500);
  });

  $("#formThree").submit(function(event) {
    event.preventDefault();
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    question2(q2);
  });

});

//BACK END
var java = 0;
var cSharp = 0;
var php = 0;
var ruby = 0;

//Q1
var question1 = function(q1) {
  if (q1 === 1) {
    cSharp += 1;
    java += 1;
  } else if (q1 === 2) {
    php += 1;
    ruby += 1;
  }
}

//Q2
var question2 = function(q2) {
  if (q2 === 1) {
    ruby += 1;
  } else if (q2 === 2) {
    php += 1;
  } else if (q2 === 3) {
    cSharp += 1;
  } else if (q2 === 4) {
    java += 1;
  }
}
