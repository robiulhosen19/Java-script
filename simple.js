// var , let , const

var name = "sojib!";

console.log(name);

let age = 25; 
console.log(age);

// let input = prompt("what is your name?");
// alert("Hello " + input);

//variable name like letter, number , -, $ 
// variable name can not start with number 

let firstName ;
console.log(firstName); // undefined . bec- not valu set 
firstName = "robiul_1995";
console.log(firstName); // robiul_1995

//let firstName; // camel case 
let first_name; // underscore
let firstName_1; // camel case with number
// let 1name; // number at start of variable name is not allowed
// let name1; // camel case with number is allowed
// let name_1; // underscore with number is allowed
// let name-1; // hyphen is not allowed at start of variable name

//const
// case sencitive 
const city = "dhaka";
console.log(city); // dhaka
// city = "chittagong"; // error
// city = city; // error


//reasign
 name = "sojib1";  
 name = "robiul1";
 console.log(name); // robiul

 //const

 const citys = ["dhaka", "chittagong", 24, 33];
//  citys.pop();
 citys.push("mirpur");
 console.log(citys);