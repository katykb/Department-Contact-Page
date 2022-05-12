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
      switch (value.role) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          addHTML();
      }
    });
};

const createManager = () => {
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      myTeam.push(manager);
      buildTeam();
    });
};

function addEngineer() {
  inquirer
    .prompt([
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
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      myTeam.push(engineer);
      buildTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
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
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      myTeam.push(intern);
      buildTeam();
    });
}

const addHTML = () => {
  let employeeCard = "";
  let role;
  for (let i = 0; i < myTeam.length; i++) {
    if (myTeam[i].getRole() === "Engineer") {
      role = `</i> <p class="card-text"><span class="material-symbols-outlined">
      dvr
      </span> Role: ${myTeam[i].getRole()}.</p>
      <p><a href="${myTeam[i].getGithub()}" "class=card-link">Github: ${myTeam[
        i
      ].getGithub()} </a>
      <p>`;
    } else if (myTeam[i].getRole() === "Intern") {
      role = `<p class="card-text"><span class="material-symbols-outlined">
      school
      </span> Role: ${myTeam[i].getRole()}.</p>
      <p class="card-text">School Name: ${myTeam[i].getSchool()}.</p>`;
    } else if (myTeam[i].getRole() === "Manager") {
      role = `<p class="card-text"> <span class="material-symbols-outlined">
      work
      </span> Role: ${myTeam[i].getRole()}.</p>
      <p class="card-text">Office Number: ${myTeam[i].getOffice()}.</p>`;
    }
    employeeCard += `
    <div class="col-4 mt-4">
    <div class="card h-100" style="width: 18rem; display:inline-block">
    <div class="card-body">
      <h5 class="card-title text-center">${myTeam[i].getName()}</h5>
      <h6 class="card-subtitle mb-2">Id: ${myTeam[i].getId()}</h6>
      ${role}      
      <a href="mailto:${myTeam[
        i
      ].getEmail()}" class="card-link">Email: ${myTeam[i].getEmail()} </a>
      </div>
    </div>
  </div>`;
  }
  let format = `<!doctype html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <!-- Link to Google Icons -->
      <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <!-- Link to my CSS -->
      <link rel=stylesheet href='./style.css'>
      <title>My Team</title>
    </head>
    <body>
    <header class="text-center text-white">
      <h1>My Team</h1>
      </header>
      <main class="container d-flex flex-wrap">
      ${employeeCard}
      </main>
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      -->
    </body>
  </html>`;
  fs.writeFileSync("index.html", format, (error) => {
    if (error) throw error;
  });
  console.log(
    "Your html doc has been created! Open and view in browser to see your team chart!"
  );
};

createManager();
