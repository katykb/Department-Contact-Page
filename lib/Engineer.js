const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, office, github) {
        super (name, id, email, office);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    };
    };
   
        module.exports = Engineer;