function Multiplication(a,b){
  return myPromise = new Promise((resolve) => {
    const product= a * b
    resolve(product);
  });
}
Multiplication(7,5).then(product =>{
  console.log(`the final product is ${product}`);
})