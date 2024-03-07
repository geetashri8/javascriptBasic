
const input = require("readline-sync");
let n = input.questionInt("enter a no. for range : ");

let i , j, str = "";
///////////////////11111111111111111
  for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        if( i == n){

           console.log( "*".repeat(n));
           j = i;
        }else if( j == 1 || j == i){
            str += "*";
        }else{
            str += " ";
        }
    }
    if( i != n){
        console.log(str);
    }
    str = "";
  }

  /////////////////////////////////2222222222222222222222222222222222222222222222


/* 
  for(i = 1; i <= n; i++){


    for(j = 1; j <= n; j++){


        if( i == n || i == 1){

           console.log( "*".repeat(n));
           j = n;


        }else if( j == 1 || j == n){


            str += "*";


        }else{

            str += " ";

        }


    }


    if ( i != 1 && i != n ){
        console.log(str);
    }
    str = "";


  } */

  /////////////////////////33333333333333333333333333333
/* 

  let m = n;
  
  let g = 0;

  for(i = 1; i < 2*n; i++){
    if( i <= n){
        //console.log(i);
        for(j = 1; j < 2*n; j++){
            if(j == m + g || j == m - g){
                //console.log(j);
                str += "*";
            } else{

                 str += " ";
            }
            
           
        }
        console.log(str);
        g += 1;

        str = "";

    }else{

        if(i == n + 1){
         g -= 2;
        // console.log(g);
        }

         for(j = 1; j < 2*n; j++){
            if(j == m + g || j == m - g){
                str += "*";
            } else{

                 str += " ";
            }
            
           
        }
        console.log(str);
        g -= 1;
        str = "";
    }
  }
 */



  //////////////////////////////////////////////4444444444444444444444444444444444444444444444444


/* 
  for(i = 1; i < 2*n; i++){

    if(i <= n){
      
         for(j = 1; j <= 2*n - i; j++){
            if(i % 2 == 0){
                if(j % 2 == 0 && (j == i || j == 2*n - i)){
                    str += "*";
                } else{
                    str += " ";
                }
            }else{
      
                if(j % 2 != 0 && (j == i || j == 2*n - i || i == 1)){
                    str += "*";
                } else{
                    str += " ";
                }
            }
            
        }

        console.log(str);
        str = "";

       

    } else{
          
        
        for(j = 1; j <= 2*n - 1; j++){
            if(i % 2 == 0){
                if(j % 2 == 0 && (j == i || j == 2*n - i)){
                    str += "*";
                } else{
                    str += " ";
                }
            }else{
      
                if(j % 2 != 0 && (j == i || j == 2*n - i || i == 2*n - 1)){
                    str += "*";
                } else{
                    str += " ";
                }
            }
            
        }

        console.log(str);
        str = "";


    }
  }
 */

  /////////////////////////////////// codes running fine