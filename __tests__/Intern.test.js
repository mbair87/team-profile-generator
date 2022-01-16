const Intern = require('../lib/Intern');

// create intern test  
test('generates new intern', () => {
    const intern = new Intern('Michael', 44, 'mbair87@gmail.com', 'SMU');
    expect(intern.school) .toEqual(expect.any(String));
});

// get school test
test('gets employee school', () => {
    const intern = new Intern('Michael', 44, 'mbair87@gmail.com', 'SMU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets intern role
test('return intern role ', () => {
    const intern = new Intern('Michael', 44, 'mbair87@gmail.com.com', 'SMU');

    expect(intern.getRole()).toEqual("Intern");
}); 