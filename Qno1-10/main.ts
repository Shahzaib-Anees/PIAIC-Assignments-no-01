// Question no 01
// Already done in class 

// Question # 02
let personMessage = "Steward Edison";
let myMessage="Are you free today?"
console.log(`Hello ${personMessage}!${myMessage} `)

 //  Question # 03
let a="ayyan";
// For LowerCase
console.log(a.toLowerCase());
// For Uppercase 
console.log(a.toUpperCase());
// for titlecase
let titlecaseName=a.charAt(0).toUpperCase() +a.slice(1).toLowerCase();
console.log(titlecaseName);


// Question no 04
let aFamousPerson="Eleanor Rooseveit";
console.log(`${aFamousPerson} says,"The Future belongs to those who believes in the beauty of their dreams."`);

// Question no 05
let FamousPerson = "'Thomas Jefferson' says;";
let message="'I find that the hardest I work,the more luck I seems to have.'"
console.log(`${FamousPerson} ${message}`); 

// Question mo 06
let boyName:string="\t   Mohammad Shahzaib   \n";
//. For Name with whitespaces
console.log("This name is with whitespaces:",boyName);
//. For Name without Whitespaces 
let strippedName=boyName.trim();
console.log("This is strippedName:",strippedName);

// Question no 07
// For Multiplication  
let d=2;
let e=4;
console.log(d*e);

// or division 
let f=16;
let g=2;
console.log(f/g);

// for Addition 
let h=4;
let i=4;
console.log(i+h);

// for Substraction 
let j=8;
let k=16;
console.log(k-j);


// Question 08 
console.log(4+4);
console.log(2+6);
console.log(1+7);
console.log(3+5);
console.log(8+0);

// Question no 09
let myFavoriteNumber = 7;
let aMessage='My Favorite Number is';
    console.log(aMessage,myFavoriteNumber);

// Question no 10 
// Storing string in a variable and print it in console 
let  AmericanCity="'Chicago'";
console.log(`${AmericanCity} is the city of America`);    

// Using Condition of TypeScript 
// in this we use typescript's conditions if else and print the output in console
let myMonthlySavings = 5000;
let ShirtPrices=1200;
if(myMonthlySavings>=ShirtPrices){
    console.log("In your Budget");
}else{
    console.log("You can't afford");
}