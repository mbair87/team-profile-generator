// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// add engineer  
test('generates a new Engineer ', () => {
    const engineer = new Engineer('Michael', 90, 'mbair87@gmail.com', 'mbair87');
    
    expect(engineer.getGitHub()).toBe('mbair87');
});

// test for github username
test('gets github username', () => {
    const engineer = new Engineer('Michael', 44, 'mbair87@gmail.com', 'mbair87');

    expect(engineer.getGitHub()).toBe('mbair87');
});

// test for correct role 
test('return engineer role', () => {
    const engineer = new Engineer('Michael', 44, 'mbair87@gmail.com', 'mbair87');

    expect(engineer.getRole()).toEqual("Engineer");
});