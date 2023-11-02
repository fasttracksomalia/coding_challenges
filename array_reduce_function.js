// add all of these numbers and return one single sum value
const ages = [13, 21, 34, 24, 5];


let sumAge = ages.reduce(
    (total,currentElement) => total = total + currentElement)

console.log(sumAge)


// let the reduce function above start with an initial value of 200

// let sumAge = ages.reduce(
//     (total,currentElement) => total = total + currentElement,200)

console.log(sumAge)