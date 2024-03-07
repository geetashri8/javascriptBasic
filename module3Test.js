


//-----------3rd max out of four---------------------------------//


const input = require("readline-sync");

let a = input.questionInt(`enter a number : `);
let b = input.questionInt(`enter a number : `);
let c = input.questionInt(`enter a number : `);
let d = input.questionInt(`enter a number : `);
let t;


if(a < b){


    t =a;
    a = b;
    b = t;
}

if(c < d){

    t = c;
    c = d;
    d = t;
}

if(b < d){

    if(a < d){
        console.log(a);
    }else{

       console.log(d);
    }
} else {


    if(c < b){

        console.log(c);
    }else{

        console.log(b);
    }
}