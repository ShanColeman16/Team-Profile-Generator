const Employee = require('../lib/Employee');

describe("Employee", () => {
  it ('should have a name', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.name).toEqual('Derrion');
  });
  it ('should have an id', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.id).toEqual(1);
  })
  it ('should have a email', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.email).toEqual('coolbreeze0616@gmail.com');
  })
  it ('should have a role', () => {
    const employee = new Employee('Derrion', 1, 'coolbreeze0616@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
  })
});
