// using Intern constructor 
const Intern = require("../lib/intern.js");
// gets name from getName() 
test('gets intern name', () => {
    const intern = new Intern("Morgan", 20, "Dickerson.Morgan@outlook.com", "Penn");

    expect(intern.getName()).toEqual(expect.any(String));
});
// gets id from getId() 
test('gets intern ID', () => {
    const intern = new Intern("Morgan", 20, "Dickerson.Morgan@outlook.com", "Penn");

    expect(intern.getID()).toEqual(expect.any(Number));
});
// gets emails from getEmail()
test('gets intern email', () => {
    const intern = new Intern("Morgan", 20, "Dickerson.Morgan@outlook.com", "Penn");

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});
// gets role from getRole()
test('gets school of intern', () => {
    const intern = new Intern("Morgan", 20, "Dickerson.Morgan@outlook.com", "Penn");

    expect(intern.getSchool()).toEqual("Penn");
});