function polindrome(arr) {
    result = "";


    for (let num of arr) {

        isTrue = true;
        num = String(num);
        let mid = parseInt(num / 2);
        for (let i = 0; i <= mid; i++) {
            let lastInd = (num.length - 1);
            if (num[i] !== num[lastInd - i])
                isTrue = false;
            break;

        }
        result += isTrue + '\n';

    }
    return result

}

console.log(polindrome([123, 323, 421, 121]));