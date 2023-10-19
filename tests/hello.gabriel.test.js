import sayHelloGabriel from "../utils/hello.gabriel";

describe("Hello Gabriel", () => {
  it("should say Hello Gabriel!", () => {
    expect(sayHelloGabriel()).toBe("Hello Gabriel!");
  });
});
