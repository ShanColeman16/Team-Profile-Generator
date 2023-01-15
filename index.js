const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const pageTemplate = require('./src/page-template');
const yourTeams = [];

const managerQuestions = [
  {
    message: 'Please enter your manager\'s name?',
    name: 'name',
  },
  {
    message: 'What is your manager\'s id?',
    name: 'id',
  },
  {
    message: 'What is your manager\'s email address?',
    name: 'email',
  },
  {
    message: 'What is your manager\s office number?',
    name: 'officeNumber',
  },
];


const engineerQuestions = [
  {
    name: 'name',
    message: 'Engineer? Please enter your name?'
  },
  {
    name: 'id',
    message: 'What is your employee id?'
  },
  {
    name: 'email',
    message: 'What is your email address?'
  },
  {
    name: 'gitHub',
    message: 'What is GitHub username?'
  },
];
const internQuestions = [
  {
    name: 'name',
    message: 'Intern? Please enter your name?'
  },
  {
    name: 'id',
    message: 'What is your employee id?'
  },
  {
    name: 'school',
    message: 'What is the name of your school?'
  },
  {
    name: 'email',
    message: 'What is your email address?'
  },
];

prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
  const manager = new Manager(name, id, email, officeNumber);
  yourTeams.push(manager);
  const template =pageTemplate(yourTeams);
  fs.writeFileSync('./dist/team.html');
});