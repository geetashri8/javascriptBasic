


const input = require("readline-sync").questionInt("enter a no. : ");
let num = input ;
let sum  = 0;


for(let i = 1; i < num; i++){

    if(num % i == 0){
        //let p = i * i;
        sum += i;
    }
}
if(num == sum){
    console.log(" It is a perfect number.");

} else{
    console.log("Not a perfect number");
}
