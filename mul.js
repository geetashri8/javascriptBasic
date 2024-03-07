

const L = require("readline-sync").questionInt("no.of digits : ");


let l,s,num1= [],num2=[],mul = [], carry =0, spaces = 1, k= L-1;

for(l = 0; l < L; l++){

     num1[l] = require("readline-sync").questionInt("enter digits : ");
   
}
const S = require("readline-sync").questionInt("no.of digits : ");

for(s = 0; s < S;s++){

    num2[s] = require("readline-sync").questionInt("enter digits : ");
  
}
//console.log(num1, num2);
//////////------------------MULTIPLICATION

for(let i = 0; i < S; i++){
     mul[i] = [];
    for(let j = 0; j < S+L; j++){

        mul[i][j] = 0;
    }
}

 
for(s = S-1; s >=0; s--){
 
   j = L - 1; 
   k = S+L-spaces;

   while(j >= 0){

        if(j <= S+L - s){
             let p = num1[j] * num2[s];
            // console.log(num1[k], num2[s]);
               mul[s][k] = (p + carry) % 10;
             //  console.log(p,carry);
             carry = Math.floor((p+carry)/10);
             //console.log(carry);
        }
        k--;
        j--;
    }

    if(carry > 0){
        mul[s][k] = carry;
    }
    carry = 0;
    spaces += 1;
    
}

//console.log(mul);

////----------addition-----------------------//

carry = 0;
let add = 0;
arr = []
for(j = L+S -1; j >= 0; j--){

    for(i = 0; i < S; i++){

         add += mul[i][j];
    }

    add += carry;
   // console.log(add,carry);
    arr[j] = add % 10;
    carry = Math.floor(add/10);
    add = 0;


}

if(carry > 0){

    arr[j] = carry;
}
//console.log(arr);

let str = "";
for (let i = 0; i <arr.length; i++){

    if(i == 0){



       if( arr[i] != 0){

           str += arr[i];
        }

    }else{

        str += arr[i];
    }

}
console.log(str);

