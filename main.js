#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message
console.log(chalk.bold(chalk.green("╔══════════════════════════╗")));
console.log(chalk.bold(chalk.green("║   Welcome to Currency Converter  ║")));
console.log(chalk.bold(chalk.green("╚══════════════════════════╝")));
// Currency conversion rates
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AED: 3.67,
    SAR: 3.75 // Saudi Riyal
};
// Prompt user for input
const userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: [
            "\u{1F4B5} USD",
            "\u{1F4B6} EUR",
            "\u{1F4B7} GBP",
            "\u{1F4B8} INR",
            "\u{1F4B9} PKR",
            "\u{1F511} AED",
            "\u{1F514} SAR" // 🅔 SAR (Saudi Riyal)
        ]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: [
            "\u{1F4B5} USD",
            "\u{1F4B6} EUR",
            "\u{1F4B7} GBP",
            "\u{1F4B8} INR",
            "\u{1F4B9} PKR",
            "\u{1F511} AED",
            "\u{1F514} SAR" // 🅔 SAR (Saudi Riyal)
        ]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
// Display conversion result
console.log(chalk.green("Conversion Result:"));
console.log(chalk.yellow(`Converting ${userAnswer.amount} ${userAnswer.from.slice(3)} to ${userAnswer.to.slice(3)}:`));
const fromAmount = currency[userAnswer.from.slice(3)]; // Exchange Rate
const toAmount = currency[userAnswer.to.slice(3)]; // Exchange Rate
const amount = userAnswer.amount; // Amount
const baseAmount = amount / fromAmount; // Convert amount to base currency
const convertedAmount = baseAmount * toAmount; // Convert base amount to target currency
// Display converted amount
console.log(chalk.cyan(`${userAnswer.amount} ${userAnswer.from.slice(3)} equals ${convertedAmount.toFixed(2)} ${userAnswer.to.slice(3)}`));
