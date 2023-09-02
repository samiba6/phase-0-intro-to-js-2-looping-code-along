const { cloningSteps } = require("jsdom/lib/jsdom/living/helpers/internal-constants")

// Code your solutions in this file
function writeCards(array,string){
    const arrayret=[]
    for(let i=0;i< array.length;i++){
         arrayret.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);

    }
    return arrayret;
}
// 1) returns an array of thank you messages for each name provided to the function
// countDown()
function countDown(num){
    while(num >= 0){

        console.log(num)
        num--;
}

}
// 2) invokes console.log once for each number, counting down from the number provided to zero
// 3) logs each number when counting down, starting from the number provided

console.log(countDown(11))