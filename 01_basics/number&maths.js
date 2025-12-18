const balance=100;

console.log(balance.toFixed(2));    //->100.00

const other_balance=24.32;
console.log(other_balance.toPrecision(3));   //->24.3

 
const hundreds=10000000;

console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000  give number with coma separated.



//-------->Maths<--------------

//console.log(Math);

console.log(Math.abs(-4));  //make it positive like (4)

console.log(Math.round(4.3));  //round of to 4.

console.log(Math.ceil(4.2))     //make it to 5 instead of 4

console.log(Math.floor(5.8))   // it will give output as 5 than 6.


console.log(Math.random());    // always give value between 0-1;
console.log(Math.floor(Math.random()*10)+1);    


const min=10;
const max=20;


console.log(Math.floor((Math.random()*(max-min+1))+min))




