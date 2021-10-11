function sumFirstLast(arr) {
    let start = Number (arr[0]);
    let end = Number(arr.pop());


    return start + end;



}
console.log(sumFirstLast(['20', '30', '40']));