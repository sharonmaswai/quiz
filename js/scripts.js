<<<<<<< HEAD
$(document).ready(function() {

  $("h2#start").click(function(){
    $("#test").fadeToggle("30000");
    $("#score").hide();
  });

  $("button#submit").click(function() {

  var answer1=parseInt($("input:radio[name=ans1]:checked").val());
  var answer2=parseInt($("input:radio[name=ans2]:checked").val());
  var answer3=parseInt($("input:radio[name=ans3]:checked").val());
  var answer4=parseInt($("input:radio[name=ans4]:checked").val());
  var answer5=parseInt($("input:radio[name=ans5]:checked").val());
  var sum=(answer1+answer3+answer2+answer4+answer5);

if (sum>= 80){
  document.getElementById("result").innerHTML="You have " + sum + " %";
  document.getElementById("comment").innerHTML="Congratulations!! You have mastered Javascript."


} else if (sum>= 50) {
  document.getElementById("result").innerHTML="You have " + sum + " %";
  document.getElementById("comment").innerHTML="That was a fair attempt.";

} else if  (sum<50) {
  document.getElementById("result").innerHTML="You have " + sum +  " %";
  document.getElementById("comment").innerHTML="You failed the test, please retake the test.";

  }

else {
  document.getElementById("comment").innerHTML="You have not answered all the question.";

  }

});
$("button#submit").click(function(){
  $("#test").hide();
  $("#score").show();

});



});
=======
$("document").ready(function(){
  $("h2#start").click(function(){
    $("#test").fadeToggle("slow");
});
$("#submit").click(function() {

  var answer1=$("input:radio[name=ans1]:checked").val();
  var answer2=$("input:radio[name=ans2]:checked").val();
  var answer3=$("input:radio[name=ans3]:checked").val();
  var answer4=$("input:radio[name=ans4]:checked").val();
  var answer5=$("input:radio[name=ans5]:checked").val();
  var correct=[correct1,correct2, correct3, correct4, correct5];

  if (answer1.toString() === "toString()") {
    correct1 = 20;
  } else {
    correct1 = 0;
  }
  if (answer2.toString()=== "pop()") {
    correct12 = 20;
  } else {
    correct2 = 0;
  }
  if (answer3.toString()==="forEach()") {
    correct3 = 20;
  } else {
    correct3 = 0;
  }
  if (answer4.toString()==="False") {
    correct4 = 20;
  } else {
    correct4 = 0;
  }
  if (answer5.toString()==="fadeIn()") {
    correct5 = 20;
  } else {
    correct5 = 0;
  }
  var total=(correct1+correct2+correct3+ correct4+ correct5);
  document.getElementById('result').innerHTML="You have scored " + total + " %";

});
});
>>>>>>> master
