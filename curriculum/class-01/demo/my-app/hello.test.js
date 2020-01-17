'use strict'

const hello = require("./hello.js");

// describe is a JEST function!
// describe (name of my test group, function with all the tests)

describe("my-test", () => {

  // it is a JEST function!
  // it (name of a test, function that does the test action)
  it("returns a string", () => {

    // define an expectation
    // so that the test can pass or fail


    // do something
    // expect result

    expect(null).toBeNull();
  });

});