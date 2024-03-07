


const input = require("readline-sync");
let n = input.questionInt(" total number of elements to be inserted in array : ");
let a = [], i;
for(i = 0; i < n; i++){
   a[i] = input.questionInt(`enter element ${i + 1} : `);
}

let p = input.questionInt(`enter the place of the element that needed to be deleted : `);

for(i = p - 1; i < n -1; i++ ){
           a[i] = a[i+1];
}

str = "";

for(i = 0; i < n -1; i++ ){
 // console.log(a[i]);
 str += a[i] + " ";
}






console.log(str);