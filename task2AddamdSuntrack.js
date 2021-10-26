function addAndSubstract(firstNum, secondNum, thirdNum) {

    let sum = sumTwoNum(firstNum, secondNum)
    let result = subtrackNum(sum, thirdNum)

    console.log(result)
    function sumTwoNum(a, b) {
        return (a + b);
    }

    function subtrackNum(a, b) {
        return (a - b);
    }

}

addAndSubstract(23, 6, 10)