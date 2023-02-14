const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const prompt = inquirer.createPromptModule();

const pageTemplate = require('./src/page-template');
const yourTeams = [];

const managerQuestions =[  
  {
  message: 'May I have your manager\'s name?',
  name: 'name',
},
{
  message: 'May I have your manager\'s id?',
  name: 'id',
},
{
  message: 'May I have your manager\'s email?',
  name: 'email',
},
{
  message: 'May I have your manager\'s office number?',
  name: 'office Number',
},
];

const engineerQuestions = [
  {
    message: 'May I have your engineer\'s name?',
    name: 'name',
  },
  {
    message: 'May I have your engineer\'s id?',
    name: 'id',
  },
  {
    message: 'May I have your engineer\'s email?',
    name: 'email',
  },
  {
    message: 'May I have your engineer\'s office number?',
    name: 'office Number',
  },
  {
    name: 'gitHub',
    message: 'What is GitHub username?'
  },
];
const internQuestions = [
  {
    message: 'May I have your intern\'s name?',
    name: 'name',
  },
  {
    message: 'May I have your intern\'s id?',
    name: 'id',
  },
  {
    message: 'May I have your intern\'s email?',
    name: 'email',
  },
  {
    message: 'May I have your intern\'s school?',
    name: 'school',
  },
];
prompt (managerQuestions).then(({name, id,email,officeNumber}) => {
  const manager = new Manager(name, id,email,officeNumber);
  yourTeams.push(manager);
})
.then(() => {
 return prompt ({
    message: "Do you need to add more employees?",
    type: 'confirm', 
    name: 'addMore,'
  })
})
.then(({addMore}) => {
  if (addMore) {
    console.log('Please Continue');
  }
});

function init() {
  inquirer.prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber);
    yourTeams.push(manager);
      const template = pageTemplate(yourTeams);
    console.log(template);
    fs.writeFileSync('./dist/team.html', template, "utf-8");
  })



};

init();