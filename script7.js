"Learnings of JS_7";
"Assignment JS_7";

"Extra Que";
/*Q: Write fxn that prints "Hello", 5 times at interval of 2sec each
let check = setInterval(() => {
    console.log("Hello World")
}, 2000);

// Now, In above ques add, after 5times of printing "Hello World", it print function clears.: For this use 'Set-time out'
setTimeout(() => {
    clearInterval(check)    //read
    console.log("Clears")
}, 10000)
*/

"Assignment JS_7";
/* Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers
 */
/*Sol: 1 
let arr = [1, 2, 3, 4, 5];
let arrayAverage = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
};
console.log(arrayAverage(arr));
*/

/*Qs2. Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not.*/

/*Sol: 2
let num = 4;
let isEven = (num) => {
    return num % 2 == 0;
}
console.log(isEven(num));
//single line solution
// let isEven = (num) => num % 2 == 0; 
*/

/*Qs3. What is the output of the following code 
const object = {
    message: "Hello World",
    
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

//Output: object.logMessage to setTimeout, you're not passing the method with its context (the object). You're passing a reference to a function that is then invoked by setTimeout, where this becomes undefined. source(ChatGPT)
*/

/*Qs4.What is the output of the code?
let length = 4;
function callBack() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callBack) {
        callBack();
    },
};
object.method(callBack, 1, 2);

*/
