"use strict";
// question no 23
let aNumber = 19;
let otherNumber = 21;
console.log(aNumber == otherNumber); //predict false;
let personName = "Syed Atif";
console.log(personName == "Syed Atif"); //predict True;
let AsianCountry = "Bangladesh";
console.log(AsianCountry == "Bangladesh"); //predict true;
let roadLength = 5;
console.log(roadLength === 5); //predict true
let age = 49;
console.log(age > 40); //Perdict true
let CartPrice = 20000;
let myBudget = 12000;
console.log(CartPrice < myBudget); //predict False
let capitalofPakistan = "Islamabad";
console.log(capitalofPakistan == "Karachi"); //predict false
let pricesofCar = 3000000;
console.log(pricesofCar > 1000000); //predict false
let cityofAmerica = "London";
cityofAmerica = "Chicago";
console.log(cityofAmerica == "London"); //predict false
let GermanCity = "Hamsberdge";
GermanCity = "Berlin";
console.log(GermanCity != "Berlin"); //perdict false
// Quetion no 22
let classStudent = ["Nitesh", "Rohit", "Abdul Rehman", "Ashok", "Naseer"];
console.log(classStudent[6]);
// Question no 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) 
//Question no 26 
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// let AlienColor =  "Green";
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// if (AlienColor === "Green") {
//     console.log("The Player has just got 5 points for shooting the alien")
// }
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// let AlienColor="blue";
// if (AlienColor!="Green"){
//     console.log(" The player just earned 10 points.")
// }else{};
// • Write one version of this program that runs the if block and another that runs the else block.
// First Version
// if (AlienColor == "Green") {
//     console.log("The Player has just got 5 points for shooting the alien")
// }else{
//     console.log("");
// }
// Second Version 
// if(AlienColor=="blue"){
//     console.log("You have cleared this stage")
// }else{
//     console.log("Sorry! You are Failed")
//}
// QUestion no 27 ;
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let Aliens_Color = "Green";
if (Aliens_Color == "Green") {
    console.log("This Alien has Green Color");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log("The player just earned 5 points for shooting the alien.");
}
;
// • Write one version of this program that runs the if block and another that runs the else block.
// First Version 
if (Aliens_Color == "Green") {
    console.log("Your answer is true");
}
else {
    console.log("Your answer is wrong");
}
// Second Version 
if (Aliens_Color == "Blue") {
    console.log("Your answer is true");
}
else {
    console.log("your answer is wrong");
}
;
