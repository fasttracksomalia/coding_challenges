// wrtie a tradition function that multiplies two number and returns the value print the value outside the function

// function multiply(num1, num2) {
//     let result = num1 * num2
//     return result;
// }

// console.log(multiply(5,3))


// write a for loop that prints your first name 10 times

// for(let i =0; i< 10; i++) {
//     console.log("ahmed")
// }

// write a while loop that prints your surname 15 times

// var i =0;
// while (false) {
//     console.log("Dini")
//     i++
// }

// write a do...while that prints your surname just once times

// var i =0;
// do {
//     console.log("Dini..")
//     i++
// }
// while (i < 20) 

// code an array of 10 element of type string (for example 10 students)

// let students = ["John", "Layland", "Ali", "Bushra","Ahmed","Liban", "Fatima", "Noora", "Hidaya", "Bilal"]


// write a for loop that iterates through each element and prints each elelement

// for (let i = 0; i < students.length;i++) {
//     console.log(students[i])
// }

// write an infinite for loop

// for (;;){
//     console.log('hello')
  
// }

// write an infinite loop using a while loop

// while(true) {
//     console.log("hello 2")
// }



// name few functions that come with arrays, that allow you to interate through the elements

// students.forEach()
// students.map()
// students.filter()
// students.reduce()

// implement forEach function that prints all elements of the array below

// students.forEach(
//    function (value,index) {
//       console.log("the element is " + value + " and its index is " + index)
//    } 
// )



// arrow functions
// switch
// maps
// sets
// 


// convert the traditional function to an arrow function 
// let multiply = function (num1, num2) {
//     let result = num1 * num2
//     return result;
// }

// console.log(multiply(5,3))

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

// convert the if/else/if to switch statement

switch (day) {
    case "Monday":
        console.log("it is work time.. switch")
        break;
    case "Tuesday":
        console.log("it is school time.. switch")
        break;

    default:
        console.log("it is off time.. switch")
        break;
}



