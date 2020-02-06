/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  var time = time.split(':');
  var [ hours, minutes ] = time;
  if(minutes[2] === 'p') hours = (12+Number(hours))+"";
  if(minutes[2] === 'a' && hours === '12' || hours === '24') hours = (Number(hours)-12)+"";
  if (hours.length == 1) hours = "0"+hours;
  minutes = minutes[0]+minutes[1];
  return hours +":"+ minutes
}

var a1 = toMilitary("3:00pm") // "15:00"
var a2 = toMilitary("9:15am") // "09:15"
var a3 = toMilitary("12:00pm") // "00:00"
var a4 = toMilitary("04:00") // "04:00"

console.log(a1,a2,a3,a4);