// Question no 41 
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let show_magicians=["Derren Brown","David Blaine","Criss Angel","Lance Burton"];

console.log(show_magicians);

// Question no 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_greet(){
   for (let a=0;a<4;a++){
    console.log(`Hello Mr.${show_magicians[a]}!`)
   }
}

make_greet();

// Question no 42 
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Continuing the show_magicians array 
let magician_names=show_magicians;
function make_great(){
    for (let a=0;a<4;a++){
    magician_names[a]="Hello"+" "+magician_names[a]+"!";
    }
    return magician_names;
}
make_great();
console.log(magician_names);

// Question no 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich_items(items:string[]){
    console.log(`
    The Sandwhich ordered has following topping,
    ${items}`)
}
sandwich_items(["Butter","Mayo","Peanut Butter Jelly","Cream Cheese"]);
sandwich_items(["Sliced Cooked Poultry","Tomato","Mayonaise","Lettuce"]);
