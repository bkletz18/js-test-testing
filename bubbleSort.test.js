const bubbleSort = require("./bubbleSort.js");

test("bubble sort", () => {
    const unsortedArray = [3,1,2,5,4,7,6,8,9,10];

    const sortedArray = bubbleSort(unsortedArray);

    for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(sortedArray[i]).toBeLessThanOrEqual(sortedArray[i + 1]);
    }
});
