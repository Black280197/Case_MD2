// @ts-ignore
let readlineSync = require('readline-sync');


// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

import {AccountManager} from "./Account/AccountManager";
import {EmployeeManager} from "./Employee/EmployeeManager";

let accountManager: AccountManager = new AccountManager();

accountManager.welcome();

