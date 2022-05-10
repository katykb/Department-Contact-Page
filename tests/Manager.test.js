const Manager = require("../lib/Manager.js");
const manager = new Manager("Katy Brown", "110474", "katybr35@gmail.com", "2B");

test("Get the correct values from the Manager constructor function.", () => {
  expect(manager.name).toBe("Katy Brown");
  expect(manager.id).toBe("110474");
  expect(manager.email).toBe("katybr35@gmail.com");
  expect(manager.office).toBe("2B");
});

test("Will getName() give us the manager name?", () => {
  expect(manager.getName().toBe("Katy Brown"));
});

test("Will the getId() method give us the manager ID?", () => {
  expect(manager.getId().toBe("110474"));
});

test("Will the getEmail() method give us the manager email?", () => {
  expect(manager.getEmail().toBe("katybr35@gmail.com"));
});

test("Will the getOffice() method give us the manager office number?", () => {
  expect(manager.getOffice().toBe("2B"));
});

test("Will the getRold() return manager?", () => {
  expect(manager.getRole().toBe("Manager"));
});
