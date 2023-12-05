// Question no 11;
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time. 
let friendsName: string[] = [
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

let myFavouriteTransportation: string[] = [
    "Honda Civics", "Audi Etron", "McLaren", "Bugatti Chiron"
]
myFavouriteTransportation.map((items) => (
    console.log(`I would like to Own a ${items}`)
));

// Question no 14 
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner 
let guests = [
    "Sir Hamza Syed", "Alveena", "Sir Nabeel Khan"
]
guests.map((invite) => (
    console.log(`${invite} "You are invited to a dinner wih us tonight . Your presence will be prosperous for us" `)
));


// Question no 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Considering the above guest list.
//  Sir Nabeel Khan can't make to us for a dinner.That's why we have to invite other guest.

let PoppedArray = guests.pop();

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests.push("Sir Imran");
// • Print a second set of invitation messages, one for each person who is still in your list. 
guests.map((invite) => (
    console.log(`${invite}! "Can you join us on a dinner tonight?" `)
));

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it. 
// For Printing the name of Popped Guest 
console.log(PoppedArray);


// Question no 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
let newGuests = guests.push("Saad Ahmed", "Abhishai Nishat", "Mohsin Ghori")

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table 
guests.map((invite) => (
    console.log(`${invite}! "Can you join us on a dinner tonight? I have Found a bigger dinner table" `)
));

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let middleGuest: string = "Mohammad Ayyan";

let middleGuestIndex = guests.length / 2;
guests.splice(middleGuestIndex, 0, middleGuest);
// console.log(guests);

// • Add one new guest to the beginning of your array. 
let beginGuest = guests.unshift("Sawera");
// console.log(guests);
guests.map((invitations) => (
    console.log(`${invitations}!Can you join us tonight at a dinner table?
 I have found a bigger table and arrange it for a little gathering`)
));

// Question no 17 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
let confirmGuests = guests.slice(0, 2);
console.log("Final Guest list", confirmGuests);
// console.log(guests);
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.  
confirmGuests.map((invitations) => (
    console.log(`${invitations}!Can you join us on a dinner table tonight?
    I can invite only two persons.`)
));

//    • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner 
// console.log("Original Guest list",guests);
let firstPoppedGuest = guests.pop();
console.log(`${firstPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`)
let secondPoppedGuest = guests.pop();
console.log(`${secondPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`);
let thirdPoppedGuest = guests.pop();
console.log(`${thirdPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`);
let fourthPoppedGuest = guests.pop();
console.log(`${fourthPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`);
let FifthPoppedGuest = guests.pop();
console.log(`${FifthPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`);
let sixthPoppedGuest = guests.pop();
console.log(`${sixthPoppedGuest}!I am really sorry to cancel your invitation but I can only invites two peoples that's why I have to cancel your invitation`);

// • Print a message to each of the two people still on your list, letting them know they’re still invited. 
guests.map((FinalInvitation) => (
    console.log(`${FinalInvitation}!You are still invited to a dinner tonight.Hope so,you will accept and join us`)
))

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. 
guests.pop();
guests.pop();
console.log(guests);

