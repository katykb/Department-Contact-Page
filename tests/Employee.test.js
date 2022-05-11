const Employee = require("../lib/Employee.js");
const myEmployee = new Employee("Katy Brown", "110474", "katybr35@gmail.com");

test("Returns employee name", () => {
  expect(myEmployee.getName()).toBe("Katy Brown");
});

test("Will the getId() method give us the employee ID?", () => {
  expect(myEmployee.getId()).toEqual("110474");
});

test("Will the getEmail() method give us the employee email?", () => {
  expect(myEmployee.getEmail()).toEqual("katybr35@gmail.com");
});

test("Will the email property show the employee email?", () => {
  expect(myEmployee.email).toEqual("katybr35@gmail.com");
});

test("Will the id property show us the employee's id?", () => {
  expect(myEmployee.id).toEqual("110474");
});

test("Will the email property show the employee's name?", () => {
  expect(myEmployee.name).toEqual("Katy Brown");
});
