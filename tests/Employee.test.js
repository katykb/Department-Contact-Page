const Employee = require('../lib/Employee.js');
const myEmployee = new Employee ('Katy Brown', '110474', 'katybr35@gmail.com', '2B');

test('Get the correct values from the Employee constructor function.', () => {
    expect(myEmployee.name).toBe('Katy Brown');
    expect(myEmployee.id).toBe('110474');
    expect(myEmployee.email).toBe('katybr35@gmail.com');
    expect(myEmployee.office).toBe('2B');
});

test('Will getName() give us the employee name?', () =>{
    expect(myEmployee.getName().toBe('Katy Brown'));
});

test('Will the getId() method give us the employee ID?', () =>{
    expect(myEmployee.getId().toBe('110474'));
});

test('Will the getEmail() method give us the employee email?', () =>{
    expect(myEmployee.getEmail().toBe('katybr35@gmail.com'));
});

