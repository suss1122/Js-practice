const myarray=[1,2,3,4,5,6]

console.log(myarray)



let newarray=myarray.push(7);


console.log(`new array is [${newarray}].`)
console.log(`my original array is [${myarray}].`)

console.log(myarray.includes(4));
console.log(myarray.indexOf(3));


const newArr=myarray.join()  // join all entries as a string. o/p-> 1,2,3,4,5,6,7

console.log(newArr);



//------------------>Slice,Splice <-------------------------------------


// in slice we get out of the cut string that we slice from main string 
// in splice we get the sliced string including last limit too and also the original string updates to new string having only the left over elements.





