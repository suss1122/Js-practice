//Dates

let myDate= new Date() //gives surrent date


console.log(myDate);
console.log(myDate.toDateString())    ///gives other format of date.


let mycreatedDate=new Date(2023,0,23)
console.log(mycreatedDate.toDateString())


let mytimestamp=Date.now()   //it gives o/p in milisecconds

console.log(mytimestamp);

// console.log(Math.floor(Date.now()//1000));

let newdate=new Date()

console.log(newdate.getMonth().toString());   // gives month of the date.

console.log(newdate.getDay().toString());




