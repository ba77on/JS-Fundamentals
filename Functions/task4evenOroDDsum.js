function evenOrOddNums(n) {

    let arr = String(n).split('');
    let resultEven = 0;
    let resultOdd = 0;
    let newArr = [];


    for (let i = 0; i < arr.length; i++) {
        let singleNum = Number(arr[i])
        if (singleNum % 2 === 0) {
            resultEven += singleNum;
        } else {
            resultOdd += singleNum;
        }



    }
    return `Odd sum = ${resultOdd}, Even sum = ${resultEven}`


}

console.log(evenOrOddNums(1000435));