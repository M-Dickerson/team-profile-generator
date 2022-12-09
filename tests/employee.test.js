// using Employee constructor 
const Employee = require("../lib/employee.js");
// gets name from getName() 
test('gets employee name', () => {
    const employee = new Employee("Morgan", 20, "Dickerson.Morgan@outlook.com");

    expect(employee.getName()).toEqual(expect.any(String));
});
// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee("Morgan", 20, "Dickerson.Morgan@outlook.com");

    expect(employee.getID()).toEqual(expect.any(Number));
});
// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee("Morgan", 20, "Dickerson.Morgan@outlook.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee("Morgan", 20, "Dickerson.Morgan@outlook.com");

    expect(employee.getRole()).toEqual("Employee");
}); 