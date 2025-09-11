const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This is our main function
function fizzbuzz() {
    // Put your code here...
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    console.log("Welcome to FizzBuzz!")
    rl.question(
        "Please enter maximum number: ",
        (maxNumber) => {
            for (let i=1; i <= Number(maxNumber); i++) {
                console.log(i, checkNumber(i))
            }
            rl.close();
        }
    )

    rl.on('close', () => {
        process.exit(0);
    });
}

function checkNumber(number) {
    let textOutputArr = []
    if (number % 3 === 0) textOutputArr.push("Fizz")
    if (number % 5 === 0) textOutputArr.push("Buzz")
    if (number % 7 === 0) textOutputArr.push("Bang")
    if (number % 11 === 0) {
        textOutputArr = []
        textOutputArr.push("Bong")
    }
    if (number % 13 === 0) {
        let bWordFound = false
        let i = 0
        while (!bWordFound && i < textOutputArr.length) {
            if (textOutputArr[i][0] === "B") {
                bWordFound = true
                textOutputArr.splice(i,0,"Fezz")
            }
            i++
        }
        if (!bWordFound) textOutputArr.push("Fezz")
    }
    if (number % 17 === 0) textOutputArr.reverse()
    if (textOutputArr.length > 0) return textOutputArr.join("")
    return number
}

// Now, we run the main function:
fizzbuzz();
