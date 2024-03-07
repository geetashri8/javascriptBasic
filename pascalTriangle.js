

const input = require("readline-sync");

let n =input.questionInt("enter a number : ");

let a=[],i,j, str="";

for(i = 0; i < n+1; i++){
     
    a[i] = [];
    for(j = 0; j < n+1; j++){

        if(j == 0){

            a[i][j] = 1;
        }else if( j == i){
            a[i][j] = 1;
        }else if(j > i){

            a[i][j] = " ";
        }else{

            a[i][j] = a[i-1][j-1] + a[i-1][j]
        }


    }


   // a[i] = input.questionInt(`enter element ${i + 1} : `);
 }


 //console.log(a);

  
 for(i = 0; i < n+1; i++){
     
  
    for(j = 0; j < n+1; j++){


        if(a[i][j] == 0){
            str += " ";
        }else{

            str += a[i][j] + " ";
        }
    }
   
    console.log(str);

    str ="";

   // a[i] = input.questionInt(`enter element ${i + 1} : `);
 }

 