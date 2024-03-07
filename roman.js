

const RNUM = require("readline-sync").question("enter roman numeral : ");

const RM = ["i","v","x","l","c","d","m"];
const DC = [1,5,10,50,100,500,1000];

let i,j,t,nt, sum = 0;

for(i = 0; i < RNUM.length; i++){


    for(j = 0; j < RM.length; j++){

        if(RNUM[i] == RM[j]){

            t =j;

        }

        if(i+1 == RNUM.length){

            nt = 0;
        } else{

           if( RNUM[i+1] == RM[j]){

               nt = j;
           }
        }
    }

    if(nt > t){
        sum -= DC[t];
    }else{

        sum += DC[t];
    }
}

console.log(sum);

//console.log(RNUM.charAt(1));
//console.log(RNUM[2]);

//RNUM.charAt(1); // gives value "a"
//RNUM[1]; // gives value "a"