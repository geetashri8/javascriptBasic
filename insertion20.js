

const input = require("readline-sync");
let n = input.questionInt(" total number of elements to be inserted in array : ");
let a = [], i;
for(i = 0; i < n; i++){
   a[i] = input.questionInt(`enter element ${i + 1} : `);
}

let p = input.questionInt(`enter the place of the element where the element need to be inserted : `);

let e = input.questionInt(`enter the element  : `);

for(i = n; i > p - 1; i--){
    a[i] = a[i-1];
   // console.log("hgghfhj");
}

a[i] = e;

console.log(a);