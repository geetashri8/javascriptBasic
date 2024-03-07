



const input = require("readline-sync");
let n = input.questionInt("enter a number for range : ");
  let hcf = input.questionInt(`enter no.1 : `);
  for(let i = 2; i <= n; i++){
    let a = input.questionInt(`enter no.${i} : `);

    while(a % hcf != 0){
        let r = a % hcf ;
        a = hcf ;
        hcf = r ;
    }
  }

  console.log(hcf);