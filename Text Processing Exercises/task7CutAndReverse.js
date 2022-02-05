function cutAndReverse(str) {
    let longetivity = Number(str.length);
    let firstHalf = longetivity / 2;
    let reversedText = str.substring(0, firstHalf).split('');
    let firstHalfNormalText = reversedText.reverse();

    let secondHalf = str.substring(firstHalf, str.length).split('');
    let secondHalfNormalText = secondHalf.reverse()


    console.log(firstHalfNormalText.join(''))
    console.log(secondHalfNormalText.join(''))


}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')