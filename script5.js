"Complete Learnings of JS_5";
"Assignment JS_5";

/* Ex:1: Accessing the object 
let student = {
    name: "Dev",
    class: "Standard",
    Number: 808170,
    email: null
};
console.log(student.name)
console.log(student["class"])
console.log(student["Number"])
console.log(student.email)
*/

/*Ex:2 Accessing the array & array of array
let post = {
    name: "riya",
    list: ["xyz", "abc"],
    check: [
        ["alex", "router"],
        ["bob"]
    ]
};
console.log(post.list);
console.log(post["list"]);
console.log(post["list"][0])
console.log(post.list[1])
console.log(post.check[0][1])
console.log(post["check"][1])
*/

/*Ex: 3 Learning accessing the values

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
}
// console.log(obj.1)      ❌
// console.log(obj[1])     ✅
// console.log(obj[true])  ✅
// console.log(obj[null])  ✅
// console.log(obj.null)   ✅
// console.log(obj.undefined)  ✅
*/

/*Ex: 4 Add/update, Delete value 
let stu = {
    name: "Yuvi",
    Age: 22,
    marks: 90.4,
    city: "Noida"
}

stu.city = "Gurgaon"  // change city
stu.gender = "Male"   // add new property gender
stu.marks = "A"       //change marks to 'A'

//Delete Key-pair
delete stu.city
console.log(stu)
*/

/*Ex: 5 Objects of Object: Access, first_letter access of key, Object.keys,values,entries. 

const classInfo = {
    Alex: {
        grade: "A+",
        num: 808
    }, 
    Bob: {
        grade: "A",
        num: 797
    },
    Clark: {
        grade: "O",
        num: 626
    }
};

console.log(classInfo.Alex.grade)
console.log(classInfo["Alex"]["num"])

// Access key first letter 'Alex': 'A', Bob -> 'B'
let firstKey = Object.keys(classInfo)[1]
console.log(firstKey[0])


// Object.keys, Object.values and Object.entries 
 let checKey = Object.keys(classInfo)
 console.log(checkey)
 
 let checkValues = Object.values(classInfo)
 console.log(checkValues)
 
 let checkEntries = Object.entries(classInfo)
 console.log(checkEntries)
 */

// Dynamic change's
/*
const student = {
  name: "Devangini",
  age: 22
};

let key = "name"; // we can change key as well
console.log(student[key]); 
*/

/*Ex: 6 Array of Objects 
const information = [
    {
        name: "Alex",
        class: "Xth"
    },
    {
        name: "Bob",
        class: "XIth"
    },
    {
        name: "Franie",
        class: "XIIth"
    }
]

console.log(information[0])
console.log(information[0].name)
console.log(information[1].name)
console.log(information[2].class)

// create new key
information[0].gender = 'Male'
console.log(information)

// Using Object, keys, values and Entries
console.log(Object.keys(information))       
console.log(Object.values(information))   
console.log(Object.entries(information))
*/

/*Ex: 7 Math Object 
Math properties
console.log(Math.PI)
console.log(Math.E)

// Math Method
console.log(Math.abs(-6))
console.log(Math.pow(2,4))
console.log(Math.ceil(3.4))     // up
console.log(Math.floor(3.4))    // ground
console.log(Math.round(5.6))    // 5.1 to 5.5 -> 5 and 5.6 to 5.9 -> 6
console.log(Math.floor((Math.random() * 100) + 1))

*/

"Assignment Js_5";
/*Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6].*/

/*Sol:1 
let num = Math.floor((Math.random()*6)+1)
console.log(num)
*/

/*Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.*/
/*Sol: 2 
let car = {
    name: "xuv",
    mode: "700",
    color: "white"
}
console.log(car.name)
*/

/*Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”. 
Add a new property country and set it to the United States. */

/*Sol: 3

let Person = {
    name: "Alex",
    Age: 29,
    city: "San"
}

Person.city = "New York"
Person.country = "United States"
console.log(Person)
*/