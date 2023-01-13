const Manager = require("../lib/Manager");

describe("Manager", () => {
  it ('should have a officeNumber', () => {
    const manager = new Manager('Derrion', 1, 'coolbreeze0616@gmail.com.', '242');
    expect(manager.getOfficeNumber()).toBe('242');
  });
});

