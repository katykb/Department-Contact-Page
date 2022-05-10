const Engineer = require ("../lib/Engineer.js");
const engineer = new Engineer ("Katy Brown", "110474", "katybr35@gmail.com", "katykb");

test("Get the correct values from the Intern constructor function.", () => {
  expect(engineer.name).toBe("Katy Brown");
  expect(engineer.id).toBe("110474");
  expect(engineer.email).toBe("katybr35@gmail.com");
  expect(engineer.github).toBe("katykb");
});

test("Will getName() give us the engineer's name?", () => {
  expect(engineer.getName().toBe("Katy Brown"));
});

test("Will the getId() method give us the engineer's ID?", () => {
  expect(engineer.getId().toBe("110474"));
});

test("Will the getEmail() method give us the engineer's email?", () => {
  expect(engineer.getEmail().toBe("katybr35@gmail.com"));
});

test('Will the getGithub() return the engineers Github?', () =>{
    expect(engineer.getGithub().toBe('katykb'));
})

test("Will the getRole() return Engineer?", () => {
  expect(engineer.getRole().toBe("Engineer"));
});