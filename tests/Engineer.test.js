const Engineer = require ("../lib/Engineer.js");
const Employee = require('../lib/Employee');
const engineer = new Engineer ("Katy Brown", "110474", "katybr35@gmail.com", "katykb");

test("Get the correct values from the Intern constructor function.", () => {
  expect(engineer.name).toEqual("Katy Brown");
  expect(engineer.id).toEqual("110474");
  expect(engineer.email).toEqual("katybr35@gmail.com");
  expect(engineer.github).toEqual("katykb");
});

test("Will getName() give us the engineer's name?", () => {
  expect(engineer(getName()).toEqual("Katy Brown"));
});

test("Will the getId() method give us the engineer's ID?", () => {
  expect(engineer(getId()).toEqual("110474"));
});

test("Will the getEmail() method give us the engineer's email?", () => {
  expect(engineer(getEmail()).toEqual("katybr35@gmail.com"));
});

test('Will the getGithub() return the engineers Github?', () =>{
    expect(engineer(getGithub()).toEqual('katykb'));
})

test("Will the getRole() return Engineer?", () => {
  expect(engineer(getRole()).toEqual("Engineer"));
});