// const student = {
//     firstName: "Bharani",
//     class: 10,
//     marks: {
//         maths: 96,
//         english: 89
//     },
//     result: function () {
//         let sureName = "Lakshmi"

//         console.log(`${this.firstName} ${sureName} completed his 10th standard with 96%`)
//     }
// }

// for (let i in student) {
//     console.log(i)
// }

// let k = Object.keys(student)
// let l = Object.values(student)
// let m = Object.entries(student)

// console.log(m)
// for (i of student) {
//     console.log(i)
// }

// console.log(typeof student)

// console.log(student.firstName)

// console.log(student.marks.maths)

// console.log(student.result())


class Person {
    constructor(name = "Sasi", age = 22) {
        this.name = name,
            this.age = age
    }
}

const person = new Person()

const person2 = new Person("Ravi", 18)


// Student

s1 = {
    name: "jai",
    class: 12
}

s2 = {
    name: "suguna",
    class: 8
}

class Student {
    constructor(name, age) {
        this.name = name,
            this.class = age
    }
}

const s1 = new Student("jai", 12)

const s2 = new Student("suguna", 8)

person2.gender = "Male"

// console.log(person2)

Person.prototype.profession = "student"

console.log(person)
console.log(Object.keys(person2))




// console.log(Person())

