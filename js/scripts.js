//FRONT END
$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".introPage").fadeOut(1000);
    $(".questionnaire").delay(1000).fadeIn(1000);
  });

  //Q1
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    question1(q1);
    $(".q1Page").slideUp(500);
    $(".q2Page").delay(500).slideDown(500);
  });

  //Q2
  $("#formThree").submit(function(event) {
    event.preventDefault();
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    questionReUse(q2);
    $(".q2Page").slideUp(500);
    $(".q3Page").delay(500).slideDown(500);
  });

  //Q3
  $("#formFour").submit(function(event) {
    event.preventDefault();
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    questionReUse(q3);
    $(".q3Page").slideUp(500);
    $(".q4Page").delay(500).slideDown(500);
  });

  //Q4
  $("#formFive").submit(function(event) {
    event.preventDefault();
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    questionReUse(q4);
    $(".q4Page").slideUp(500);
    $(".q5Page").delay(500).slideDown(500);
  });

  //Q5
  $("#formSix").submit(function(event) {
    event.preventDefault();
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    questionReUse(q5);
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

//Q2, Q3, Q4, and Q5
var questionReUse = function(q) {
  if (q === 1) {
    ruby += 1;
  } else if (q === 2) {
    php += 1;
  } else if (q === 3) {
    cSharp += 1;
  } else if (q=== 4) {
    java += 1;
  }
}
