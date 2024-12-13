#! /usr/bin/env node

//Importing inquirer and chalk Package
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code with Esha - Word Counter"));
console.log("=".repeat(60));

//Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type:  "input",
        message: "Enter a Sentence",
    }
]);
// Trimming the sentence and splitting it into words based on "space"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.lenght)}`));
console.log("=".repeat(60));