// let array = [] //empty array

// console.log(array)

// array = [1, 2, 3, 4, 5]

// console.log(array)

// console.log(array.indexOf(3)) // return index

// console.log(array[2]) // return the element

// console.log(array.length)

// array = [3, "string", 5.32, true, undefined, null, {name: "John", age: 15}]

// console.log(array)

// console.log(array.pop())
// console.log(array)

// console.log(array.shift())
// console.log(array)

// array.push(143)
// array.unshift(431)

// console.log(array)

// array.splice(1, 0, 34, "Naga")

// // array.splice("starting Index", "number of elements will be removed", "element which will be add")

// console.log(array)

// array = [...array, ["sakthi", "siva", "subramani"]]

// console.log(array)

// console.log(array[9][1])

array = [3, "string", 5.32, true, undefined, null, {name: "John", age: 15}]

// console.log(array[6].name)

// /* ================================================ */

// let i = 0;

// const l = array.length // 7

// for (i ; i < l; i++) {
//     console.log(array[i])
// }

for (let j of array ) {
    console.log(j)
}

for (j in array) {
    console.log(j)
}