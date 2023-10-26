
/* 
    write an literal object who name player1,
    has has the fields below and a function that is called shoot()
    - firstName : "Cristiano",
    - lastName: "Ronaldo",
    - age : 38,
    - hasKids : true,
    - shoot()
*/

let player1 = {
    firstName : "Cristiano",
    lastName: "Ronaldo",
    age : 38,
    hasKids : true,

    shoot : function () {
        console.log( this.lastName + " shot the ball")
    }
}

console.log(player1.shoot())

