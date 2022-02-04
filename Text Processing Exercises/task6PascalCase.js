function pascalCase(str) {
    let arr = [];
    let startInd = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            let word = str.substring(startInd, i)
            arr.push(word)
            startInd = i;
        }

    }

    arr.push(str.substring(startInd, str.length))
    console.log(arr.join(', '))
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')