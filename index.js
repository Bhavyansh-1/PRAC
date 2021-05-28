
var clickSound = new Audio("click.wav");
var gameover = new Audio("preview.mp3");
var comp =[];
var user=0;
var level=0;
var compCounter=0;
var matchCO=0;
var user;
var popSound = new Audio("pop.wav");
function numberGenerator(){
  level++;
  document.getElementById('head').innerHTML="Level "+level;
  var a = Math.ceil(Math.random()*4);
  switch(a) {
case 1:
setTimeout(function(){document.getElementById('green').classList.add("pressed");},200);
setTimeout(function(){
document.getElementById('green').classList.remove("pressed");
},100);
break;
case 2:
setTimeout(function(){document.getElementById('red').classList.add("pressed");},200);

setTimeout(function(){
document.getElementById('red').classList.remove("pressed");
},100);

break;
case 3:
setTimeout(function(){document.getElementById('yellow').classList.add("pressed");},200);
setTimeout(function(){
document.getElementById('yellow').classList.remove("pressed");
},100);

  break;
default:
setTimeout(function(){document.getElementById('blue').classList.add("pressed");},200);
setTimeout(function(){
document.getElementById('blue').classList.remove("pressed");
},100);

}
  comp[compCounter]=a;
  compCounter++;
  matchCO=0;

}
function match(){
if(user==comp[matchCO])
{
  matchCO++;
  if(matchCO==compCounter){
    numberGenerator();
  }
}
else{
document.getElementById('head').innerHTML="Game Over";
document.getElementById('head').style.color="red";
document.getElementById('green').style.background="white";
document.getElementById('red').style.background="white";
document.getElementById('yellow').style.background="white";
document.getElementById('blue').style.background="white";
document.getElementById('main').style.background="black";
document.getElementById('btn').style.display="block";
document.getElementById('btn').innerHTML="Restart";
document.getElementById('btn').style.color="white";
document.getElementById('btn').style.background="red";
document.getElementById('btn1').style.display="block";
gameover.play();
}
}
