const Intern = require ("../lib/Intern.js");
const intern = new Intern ("Katy Brown", "110474", "katybr35@gmail.com", "UNT");

test("Get the correct values from the Intern constructor function.", () => {
  expect(intern.name).toEqual("Katy Brown");
  expect(intern.id).toEqual("110474");
  expect(intern.email).toEqual("katybr35@gmail.com");
  expect(intern.school).toEqual("UNT");
});

test("Will getName() give us the student name?", () => {
  expect(intern.getName().toEqual("Katy Brown"));
});

test("Will the getId() method give us the student's ID?", () => {
  expect(intern.getId().toEqual("110474"));
});

test("Will the getEmail() method give us the student's email?", () => {
  expect(intern.getEmail().toEqual("katybr35@gmail.com"));
});

test('Will the getSchool() return the students college name?', () =>{
    expect(intern.getSchool().toEqual('UNT'));
})

test("Will the getRole() return Intern?", () => {
  expect(intern.getRole().toEqual("Intern"));
});