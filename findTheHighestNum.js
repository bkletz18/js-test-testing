const findHighestNum = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let looper = 0;
    let highestNum = 0;
    while (looper <= list.length - 1){
        if(list[looper] > highestNum){
            highestNum = list[looper];
            looper++;
        } else{
            looper++;
        }
    }
    return highestNum;
}

module.exports = findHighestNum