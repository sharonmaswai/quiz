$(document).ready(function() {

  $("h2#start").click(function(){
    $("#test").fadeToggle("slow");
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

} else if (sum<50) {
  document.getElementById("result").innerHTML="You have " + sum +  " %";
  document.getElementById("comment").innerHTML="You failed the test, please retake the test.";

} else {
  document.getElementById("comment").innerHTML="Please answer all Questions before you submit.";


}


 });
 $("button#submit").click(function(){
  $("#test").hide();
  $("#score").show();
 });
 $("h2#retake").click(function() {
   $("#test").show();
   $("#score").hide();
 });




});
