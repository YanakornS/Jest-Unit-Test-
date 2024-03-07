const mathOperations = require("./calculator"); 


describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
    
  });
});
describe("Calculator tests", () => {
  test("diff 3 - 2 should return 1", () => {
    
    expect(mathOperations.diff(3, 2)).toBe(1); 
  });
});
describe("Calculator tests", () => {
  test("product 5 * 2 should return 10", () => {
    
    expect(mathOperations.product(5, 2)).toBe(10); 
  });
});

describe("Calculator tests", () => {
  test("power 2 ^ 3 should return 8", () => {
    expect(mathOperations.power(2, 3)).toBe(8);
  });
});

describe("Calculator tests", () => {
  test("divide 10 / 2 should return 5", () => {
    expect(mathOperations.divide(10, 2)).toBe(5);
  });
});



describe("Calculator tests", () => {
  var input1 = 5;
  var input2 = 5;
  beforeAll(() => {
    console.log("beforeAll called");
  });
  afterAll(() => {
    console.log("afterAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
 
  });
  afterEach(() => {
    console.log("afterEach called");
  });
  test("adding 5 + 5 should return 10", () => {
    // arrange and act
    var result = mathOperations.sum(input1, input2);
    // assert
    expect(result).toBe(10);
  });
});