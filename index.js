const colors = require('colors');
const colorNumbers = { green: 0, yellow: 1, red: 2 };
const firstArg = process.argv[2];
const secondArg = process.argv[3];
let currentColor = colorNumbers.green;

if (secondArg < 2) {
    console.log(colors.red('Простых чисел в диапазоне нет'));
} else if (isNaN(firstArg) || isNaN(secondArg)) {
    console.log(colors.red('Вы ввели не число!'))
    return;
};

for (let i = firstArg; i <= secondArg; i++) {
    if (isPrimeNumber(i)) colorPrint(i);
};

function isPrimeNumber(number) {
    if (number <= 1)
        return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        };
    };
    return true;
}

function changeColor() {
    currentColor++;
    if (currentColor > colorNumbers.red)
        currentColor = colorNumbers.green;
}

function colorPrint(number) {
    switch (currentColor) {
        case colorNumbers.red:
            console.log(`${number}`.red);
            break;
        case colorNumbers.green:
            console.log(`${number}`.green);
            break;
        case colorNumbers.yellow:
            console.log(`${number}`.yellow);
            break;
    }
    changeColor();
}