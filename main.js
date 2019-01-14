var run = "";

function calc(num1, num2, op) {
    if (op === "+") {
        total = parseFloat(num1) + parseFloat(num2)
    } else if (op === "-") {
        total = parseFloat(num1) - parseFloat(num2)
    } else if (op === "x") {
        total = parseFloat(num1) * parseFloat(num2)
    } else if (op === "/") {
        total = parseFloat(num1) / parseFloat(num2)
    }
    return `${num1} ${op} ${num2} = ${total} `;
}

function temp(celsius) {
    farenheit = (celsius * (9 / 5)) + 32
    return `${celsius}C = ${farenheit}F`;
}

function bmi(weight, height) {
    bmicalc = weight / (height * height)
    return `Your Bmi is: ${bmicalc}.`;
}

while (run !== "no") {
    var type = prompt("Press 1 for the basic calculator or press 2 for the advanced calculator.")
    if (type === "1") {
        var num1 = prompt("Please Enter your first number.")
        var op = prompt("Please enter an operator from the following options: '+' for addition, '-' for subtraction, 'x' for multiplication or '/' for division.")
        var num2 = prompt("Please Enter your second number.")
        alert(calc(num1, num2, op));

    } else if (type = 2) {
        var type2 = prompt("Press 1 if you want to convert Celsius to Farenheit or Press 2 if you want to use the BMI calculator.")
        if (type2 === "1") {
            celsius = parseFloat(prompt("Enter a temperature in Celsius."))
            alert(temp(celsius));
        } else if (type2 === "2") {
            weight = parseFloat(prompt("Enter your weight in kg."))
            height = parseFloat(prompt("Enter your height in metres."))
            alert(bmi(weight, height));
        }
    }
    var run = prompt("Would you like to use the calculator? Enter 'yes' or 'no' ");
}