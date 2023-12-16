//Question no 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
let usernames = ["Admin", "M Ayyan", "M Ali", "M Anees", "M Shahzaib"];
function greet(names:string) {
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
greet("Admin")
