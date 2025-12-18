const tinderuser=new Object()


 tinderuser.id="abc"
 tinderuser.name="sushant"
 tinderuser.age=32
 tinderuser.isLoggedIN=false

// console.log(tinderuser);

const regularuser={
    email:"sus@gmail.com",
    fullname:{
        username:{
            firstname:"Sushant",
            lastname:"Naikwadi"
        }
        }
}

// console.log(regularuser.fullname.username.firstname)     can nest object into object




//concatination of objectss......


const obj1={1:"a",2:'b'}
const obj2={3:"c",4:'e'}

// const obj3=Object.assign(obj1,obj2)      //----->concat two objects into new object....<------------

// console.log(obj3)

//------>>> or u can use this method <--------

const obj3={...obj1,...obj2};
console.log(obj3)



//if u want the keys from the object then u can get by this method.


console.log(Object.keys(obj1));

console.log(Object.values(obj3));    // we get o/p in the form of array.----->  IMP  <-------



                                                 //object destructuring......
                    
const course={
    coursename:"Japwithsus",
    fee:7500,
    sensei:"Sushant",
}

const{sensei}=course

console.log(sensei);     //instead of console.log()we can directly give entity name.


