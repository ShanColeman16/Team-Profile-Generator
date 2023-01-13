const Employee = require("../lib/Employee");

describe("Employee", () => {
  it ('has an name', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.name).toBe('Derrion');
  });
  it ('has an id', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.id).toBe('1');
  })
  it ('has a email', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.email).toBe('coolbreeze0616@gmail.com');
  })
  it ('has a role', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.getRole).toBe('Employee');
  })
});
