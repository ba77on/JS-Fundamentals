function equalArray(arr1, arr2) {
    sum = 0;
    let isTrue = true;
    counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i])
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isTrue = false;
            break;
        } else {
            sum += arr1[i];
            counter++;

        }

        if (counter == arr1.length) {
            console.log(`Arrays are identical. Sum: ${sum}`)
        }

    }

}

equalArray(['10', '20', '30'], ['10', '20', '30'])