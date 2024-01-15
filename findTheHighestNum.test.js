const findHighestNum  = require("./findTheHighestNum.js");

test("findHighestNum", () => {
    const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    const result = findHighestNum(array);

    expect(result).toBe(10);
});