

let a = [], i , str ;

const input = require("readline-sync");
let m = input.questionInt(" total number of elements to be inserted in array  : ");

for(i = 0; i < m; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }

let s = input.questionInt(" enter a number : ");





 for( i = 0; i <= m - 2; i++){

      if( s == a[i] + a[i+1] ){

         str = "";
        str += a[i] + " " + a[i+1];

        console.log(str);

        i = m;

      }

 }

 if(str == ""){
    console.log("not found");
 }