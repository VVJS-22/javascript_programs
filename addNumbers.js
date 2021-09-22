// const a = 5;
// const b = 6;

// let c;
// let _c;
// let $c;
// let c1;

// // let -c;
// // let 1c;



// const sum = a + b

// console.log(sum)

// console.log("5" == 5) //true
// console.log("5" === 5) //false

// console.log("a" == "a") //true
// console.log("a" === "a") //true
// console.log("a" == "A") //false

// console.log(1 + 1) //2
// console.log(1 - 1) //0
// console.log(1 + "1") //11
// console.log(1 - "1") //0
// console.log("1" + "1") //11
// console.log("1" - "1") //0

// console.log("2"+true-false) //true = 1; false = 0; null = 0;
// console.log(4-false-true)

// //get input from user

// const x = parseInt(prompt('Enter the value of x:'))
// const y = parseInt(prompt('Enter the value of y:'))

// const sub = x - y

// console.log(sub)


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter x:", function(x) {
    rl.question("Enter y:", function(y) {
        sum = parseInt(x) + parseInt(y);
        console.log(sum)
        rl.close()
    })
})

rl.on("close", function() {
    process.exit()
})