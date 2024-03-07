

const input = require("readline-sync");
let n = input.questionInt("enter the range : ");

let a=[],c=1;

for(let i =0; i < n; i++){

    a[i] = input.questionInt(`enter number ${i+1} : `);
}


console.log(a);


for(let i =0; i < n; i++){

    let j = i+1;
    while(j<n){

        if(a[i] == a[j]){

            c+= 1;

        }
        j+=1;
    }

    if(c == 1){
        console.log(a[i]);
         let r = i-1;
        while(r >=0){

                if(a[i] == a[r]){

                    c += 1;
                }
            
           r--;
        }

        if(c == 1){

           a[i] = 0;
        }
    }
    c=1;
}


console.log(a);