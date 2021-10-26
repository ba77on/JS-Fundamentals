function carWash(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "soap") {
            sum += 10;
        } else if (arr[i] === "water") {
            sum *= 1.20;
        } else if (arr[i] === "vacuum cleaner") {
            sum *= 1.25;
        } else {
            sum *= 0.9;
        }


    }
    return `The car is ${sum.toFixed(2)}% clean.`



}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));

