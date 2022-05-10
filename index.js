const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const myTeam = [];

const buildTeam = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter Manager's name.",
      name: "name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Plese provide name to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter manager's Employee ID.",
      name: "id",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter ID to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter manager's email address.",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter email address to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter Manager's office number.",
      name: "office",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter office number to continue.";
        }
      },
    },

    {
      type: "list",
      message: "Select the position of your team member.",
      choices: ["Engineer", "Intern", "Finish building my team."],
      name: "role",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your team member's position to continue";
        }
      },
    },
    {
      type: "input",
      message: "Enter your team member's employee ID.",
      name: "id",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter team member ID to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Enter your team member's email. ",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a team member's email to continue.";
        }
      },
    },
     ]);
};
buildTeam();
