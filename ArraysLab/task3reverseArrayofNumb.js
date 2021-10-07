function reverseArraysOfNum(n, args) {

    let arr = [];
    let result = "";
    output = "";


    for (let i = 0; i < n; i++) {
        arr.push(args[i])

    }

    for (let i = arr.length - 1; i >= 0; i--) {
        result += `${arr[i]} `
    }

    console.log(result)


}

reverseArraysOfNum (3, [10, 20, 30, 40, 50])