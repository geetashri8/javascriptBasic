


let a = [],c=[], i = 0,j = 0 ,x =1,count =0,u= 1 ;

const input = require("readline-sync");
let m = input.questionInt(" range of array : ");


for(i = 0; i < m; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }


 let k = input.questionInt("no. of leaps : ");




 c[0] = a[k-1];
i = k;
let r;


 while(x < m){


    while(j < k){
     
          r = i % m;
         
       for(let l = 0; l < x; l++){
       
            
         if(a[r] == c[l]){
            count =  1; 
            l = x;
            }else{
               count = 0;
            }
        }

        if( count == 0){
      
            j += 1;
            i++;
          
        }else{

         i++;
        }

       
    }

    c[x] = a[r];
    //console.log(c[x]);
    x++;
    j = 0;
    count = 0;


 }


 console.log(c);

 