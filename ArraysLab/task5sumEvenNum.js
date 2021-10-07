function sumEvenNums(arr) {
    let toNum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

        if (arr[i] % 2 === 0) {
            toNum += arr[i];
        }
    }

    console.log(toNum);


}

sumEvenNums(['3','5','7','9'])