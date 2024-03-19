import LinkedList from "./LinkedList.js";

const userList = new LinkedList();

userList.append(5);
userList.append(0);
userList.append(9);
userList.prepend(12);

userList.print();

console.log("ListSize :::> ", userList.size());

let indexOfValue = 12;
console.log(`IndexOf (${indexOfValue}) :::> ${userList.indexOf(indexOfValue)}`);

let searchIndex = 3;
console.log(
  `elementAtIndex (${searchIndex}) :::> ${userList.elementAt(searchIndex)}`
);

// let removeIndex = 1;
// console.log(
//   `removeAtIndex (${removeIndex}) :::> ${userList.removeAt(removeIndex)}`
// );

// let removeValue = 9;
// console.log(
//   `removeValue (${removeValue}) :::> ${userList.remove(removeValue)}`
// );

// let insertAtIndex = 5,
//   insertData = 50;
// console.log(
//   `insertAt (${insertAtIndex} :: ${insertData}) :::> ${userList.insertAt(
//     insertAtIndex,
//     insertData
//   )}`
// );

userList.reverse();
userList.print();
