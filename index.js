#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the opperators to perform opperation ",
        type: "list",
        name: "opperator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
// conditional statment
if (answer.opperator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opperator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opperator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opperator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select a Valid Opperator");
}
