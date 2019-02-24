$(document).ready(function() {
  $("h2#start").click(function(){
    $("#test").fadeToggle("slow");
});
$("button#submit").click(function() {

  var answer1=parseInt($("input:radio[name=ans1]:checked").val());
  var answer2=parseInt($("input:radio[name=ans2]:checked").val());
  var answer3=parseInt($("input:radio[name=ans3]:checked").val());
  var answer4=parseInt($("input:radio[name=ans4]:checked").val());
  var answer5=parseInt($("input:radio[name=ans5]:checked").val());
  var sum=(answer1+answer3+answer2+answer4+answer5); 
