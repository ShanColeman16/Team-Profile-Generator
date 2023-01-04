const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your manager's name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your office number?"
    },
];
const Engineer = require('./lib/Engineer');
const questions2 = [
    {
        type: "input",
        name: "title",
        message: "Engineer? Please enter your name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "email",
        message: "What is GitHub username?"
    },
];
const Intern = require('./lib/Intern');
const questions3 = [
    {
        type: "input",
        name: "title",
        message: "Intern? Please enter your name?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your employee id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the name of your school?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your office number?"
    },
];