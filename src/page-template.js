// create the team
const generateTeamMembers = (team) => {
  return team.map(memeber => {
    if (memeber.getRole() === 'Engineer') {
      return  `
      <article>
      <h2>${memeber.getRole()}</h2>
      <ul>
        <li>ID:${memeber.getId()}</li>
        <li>Email:${memeber.getEmail()}</li>
        <li>GitHub: <a href="#github">${memeber.getGitHubS()}/a></li>
      </ul>
    </article>
    `
  }
  if (memeber.getRole() === 'Intern') {
    return  `
    <article>
    <h2>${memeber.getRole()}</h2>
    <ul>
      <li>ID:${memeber.getId()}</li>
      <li>Email:${memeber.getEmail()}</li>
      <li>GitHub: <a href="#github">${memeber.getGitHubS()}/a></li>
    </ul>
  </article>
  `
}

if (memeber.getRole() === 'Manager') {
  return  `
  <article>
  <h2>${memeber.getRole()}</h2>
  <ul>
    <li>ID:${memeber.getId()}</li>
    <li>Email:${memeber.getEmail()}</li>
    <li>GitHub: <a href="#github">${memeber.getGitHubS()}/a></li>
  </ul>
</article>
`
}
}).join('');

};

// export function to generate entire page
module.exports = (team) => {
  // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ENTER PAGE TITLE HERE</title>
  <!-- Minified version -->
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    <article>
      <h2>Manager</h2>
      <ul>
        <li>ID: 1</li>
        <li>Email: manager@email.com</li>
        <li>Office Number: 123</li>
      </ul>
    </article>
    <article>
      <h2>Engineer</h2>
      <ul>
        <li>ID: 2</li>
        <li>Email: engineer@email.com</li>
        <li>GitHub: <a href="#github">person</a></li>
      </ul>
    </article>
    <article>
      <h2>Intern</h2>
      <ul>
        <li>ID: 3</li>
        <li>Email: intern@email.com</li>
        <li>School: FUN University</li>
      </ul>
    </article>
  ${generateTeamMembers(team)}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>
  
`
};
