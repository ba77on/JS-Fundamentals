function memoryGame(arr) {
    let indexesArr = arr.shift().split(' ');
    let movesCounter = 0;

    while (arr != 'end' && indexesArr.length > 0) {
        let [firstInd, secondInd] = arr.shift().split(' ').map(Number);
        movesCounter++;

        if (indexesArr[firstInd] != indexesArr[secondInd] && indexesArr[firstInd] || indexesArr[secondInd] < 0) {
            console.log(`Try again!`)

        } else if (indexesArr[firstInd] === indexesArr[secondInd]) {
            let element = 0;
            let numFirst = indexesArr[firstInd].indexOf(indexesArr[firstInd]);
            let numSecond = indexesArr.lastIndexOf(indexesArr[secondInd]);
            element = indexesArr.slice(secondInd, secondInd + 1)
            if (numFirst > numSecond) {
                indexesArr.splice(numFirst, 1)
                indexesArr.splice(numSecond, 1)
            } else {
                indexesArr.splice(numSecond, 1);
                indexesArr.splice(numFirst, 1)
            }

            console.log(`Congrats! You have found matching elements - ${element}!`)

        } else if (firstInd === secondInd || firstInd < 0 || secondInd < 0) {
            half = parseInt(indexesArr.length / 2);
            let addEl = `-${movesCounter}a`;

            indexesArr.splice(half, 0, addEl, addEl)

            console.log('Invalid input! Adding additional elements to the board')
            movesCounter++;

        }

    }
    if (indexesArr.length >= 1) {
        console.log("Sorry you lose :(")
        console.log(`${indexesArr.join(' ')}`)


    } else if (indexesArr.length === 0) {
        console.log(`You have won in ${movesCounter} turns!`)


    }

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])