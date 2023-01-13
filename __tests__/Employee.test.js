const Employee = require("../lib/Employee");

describe("Employee", () => {
  it ('has an id, email, and name', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');

  });
});
