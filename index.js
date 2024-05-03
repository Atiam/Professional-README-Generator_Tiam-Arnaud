//Import the inqurer module.
const inquirer = require(`inquirer`);

// Import the file system module
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

const userInput = () => {
    return inquirer.prompt([  
      
      {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of the project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide detail about the installation',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide detail about the usage',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ["Apache license 2.0", "Artistic license 2.0", "BSD 2-clause", "MIT", "ISC", "GPL"],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide detail about the contribution',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide detail about the tests',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please enter the GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
      },
    ]);
  };

 
  


// TODO: Create an array of questions for user input
const questions = [  
      
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of the project.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide detail about the installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide detail about the usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using?',
      choices: ["Apache", "Artistic", "BSD", "MIT", "ISC", "None"],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide detail about the contribution',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide detail about the tests',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please enter the GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response) => {
        writeToFile('README.md', generateMarkdown(response))
        console.log('file created!');
    });
}

// Function call to initialize app
init();


  