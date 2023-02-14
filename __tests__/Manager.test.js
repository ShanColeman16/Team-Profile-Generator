const Manager = require('../lib/Manager');

describe("Manager", () => {
  it ('should have an officeNumber', () => {
    const manager = new Manager('Derrion', 1, 'coolbreeze0616@gmail.com', 242);
    expect(manager.getOfficeNumber()).toEqual(242);
  });

  it ('should have a role of Manager', () => {
    const manager = new Manager('Derrion', 1, 'coolbreeze0616@gmail.com.', 'coolbreeze0616');
    expect(manager.getRole()).toEqual('Manager');
  });
});

