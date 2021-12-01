const string = "Hello world, I am Javascript hello and hey! Hello he is nodejs, we love ant man and this is Mar 12. Our friend name is Maya"

const string2 = "mass_Maasi! Muthu_345646\t%\n*+"

const string3 = "    ` colour color `    "

const string4 = "vvjs_22"

const regex = /Hello/gi
console.log(regex.test(string))
console.log(string.match(regex))
const regex2 = /hello/ig
console.log(string.match(regex2))
const regex3 = /hello/i
const regex4 = /hello | hey/
const regex5 = /h/
const regex6 = /h/ig
const regex7 = /ma./ig
const regex8 = /ma[rn]/ig
const regex9 = /ma[p-z]/ig
const regex10 = /ma[^aeiouy]/ig


const regex11 = /a+/g 
const regex12 = /ma*/ig
const regex13 = /m[a-z]*u/i
const regex14 = /m[a-z]*?u/i


const regex15 = /^ma/
const regex16 = /646$/
const regex17 = /[A-Za-z0-9_]/g
const regex18 = /\w/g
const regex19 = /\W/g
const regex20 = /\d/g
const regex21 = /\D/g
const regex22 = /\s/g
const regex23 = /\S/g
const regex24 = /a{1,5}/ig

const regex25 = /colou?r/g

const regex26 = /(?=\D*\d)/

const regex27 = /(\w+)\s(\w+)/

const regex28 = /^\s+ | \s+$/g

// console.log(regex.test(string))
console.log(regex2.test(string))
// console.log(regex3.test(string))
// console.log(regex4.test(string))

// console.log(string.match(regex))
// console.log(string.match(regex5))
// console.log(string.match(regex6))

// const array = string.match(regex5)
// console.log(array['index'])


// console.log(string.match(regex7))
// console.log(string.match(regex8))
// console.log(string.match(regex9))
// console.log(string.match(regex10))
// console.log(string2.match(regex11))
// console.log(string2.match(regex12))
// console.log(string2.match(regex13))
// console.log(string2.match(regex14))
// console.log(string2.match(regex15))
// console.log(string2.match(regex16))
// console.log(string2.match(regex17))
// console.log(string2.match(regex18))
// console.log(string2.match(regex19))
// console.log(string2.match(regex20))
// console.log(string2.match(regex21))
// console.log(string2.match(regex22))
// console.log(string2.match(regex23))
// console.log(string2.match(regex24))
// console.log(string3.match(regex25))
// console.log(string4.match(regex26))

// console.log(string3.replace(regex27, '$2 $1'))
// console.log(string3.replace(regex28, ''))