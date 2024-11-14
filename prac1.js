// Array Method Questions

// const numbers = [5, 12, 8, 130, 44];
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const mixedArray = [1, [2, 3], [4, [5, 6]], 7];
// const ages = [3, 10, 18, 20, 33];
// const colors = ["red", "green", "blue", "yellow"];

// Add "fig" to the end of the fruits array. What does the updated array look like?

// fruits.push('fig');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// Use shift() to remove the first item from the colors array. Then, add "purple" to the start using unshift(). What is the final array?

// colors.unshift('purple');
// console.log(colors);

// colors.shift();
// console.log(colors);

// Using map()

// Create a new array by doubling each value in the numbers array.

// const numbers = [5, 12, 8, 130, 44];

// let doubleNumbers= numbers.map((number)=>{
//     return number*2;
// })

// console.log(doubleNumbers);

// Using filter()

// Create a new array from numbers that includes only values greater than 10.

// const numbers = [5, 12, 8, 130, 44];

// let greater= numbers.filter((ele)=> ele>=10);

// console.log(greater);

// Using reduce()

// Use reduce() on numbers to find the total sum of all elements.

// const numbers = [5, 12, 8, 130, 44];

// let reduce = numbers.reduce((a,b)=>a+b,0);

// console.log(reduce);

// Using find()

// Find the first number in the ages array that is greater than or equal to 18.

// const ages = [3, 10, 18, 20, 33];

// let above18 = ages.find((ele)=> ele>=18);
// console.log(above18);

// Using findIndex()

// Get the index of the first even number in the numbers array.

// const numbers = [5, 12, 8, 130, 44];

// let index = numbers.findIndex((ele)=>ele%2==0);

// console.log(index);

// Using includes()

// Check if "cherry" is present in the fruits array.

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// let include = fruits.includes('cherry');

// console.log(include);

// Using some() and every()

// Use some() to check if there are any ages greater than 30 in the ages array.
// Use every() to check if all numbers in the numbers array are positive.

// const ages = [3, 10, 18, 20, 33];

// let check = ages.some((ele)=>ele>30);
// console.log(check);

// const numbers = [5, -12, 8, 130, 44];

// let check= numbers.every((number)=>number>0);
// console.log(check);

// let allPositive = numbers.every(function(number){
//     return number>0;
// })

// console.log(allPositive);

// Using sort()

// Sort the colors array alphabetically. Then sort the numbers array in ascending order.

// const colors = ["red", "green", "blue", "yellow"];

// let sort= colors.sort();
// console.log(sort);

// const numbers = [5, -12, 8, 130, 44];

// let sort= numbers.sort((a,b)=>a-b);
// console.log(sort);

// Using splice()

// Remove "banana" and "cherry" from the fruits array using splice().

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const colors = ["red", "green", "blue", "yellow"];

// fruits.splice(1,2);
// console.log(fruits);

// Using concat()

// Concatenate fruits and colors into a single array. What does the combined array look like?

// let newArr= fruits.concat(colors);
// console.log(newArr);

// Using slice()

// Extract the first two elements from colors without modifying the original array.

// let newArr= colors.slice(0,2);
// console.log(newArr);
// console.log(colors);

// const mixedArray = [1, [2, 3], [4, [5, 6]], 7];

// // Using flat()

// // Flatten mixedArray into a single-level array.

// let newArr= mixedArray.flat(2);
// console.log(newArr);

// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// // Using forEach()

// // Log each element in the fruits array to the console.


// fruits.forEach((fruit)=>{
//     console.log(fruit);
// })

// Using join()

// Create a single string from the colors array, with each color separated by a hyphen (-).

// const colors = ["red", "green", "blue", "yellow"];

// let color= colors.join("-");

// console.log(color);

const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
    { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
    { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
  ];

//   Find all active users:

// Use the filter method to get a list of users whose isActive property is true.

// let active= users.filter((ele)=>ele.isActive===true);

// console.log(active);

// Get the total balance of all users:

// Use the reduce method to calculate the sum of the balance property for all users.

// 

// Find a user by email ("charlie@example.com"):

// Use the find method to locate a user with the email "charlie@example.com".

// let find= users.find((ele)=>ele.email=='charlie@example.com');
// console.log(find);

// Sort users by age:

// Use the sort method to order users from youngest to oldest.

// let sort= users.sort((a,b)=>a.balance-b.balance);
// console.log(sort);

// Increase each user's balance by 10%:

// Use the map method to create a new array of users with their balance increased by 10%.

// function increaseBalance(arr, rate){
//     if(!Array.isArray(arr)) return"array is not array";
//     if(!arr.length) return "array is not empty";
//     if(!rate) return "rate should not be 0";
//     if(typeof rate!== "number") return "rate should be a number";

//     let user= users.map((ele)=>ele.balance+(ele.balance*10)/100);
//     console.log(user);

//     // let user= users.map((ele)=>{
//     //     return{
//     //         ...ele,
//     //     increaseBalance: ele.balance+(ele.balance*10)/100,
//     //     rate: `${rate}%`
//     // }
//     // })
//     // return user;
// }

// console.log(increaseBalance(users, 10));

// Check if any user is under 25:

// Use the some method to check if there is at least one user whose age is less than 25.

// let user= users.some((ele)=>ele.age<=25);

// console.log(user);

// Check if all users have a balance over 2000:

// Use the every method to verify if all users have a balance greater than 2000.

// let user= users.every((ele)=>ele.balance>=2000);

// console.log(user);

// Get a list of user names:

// Use the map method to extract just the name property from each user into a new array.

// let user= users.map((ele)=>ele.name);
// console.log(user);

// Count users with a balance of at least 5000:

// Use the filter method to find users with a balance of 5000 or more, then get the length of the resulting array.

// let user= users.filter((ele)=>ele.balance>=5000);
// console.log(user);

// Remove a user by ID (3):

// Use the filter method to create a new array without the user whose id is 3.

// let user= users.filter((ele)=>ele.id!=3);
// console.log(user);