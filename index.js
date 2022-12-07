// const { tSDeclareFunction } = require("@babel/types");
// IMPORTANT LINKS DO NOT TOUCH
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/generateMarkdown");
// links for lib pages
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// questions for manager section
const managerQuestions = () => {
inquirer.prompt ([
{   type: "input",
    message: "What's the managers name?",
    name: "name",
},
{
    type: "input",
    message: "What's the managers email address?",
    name: "email",
},
{
    type: "input",
    message: "What's the managers ID?",
    name: "id",
},
{
    type: "input",
    message: "What's the office number for the managers office?",
    name: "officeNumber",
}
])
.then (response => {
    console.log(response);
    const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
})}
// questions for engineer section
const engineerQuestions = () => {
    inquirer.prompt ([
    {   type: "input",
        message: "What's the name of the engineer?",
        name: "name",
    },
    {
        type: "input",
        message: "What's the engineers email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What's the engineers ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What's the username of the engineers GitHub profile?",
        name: "github",
    }
])
.then (response => {
    console.log(response);
    const engineer = new Engineer(response.name, response.id, response.email, response.github)
    
})}
// questions for intern section
const internQuestions = () => {
    inquirer.prompt ([
    {   type: "input",
        message: "What's the name of the intern?",
        name: "name",
    },
    {
        type: "input",
        message: "What's the interns email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What's the interns ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What's the username of the inters school?",
        name: "school",
    }
])
.then (response => {
    console.log(response);
    const intern = new Intern(response.name, response.id, response.email, response.school)
    
})}


// let text = generateMarkdown(response);
//     fs.writeFile ("./utils/README.md", text, (err) =>
//     err ? console.error(err) : console.log("Success!"));