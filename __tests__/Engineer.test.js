const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it ('has a GitHub', () => {
    const engineer = new Engineer('Derrion', 1, 'coolbreeze0616@gmail.com.', 'ShanColeman16');
    expect(engineer.getGitHub).toBe('ShanColeman16');
  });
});
