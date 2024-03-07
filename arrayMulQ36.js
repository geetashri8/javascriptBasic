



const input = require("readline-sync");

//--------------------------------------------------------------------
let l = input.questionInt(" digits of number : ");
let LARGE= [],L;

for(L = 0; L < l; L++){
    LARGE[L] = input.questionInt(`enter element ${L + 1} : `);
 }
//-------------------------------------------------------------------------

let s = input.questionInt(" digits of number : ");
let SMALL= [],S;

for(S = 0; S < s; S++){
    SMALL[S] = input.questionInt(`enter element ${S + 1} : `);
 }

/////////////////////////////////////////////////////////////////////////
i = 0;
let  x = s-1, y = l-1,carry=0, spaces=0,pr=0;


let c = [];

for(let w = 0; w < s; w++){

    c[w] = [];
    for(let f = 0; f < l+s ; f++){
        c[w][f] = 0; 
    }
}

//console.log(c);


////===========================--------------MULTIPLICATION---------------======================/////////////
let k = 0,t =0;
for(S = x ; S >= 0; S--){

  
        
         let L = y;
        

            while( L >= 0){

               

                     pr= SMALL[S]*LARGE[L];
                     pr += carry;
                      c[t][k] = (pr % 10) ;
                      //console.log(c[i][k]);
                       carry = Math.floor(pr/10);
                       L--;
                       k++;


                
                }

                if(carry > 0){

                    c[t][k] = carry;
                    carry = 0;

                }
                 spaces += 1;
                 k = spaces;
                t++;

                

            

          
}

//////////////==================--------------ADDING THE MULTIPLIED NUMBER---------------==================//////////////////


let mul = [], add=0; carry = 0, str="";

for(j = 0; j < l+s; j++){

    for(i = 0; i < s; i++){

         add += c[i][j];
    }

        add += carry;
        mul.push(add%10);
        carry = Math.floor(add/10);
        add = 0;
}


//console.log(mul);


for(j = l+s-1; j >= 0; j--){

    if(j == (l+s-1)){

        if(mul[j] == 0){

            //console.log(mul[(2*l)-1]);
            str += " ";

        }else{

            str += mul[j];
        }
       
    } else{

        str += mul[j]; 
    }
      

}


console.log(str);

//console.log(a);

//console.log(b);
