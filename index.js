// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
        {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
        },
        {
        type: 'input',
        message: 'What license will be used for this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
        type: 'input',
        message: 'What languages or technology will be used for this project?',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'What is the GitHub user name?',
        name: 'username',
        },
        {
        type: 'input',
        message: 'What is the email address?',
        name: 'email',
        },
        {
        type: 'input',
        message: 'What links will be used for the Table of Contents?',
        name: 'table of contents',
        },
        {
        type: 'input',
        messaage: 'What tests will be used for this project?',
        name: 'tests',
        },
        {
        type: 'input',
        message: 'WHat are the contributors for this project?',
        name: 'contributors',
        },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
