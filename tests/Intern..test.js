const Intern = require ("../lib/Intern.js");
const intern = new Intern ("Katy Brown", "110474", "katybr35@gmail.com", "2B");

test("Get the correct values from the Intern constructor function.", () => {
  expect(intern.name).toBe("Katy Brown");
  expect(intern.id).toBe("110474");
  expect(intern.email).toBe("katybr35@gmail.com");
  expect(intern.school).toBe("UNT");
});

test("Will getName() give us the student name?", () => {
  expect(intern.getName().toBe("Katy Brown"));
});

test("Will the getId() method give us the student's ID?", () => {
  expect(intern.getId().toBe("110474"));
});

test("Will the getEmail() method give us the student's email?", () => {
  expect(intern.getEmail().toBe("katybr35@gmail.com"));
});

test('Will the getSchool() return the students college name?', () =>{
    expect(intern.getSchool().toBe('UNT'));
})

test("Will the getRole() return Intern?", () => {
  expect(intern.getRole().toBe("Intern"));
});