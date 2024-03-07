


const number = require("readline-sync");
let n = number.questionInt("enter a number : ");

let sum = 0;
while(n > 0){

   let r = n % 10;
  
   sum += r;
   n = Math.floor(n / 10);

   if(n == 0 && sum > 9){

       n = sum;
       sum = 0;
   }

}

console.log( sum);