/**
 * Usman Naeem
 * 03 october 2021
 *
 * in this program i used template literals to print the message
 */

const name = "Usman Naeem";

const personalMessage = (name) => {
  return `Hello ${name}, would you like to learn some Python today?`;
};

console.log(personalMessage(name));
