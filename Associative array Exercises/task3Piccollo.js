function piccolo(arr) {
    let parking = {};

    for (let line of arr) {
        let [direction, carNum] = line.split(', ')

        if (direction === "IN") {
            parking[carNum] = 1;
        } else {
            delete parking[carNum];
        }
    }

    return Object.keys(parking)
        .sort((a, b) => a.localeCompare(b))
        .join('\n');

}
console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
))