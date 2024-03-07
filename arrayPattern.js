


const input = require("readline-sync");

let n =input.questionInt("enter a number : ");

let a=[],i,j, str="";

for(i = 0; i < n; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }

 i = 0;

 while(i < n){

    for(j = 1; j <= a[i]; j++){

        str += ">";


    }

    console.log(str);
    str ="";
    i++;
     
 }

 