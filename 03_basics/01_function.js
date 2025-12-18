//functions 

function greetme(){
    console.log("Hello Sushant.How are you?");
}

// greetme();


function addMe(num1,num2){
    const num3=num1+num2;
    return num3;  
}

// console.log(addMe(5,6))

//for case like shopping cart where user goes on adding item.

function calculatecartprice( ...num1){      // ... is a rest operator that combines all parameters together
    return num1
}
// console.log(calculatecartprice(200,400,300));

// accessing object in functions.

myobj={
    username:"sushant",
    age:22,
    Crush:"no crush",
}

function handleobject(anyobj){
    console.log(`hello this is ${anyobj.username} i am ${anyobj.age} glad to say i have ${anyobj.Crush}. `)
}

// handleobject(myobj)

// another method u coul have used is like directly passing object.

handleobject(
    {
        username:"Sushant",
        age:22,
        Crush:"fckin no one",
    }
)


