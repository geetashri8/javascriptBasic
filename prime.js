


const input = require("readline-sync").questionInt("enter a no.: ");
let n = input , count = 0;
for(let i = 2; i <= n; i++){
  if( n % i == 0){

    count += 1 ;
  }
}

if(count == 1){
    console.log(`${n} is a prime number`);
} else {
    console.log(n + " is not a prime number.");
}