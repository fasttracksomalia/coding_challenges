/*
use if/else/if chained to check the day of the week 
and print "it is work time" for monday, tuesday
"it is school time", for friday "it is off day" 
*/

let day = "Tuesday"
if (day == "Monday") {
    console.log("it is work time")
} else if (day == "Tuesday") {
    console.log("it is school time")
} 
else {
    console.log("it is off time")
}


var age = 9;

if(age <= 4) {
    console.log("Go to Nursery")
} else if (age > 4 && age <= 5) {
    console.log("Go to Reception")
} else if (age > 5 && age <= 11 ) {
    console.log("Go to Primary")
} else if (age > 11 && age <= 16 ) {
    console.log("Go to Secondary School")
}  else if (age > 16 && age <= 18 ) {
    console.log("Go to 6th Form or College")
}  else {
    console.log("Go to University")
}