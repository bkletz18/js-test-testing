const reverseAList = require("./reverseAList.js")

test("compare to words", () => {
    expect(reverseAList([1,2,3])).toStrictEqual([3,2,1])
})