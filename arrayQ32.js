



const input = require("readline-sync");

let n =input.questionInt("enter a number : ");

let a=[],i,j, str="",k,xx;

for(i = 0; i < n; i++){
    a[i] = input.questionInt(`enter element ${i + 1} : `);
 }


 //////////////////===========----------------sorting array in descending order--------------=================///
i=0;
 while(i<n){
     xx = a[i];
     k=i
     //console.log(xx);
    j= i+1;
    while(j < n){
        if( a[j] > xx){
               xx = a[j];
               k = j;
              // console.log('xx '+xx);  
        }
        j++
    }
   //console.log(a[i]+"-"+a[k]);
   
     a[k] = a[i];
     a[i] = xx;
    // console.log(a[i]+"-"+a[k]);
    
     
    i++
 }



 ////////////////=================----------pattern printing---------------==============////////////


 for(i = a[0]; i >= 1; i--){

    for(j = 0; j < n; j++){
        
       /*  if(j == 0){
            console.log("00000000000000000");
           str += "*o";

        }else {
            if(a[i] == a[j]){
                console.log(a[i] +"--"+a[j]);
                str += "*";
            }else{
                str += "! ";
            }
        } */
        if(i > a[j]){
            str += " ";
        }else{
            str += "* ";
        }


    }


   console.log(str);
   str = "";
 }

 //console.log(a);