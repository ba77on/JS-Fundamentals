function rotateArray(arr) {

    let numOfRotation = Number(arr.pop());
    for (let i = 0; i < numOfRotation; i++) {
        let el = "";
        el = arr.pop();
        arr.unshift(el);


    }

    console.log(arr.join(' '))

}

rotateArray(['1', '2', '3', '4', '2'])

