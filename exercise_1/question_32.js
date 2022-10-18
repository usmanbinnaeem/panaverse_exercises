const currentUsers = [
  "admin",
  "customer",
  "manager",
  "sales_manager",
  "sales_rep",
];
var newUsers = ["sales_manager", "consultant", "cto", "admin", "root"];
newUser.forEach((user) => {
  if (currentUsers.includes(user)) {
    console.log("User need to enter new name");
  } else {
    console.log("Username Avilaible");
  }
});
