const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const prompt = inquirer.createPromptModule();
const yourTeams = [];

const managerQuestions = [
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
    name: 'officeNumber',
  },
].then((manager) => {
  console.log(manager);
});


const engineerQuestions = [
  {
    name: 'title',
    message: 'Engineer? Please enter your name?'
  },
  {
    name: 'github',
    message: 'What is your employee id?'
  },
  {
    name: 'email',
    message: 'What is your email address?'
  },
  {
    name: 'email',
    message: 'What is GitHub username?'
  },
];
const internQuestions = [
  {
    name: 'title',
    message: 'Intern? Please enter your name?'
  },
  {
    name: 'github',
    message: 'What is your employee id?'
  },
  {
    name: 'email',
    message: 'What is the name of your school?'
  },
  {
    name: 'email',
    message: 'What is your office number?'
  },
];