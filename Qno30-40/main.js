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
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let i = 0; i < 10; i++) {
    if ()
        ;
}
