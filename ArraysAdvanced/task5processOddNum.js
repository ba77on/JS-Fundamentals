function processOddNum(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return result.join(" ");

}
console.log(processOddNum([3, 0, 10, 4, 7, 3]))