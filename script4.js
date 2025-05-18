"Assignment: JS_4 Apna College"
/* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Ex: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */

/*Solution: 1
    let arr = [1,2,3,4,5,6,2,2]
    let num = 2
    let result = [] 
    for(let i=0; i<arr.length; i++){
        if(arr[i] != num){
            result.push(arr[i])
        }
    }
    console.log(result)
*/

/*Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

/*Solution 2 
Three ways to solve this problem
// 1
let num = 287152
let count = 0;
while(num > 0) {
    num = Math.floor(num/10);
    count++;
}
console.log(count);

//2
let num = 287562
let count = num.toString().length;
console.log(count)

//3 Spread Operator
let num = 287152;
let count = [...num.toString()].length;

console.log(count); // 6
*/

/*Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */

/*Solution 3
let num = 287152
let sum = 0
while(num > 0){
    // num = Math.floor(num % 10)
    let check = num % 10
    sum += check;
    num = Math.floor(num/10);
}
console.log(sum)
*/

/*Qs4. Print the factorial of a number n. */
/*Solution 4: 
let num = 5;
let fact = 1;
for(let i=1; i<=num; i++){
    fact *= i;
}
console.log(fact)
*/

/*Qs5. Find the largest number in an array with only positive numbers.*/

/*Solution: 4
let arr = [200, 5, 6, 7, 10]
let largest = 0;
for(let i=0; i<=arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log(largest)
*/
