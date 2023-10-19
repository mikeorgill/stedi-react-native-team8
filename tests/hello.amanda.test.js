import sayHello from "../utils/hello.amanda";
import assert from 'assert';

// console.log("Hello Amanda Printed");

it("Test Hello World", ()=>{
    const hello = sayHello();
    assert.equal(hello,"Hello Amanda");
    
});

