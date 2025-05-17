"Practice: String & Array Methods";
"Below: JS_3 Assignment: Apna College";

/***** STRING METHOD ******/
/*
// 1. Trim Method
let check = "            hello";
console.log(check.trim());
let password = prompt("Set Password")
console.log(password.trim());
*/

/*
// 2. Upper & Lower Case
let check2 = "hello"
let check3 = "I AM A SOFTware engineer"
console.log(check2.toUpperCase())
console.log(check3.toLowerCase())
*/

/*
// 3. IndexOf
let check = "I Am Learner check"
console.log(check.indexOf("Am"))
*/

/*
// Chaining Method
let string1 = 'i am learner, doing coding    '
console.log(string1.trim().toUpperCase())
*/

/*
 // Slice Method
 let str = 'ILoveCoding'
 console.log(str.slice(5))   
 console.log(str.slice(0, 5))
 let check = 'Ilove'
 console.log("Third: " + check.slice(-4, -2)) // lo (explanation: startI = -4, endI = -2 (last index is not included))
 */

/*
 // Replace & Repeat Method

 // Replace
 let string1 = "IloveCoding"
 let ans = string1.replace("love", "check")
 console.log(ans)

 // Repeat
 let x = 'code'
 console.log(x.repeat(10)) 
*/

/* Arrays
 * Arrays Mehthod
 // Push
 let arr = ['aman', 'radha', 'krishna']
 console.log(`Old arr: ${arr}`)
 let ans = arr.push('valmiki')
 console.log(ans)
 console.log(`New arr: ${arr}`)
 
  //Pop
  let arr1 = ['aman', 'radha', 'krishna']
 console.log(`Old arr: ${arr1}`)
 let ans = arr1.pop()
 console.log(ans)
 console.log(`New arr: ${arr1}`)
 
 //Unshift
 let arr = ['aman', 'radha', 'krishna']
 console.log(`Old arr: ${arr}`)
 let ans = arr.unshift('valmiki')
 console.log(ans)
 console.log(`New arr: ${arr}`)
 //shift
 let arr = ['aman', 'radha', 'krishna']
 console.log(`Old arr: ${arr}`)
 let ans = arr.shift()
 console.log(ans)
 console.log(`New arr: ${arr}`)

 // indexOf
 let arr = ["a", "b", "c", "d"]
 console.log(arr.indexOf("b"))
 
 //includes
 let arr1 = ["alex", "brave", "delusion", "hope"]
 console.log(arr1.includes("delusion"))
 
  //concat
  let arr1 = ["al", "bl", "cl", "dl"]
  let arr2 = ["el", "fl", "gl", "hl"]
 
  let check = arr1.concat(arr2)
  console.log(check)

  // Reverse
  let arr = [1, 2, 3, 4]
  console.log(arr.reverse())
  
  // Splice Method
  let check = ["red", "orange", "green", "blue"];
  //   let ans = check.splice(2);
  //  let ans1 = check.splice(2, 2);
  // let ans2 = check.splice(0, 1, "violet", "skyBlue")
  console.log("Splice: " + ans2);
  console.log("Original Array change: " + check);
  
  // Using Splice method add mercedes, b/w toyota & xuv
  let ch = ["toyota", "xuv", "maruti", "bmw"];
  let ans = ch.splice(1, 0, "mercedes")
  console.log(ans);
  console.log(ch)
 */

" ASSIGNMENT JS(Part 3)";
/*Qs1. Write a JS program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n = 3
Print [7, 9, 0] 

Two ways to solve slice and splice
*/
/* solution: 1
let arr = [7, 9, 0, -2];
let num = 3;
//1. Slice
console.log("Using Slice Method: ", arr.slice(0, num));
//2. Splice
arr.splice(3, 1);
console.log("Using Splice Method", arr);
*/

/*
Qs2. Write a JS program to get the last n elements of an array. 
For example: for array [7, 9, 0,-2], n = 3
Print, [9, 0,-2]
*/
/* Solution 2:  
let arr2 = [7, 9, 0, -2]

let num = 3
console.log("Last n elements: ", arr2.slice(arr2.length-num));
*/

/* Qs3. Write a JS program to check whether a string is blank or not. */
/* solution 3
let stringCheck = prompt("Enter your string!")
if (stringCheck.length == 0){
    console.log("Empty")
} else {
    console.log("Won")
}
*/

/*Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case. */

/* Solution 4: 
let checkString = "ApnaColleGe"
let numIndex = 3

if(checkString[numIndex] == checkString[numIndex].toLowerCase()){
    console.log("LowerCase")
} else {
    console.log("Not A Lower Case")
}
*/

/* Qs5. Write a JavaScript program to strip leading and trailing spaces from a string. */

/*Solution 5:
 let string = "  Check          the String    "
 console.log(string.trim())
*/

/* Qs6. Write a JavaScript program to check if an element exists in an array or not. */

/*Solution 6:
Solved in Two ways:
let arr = [2,3,4,5,6]
let check = 4 
let found = false
'1st Way'
// if(arr.includes(check)){
    //     console.log("Found the number")
    // } else {
        //     console.log("Not exist", -1)
        // }
        '2nd way'
        for(let i =0; i<arr.length; i++){
            if(arr[i] === check){
                found = true
                break
            } 
        }
        if(found){
            console.log("Found")
        } else {
            console.log("NotFound")
    }
    
*/
