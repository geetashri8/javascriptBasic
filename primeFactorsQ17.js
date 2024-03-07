



const  number = require("readline-sync");
let n = number.questionInt("enter a number : ");

let i = 2, count = 0;

while(i <= n){

    if(n % i == 0){

        for(let j = 2; j <= i; j++){

            if(i % j == 0){

                count += 1;
            }
        }


        if( count == 1){

             console.log(i)

        }
    }

     count = 0;
    i++;
}