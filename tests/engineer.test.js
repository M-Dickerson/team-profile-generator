// using Engineer constructor 
const Engineer = require("../lib/engineer.js");
// gets name from getName() 
test('gets engineer name', () => {
    const engineer = new Engineer("Morgan", 20, "Dickerson.Morgan@outlook.com", "M-Dickerson");

    expect(engineer.getName()).toEqual(expect.any(String));
});
// gets id from getId() 
test('gets engineer ID', () => {
    const engineer = new Engineer("Morgan", 20, "Dickerson.Morgan@outlook.com", "M-Dickerson");

    expect(engineer.getID()).toEqual(expect.any(Number));
});
// gets emails from getEmail()
test('gets engineer email', () => {
    const engineer = new Engineer("Morgan", 20, "Dickerson.Morgan@outlook.com", "M-Dickerson");

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});
// gets github from getGithub()
test('gets github of engineer', () => {
    const engineer = new Engineer("Morgan", 20, "Dickerson.Morgan@outlook.com", "M-Dickerson");

    expect(engineer.getGithub()).toEqual("M-Dickerson");
});