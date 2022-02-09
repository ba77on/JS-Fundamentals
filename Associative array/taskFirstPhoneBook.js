function phoneBook(arr) {
    let obj = {};
    for (let line of arr) {
        let [name, number] = line.split(' ');
        obj[name] = number;
    }

    Object.keys(obj).forEach(key => {
        console.log(`${key} -> ${obj[key]}`)
    })

}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])