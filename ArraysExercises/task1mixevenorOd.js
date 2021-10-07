function solve(arr) {
    firstSum = 0;
    for (let el of arr) {
        firstSum += el
    }

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }

    }
    secondSum = 0;
    for (let i = 0; i < arr.length; i++) {
        secondSum += arr[i];
    }


    console.log(arr)
    console.log(firstSum)
    console.log(secondSum)


}

solve([-5, 11, 3, 0, 2])