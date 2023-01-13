const Intern = require("../lib/Intern");

describe("Intern", () => {
  it ('has a school', () => {
    const intern = new Intern('Derrion', 1, 'coolbreeze0616@gmail.com.', 'ShanColeman16');
    expect(intern.getGitHub).toBe('UNCC');
  });
});
