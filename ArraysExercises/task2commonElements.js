function commonElements(arr1, arr2) {
    let result = "";
    for (let el of arr1) {
        result = (arr2.includes(el))
        if (result) {
            console.log(el)
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])