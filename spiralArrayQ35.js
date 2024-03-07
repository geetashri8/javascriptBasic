

const input = require("readline-sync");
let n =input.questionInt("size of matrix  n x n: "); 

let a = [], L = 0, R = n-1, i, T = 0, B = n - 1, j , num = 1;

let z = 0 ;

///////////////////////////////////////////////////

for(let w = 0; w < n; w++){

    a[w] = [];
    for(let y = 0; y < n; y++){
        a[w][y] = 0; 
    }
}

//console.log(a);

//////////////////////////////////////////////////

if( n % 2 == 0){

      z = n/2;
} else{

      z += Math.floor(n/2) + 1;

}


/////////////////////////////////////////////////////////////

i = 0; j = 0;

while(z > 0){
     i = T;
     j = L;
 
    // console.log(z);
    while(j <= R){

      
       // console.log(a[i]);
        a[i][j] = num
        console.log(a[i][j]);
     
        num += 1;
        j++;
    }

    j = R;
    i = T+1;

    while(i <= B){

        

        a[i][j] = num;
        console.log(a[i][j]);
        num += 1;
        i++;
    }

    i= B;
    j = R - 1;

    while(j >= L){
       

        a[i][j] = num;
        console.log(a[i][j]);
        num += 1;
        j--;
    }

    i = B-1;
    j = L;

    while( i >= T+1){

     

        a[i][j] = num;
        console.log(a[i][j]);
        num += 1;
        i--;

    }


    z -= 1;
    L += 1; R -= 1;
    T += 1; B -= 1;


}
console.log();

console.log(a);
//console.log(a[1][2]);
for( i = 0; i < n; i++){

  // console.log(a[i]);

}

