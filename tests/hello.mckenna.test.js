import sayHelloMcKenna from "../utils/hello.mckenna";

describe("Hello McKenna", () => {
	it("It should say Hello McKenna", () => {
		expect(sayHelloMcKenna()).toBe("Hello McKenna");
	});
});