// import { stdin } from "node:process";
// import chalk from "chalk";
// import checkAge from "./modules/ageCheck.js";
// import formatUserInfo from "./modules/userInfo.js";

// console.log(chalk.red("What is your name?"));

// stdin.on("data", (input) => {
//   const name = String(input).trim();
//   console.log(chalk.yellow(`Oh, your name is ${name}.`));

//   console.log(chalk.red("\nOk. What is your age?"));

//   stdin.once("data", (input) => {
//     const age = parseInt(String(input).trim());
//     const status = checkAge(age);

//     const formattedMessage = formatUserInfo(name, age, status);
//     if (age >= 18) {
//       console.log(chalk.green(formattedMessage));
//     } else {
//       console.log(chalk.blue(formattedMessage));
//     }
//     process.exit();
//   });
// });


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

const answer2 = await rl.question('What do you think of NPM? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();