const { text } = require("express");

function scuberGreetingForFeet(distance){
  // Write your code here!
 let message; 
if(distance <=400){
message="This one is on me!";
}else if(distance>=400 && distance<2000){
  message="That will be twenty bucks.";
}if(distance>2000){
  message="I will gladly take your thirty bucks.";
}if(distance>2500){
  message="No can do."
}
return message;
}



function ternaryCheckCity(city){
  // Write your code here!
return city==="NYC"? "Ok, sounds good.":"No go."

}

function switchOnCharmFromTip(tip){
  // Write your code here!
let message;
  switch(tip){
case 'generous':
message='Thank you so much.'
return message;
break;
case 'not as generous':
  message='Thank you.'
  return message;
  break;
  default:
    message='Bye.'
  return message;
  }
  
}