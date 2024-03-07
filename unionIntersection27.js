


let a = [],b = [],union=[],inter=[], i = 0,j = 0 ,k =0 , u =0;

const input = require("readline-sync");
let m = input.questionInt(" total number of elements to be inserted in array 1 : ");


for(i = 0; i < m; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }



let n = input.questionInt(" total number of elements to be inserted in array 2 : ");
for(j = 0; j < n; j++){
    b[j] = input.questionInt(`enter element ${j + 1} : `);
 }

i = 0,j = 0;

 while(i < m){

    while(j < n){

        if(a[i] == b[j]){

            union[u] = a[i];
            inter[k] = a[i];
            u += 1;
            k += 1;
            i += 1;
            j += 1;
        }else if(a[i] < b[j]){

            union[u] = a[i];
            u += 1;
            i += 1;
       }else {
        union[u] = b[j];
           u += 1;
           j += 1;
       }
    }

    if( i < m){
        //console.log("i-"+i);
        union[u] = a[i];
         u += 1;
         i += 1;
    }
}


console.log(union.toString());
console.log(inter.toString());