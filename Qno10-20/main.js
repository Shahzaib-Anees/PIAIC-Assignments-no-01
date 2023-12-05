"use strict";
// Question no 11;
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. 
let friendsName = [
    "Abdul Rehman", "Mohammad Ahsan", "Saad Ahmed Siddiqui", "Abdul Moid", "Mohammad Ummar"
];
// For First Element 
console.log(friendsName[0]);
// for Second Element 
console.log(friendsName[1]);
// For third Element 
console.log(friendsName[2]);
//   For Fourth Element 
console.log(friendsName[3]);
// For Fifth Element 
console.log(friendsName[4]);
// Question no 12;
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. 
// Considering the above array 
let message = "Welcome to Coding World!";
// For First Element
console.log(`${message} ${friendsName[0]}`);
// For Second Element 
console.log(`${message} ${friendsName[1]}`);
// For Third Element 
console.log(`${message} ${friendsName[2]}`);
// For Fourth Element 
console.log(`${message} ${friendsName[3]}`);
// For Fifth Element 
console.log(`${message} ${friendsName[4]}`);
// Question no 13 
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let myFavouriteTransportation = [
    "Honda Civics", "Audi Etron", "McLaren", "Bugatti Chiron"
];
myFavouriteTransportation.map((items) => (console.log(`I would like to Own a ${items}`)));
// Question no 14 
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner 
let guests = [
    "Sir Hamza Khan", "Alveena", "Sir Nabeel Khan"
];
guests.map((invite) => (console.log(`${invite} "You are invited to a dinner wih us tonight . Your presence will be prosperous for us" `)));
// Question no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Considering the above guest list.
//  Sir Nabeel Khan can't make to us for a dinner.That's why we have to invite other guest.
let PoppedArray = guests.pop();
guests.push("Sir Imran");
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests.push("Sir Imran");
guests.map((invite) => (console.log(`${invite}! "Can you join us on a dinner tonight?" `)));
// For Printing the name of Popped Guest 
console.log(PoppedArray);
// • Print a second set of invitation messages, one for each person who is still in your list.
// Question no 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
let newGuests = guests.push("Saad Ahmed", "Abhishai Nishat", "Mohsin Ghori");
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table 
guests.map((invite) => (console.log(`${invite}! "Can you join us on a dinner tonight? I have Found a bigger dinner table" `)));
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let middleGuest = "Mohammad Ayyan";
let middleGuestIndex = guests.length / 2;
guests.splice(middleGuestIndex, 0, middleGuest);
// console.log(guests);
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. 
let beginGuest = guests.unshift("Sawera");
// console.log(guests);
guests.map((invitations) => (console.log(`${invitations}!Can you join us tonight at a dinner table?
 I have found a bigger table and arrange it for a little gathering`)));
// Question no 17 
