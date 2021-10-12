// function sorting(input) {
//     let length = input.sort(customSort).length;
//     let arr = [];

//     for (let i = 0; i < length; i++) {
//         let biggestNum = input.pop();
//         let smallestNum = input.shift();
//         arr.push(biggestNum, smallestNum);
//     }

//     console.log(arr.join(' '))

//     function customSort(a, b) {
//         return a - b
//     }
// }
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