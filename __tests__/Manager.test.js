const Manager = require('../lib/Manager');

// test create manager
test('generates new manager', () => {
    const manager = new Manager('Michael', 44, 'mbair87@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets office number', () => {
    const manager = new Manager('Michael', 44, 'mbair87@gmail.com', 4);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// return role of manager
test('return manager role', () => {
    const manager = new Manager('Michael', 44, 'mbair87@gmail.com', 4);

    expect(manager.getRole()).toEqual("Manager");
}); 