




const input = require("readline-sync");
let n = input.questionInt(" total number of elements to be inserted in array : ");

let l = 0, r = n-1, str ="" ,x,M,a= [], f;

for(i = 0; i < n; i++){
   a[i] = input.questionInt(`enter element ${i + 1} : `);
}
let number = input.questionInt(" number : ");

///////======================--for binary search the array should be sorted--==============================//////////////////////

    while(l <= r){
        x = l+ r;
       // console.log(x);

        if( x % 2 == 0){

            M = x/2;
        }else {

            f= Math.floor(x/2);

            if(f < M){
                M = f - 1;
            } else{


                M = f+ 1;
            }
            
        }

        //l++;
        //console.log(a[M]);
        
        if(number == a[M]){
            str = "yes";
          l=n;
        } else{

            if(number < a[M] && number < a[0]){

                  l = n;

                //r = M;
            }else if(number < a[M] && number > a[0]){
                 
                   r = M;
                
            }else if(number > a[M] && number > a[n-1]){
                
                l = n;

            }else{

                l = M;
            }
        }

    } 

    if( str == "yes"){
        console.log("yes");
    } else{
        console.log("no"); 
    }