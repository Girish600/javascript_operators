// Loops

// Print No. 1 to 10

// for (let a = 1; a <= 10; a+=2) {
//     console.log(a);
// }

// let a=-1;

// while (a<=10) {
//     console.log(a);
//     a++;
// }

// do {
//     console.log(a);
//     a++;
// } while (a<=0);

// Functions in javascript

// add two numbers in javascript

// function addTwoNumbers(a,b){
//     return a+b;
// }

// let sum =addTwoNumbers(45,5);

// console.log(sum);

// let addTwoNumbers= (a,b)=>{
//     return a+b;
// }

// let sum= addTwoNumbers(10,5);

// console.log(sum);

// let areaOfRectangle= (b,c)=>{
//     return b*c;
// }

// // let area=areaOfRectangle(10,15);

// console.log("area of rectangle is :",areaOfRectangle(1,20));


// let n=2;

// function square(num){
//     let ans= num*num;
//     return ans;
// }

// let square2= square(4);

// console.log(square2);

// let square= (num1, num2)=>{
//     let ans= num1*num2;
//     // return ans;
//     console.log(ans);
// }

// square(4,5);

// square(4,6);

// console.log(square(4,6));

// console.log(square(78, 76));

// let x= 10;

// function a(){
//     let x= 20;
//     console.log(x);
// }

// function b(){
//     let x= 40;
//     console.log(x);
// }

// a();
// b();
// console.log(x);

// function addTwoNumbers(num1, num2){
//     // let result= num1+num2;
//     return num1+num2;
// }

// let result= addTwoNumbers(9,4);

// // console.log("result is :", result);

// function userLoginMessage(username){
//     if (!username) {
//         console.log('please enter your username')
//         return
//     }
//     return `${username} just logged in`;
// }

// let user=userLoginMessage();

// console.log(user);

// function userLoginMessage(username){
//     if (!username) {
//         console.log('please enter valid username')
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(userLoginMessage());

// let user=userLoginMessage();

// console.log(user);

// function addTwoNumbers(num1, num2){
//     return num1+num2
// }

// let result=addTwoNumbers(34, 6);

// console.log(result);

// function calculateCartPrice(...num){
//     return num
// }

// console.log(calculateCartPrice(200, 400, 5000));

// let user= {
//     username:'utkarsh',
//     price: 400
// }

// let User= (anyObj)=>{
//     return `username is ${anyObj.username} and price is ${anyObj.price}`
// }

// console.log(User(user));

// function getUser(anyObject){
//     return `username is ${anyObject.username} and price is ${anyObject.price}`
// }

// console.log(getUser(user));

// let myArray= [{username:'utkarsh',price:400}, {username:'harsh',price:400}, {username:'ayush',price:400}, {username:'mukesh',price:400}];

// // function returnSecondValue(newArray){
// //     return ``
// // }

// console.log(myArray[myArray.length-2].username);


// const users = [
//     { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
//     { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
//     { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
//     { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
//     { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
//   ];

//   Q1 find active users through filter method 

// let active= users.filter((active)=>active.isActive);

// console.log(active);

// console.log(users[users.length-2].name);

// console.log(users[3]);

// console.log(users[users.length-3].name);

// let user= users.find((ele)=>(ele.email ==='charlie@example.com'));

// console.log(user);

// let user= users.sort((a,b)=>{
//   let Age= a.age-b.age;
//   return Age;
// })

// console.log(user);

// let user= users.reduce((a,b)=>a+b.balance,0);

// console.log(user);

// function totalBalance(arr){
//   if (!Array.isArray(arr)) return 'array is not array'
//   if(!arr.length) return 'array is empty' 

//   let user= users.reduce((a,b)=>a+b.balance,0);
//   console.log(user);
// }

// totalBalance(users);

// let user= users.map(())

// function increaseBalance(arr, rate){
//   if (!Array.isArray(arr)) return 'array is not array';
//   if(!arr.length) return 'array is empty';
//   if(typeof rate!=='number') return 'value should be no.';
//   if (!rate) return 'value should not be 0';

//   // let user= users.map((ele)=>ele.balance+(ele.balance*rate)/100);
//   // console.log(user);

// let user=users.map((ele)=>{
//   return{
//     ...ele,
//     increaseBalance:ele.balance+(ele.balance*rate)/100,
//     rate:`${rate}%`
//   }
// })
//   return user
// }

// console.log(increaseBalance(users, 10));

// let user= users.some((ele)=>ele.age<25);

// console.log(user);

// let user= users.every((ele)=>ele.balance>2000);

// console.log(user);

// let user= users.map((ele)=>ele.name);

// console.log(user);

// let user= users.filter((ele)=>ele.balance>=5000);

// console.log(user);

// let user= users.filter((ele)=>ele.id !== 3);

// console.log(user);

// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
//   { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
//   { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
//   { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
//   { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
// ];

// Q1 Use the filter method to get a list of users whose isActive property is true.

// let user= users.filter((active)=>active.isActive!=true)
// console.log(user);

// Q2 Use the reduce method to calculate the sum of the balance property for all users.

// let user= users.reduce((a,b)=>a+b.balance,0);
// console.log(user);

//  Q3 Find a user by email ("charlie@example.com"):

// let user=users.find((ele)=>ele.email=='charlie@example.com');
// console.log(user);

// Q4 Use the sort method to order users from youngest to oldest.

// let user =users.sort((a,b)=>a.age-b.age);
// console.log(user);

// Q5 Use the map method to create a new array of users with their balance increased by 10%.

// function increaseBalance(arr, rate){
//   if(!Array.isArray(arr)) return "array is not array"
//   if(!arr.length) return "array is empty"
//   if(!rate) return "rate should not be 0"
//   if (typeof rate!=='number') return "rate should be no."

//   // let user= users.map((ele)=>ele.balance+(ele.balance*rate)/100;
//   // console.log(user);
//   let user= users.map((ele)=>{
//     return{
//       ...ele,
//       increaseBalance:ele.balance+(ele.balance*rate)/100,
//       rate: `${rate}%`
//     }
//   })
//   return user;
// }

// console.log(increaseBalance(users, 20));

// Q6 Use the some method to check if there is at least one user whose age is less than 25.

// let user= users.some((ele)=>ele.age<25);
// console.log(user);

// Q7 Use the every method to verify if all users have a balance greater than 2000.

// let user= users.every((ele)=>ele.balance>2000);
// console.log(user);

// Q9 Use the filter method to find users with a balance of 5000 or more, then get the length of the resulting array.

// let user= users.filter((ele)=>ele.balance>=5000);
// console.log(user);

// Q8 Use the map method to extract just the name property from each user into a new array.

// let user= users.map((ele)=>ele.name);
// console.log(user);

// Q10 Use the filter method to create a new array without the user whose id is 3.

// let user= users.filter((ele)=>ele.id!==3);
// console.log(user);

// const sym1 = Symbol("id");
// const sym2 = Symbol("id");

// console.log(typeof sym1)
// console.log(sym1 === sym2);  // false, because each Symbol is unique

// let user = {
//   name: "Alice",
//   [sym1]: Symbol(0) , // Symbol as a property key
//   sym2: "23456"
// };
// console.log(typeof user[sym1])
// console.log(user.name,user.sym2,user[sym1]);  // "12345"

// const sachin = {
//   "name":"Sachin",
//   age: 25
// }
// console.log(sachin.age);

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
  { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
  { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
];