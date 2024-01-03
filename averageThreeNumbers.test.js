const averageThreeNumbers = require("./averageThreeNumbers.js");

test("average 3 numbers", () => {
    const result = averageThreeNumbers(4, 5, 6);
    const expectedAverage = (4 + 5 + 6) / 3;

    expect(result).toBe(expectedAverage);
});
