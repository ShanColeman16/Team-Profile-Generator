const Manager = require("../lib/Manager");

describe("Manager", () => {
  it ('should have a officeNumber', () => {
    const engineer = new Engineer('Derrion', 1, 'coolbreeze0616@gmail.com.', '242');
    expect(engineer.getOfficeNumber).toBe('242');
  });
});

