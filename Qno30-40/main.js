"use strict";
//Question no 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
let usernames = ["Admin", "M Ayyan", "M Ali", "M Anees", "M Shahzaib"];
function greet(names) {
    if (names == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else if (names == "M Ali" || "M Ayyan" || "M Shahzaib") {
        console.log(`Hello ${names}!Thank you for logging in again`);
    }
    else {
        console.log("Please enter correct username");
    }
}
greet("Admin");
// Question no 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
if (usernames.length != 0) {
    console.log("The List of Users is not empty");
}
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
usernames.pop();
// console.log(usernames.length);
if (usernames.length == 0) {
    console.log("We need to find some users");
}
;
// Question no 31
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["Mohsin Ghori", "Saad", "Alex", "Abhishai", "Joshwa", "Eric"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["John", "Salman", "Mohsin Ghori", "David", "Adam", "Alex"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
for (let a = 0; a < 1; a++) {
    function info(name) {
        if (current_users.includes(name)) {
            console.log(`The username ${name} has already been taken`);
        }
        else if (new_users.includes(name)) {
            console.log(`The username ${name} has already been taken`);
        }
        else {
            console.log(`The username ${name} is available`);
        }
    }
    ;
    info("Mohsin Ghori");
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Question no 33 
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let nums of num) {
    let ordinal;
    if (nums === 1) {
        ordinal = "st";
    }
    else if (nums == 2) {
        ordinal = "nd";
    }
    else if (nums == 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${nums}${ordinal}`);
}
// Question no 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let myFavouritePizzas = ["Turkish Kabab Pizza", "Tikka Faggita Pizza", "Cheese Pizza"];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < 3; i++) {
    console.log(myFavouritePizzas[i]);
}
for (let i = 0; i < 3; i++) {
    console.log(`I really like ${myFavouritePizzas[i]}`);
}
;
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("It is not wrong to say that pizza is one of my favourite meals because of its mouthwatering smell.It is so yummy,cheesy and contains vegetables also.I really like pizza");
// Question no 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Horse", "Camels", "Mules"];
for (let a = 0; a < 3; a++) {
    console.log(`${animals[a]} can be human companion because it can ease the human work by lend the hand in war,traveling a long distance etc.`);
}
console.log("These animals have a common workbase because of their nature and behaviour.In the old they are the mean o tranportation i.e. peoples use them for traveling and also they all are pet animals");
// Queestion no 36 
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
// function make_shirt(text:string,num:number){
//     console.log(`
//     The number of this shirt is ${num}
//     The title of this shirt is ${text} `);
// }
// make_shirt("'Hold on to it,Let them overthink this'",30);
// Question no 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
let shirt_msg = "I love TypeScript";
let default_size = "Large" || "medium";
function make_shirt(size) {
    if (size == "Large") {
        console.log(`
        The size of this shirt is ${size}
        The title of this shirt is ${shirt_msg} `);
    }
    else if (size == "medium") {
        console.log(`
    The size of this shirt is ${size}
    The title of this shirt is ${shirt_msg} `);
    }
    else {
        console.log(`
    The size of this shirt is ${size}
    The title of this shirt is 'Hello Kids'`);
    }
}
make_shirt("small");
// Question no 38 
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
let default_cities = ["Karachi", "Berlin"];
function describe_city(city, country) {
    if (city == "Karachi " && country == "Pakistan") {
        console.log(`Karachi is in Pakistan`);
    }
    else if (city == "Berlin" && country == "Germany") {
        console.log(`Berlin is in Germany`);
    }
    else
        (console.log(`${city} is in ${country}`));
}
describe_city("Karachi", "Pakistan");
describe_city("Istanbul", "Turkey");
describe_city("Berlin", "Germany");
// Question no 39 
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    console.log(`${city},${country}`);
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
city_country("Karachi", "Pakistan");
city_country("Frankfurt", "Germany");
city_country("Dhaka", "Bangladesh");
// Question no 40 
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, album_title, tracks) {
    let album = {
        artist: artist,
        album_title: album_title,
        tracks: tracks
    };
    return album;
}
;
let Atifaslam = make_album("Atif Aslam", "Jal Pari");
let eminem = make_album("Eminem", "Recovery", 3);
console.log(Atifaslam);
console.log(eminem);
