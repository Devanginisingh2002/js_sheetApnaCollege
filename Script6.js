"Complete Learnings of JS_6";
"Assignment JS_6";

/*Print 1 to 5 
function printFive(){
    for(let i=1; i<=5; i++){
        console.log(i)
    }
}
printFive();
*/

/* Create a fxn to roll a dice & always display the value of the dice 
function dice(){
    let dice = Math.floor((Math.random() * 6) + 1)
    console.log(dice)
}
dice()
*/

/* Create a fxn that returns the concatenation of all strings in an array.
let arr = ["hi", "hello", "hey"]
function StringConcate(){
    let result = "";
    for(let i=0; i<arr.length; i++){
        result += arr[i]
    }
    return result;
}
console.log(StringConcate());
*/

"Assignment JS_6";
/*Qs1. Write a JavaScript function that returns array elements larger than a number. */
/*Sol: 1 
    let arr = [2,3,4,5,6,10,8,9];
    let num = 5;

    function greaterThanParticularNum(arr, num){
        for(let i=0; i<arr.length; i++){
            if(arr[i]>num){
                console.log(arr[i])
            }
        } 
    }

    greaterThanParticularNum(arr,num)
*/

/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh” */

/*Sol: 2 
let str = "abbccddeeffgghhii"
let result = ""
function duplicateRemove(){
    for(let i=0; i<str.length; i++){
        if(!result.includes(str[i])){
            result += str[i]
        }
    }
    return result
}
console.log(duplicateRemove(str))
*/

/*Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States on America"]
output : "United States of America" */

/*Sol: 3

let country = ["Australia", "Germany", "United States on America"]
let ansIndex = 0;
function longestCountry(){
    for(let i=0; i<country.length; i++){
        let answerLength = country[ansIndex].length;
        let currentLength = country[i].length;
        if(currentLength > answerLength){
            ansIndex = i;
        }
    }
    return country[ansIndex]
}

console.log(longestCountry(country))
*/

/*Qs4. Write a JavaScript function to count the number of vowels in a String argument.*/

/*Sol: 4

let str = "apnacollege"
let count = 0;
function countVowel(str){
    for(let i=0; i<str.length; i++){
        if(
            str.charAt(i) == 'a' || 
            str.charAt(i) == 'e' || 
            str.charAt(i) == 'i' || 
            str.charAt(i) == 'o' || 
            str.charAt(i) == 'u' 
        ) {
            count++;
        }
    }
    return count;
}
console.log(countVowel(str));
*/

/* Qs5. Write a JavaScript function to generate a random number within a range (start,
end).
let start = 100;
let end = 200;
// let start = prompt("Enter start num: ");
// let end = prompt("Enter end number: ");
function RandomNum(start, end){
    let num = Math.floor(Math.random()*(end - start) + start)
    return num;
}
console.log(RandomNum(start, end));
*/
