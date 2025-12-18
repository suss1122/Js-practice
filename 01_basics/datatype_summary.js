//Primitve datatypes or call by value datatypes.

//String,Number,Boolean,null,undefined,Symbol,BigInt.

//------javascript is a dynamically typed language i.e no need to give type of variable.----


//Refrence Datatype or Non-Primitive

//Array,Objects,Functions

//symbol->

const id=Symbol('123');
const anotherid=Symbol('123');  //though values are same but id are different.

let condition= id===anotherid;
console.log(condition);

const cars=["bmw","audi","mercides"];

let myobj={
    name:"sushant",
    age:21,
}

const myfunc=function(){
    console.log("helo this is sushant");
}

console.log(typeof(myobj))



//->>>>>>>Memoriess->>>>>>>>>>

//stack(primitive),heap(non-premitive)

let myinstaid="suss_patil";

let another_id=myinstaid;
another_id="sush_words";

console.log(myinstaid);
console.log(another_id);

let user1={
    email:"suss@gamil.com",
    upi:"oksbi@1234",
}

let user2=user1;   //it take refrence of user1 so if any change in user1 will reflect in user2.

user2.email="suss@gamil.com";

console.log(user1.email)  //both will give same value as o/p

console.log(user2.email)  // same o/p


