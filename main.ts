#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Quiz Project

const quiz :{
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;

} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message : chalk.yellow("What keyword is used to declare a variable in TypeScript?"),
        choices: ["var", "let", "const", "all of the above"],
    },
    {
        name: "question_2",
        type: "list",
        message : chalk.yellow("Which of the following is a basic type in TypeScript?"),
        choices: ["number", "string", "boolean", "all of the above"],
    },
    {
        name: "question_3",
        type: "list",
        message : chalk.yellow("How do you define a function in TypeScript?"),
        choices: ["function name() {}", "def name() {}", "function name() : void {}", "function name() -> void {}"],
    },
    {
        name: "question_4",
        type: "list",
        message : chalk.yellow("Which of the following is used to create a class in TypeScript?"),
        choices: ["class MyClass {}", "create class MyClass {}", "MyClass class {}", "define class MyClass {}"],
    },
    {
        name: "question_5",
        type: "list",
        message : chalk.yellow("How do you specify a type for a variable in TypeScript?"),
        choices: ["let variable: type;", "let variable = type;", "var variable = type;", "variable: type;"],
    },
    {
        name: "question_6",
        type: "list",
        message : chalk.yellow("What is the purpose of the `interface` keyword in TypeScript?"),
        choices: ["To define a class", "To define a method", "To define a structure of an object", "To define a module"],
    },
    {
        name: "question_7",
        type: "list",
        message : chalk.yellow("What does the `any` type represent in TypeScript?"),
        choices: ["A specific type", "A type that can be anything", "A type for numbers", "A type for strings"],
    },
    {
        name: "question_8",
        type: "list",
        message : chalk.yellow("How do you create a type alias in TypeScript?"),
        choices: ["type Alias = Type;", "create Alias as Type;", "alias Alias = Type;", "type Alias : Type;"],
    },
    {
        name: "question_9",
        type: "list",
        message : chalk.yellow("What is the default visibility of a class member in TypeScript?"),
        choices: ["public", "private", "protected", "none"], 
    },
    {
        name: "question_10",
        type: "list",
        message : chalk.yellow("How do you specify optional parameters in TypeScript functions?"),
        choices: ["function name(param?: type) {}", "function name(param: type?) {}", "function name(param: type) {}", "function name(param: type = undefined) {}"],
    },

]);

let score: number = 0;

switch (quiz.question_1) {
    case "all of the above":
        console.log(chalk.green("1. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("1. Incorrect!"));
            
};
switch (quiz.question_2) {
    case "all of the above":
        console.log(chalk.green("2. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("2. Incorrect!"));
            
};
switch (quiz.question_3) {
    case "function name() : void {}":
        console.log(chalk.green("3. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("3. Incorrect!"));
            
};
switch (quiz.question_4) {
    case "class MyClass {}":
        console.log(chalk.green("4. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("4. Incorrect!"));
            
};
switch (quiz.question_5) {
    case "let variable: type;":
        console.log(chalk.green("5. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("5. Incorrect!"));
            
};
switch (quiz.question_6) {
    case "To define a structure of an object":
        console.log(chalk.green("6. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("6. Incorrect!"));
            
};
switch (quiz.question_7) {
    case "A type that can be anything":
        console.log(chalk.green("7. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("7. Incorrect!"));
            
};
switch (quiz.question_8) {
    case "type Alias = Type;":
        console.log(chalk.green("8. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("8. Incorrect!"));
            
};
switch (quiz.question_9) {
    case "public":
        console.log(chalk.green("9. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("9. Incorrect!"));
            
};
switch (quiz.question_10) {
    case "function name(param?: type) {}":
        console.log(chalk.green("10. Correct!!!"));
        ++score;
        break;
        default:
            console.log(chalk.red("10. Incorrect!"));
            
};

console.log(chalk.blue.bold(`Score : ${score}`));
