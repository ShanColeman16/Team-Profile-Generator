const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, school)  {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
}

getRole() {
  return 'Manager';
}

getOfficeNumber() {
  return this.officeNumber;
}


}

module.exports = Manager;
