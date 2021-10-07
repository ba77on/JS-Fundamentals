function reverseArrayOfStrings(arr) {

    for (let i = 0; i < arr.length / 2; i++) {


        let firstHalfElement = arr[i];
        let secondHalfELement = (arr.length - 1 - i);

        arr[i] = arr[secondHalfELement];
        arr[secondHalfELement] = firstHalfElement;
    }

    console.log(arr.join(' '));


}

reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e'])