


const input = require("readline-sync");
let m = input.questionInt("enter  number 1 for range : ");
let n = input.questionInt("enter  number 2 for range : ");
let p = 1;
let r , d , sum = 0;


for(let i = m; i <= n; i++){

    /////////-----------counting digits
    p = 1;
    sum = 0;
    let x = i;
    while(Math.floor(x / 10) != 0){
       x = Math.floor(x / 10) ;
       p += 1;
    }



    //////------------calculationg armstrong number
    x = i;
    while(Math.floor(x / 10) != 0){
       r = x % 10;
       d = r ** p ;

       sum += d ;
       x = Math.floor(x / 10) ;
       
    }
    sum += x ** p;
   // console.log(sum);


    ///////-------------------printing armstrong number
 
    if( sum == i){
        console.log( sum,i);
    }
 
}

//console.log(p);
