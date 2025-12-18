//scope of function.




if(true){                       //all variables inside the if block are called block scope.
                                //the others outside the if statemnet are the global  scope.

    let a=10
    const b=20
    var c=30

}   


//console.log(a);
// console.log(b);
console.log(c);    //it willl give value of c in console but of a nd b will throw error.

