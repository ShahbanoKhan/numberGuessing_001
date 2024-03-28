#! /usr/bin/env node

import inquirer from 'inquirer';

const randomNumber = Math.floor(Math.random() * 6 + 1);

const ans = await inquirer.prompt([
    {
        name: 'gussedNumber',
        type: 'number',
        message: 'Guess a number between 1-6:',
    },
]);

if (ans.gussedNumber > 6) {
    console.log('choose between 1-6');
}
else if (ans.gussedNumber === randomNumber) {
    console.log('Congratulations! You won');
}
else {
    console.log('Better luck next time');   
}
