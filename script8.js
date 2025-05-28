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

// let arr = [1,2,3,4];
// let ch = arr.filter(function(arr) {
//     return arr / 3;
// })
// console.log(ch);


let arr = [1,2,3,4];
let ch = arr.filter(function(arr) {
    return arr % 3;
})

console.log(ch)