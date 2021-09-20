const x = 5;
const y = 6;

const sub = (a = 56, b = 45) => {
    const result = a - b;
    const result2 = x - y
    console.log(result, result2)
}

sub()
// function sub(a = 56, b = 45) {
//     const result = a - b;
//     const result2 = x - y
//     console.log(result, result2)
// }



const sum = x + y;

console.log(sum)

sub(4, 3);

sub(12, 6)

// Es6  => ECMA script
