"use strict";
// Question no 18
// Seeing the World: Think of at least five places in the world you’d like to visit. 
let places = [
    "Tower of Pisa", "Burlin", "Istanbul", "Egyptian pyramids", "Colossem"
];
// • Store the locations in a array. Make sure the array is not in alphabetical order. 
//• Print your array in its original order. 
// As the above array is not in alphabetic order
// console.log("Original Array",places);
// • Print your array in alphabetical order without modifying the actual list. 
// console.log("Sorted Array",places.sort());
// • Show that your array is still in its original order by printing it. 
console.log("Original Array", places);
//• Print your array in reverse alphabetical order without changing the order of the original list. 
// console.log("Reversed Array",places.reverse());
// • Show that your array is still in its original order by printing it. 
console.log("Original Array", places);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. 
// For storing array in alphabetic order ;
let sortedArray = places.sort();
console.log(sortedArray);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
// For Storing Array in reverse Alphabetic order; 
let reversedArray = sortedArray.reverse();
console.log("Reversed Array", reversedArray);
// Question no 20 
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let listOfMountains = [" K2", "Mount Everest", "Karakoram Mountains", "Himalya Mountain Region"];
for (let i = 0; i < listOfMountains.length; i++) {
    console.log(listOfMountains[i]);
}
