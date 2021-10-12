// function bombNums(arr, bombInfo) {
//     let bomb = bombInfo[0];
//     let range = bombInfo[1];

//     let index = arr.indexOf(bomb);

//     while (index > -1) {
//         arr.splice(Math.max((index - range), 0), Math.min(range, index))
//         index = arr.indexOf(bomb);
//         arr.splice(index, (range - 1))

//         index = arr.indexOf(bomb);
//     }
//     console.log(calculateSum(arr))

//     function calculateSum(array) {
//         let sum = 0;

//         for (let n of array) {
//             sum += n;
//         }

//         return sum;
//     }


// }

function bomb(numbers, params) {
    let [target, power] = params;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];

        if (currentNum === target) {
            let startIndex = Math.max(0, i - power); 
            let countToEnd = power * 2 + 1;

            numbers.splice(startIndex, countToEnd);
            i = i - power - 1; 
        }
    }

    console.log(numbers.reduce((a, b) => a + b, 0))
}


bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])