// DOM= Document Object Model

// console.log(window.document)
// console.log(document.getElementById('heading'));
// console.log(document.getElementsByTagName('h1'));
// console.log(document.getElementsByClassName('my-para'));

// const h1= document.getElementById('heading');
// console.log(h1.innerHTML);
// console.log(h1.innerText);

// const div= document.getElementById('my-div');
// console.log(div.innerHTML);
// console.log(div.innerText);

// div.innerText="im changed content";

// const div= document.createElement("img");
// Image.src= "";

// const div= document.getElementById('my-div');

// div.innerHTML= `<img src='https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png'/>`

// const div= document.getElementById('my-div');

// const img=  document.createElement("img");
// img.src= "https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png";

// div.appendChild(img);

// const h1= document.getElementById('heading');
// h1.style.color='purple';
// h1.style.backgroundColor='black';

// const body = document.getElementsByTagName("body")[0];
// const h1 = document.createElement("h1");
// body.appendChild(h1);
// h1.innerText = "I am new div";

// const div= document.getElementById("my-div");

// const button = document.createElement("button");
// body.appendChild(button);
// button.innerText = "click me";
// // div.appendChild(button);
// button.style.color = "purple";
// button.style.backgroundColor = "pink";
// button.style.border = "1px solid purple";
// button.style.borderRadius = "5px";
// button.style.fontStyle = "italic";
// button.style.cursor = "pointer";

// Events

// button.addEventListener('click', function(){
//     // button.innerText= 'I am Clicked';
//     button.style.display="none";
// // });

// button.addEventListener('click',()=>{
//     if(h1.style.display=='none'){
//         button.innerText="hide";
//         h1.style.display="block"
//     }else{
//         button.innerText= "unhide";
//         h1.style.display="none"
//     }
// })

// const handleClick = () => {
//   if (h1.style.display == "none") {
//     // button.innerText = "hide";
//     h1.style.display = "block";
//   } else {
//     // button.innerText = "unhide";
//     h1.style.display = "none";
//   }
// };

const div= document.getElementById('toggle')
// const h1= document.createElement('h1');
// toggle.innerText='my name is utkarsh sharma';
// const button=document.getElementById('hide-me');
// toggle.appendChild(h1);
const h1= document.getElementsByTagName('h1');

const handleClick= ()=>{
  if(toggle.style.display=='block'){
    toggle.style.display='none'
  }else{
    toggle.style.display='block'
  }
}

