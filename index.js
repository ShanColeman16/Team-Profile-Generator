const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const yourTeams = [];
prompt = ([
    {
      message: 'Please enter your manager/s name?',
      name: 'name',
    },
    {
      message: 'What is your manager/s id?',
      name: 'id',
    },
    {
      message: 'What is your manager/s email address?',
      name: 'email',
    },
    {
      message: 'What is your manager/s office number?',
      name: 'office number',
    },

]) .then((manager) => {
    console.log(manager);
});

// const questions2 = [
//     {
//         type: "input",
//         name: "title",
//         message: "Engineer? Please enter your name?"
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "What is your employee id?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your email address?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is GitHub username?"
//     },
// ];
// const questions3 = [
//     {
//         type: "input",
//         name: "title",
//         message: "Intern? Please enter your name?"
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "What is your employee id?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the name of your school?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is your office number?"
//     },
// ];