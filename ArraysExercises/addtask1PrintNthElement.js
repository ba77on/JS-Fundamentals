function printNElement(arr) {
    let newArray = [];
    let lastElement = Number(arr.pop());

    for (let j = 0; j < arr.length; j++) {

        if (j % lastElement === 0) {

            newArray.push(arr[j])

        }
    }
    console.log(newArray.join(' '))

}


printNElement(['dsa', 'asd', 'test', 'test', '2'])