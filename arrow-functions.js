/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

/* // Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block - Executed when function is called
    return a + b // a and b are the parameters
}
let sum = addTwoNumbers(3, 5); //Variable = function with actual numbers for calculation returns result
console.log(sum); // Log result to console to confirm result 
//See result by entering node arrow-function.js in the terminal */


// Arrow Function With Parameters (for more complex functions)
const addTwoNumbers = (a, b) => {
    // Code block - Executed when function is called
    return a + b; // a and b are the parameters
}
let sum = addTwoNumbers(3, 5); //Variable = function with actual numbers for calculation => returns result
console.log(sum); // Log result to console to confirm result


// Single Line Arrow Function With Parameters (for simple functions)
const addTwoNumbers2 = (a, b) => a + b; // Also correct if last a + b is in parentheses, i.e. (a + b)
let sum2 = addTwoNumbers(6, 4);
console.log(sum2);


// Implicit Returns (for very simple functions)
const saySomething = message => console.log(message); // If function only takes one parameter - leave out parentheses
saySomething("Hello!");

const sayHello = () => console.log("Hello") // If function takes no parameters
sayHello();


// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string
    </p>`
)
console.log(returnMultipleLines());