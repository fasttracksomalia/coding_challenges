

// create a Set that holds a list of string names "Farhan", "Ali", "Saynab", "Ali", "Mohamed"
let myFriend = new Set();
myFriend.add("Farhan");
myFriend.add("Ali");
myFriend.add("Saynab");
myFriend.add("Ali");
myFriend.add("Mohamed");

console.log(myFriend)


// Check if a set contains a specific string 
if(myFriend.has("Aisha")) {
    console.log("This set has Aisha in it")
} else {
    console.log("This set doesn't have Aisha in it")

}
