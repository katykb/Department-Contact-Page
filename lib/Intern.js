class Intern {
    constructor (name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    get name (){
        return this.name;
    }
    get id () {
        return this.id;
    }
    get email (){
        return this.email;
    }
    get office () {
        return this.office;
    };
    };
    
    module.exports = Intern;