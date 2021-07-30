'use sctrict';

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);

    }
}

console.log(mathOperation(10, 5, "+"));
console.log(mathOperation(10, 5, "-"));
console.log(mathOperation(10, 5, "*"));
console.log(mathOperation(10, 5, "/"));