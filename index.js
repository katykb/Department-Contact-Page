const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const myTeam = [];

// const runBuilderApp = () => {
const buildTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select the position of the team member you are adding.",
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
    ])
    .then(function (value) {
      switch (value.buildTeam) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        // createManager();
      }
    });
};

const createManager = () => {
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
  ]).then(
    (answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      myTeam.push(manager);
      buildTeam();
    }
  );
};

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer's name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          ("Enter a name to proceed.");
        }
      },
    },
  ]),
    {
      type: "input",
      message: "Enter engineer's employee ID.",
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
      message: "Enter engineer's email. ",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter engineer's email to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter the engineer's Github account",
      name: "github",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Pleae enter github acocunt info to contine";
        }
      },
    }.then(
      (answers) => {
        console.log(answers);
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        myTeam.push(engineer);
        buildTeam();
      }
    );
}

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the intern's name",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          ("Enter a name to proceed.");
        }
      },
    },
  ]),
    {
      type: "input",
      message: "Enter intern's employee ID.",
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
      message: "Enter intern's email. ",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter intern's email to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter the intern's college name",
      name: "school",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Pleae enter school name to contine";
        }
      },
    }.then(
      (answers) => {
        console.log(answers);
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        myTeam.push(intern);
        buildTeam();
      }
    );
}

// };

createManager();
