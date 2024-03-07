


const input = require("readline-sync");
let n = input.questionInt(" size: ");

let a= [],b=[],c=[],i,j;

for(i = 0; i < n; i++){

    a[i] = [];

    for(j = 0; j<n;j++){

        a[i][j] = input.questionInt(`enter element at ${i + 1}-${j + 1}: `);
    }
   
}


console.log();
console.log();
console.log();
console.log();

for(i = 0; i < n; i++){

    b[i] = [];

    for(j = 0; j<n;j++){

        b[i][j] = input.questionInt(`enter element at ${i + 1}-${j + 1}: `);
    }
   
}

for(i = 0; i < n; i++){

    c[i] = [];

    for(j = 0; j<n;j++){

        c[i][j] = a[i][j] + b[i][j];
    }
   
}


for(i = 0; i < n; i++){

    console.log(c[i]);
}


