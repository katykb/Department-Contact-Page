const Engineer = require("../lib/Engineer.js");
const engineer = new Engineer(
  "Katy Brown",
  "110474",
  "katybr35@gmail.com",
  "katykb"
);

test("Will the github property show the engineer's github account'?", () => {
  expect(engineer.github).toEqual("katykb");
});

test("Will the email property show the engineer's email?", () => {
  expect(engineer.email).toEqual("katybr35@gmail.com");
});

test("Will the id property show us the engineer's id?", () => {
  expect(engineer.id).toEqual("110474");
});

test("Will the email property show the engineer's name?", () => {
  expect(engineer.name).toEqual("Katy Brown");
});

test("Will getName() give us the engineer's name?", () => {
  expect(engineer.getName()).toEqual("Katy Brown");
});

test("Will the getId() method give us the engineer's ID?", () => {
  expect(engineer.getId()).toEqual("110474");
});

test("Will the getEmail() method give us the engineer's email?", () => {
  expect(engineer.getEmail()).toEqual("katybr35@gmail.com");
});

test("Will the getGithub() return the engineers Github?", () => {
  expect(engineer.getGithub()).toEqual("katykb");
});

test("Will the getRole() return Engineer?", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});
