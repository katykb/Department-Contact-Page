const Employee = require("../lib/Employee.js");
const myEmployee = new Employee("Katy Brown", "110474", "katybr35@gmail.com");

// test("Get the correct values from the Employee constructor function.", () => {
//   expect.myEmployee.getName().toEqual("Katy Brown");
//   expect.myEmployee.getId().toEqual("110474");
//   expect.myEmployee.getEmail().toEqual("katybr35@gmail.com");
// });

// describe('getName method', () =>{
    test ('Returns employee name', () => {
    expect(myEmployee.getName()).toBe('Katy Brown')
})
// })
// test("Will getName() give us the employee name?", () => {
//   expect(myEmployee(getName()).toEqual("Katy Brown"));
// });

test("Will the getId() method give us the employee ID?", () => {
  expect(myEmployee.getId()).toEqual("110474");
});

test("Will the getEmail() method give us the employee email?", () => {
  expect(myEmployee.getEmail()).toEqual("katybr35@gmail.com");
});
test("Will the email property method give us the employee email?", () => {
    expect(myEmployee.email).toEqual("katybr35@gmail.com");
  });
