// three types of variables : var, let and const

// var name= 0;
// name= 20;
// console.log(name);

// const name= 0;
// name= 10;
// console.log(name);

// console.log(fun1())

//  function fun1(){
//     let a= 10;
//     console.log(a);
//     return a
//  }
//  fun1()

// operators

// Addition(+): Combines two numbers to get their sum.

// let a=7;
//     b= 3;
//     c= (a+b);
//     console.log(c)

// Subtraction (-): Finds the difference between two numbers by subtracting one from the other.

// let a=15;
//     b=8;
//     c=(a-b);
//     console.log(c)

// Multiplication(*): Multiplies two numbers to get their product.

// let a=6;
//     b=4;
//     c=(a*b);
//     console.log(c)

// Division (/): Divides one number by another to get the quotient.

// let a=20;
//     b=4;
//     quotient=(a/b)
//     console.log(quotient);

// Modulus(%): Returns the remainder of the division of one number by another.

// let a=10;
//     b=3;
//     remainder=(a/b)
//     console.log(remainder)

// Increament (++): Increases a number by one.

// let a=2;
//     b=3;
//     c=4;
//     d=(a+b);
//     e=(d*c);
//     console.log(e)


// Average 

// let a=5;
//     b=10;
//     c=15;
//     d=(
//         (a+b+c)/3
//     )
//     console.log(d)

// Decrement(--): Decreases a number by one.

// let a=7;
//     b=5;
//     c=++a;
//     d=c*b;
//     console.log(d)

// let a=7;
//     b=5;
//     c=((--a)*b)
//     console.log(c)

// objects in javascript and hosting with declare variables

// primitive data types.

// let a=7;
// let a="67"
// let a=true;
// let a=null;
// let a=undefined;
// console.log(typeof a);

// Hosting : As we known javascript work's synchronously and execute code through line by line. while we declare variable in 
// javaecript var are global operators they work globally if we declare variable in var operator it works globally it work in code top of the declaration or as well bottom of the declaration.
// but if we declare value in let or const its works as block scope or in function or after declaration its work in code after declaration or bottom of declaration.

// const a ={
//     name:"anuj",age:34,address:{
//         city:"",
//         state:"",
//         area:{
//             street:'',
//             pincode:34544
//         }
//     }
// }

// const b=a;
// const b=Object.assign({},a)
// const b={...a}
// const b=JSON.parse(JSON.stringify(a))
// b.address.area.pincode=23345
// // b.name="ayush"
// console.log("original",a);
// console.log("copy",b);

// For Array

// let a=[2,3,4,5,6]
// console.log(a.length)

// const b=Object.assign([],a);

// console.log("original",a);
// console.log("copy",b);

// let userlist= [{id:1,name:"sumit",rollno:"001",age:23,class:"BCA"},{id:2,name:"harsh",rollno:"002",age:25,class:"B.tech"}]
// // console.log(Array.isArray(userlist));
// // console.log(userlist.length)
// // console.log(Object.keys(userlist[0]).length)
// // console.log(userlist[userlist.length-1].id);

// function checklastId(arr){
//     if(arr.length==0)return"array is empty"
//     return arr[arr.length-1].id
// }
// console.log(checklast([]))

  const users = [
      { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
      { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
      { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
      { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
      { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
    ];

  // console.log(users);

  // let arr=[2,3,4, [4,5,6,7]]

  // function checkElement(arr, num, num2, num3){
  //   if (arr.includes(num)){
  //     console.log
  //   } else {
      
  //   }
  // }

  // Q1- find the active user through filter funtion

  // let a= users.filter((active)=>active.isActive);
  // console.log(a);

  // Q2- find sum of all balance through reduce method

  // function totalbalance(arr){
  //   if(!Array.isArray(arr)) return "value is not arrray";
  //   if(!arr.length) return "array us empty"
  //   let b= users.reduce((a,b)=> a+b.balance,0);
  //   return b
  // }
  
  // console.log(totalbalance(users));

  // Q3- find user by email

  // console.log(users[users.length-3].email);

  // Q4- Sort users by age

  // let a=users.sort((a,b)=>a.age-b.age);
  // // users.sort((a,b)=>a.age-b.age);
  // console.log(a);

  // Q5- icrease value 10% through map function

  // a= users.map((bal)=> bal.balance);

  // console.log(a);

  // function increaseBalance(arr,rate){
  //   if(!Array.isArray(arr)) return "value is not arrray";
  //   if(!arr.length) return "array us empty";
  //   if(typeof rate!=="number") return "value should be number";
  //   if (!rate) return "value should not be 0";
  //   // let Increase=arr.map((ele)=>ele.balance+((ele.balance*rate)/100));
  //   // return Increase
  //   let increase=arr.map((ele)=>{
  //     return{
  //       ...ele,
  //       increaseBalance:ele.balance+((ele.balance*rate)/100),
  //       rate:`${rate}%`
  //     }
  //   })
  //   return increase
  // }
  //   console.log(increaseBalance(users,10));

  // Q6- check user age is under 25 through some method

  // let a= users.some(users=>users.age>25);
  // console.log(a);

  // Q7- find balance above 2000:

  // let b=users.filter((bal)=>bal.balance>2000);
  // console.log(b);

  // Q8:- get a list of username through map:

  // let b= users.map((nam)=>nam.name);
  // console.log(b);

  // Q9- count users with a balace atleast 5000

  // let b= users.filter((bal)=> bal.balance>=5000);
  // console.log(b);

  // Q10: Remove user by ID is 3

  // let b= users.filter((nam)=> nam.id !=3);
  // console.log(b);

  // 

  function increaseBalance(arr,rate){
    if(!Array.isArray (arr)) return "Array is not array";
    if(!arr.length) return "array is empty";
    if(typeof rate !=="number") return "rate should be number"
    if(!rate) return "rate should not be 0"

    let increase= users.map((ele)=>{
      return{
        ...ele,
        increaseBalance:`ele.balance+((ele.balance*rate)/100)`,
        rate:`${rate}%`
      }
    })
    return increase
  }

  console.log(increaseBalance(users,10));