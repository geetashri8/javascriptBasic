


const input = require("readline-sync");
let n = input.questionInt(" total number of elements to be inserted in array : ");
let a = [], i,j,k,count = 1;

let b = [] , l = 0;
for(i = 0; i < n; i++){
   a[i] = input.questionInt(`enter element ${i + 1} : `);
}


////--------------- without deleting any elements of array --------------------------------------------------//////////


for(i = 0; i < n; i++){

    for(j = i - 1; j >= 0; j--){
      
         if( a[i] == a[j]){
            count += 1;
            
         }
    }


    if(count > 1){

        count = 1;

    } else{

        for(k = i + 1; k < n; k++){

            if(a[i] == a[k]){


                count += 1;
            }
        }

        if(count > 1){

            b[l] = a[i];
            //console.log(b[l]);
            l += 1;
             
             count = 1;
        }
    }
}


//////-----------------------------backward printing of array where the duplicate elements are stored---------------//////

let str = "";
for( i = l - 1; i >= 0; i--){

  

    str += b[i] + " ";
}
console.log(str);
 
