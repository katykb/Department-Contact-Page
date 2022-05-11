const Manager = require("../lib/Manager.js");
const manager = new Manager("Katy Brown", "110474", "katybr35@gmail.com", "2B");

test("Will the office property show the manager's office number'?", () => {
  expect(manager.office).toEqual("2B");
});

test("Will the email property show the manager email?", () => {
  expect(manager.email).toEqual("katybr35@gmail.com");
});

test("Will the id property show us the manager's id?", () => {
  expect(manager.id).toEqual("110474");
});

test("Will the email property show the manager's name?", () => {
  expect(manager.name).toEqual("Katy Brown");
});

test("Will getName() give us the manager name?", () => {
  expect(manager.getName()).toEqual("Katy Brown");
});

test("Will the getId() method give us the manager ID?", () => {
  expect(manager.getId()).toEqual("110474");
});

test("Will the getEmail() method give us the manager email?", () => {
  expect(manager.getEmail()).toEqual("katybr35@gmail.com");
});

test("Will the getOffice() method give us the manager office number?", () => {
  expect(manager.getOffice()).toEqual("2B");
});

test("Will the getRole() return manager?", () => {
expect(manager.getRole()).toEqual("Manager");
});
