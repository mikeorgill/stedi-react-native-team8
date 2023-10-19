import sayHelloMike from "../utils/hello.mike";

describe("Hello Mike", () => {
    it("should say Hello Mike", () => {
        expect(sayHelloMike()).toBe("Hello Mike")
    });
});