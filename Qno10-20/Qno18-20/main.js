"use strict";
// Question no 18
// Seeing the World: Think of at least five places in the world you’d like to visit. 
let places = [
    "Tower of Pisa", "Burlin", "Istanbul", "Egyptian pyramids", "Colossem"
];
// As the above array is not in alphabetic order
console.log("Original Array", places);
// For arranging array in alphabetic order 
let sortedArray = places.sort();
console.log("Sorted Array", sortedArray);
//As the still in itd original state
console.log("Original Array", places);
// For Printing Array in reverse Alphabetic order 
let reversedArray = sortedArray.reverse();
console.log("Reversed Array", reversedArray);
