function addAndRemove(arr) {
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            counter++;
            newArr.push(counter);

        } else {
            newArr.pop();
            counter++;
        }
    }
    if (newArr.length <= 0) {
        console.log('Empty')
    } else {
        console.log(newArr.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove'])