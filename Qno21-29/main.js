"use strict";
// Question no 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items
let userProfile = {
    FirstName: "Mohammad Shahzaib",
    FatherName: "Mohammad Anees",
    age: 19,
    useremail: "shahzaibanees62",
    password: 12345678,
};
// Program which Prints the userInformation 
function userInfo() {
    console.log(userProfile);
}
userInfo();
// Question no 22 
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let famousPlacesPakistan = [
    "Lahore Fort", "Badshahi Mosque", "Mazar e Quaid", "Faisal Masjid", "Valley of Mohen jo Daro", "Nathiagali"
];
let validIndex = 7;
let mostFamous = famousPlacesPakistan[validIndex];
console.log(mostFamous);

// question no 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False. 
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 

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
console.log(GermanCity != "Berlin"); //perdict false;

// Question no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let sweetsQuantity = 1.5;
let reqQuantity = 2;
console.log(sweetsQuantity >= reqQuantity); //Predict False
let cartItems = 4;
// If there is some increase in cartItems 
cartItems = 6;
console.log(cartItems > 4); //Predict true;
let astudentname = "Shahzaib";
console.log(astudentname === "Shahzaib"); //Predict True
let carColor = "Black";
console.log(carColor != "Blue"); //Predict False;
let studentNumber = 43;
let studentAge = 13;
// If we require both conditions to be true
console.log(studentNumber < 40 && studentAge < 12); //Predict True
let bagColor = "Brown";
let walletColor = "Black";
console.log(bagColor == "Brown" || walletColor == "Brown"); //predict true
let MyCartItems = ["Potatoes", "Tomatos", "Onion", "Garlic", "Lesson", "Wheet", "Rice", "Red Chilli"];
console.log(MyCartItems == "Black Chilli Powder"); //Predict False
// This means that the Black Chilli Powder is not Present in MyCartItems;
console.log(MyCartItems == "Rice"); //Predict True
// This means that rice are present in MyCartItems

// Question no 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "Green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "Green") {
    console.log("The player just earned 5 points.");
}
else {
    console.log("");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// The program that passes the If test 
if (alien_color == "Green") {
    console.log("true");
}
else {
    console.log("False");
}
;
// The Program that fails the If test;
if (alien_color == "Yellow") {
    console.log("true");
}
else { };

//Question no 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let AlienColor = "Green";
// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (AlienColor === "Green") {
    console.log("The Player has just got 5 points for shooting the alien");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
AlienColor = "Blue";
if (AlienColor != "Green") {
    console.log(" The player just earned 10 points.");
}
else { }
;
// • Write one version of this program that runs the if block and another that runs the else block.
// First Version
// Else Runner 
if (AlienColor == "Green") {
    console.log("The Player has just got 5 points for shooting the alien");
}
else {
    console.log("Sorry! You are Failed");
}
// Second Version
// If Runner 
if (AlienColor == "Blue") {
    console.log("You are correct");
}
else {
    console.log("Sorry! You are Failed");
}

// Quesyion no 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
AlienColor="Green";
// • If the alien is green, print a message that the player earned 5 points.
if(AlienColor=="Green"){
    console.log("The player has earned 5 Points")
}else{};
// • If the alien is yellow, print a message that the player earned 10 points.
AlienColor="Yellow";
if(AlienColor=="Yellow"){
    console.log("The player has earned 10 Points")
}else{};

// • If the alien is red, print a message that the player earned 15 points.
AlienColor="Red";
if(AlienColor=="Red"){
    console.log("The player has earned 15 Points")
}else{};

// Question no 28
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Question no 28 
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then
// • If the person is less than 2 years old, print a message that the person is a baby.
let PersonAge = 3;
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (PersonAge < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (PersonAge == 4 || PersonAge<13) {
    console.log("The Person is a Kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (PersonAge == 13 || PersonAge < 20) {
    console.log("The Person is a Teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (PersonAge == 20 || PersonAge < 65) {
    console.log("The Person is an adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The Person is an Elder");
}

// Question no 29 
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let FruitNames = [
    "Mango", "Banana", "Pomegranate", "Pear", "Guava"
];
if (FruitNames.includes("Mango")) {
    console.log("true");
}
if (FruitNames.includes("Pear")) {
    console.log("true");
}
if (FruitNames.includes("Pomegranate")) {
    console.log("true");
}
if (FruitNames.includes("Guava")) {
    console.log("true");
}
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favourite_fruits = ["Watermelon", "Grapes", "Mango"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favourite_fruits.includes("Mango")) {
    console.log("You really like Mango");
}
else {
    console.log("False");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("You really like Grapes");
}
else {
    console.log("False");
}
if (favourite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon");
}
else {
    console.log("False");
}
if (favourite_fruits.includes("Guava")) {
    console.log("You really like Guava");
}
else {
    console.log("False");
}
if (favourite_fruits.includes("Pomegranate")) {
    console.log("You really like Pomegranate");
}
else {
    console.log("False");
}
