//------------------------------While loop.

let j=0;
while(j<10){
    console.log(j);
    j++;
    
}


//----------------------------- Do-While loop.

let i=1
do{
    console.log(i);
    i++;
}
while(i<10)


//--------------------------for of loop

const arr=[1,2,3,4,5]

for(const i of arr){
    console.log(i);
    
}


//this for of loop can also be used for string to print each and every character.



//Maps

const map=new Map()
map.set('IN',"India")
map.set('US',"America")
map.set('Fr',"France")

console.log(map);


for(const key of map){
    console.log(key)
}


// for in loop to studyyy------------------------>>>>>>>>>>>>>>>