const Intern = require("../lib/Intern");

describe("Intern", () => {
  it ('should have a school', () => {
    const intern = new Intern('Derrion', 1, 'coolbreeze0616@gmail.com.', 'UNCC');
    expect(intern.getSchool).toEqual('UNCC');
  });
});
