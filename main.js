#!/usr/bin/env/ node

import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnim from 'chalk-animation' ;
import figlet from 'figlet' ;
import { createSpinner } from "nanospinner";
import gradient from "gradient-string";
import boxen from 'boxen' ;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms)) ;
