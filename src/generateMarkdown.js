const generateTeam = (teamList) => {
    const page = [];

    // manager card
    const MC = manager => {
        let managerCard = 
        `<div class="card" style = "width: 18rem;">
        <div class="card-body">
            <h5 class="card-title bg-danger">${manager.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`
        page.push(managerCard);
    }
    // engineer card
    const EC = engineer => {
        let engineerCard = `
    < div class="card" style = "width: 18rem;" >
        <div class="card-body">
            <h5 class="card-title bg-danger">${engineer.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Office Number: ${engineer.github}</li>
        </ul>
    </div>
`
        page.push(engineerCard);
    }
    // intern card
    const IC = intern => {
        let internCard = `
    < div class="card" style = "width: 18rem;" >
        <div class="card-body">
            <h5 class="card-title bg-danger">${intern.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">Office Number: ${intern.github}</li>
        </ul>
    </div>
`
        page.push(internCard);
    }
for (let i = 0; i < teamList.length; i++) {
    if (teamList[i].getRole() === "Manager") {
        MC(teamList[i]);
    }
    if (teamList[i].getRole() === "Engineer") {
        EC(teamList[i]);
    }
    if (teamList[i].getRole() === "Intern") {
        IC(teamList[i]);
    }
}
return page.join("");
}


// html page syntax
module.exports = teamList => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Generator</title>
        <!-- bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <body>
        <header>
        <nav class="navbar navbar-light bg-danger">
            <span class="navbar-brand mb-0 h1">Team Generator</span>
        </nav>
        </header>
        <section>
            ${generateTeam(teamList)}
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
}