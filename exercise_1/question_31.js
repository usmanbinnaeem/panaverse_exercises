var usernames = ["admin", "customer", "manager"];
if (usernames.length > 0) {
  usernames.forEach((element) => {
    if (element == "admin")
      console.log(`Hello ${element}, would you like to see a status report?`);
    else console.log(`Hello ${element}, thank you for logging in again`);
  });
} else {
  console.log("Need to Add new users");
}

while (usernames.length > 0) {
  console.log(usernames.pop() + " removed");
}

if (usernames.length > 0) {
  usernames.forEach((element) => {
    if (element == "admin")
      console.log(`Hello ${element}, would you like to see a status report?`);
    else console.log(`Hello ${element}, thank you for logging in again`);
  });
} else {
  console.log("Need to Add new users");
}
