// const arr= [12,13,14,15,16,17,18];
// let i=0;
// // for (let i = 0; i < arr.length; i++) {
// //     if ((arr[i]%2)==0) {
// //         console.log(arr[i]);
// //     }
// // }
// let arr1=[];
// let arr2=[];

// for (let i = 0; i < arr.length; i++) {
//     if((arr[i]%2)!=0){
//         console.log(arr[i]);
//         arr1.push(arr[i])
//     }else{
//         arr2.push(arr[i])
//     }
// }
// console.log(arr1);
// console.log(arr2)

// Remove similar element from array

// const arr= [12,13,14,15,16,17,18,16,17,18];
// // let a= new Set(arr);
// // console.log(a);
// let a=[...new Set(arr)];
// console.log(a);

const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com" }
];

// Q1:- Callback implements

// function fetchUserByIdCallback(id, callback){
//     if(!id)return callback("id not found")
//     if(typeof id !=="number")return callback ("Invalid id number")
//         setTimeout(()=>{
//     let user = users.find((ele)=>ele.id== id);
//     if(user){
//         callback(user)
//     }else{
//         callback(`data not found ${id}`)
//     }
//     },2000)
// }
// fetchUserByIdCallback(1, (result)=>{
//     console.log(result);
// })

// Q2

// function fetchUserByIdCallback(id, callback){
//     // if(!id)return callback("id not found")
//     // if(typeof id !=="number")return callback ("Invalid id number")
//         setTimeout(()=>{
//     let user = users.find((ele)=>ele.id== id);
//     if(user){
//         callback(user)
//     }else{
//         callback(`data not found ${id}`)
//     }
//     },2000)
// }
// fetchUserByIdCallback(6, (result)=>{
//     console.log(result);
// })

// Q3: Promise creation

function fetchUserByIdCallback(id){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let user = users.find((ele)=>ele.id== id);
            if(user){
                resolve(user)
            }else{
                reject(`data not found ${id}`);
            }
        },2000)
    });
}
fetchUserByIdCallback(7).then(user =>{
    console.log("the fetched entry id-", user);
})
.catch(error=>{
    console.log("error-", error);    
});
