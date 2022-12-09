// using Manager constructor 
const Manager = require("../lib/manager.js");
// gets name from getName() 
test('gets manager name', () => {
    const manager = new Manager("Morgan", 20, "Dickerson.Morgan@outlook.com", 1);

    expect(manager.getName()).toEqual(expect.any(String));
});
// gets id from getId() 
test('gets manager ID', () => {
    const manager = new Manager("Morgan", 20, "Dickerson.Morgan@outlook.com", 1);

    expect(manager.getID()).toEqual(expect.any(Number));
});
// gets emails from getEmail()
test('gets manager email', () => {
    const manager = new Manager("Morgan", 20, "Dickerson.Morgan@outlook.com", 1);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});
// gets office number from getOfficenumber()
test('gets office number of manager', () => {
    const manager = new Manager("Morgan", 20, "Dickerson.Morgan@outlook.com", 1);

    expect(manager.getofficeNumber()).toEqual(1);
});