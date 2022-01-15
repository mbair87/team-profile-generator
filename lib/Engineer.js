const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name='', id=0, email='', gitHub=''){
        super(name, id, email);
        this.gitHub= gitHub;
    }
getGitHub(){
    return this.gitHub;
}

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;