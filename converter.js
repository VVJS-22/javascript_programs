const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter the value of kilometer:", function(value) {
    const kilometer = parseInt(value);
    const factor = 0.621371

    const miles = kilometer * factor

    console.log(miles)

    rl.close()
})

rl.on("close", function() {
    process.exit()
})





