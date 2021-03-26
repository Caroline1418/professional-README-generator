const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput){
                return true;
            }else{
                console.log('You need to enter a title!')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true
            } else {
                console.log('You need to include a project description!')
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installationInput => {
            if (installationInput){
                return true;
            } else {
                console.log('You need to provide installation info!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if(usageInput){
                return true;
            } else {
                console.log('Provide project usage info!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log('You need to provide contribution info!');
                return false;
            }
        } 
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Requrired)',
        validate: testingInput => {
            if(testingInput){
                return true
            } else {
                console.log('You need to share how you test the project!')
                return false
            }
        }
    },

    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)', 
        validate: licensingInput => {
            if(licensingInput){
                return true
            } else {
                console.log('You need to choose a license!');
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (Required)', 
        validate: githubInput => {
            if(githubInput){
                return true;
            } else {
                console.log('Enter your GitHub Username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?'
    },
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err)=>{
        if(err)
            throw err;
            console.log('Success! Information transferred to README!')
    });
};

function init(){
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();
