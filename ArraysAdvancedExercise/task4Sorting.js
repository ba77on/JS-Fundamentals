
function sorting(input) {
    let newArr = [];
    let sorted = input.slice().sort((a, b) => b - a);

    while (sorted.length != 0) {
        newArr.push(sorted.shift());
        newArr.push(sorted.pop());
    }
    console.log(newArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
