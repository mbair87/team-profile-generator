const Employee = require('../lib/Employee');
//test create employee
test('generates a new employee', () => {
    const employee = new Employee('Michael', 44, 'mbair87@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
//test employee name
test('gets employee name', () => {
    const employee = new Employee('Michael', 44, 'mbair87@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
//test ID number
test('gets employee ID', () => {
    const employee = new Employee('Michael', 44, 'mbair87@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
//test email
test('gets employee email', () => {
    const employee = new Employee('Michael', 44, 'mbair87@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Michael', 44, 'mbair87@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 