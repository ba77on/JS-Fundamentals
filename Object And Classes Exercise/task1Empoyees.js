function solve(arr) {

    // let employees = {};
    // for (const line of arr) {
    //     employees[line] = line.length;
    // }


    // Object.entries(employees).forEach(element => {
    //     console.log(`Name: ${element[0]} -- Personal Number: ${element[1]}`)
    // });

    let employees = [];
    arr.forEach(element => {
        let person = {
            name: element,
            number: element.length
        }
        employees.push(person)
    });
    employees.forEach(obj => {
        console.log(` Name: ${obj.name} -- Personal Number: ${obj.number}`)
    })
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])