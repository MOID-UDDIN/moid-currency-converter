#! /usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
  "US Dollar": 1,
  "Euro": 0.92,
  "British Pound Sterling": 0.79,
  "Swedish Krona": 10.68,
  "Indian Rupee": 83.3,
  "Pakistani Rupee": 277.54,
  "Thai Baht": 36.52,
  "Japanese yen": 151.61,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: [
      "US Dollar",
      "Euro",
      "British Pound Sterling",
      "Swedish Krona",
      "Indian Rupee",
      "Pakistani Rupee",
      "Thai Baht",
      "Japanese Ven",
    ],
  },
  {
    name: "to",
    message: "Enter To Currency",
    type: "list",
    choices: [
      "US Dollar",
      "Euro",
      "British Pound Sterling",
      "Swedish Krona",
      "Indian Rupee",
      "Pakistani Rupee",
      "Thai Baht",
      "Japanese Ven",
    ],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);
