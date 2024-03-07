


const input = require("readline-sync");
let n = input.questionInt("enter a no. : ");
let count = 0;
let primeNumbers = 0;


for(let i = 2; i < n; i++){

    for(let j = 2; j <= i; j++){

        if(i % j == 0){

             count += 1;
        }
    }

    if( count == 1){
       // console.log()
       primeNumbers += 1;
    }
    count = 0;
}

console.log(primeNumbers);