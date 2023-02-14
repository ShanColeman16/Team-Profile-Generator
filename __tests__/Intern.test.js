const Intern = require('../lib/Intern');

describe("Intern", () => {
  it ('should have a school', () => {
    const intern = new Intern('Derrion', 1, 'coolbreeze0616@gmail.com.', 'UNCC');
    expect(intern.getSchool()).toEqual('UNCC');
  });

  it ('should have a role of Intern', () => {
    const intern = new Intern('Derrion', 1, 'coolbreeze0616@gmail.com.', 'coolbreeze0616');
    expect(intern.getRole()).toEqual('Intern');
  });
});
