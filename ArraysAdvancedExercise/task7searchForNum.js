function searchForNum(arr, indexes) {
    let numbsOftakenNum = indexes.shift(0);
    let deleteNumForFirstArr = indexes.shift(1);
    let searchNumFromArr = indexes.shift(2);

    let arrNumLeft = arr.splice(0, numbsOftakenNum);
    let deletedNums = arrNumLeft.splice(0, deleteNumForFirstArr);

    let counter = 0;

    for (let i = 0; i < arrNumLeft.length; i++) {
        if (searchNumFromArr === arrNumLeft[i])
            counter++
    }

    console.log(`Number ${searchNumFromArr} occurs ${counter} times.`)

}

searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3])