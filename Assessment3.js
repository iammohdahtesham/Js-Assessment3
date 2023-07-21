//------------------------------------------------------------------------------------------------------------------
  // QUESTION 5 
  // Rewrite the code below to use array destructuring instead of assigning each value to a variable.
//------------------------------------------------------------------------------------------------------------------

let item = ["Egg", 0.25, 12]; 
// let name = item[0]; 
// let price = item[1]; 
// let quantity = item[2]; 

let[name,price,quantity]=item  //unpack variable name and using destructuring
console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`); console.log(); 

//Explaination - Destructuring unpack the value according to the variable name assign from the array 

// OUTPUT  = Item: Egg, Quantity: 12, Price: 0.25



//------------------------------------------------------------------------------------------------------------------
  // QUESTION 6 
  // Using Array Destructuring get all of the names from this Nested Array
//------------------------------------------------------------------------------------------------------------------
const moreStudents = [ 'Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam'] ]; 
 
const [student1,[student2,student3],[student4,student5]] = moreStudents; // unpack variable name and using destructuring

console.log(student1, student2, student3, student4, student5);

// OUTPUR = Chris Ahmad Antigoni Toby Sam

//Explaination - In this code we use the destructuring operaters to unpack the varible and defining the variable according to the array index placed value 


// ------------------------------------------------------------------------------------------------------------------
  // QUESTION 7 
  // Fix the code to make it work.
// let map = new Map(); 
// map.set("key", "value"); 
// let keys = map.keys();
// keys.push("more");

//------------------------------------------------------------------------------------------------------------------

let map = new Map(); 
map.set("key", "value"); 
let keys = map.keys();
map.set("more");
console.log(keys)
// OUTPUT - [Map Iterator] { 'key', 'more' }

  
