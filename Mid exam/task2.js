function solve(arr) {
    let peopleCount = arr.shift();
    peopleCount = Number(peopleCount);
    let singleWagon = arr.join();
    singleWagon = singleWagon.split(' ');
    let newArr = [];
    let stopper = singleWagon.length;
    for (let i = 0; i < singleWagon.length; i++) {
        let wagon = Number(singleWagon[i])
        if (wagon <= 4 && peopleCount >= 0) {
            let diff = 4 - wagon;
            if (peopleCount - diff > 0) {
                peopleCount -= diff;
                wagon += diff;
                newArr.push(wagon)
            }
            else if (peopleCount - diff <= 0) {
                wagon += peopleCount;
                peopleCount = 0;
                newArr.push(wagon)



            }


        }

    }
    let neededInd = newArr.join(' ')
    if (peopleCount >= 1) {
        console.log(`There isn't enough space! ${peopleCount} people in a queue!`)
        console.log(`${newArr.join(' ')}`)
    } else if (peopleCount = 0 && newArr.includes(1) || newArr.includes(2) || newArr.includes(3)) {
        console.log("The lift has empty spots!")
        console.log(newArr.join(' '))
    } else {
        console.log(newArr.join(' '))
    }

}
solve([
    "20",
    "0 0 0 0 0"
])