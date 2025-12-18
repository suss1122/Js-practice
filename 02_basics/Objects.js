//Objects.....................................................................

//singleton object created using constructor..

const JsUser={
    Name:"Sushant",
    Age:22,
    Sex:"Male",
}

console.log(JsUser.Name);
JsUser.Age=23;

console.log(JsUser);

//Object.freeze(JsUser)  //it freezes the object so as no further changes coult be made.


console.log(JsUser)  // we can see no change in the object as freeze was used that freezed the object no further change.

JsUser.Greeting=function(){
    console.log(`Hello this is ${JsUser.Name}.Nice to meet you!!`)};   //<<<<<-------------- u can also replace '${JsUser.Name}' by  '${this.Name}' . ---------->>>>>
console.log(JsUser.Greeting());


