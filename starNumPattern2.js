


const input = require("readline-sync").questionInt("enter the value for n : ");
let n = input;

let i,j;
let k = 1, str = "";

///////////////////////////////////////11111111111111111111111
/* 
for(i = 1; i <= n; i++){
    for(j = 1; j <= k; j++){
       str += "*";
    }
    console.log(str);
    k += 2;
    str = "";
}
console.log();
console.log();
///////////////////////////////222222222222222222222222222222222222222

k = 1;
for(i = 1; i <= n; i++){
    for(j = 1; j <= k; j++){
       str += "*";
    }
    console.log(str);
    k += 2;
    str = "";
}


for(i = n - 1; i >= 1; i--){
    for(j = 1; j <= k - 4; j++){
       str += "*";
    }
    console.log(str);
    k -= 2;
    str = "";
}

console.log();
console.log(); 
*/
/////////////////////////////////3333333333333333333333333333333

/* for(i = 1; i <= n; i++){
    for(j = 1; j <= 2 * i; j++){
        if(i == n){
            str += "*";
        
        } else if(j == i + 1){
            str += " *";
        }else{
          str += "*";
        }
    }
    console.log(str);
    
    str = "";
}


for(i = n - 1; i >= 1; i--){
    for(j = 1; j <= 2 * i; j++){
        if(j == i){
            str += "* ";
        } else{
            str += "*";
        }
    }
    console.log(str);
    
    str = "";
}

console.log();
console.log();  */
/////////////////////////////4444444444444444444444444444444444444444444444444

/*
 for(i = n; i >= 1; i--){
  for(let m = 1; m <= n; m++){

    if(m == i){
       for(j = n; j >= i; j--){
           str += j;
            
        }

        m = n + 1;
   } else{
       str += " ";
   }
  }
    for(k =  j+2; k <= n; k++){
        str += k;
    }
    console.log(str);
    str = "";
}

for(i = 2; i <= n; i++){
   for(let m = 1; m <= n; m++){
      if(m == i){
          for(j = n; j >= i; j--){
               str += j;

           }

           m = n + 1;
       } else{
          str += " ";

       }
   }
    for(k =  j+2; k <= n; k++){
        str += k;
    }
    console.log(str);
    str = "";
}

console.log();
console.log(); */

///////////////////////////////////////////////////////555555555555555555555555555555555
 q = Math.floor(n / 2) + 1;
let l = 1;
let r = n;
let s;



 for(i = 1; i <= n; i++){
    if(i <= q){
       for(j = 1; j <= n; j++){
            if(j == l){

              for( s = l; s <= r; s++){
                   str += "o";
                }
            
                j = s -1;

            }else{

                str += "x";

            }
        }
        console.log(str);
         l += 1;
         r -= 1;
        str = "";
    } else{
         
        for(j = 1; j <= n; j++){
            if(j == r){

              for( s = r; s <= l; s++){
                   str += "o";
                }
            
                j = s -1;

            }else{

                str += "x";

            }
        }
        console.log(str);
        str = "";
      
        l += 1;
        r -= 1;


    }

 }   

///////////////////////////////////////////////////666666666666666666666666666666666666666666666666



 /* for(i = n; i >= 1; i--){
   // let x = i % 5;
    
    for(j = i; j <= n; j++){
        str += j;
    }
    for(let k = n + 1; k > n + 1 - i; k-- ){
        str += k;
    }
    console.log(str);
    str ="";
} 
 */

////////////////////////////////////////////////////777777777777777777777777777777777777777777777777777777777

/*  let z = 1;
for(i = n; i >= 1; i--){
    for(j = n; j >= i; j--){
        if( j != i){
            str += " ";
        }else{
            str += j + " ";
        }
    }
    for(let k = n; k > z; k-- ){
          str += k + " ";
    }

    console.log(str);
    str = "";
    z += 1;
}
z -= 1;
for(i = 2; i <= n; i++){
    for(j = n; j >= i; j--){

        if( j != i){
            str += " ";
        }else{
            str += j + " ";
        }
    }
    for(let k = n; k >=z; k--){
        str += k + " ";
    }

    console.log(str);
    str = "";
    z -= 1;
 
}  */