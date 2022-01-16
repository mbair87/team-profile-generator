const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name='', id=0, email='', officeNumber=''){
        super(name, id, email);
        this.officeNumber= officeNumber;
    }
getofficeNumber(){
    return this.officeNumber;
}

    getRole(){
        return 'Manager'; 
    }
}

module.exports = Manager;