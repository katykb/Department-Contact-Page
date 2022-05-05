const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const myTeam = [];

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
    message: "Please enter your Employee ID.",
    name: "id",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter your ID to continue.";
      }
    },
  },
  {
    type: "input",
    message: "Please enter your email address.",
    name: 'email',
    validate: (value) => {
        if (value) {
            return true;
        } else {
            return 'Please enter your email address to continue.'
        }
    },
  },
  {
      type: 'input',
      message: 'Please enter your office number.',
      name: 'office',
      validate: (value) => {
          if (value) {
              return true;
          } else {
              return "Please enter your office number to continue."
          }
      }
  }
]);
