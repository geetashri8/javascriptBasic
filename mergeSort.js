


let a = [],b = [],c=[], i = 0,j = 0 ,k =0 ;

const input = require("readline-sync");
let m = input.questionInt(" total number of elements to be inserted in array 1 : ");


for(i = 0; i < m; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }



let n = input.questionInt(" total number of elements to be inserted in array 2 : ");
for(j = 0; j < n; j++){
    b[j] = input.questionInt(`enter element ${j + 1} : `);
 }



 i = 0,j = 0 ,k =0 ;


 /////////////////////////// will recheck it
/* while(k <= n+m){

    if(a[i] < b[j]){

         c[k] = a[i];
         k += 1;
         i += 1;

         if( i == m){
            i -= 1;
        }
    }else {
        c[k] = b[j];
        k += 1;
        j += 1;

        if( j == n){
            j -= 1;
        }
    }
} */


///////////////////////////////////// working
while(i < m){

    while(j < n){

        if(a[i] < b[j]){

            c[k] = a[i];
            k += 1;
            i += 1;
       }else {
           c[k] = b[j];
           k += 1;
           j += 1;
       }
    }

    if( i < m){
        //console.log("i-"+i);
         c[k] = a[i];
         k += 1;
         i += 1;
    }
}

/* while(j < n){
    console.log("j-"+j);
    c[k] = b[j];
    k += 1;
    j += 1;
}
 */
console.log(c);