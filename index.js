// IMPORTANT LINKS DO NOT TOUCH
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/generateMarkdown");
// links for lib pages and blank array for data
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const team = [];

// allows the user to add more team members
const Selection = () => {
return inquirer.prompt ([
{   type: "list",
    message: "Do you want to add more team members?",
    name: "selection",
    choices: ["Engineer", "Intern", "No, not at this time"]
}])
.then(choice => {
    switch (choice.selection) {
    // brings up engineer questions
        case "Engineer":
        engineerQuestions();
        break;
    // brings up intern questions
        case "Intern":
        internQuestions();
        break;
    // generates team if the user is done
        case "No, not at this time":
        generate();
    }
})
}
// questions for manager section
const managerQuestions = () => {
return inquirer.prompt ([
{   type: "input",
    message: "What's the managers name?",
    name: "name",
},
{
    type: "input",
    message: "What's the managers ID?",
    name: "id",
},
{
    type: "input",
    message: "What's the managers email address?",
    name: "email",
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
    team.push(manager);
    Selection();
})}
// questions for engineer section
const engineerQuestions = () => {
return inquirer.prompt ([
    {   type: "input",
        message: "What's the name of the engineer?",
        name: "name",
    },
    {
        type: "input",
        message: "What's the engineers ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What's the engineers email address?",
        name: "email",
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
    team.push(engineer);
    Selection();
})}
// questions for intern section
const internQuestions = () => {
return inquirer.prompt ([
    {   type: "input",
        message: "What's the name of the intern?",
        name: "name",
    },
    {
        type: "input",
        message: "What's the interns ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What's the interns email address?",
        name: "email",
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
    team.push(intern);
    Selection();
})}
// generates html file
const generate = () => {
    console.log(team);
    fs.writeFile ("./dist/index.html", generateMarkdown(team), (err) =>
    err ? console.error(err) : console.log("Success!"));
}
managerQuestions();