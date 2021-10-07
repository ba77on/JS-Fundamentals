function magicNum(arr, n) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            sum = Number(arr[i]) + Number(arr[j])
            if (sum === n) {
                console.log(`${arr[i]} ${arr[j]} `)
            }
        }
    }

}
magicNum([14, 20, 60, 13, 7, 19, 8],
    27)