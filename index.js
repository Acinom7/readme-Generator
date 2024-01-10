const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:",
  },

  {
    type: "input",
    name: "table of Contents",
    message: "Table of Contents",
  },

  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },

  {
    type: "input",
    name: "usage",
    message: "Add usage information:",
  },

  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "contributing ",
    message: "Who contributed to this project?",
  },

  {
    type: "input",
    name: "tests",
    message: "What command should be executed to run tests?",
  },

  {
    type: "input",
    name: "questions",
    message: "Contact info",
  },

  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Readme generated!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// function call to initialize program
init();
