const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  it ('should have a GitHub', () => {
    const engineer = new Engineer('Derrion', 1, 'coolbreeze0616@gmail.com.', 'coolbreeze0616');
    expect(engineer.getGitHub()).toEqual('coolbreeze0616');
  });
});
