const Intern = require("../lib/Intern");

describe("Intern", () => {
  it ('should have a school', () => {
    const engineer = new Engineer('Derrion', 1, 'coolbreeze0616@gmail.com.', 'UNCC');
    expect(engineer.getSchool).toBe('UNCC');
  });
});
