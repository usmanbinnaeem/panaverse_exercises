const invited_guests = ["John", "Mary", "Peter", "Paul", "George", "Ringo"];

invited_guests.forEach((guest) => {
  console.log(`Dear ${guest}, please come to my party on Saturday!`);
});

console.log(`Sorry ${invited_guests[1]}, you can't come to my party!`);

invited_guests[1] = "Matt";

invited_guests.forEach((guest) => {
  console.log(`Dear ${guest}, please come to my party on Saturday!`);
});

console.log(" I found a bigger table, so I can invite more people!");

invited_guests.unshift("Paul McCartney");
invited_guests.push("John Lennon");
invited_guests.splice(5, 0, "Yoko Ono");

invited_guests.forEach((guest) => {
  console.log(`Dear ${guest}, please come to my party on Saturday!`);
});

console.log("Sorry, I can only invite two people to my party!");

while (invited_guests.length > 2) {
  console.log(`Sorry ${invited_guests.pop()}, you can't come to my party!`);
}

invited_guests.forEach((guest) => {
  console.log(`Dear ${guest}, please come to my party on Saturday!`);
});

while (invited_guests.length > 0) {
  invited_guests.pop();
}

console.log("Empty List", invited_guests);
