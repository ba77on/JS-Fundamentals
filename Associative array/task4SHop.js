function storage(arr) {
    let strg = new Map();
    arr.forEach(element => {
        let [name, quantity] = element.split(' ');
        quantity = Number(quantity);

        if (strg.has(name)) {
            let oldQuantity = strg.get(name)
            strg.set(name, quantity + oldQuantity);

        } else {
            strg.set(name, quantity);
        }

    });

    for (let key of strg.keys()) {
        console.log(`${key} -> ${strg.get(key)}`)
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])