let example;

//number to string 
example = String(555);

//date to string 
example = new Date();


// Boolean to string 
example = String(true);

//array to string 
example = String([1,2,3,4]);

//to sring method 
example = (555).toString();

//string to number 
example = Number("3343");

//boolen to number 
example = Number(true); //true means 1
example = Number(false); //false means 0 

//another ways int , float 

example = parseInt("555.0987"); //555
// example = parseFloat("555.55");
 example = parseFloat("444.93333");

val1 = "6";
val2 = 7;
example = Number(val1 + val2);
 
console.log(example);
console.log(typeof(example));
console.log(example.length);
console.log(example.toFixed());