// question no 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False. 

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. 
let aNumber:number=19;
let otherNumber:number=21;
console.log(aNumber==otherNumber);//predict false;

let personName="Syed Atif";
console.log(personName=="Syed Atif")//predict True;

let AsianCountry="Bangladesh";
console.log(AsianCountry=="Bangladesh");//predict true;

let roadLength:number=5;
console.log(roadLength===5);//predict true

let age=49;
console.log(age>40);//Perdict true

let CartPrice=20000;
let myBudget=12000;
console.log(CartPrice<myBudget);//predict False

let capitalofPakistan="Islamabad";
console.log(capitalofPakistan=="Karachi");//predict false

let pricesofCar=3000000;
console.log(pricesofCar>1000000);//predict false

let cityofAmerica ="London";
cityofAmerica="Chicago";
console.log(cityofAmerica=="London");//predict false

let GermanCity="Hamsberdge";
GermanCity="Berlin";
console.log(GermanCity!="Berlin");//perdict false
;

// Question no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let sweetsQuantity=1.5;
let reqQuantity=2;
console.log(sweetsQuantity>=reqQuantity);//Predict False

let cartItems =4;
// If there is some increase in cartItems 
cartItems=6;
console.log(cartItems>4);//Predict true;

let astudentname="Shahzaib";
console.log(astudentname==="Shahzaib")//Predict True

let carColor="Black";
console.log(carColor!="Blue")//Predict False;

let studentNumber = 43;
let studentAge = 13 ;
// If we require both conditions to be true
console.log(studentNumber<40 && studentAge <12 )//Predict True

let bagColor ="Brown";
let walletColor="Black";
console.log(bagColor=="Brown" || walletColor=="Brown")//predict true

let MyCartItems:any=["Potatoes","Tomatos","Onion","Garlic","Lesson","Wheet","Rice","Red Chilli"];
console.log(MyCartItems=="Black Chilli Powder")//Predict False
// This means that the Black Chilli Powder is not Present in MyCartItems;

console.log(MyCartItems=="Rice")//Predict True
// This means that rice are present in MyCartItems 















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




