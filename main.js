import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnim from 'chalk-animation' ;
import figlet from 'figlet' ;
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
import boxen from 'boxen' ;

async function print(text) {
    const title = await figlet.text(text) ;
    console.log(chalk.red(title) ) ;
}

// const {firstName} =  await inquirer.prompt({
//     type: 'input' ,
//     name : 'firstName',
//     message: 'what is your first name? ' ,
// })
// console.log(firstName) ;
