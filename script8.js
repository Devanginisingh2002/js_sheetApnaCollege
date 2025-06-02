"Learnings of JS_8";
"Assignment JS_8";

/* For Each Method: 
    let arr = [2,3,4,5,6]
    arr.forEach(function(arr) {
        console.log(index, arr);
    })

    let arr1 = ["apple", "mango", "litchi"];
    arr1.forEach(function(arr1, index, check){
        console.log(index, check);
    })
*/

/* Map Method 
    let movie = ["marvel", "loki", "spiderman"];
    let checkMovie = movie.map(function(element, index, array){
        console.log("Element: ", element);
        console.log("Position: ", index);
        console.log("Original Array: ", array);
        
    })

    const num = [1,2,3,4];
    const check = num.map(function(element){
        return element % 2 == 0
    })
    console.log(num);
    console.log(check);
*/

/* Filter Method     
    let arr = [2,4,6,7,9,2,3,4,5,6,7,9];
    let checkfilter = arr.filter(arr => {
    return arr % 3 == 0
    })

    console.log(arr);
    console.log(checkfilter);
*/

/* Reduce Method 
  let arr_check = [1,2,3,4];
  let total = arr_check.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  }, 0)
  console.log(total)
*/

/* Spread Operator 
  //1. copy
  let arr1 = [1,2,3];
  let arr2 = [...arr1];
  // console.log(arr2);

  //2. Merge Array
  let arr3 = [1,2,3];
  let arr4 = [4,5,6];
  let merge = [...arr3, ...arr4];
  // console.log(merge);

  //3. Fxn Arguments
  function sum(a,b,c) {
    return a+b+c;
  }
  let nums = [10,20,30];
  console.log(sum(...nums));
*/

/*Rest Operator

*/

//1. Fxn with unknown no. of Arguments
function sum(...nums){
  console.log(nums);
  return nums.reduce((acc, curr) => acc+curr, 0)

}
console.log(sum(1,2,3));

//2.


// let obj = {
//   name: "Dev",
//   age: 24,
//   contact: 808
// };

// console.log(...obj);




"Assignment JS_8";
/* Qs1. Square and sum the array elements using the arrow function and then find the
average of the array. */
/* solu: 1 
  let arr = [1, 2, 3, 4];
  let square = arr.map((arr) => {
    return arr * arr;
  });
  console.log(square);

  let sum = square.reduce((acc, curr) => {
    return acc + curr;
  },0);
  console.log(sum);

  let avg = sum / arr.length;
  console.log(avg); 
*/

/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/
/* Solu 2:
  let arr = [1,2,3,4];
  console.log(plusFive);
  var plusFive = arr.map((arr) => {
    return arr + 5;
  })    
*/

/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/
/*Solu: 3 
  let arr = ["check", "implementation"];
  let newArr = arr.map((arr)=>{
    return arr.toUpperCase();
  })
  console.log(newArr)
*/

/*Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/
/*Solu 4 */


/*Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.*/

/*Sol 5
 */

// let obj1 = {
//   name: "Dev",
//   Age: 24,
//   Contact: 808
// }
// let obj2 = {
//   name: "Yuv",
//   Age: 22,
//   Contact: 749 
// }
// let mergeObj = 
