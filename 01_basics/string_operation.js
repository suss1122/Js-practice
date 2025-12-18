const name="Sushant Naikwadi"

const newstr=name.substring(0,2);

const newstr1=name.slice(2,5);

console.log(newstr);
console.log(newstr1);


//trim

const newstr2="  hello  i have spaces in me." //will have to remove spaces.
console.log(newstr2);
console.log(newstr2.trim());  //remmoves atrting and end spaces.

let url="hhtps://sushant.com/sushant%20.com";
console.log(url);  //hhtps://sushant.com/sushant%20.com

url = url.replace('%20','-') 

console.log(url);  //hhtps://sushant.com/sushant-.com




