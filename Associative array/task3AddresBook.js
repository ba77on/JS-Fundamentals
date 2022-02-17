function adressBook(arr) {
    let catalog = {};
    for (let line of arr) {
        let [name, adress] = line.split(':');
        catalog[name] = adress;
    }

    let sorted = Object.entries(catalog);
    sorted.sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB)
    })

    for (let [name, adress] of sorted) {
        console.log(`${name} -> ${adress}`)
    }

}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])