// manager card creation
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="bg-primary card-header">
                <h3 class ="text-white">${manager.name}</h3>
                <h4 class="text-white">Manager</h4><i class="material-icons" style="color:white">local_cafe</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// engineer card creation
const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 .bg-danger">
            <div class="bg-primary card-header">
                <h3 class ="text-white">${engineer.name}</h3>
                <h4 class ="text-white">Engineer</h4><i class="material-icons" style="color:white">engineering</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>

        </div>
    </div>
    `
}

// intern card creation
const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 ">
            <div class="bg-primary card-header">
                <h3 class ="text-white">${intern.name}</h3>
                <h4 class ="text-white">Intern</h4><i class="material-icons" style="color:white">school</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

generateHTML = (data) => {

  
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // create manager
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            pageArray.push(managerCard);
        }

        // create engineer
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            pageArray.push(engineerCard);
        }

        // create intern
        if (role === 'Intern') {
            const internCard = createIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const createTeam = createTeamPage(employeeCards); 
    return createTeam;

}

// create html page 
const createTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
      <header class="bg-danger">
          <nav class="navbar" id="navbar">
              <span class="text-white mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css></script>
  </html>


`;
}

module.exports = generateHTML; 