function kToKNum(arr) {
    let k = arr.shift();

    let firstK = arr.slice(0, k);
    console.log(firstK.join(" "))

    let lastK = arr.slice(arr.length - k);
    console.log(lastK.join(' '))


}
kToKNum([2, 7, 8, 9])