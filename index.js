#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importing inquirer and chalk Package
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
//Display a colourfull welcome message
console.log(chalk_1.default.bold.cyanBright("\n \t\t Code with Esha - Word Counter"));
console.log("=".repeat(60));
//Prompt the user to enter a sentence
var answers = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming the sentence and splitting it into words based on "space"
var words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk_1.default.bold("- Sentence words:"));
console.log(words);
console.log(chalk_1.default.bold("\n - Word Count: ".concat(chalk_1.default.bold.redBright(words.lenght))));
console.log("=".repeat(60));
