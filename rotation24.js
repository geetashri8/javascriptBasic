

const input = require("readline-sync");
let n = input.questionInt(" total number of elements to be inserted in array : ");
let r = input.questionInt(" no. of rotations : ");
let a = [], i ;


for(i = 0; i < n; i++){
   a[i] = input.questionInt(`enter element ${i + 1} : `);
}


//--------------------------without changing the positions of the elements---------------------------------------//
let str = ""; i = r - 1;
while(i < n+r - 1){

    let x = i % n;
    str += a[x] + " ";
    i++;
}

console.log(str);