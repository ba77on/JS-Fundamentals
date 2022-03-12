function companyUsers(array) {
    let companies = {};
    for (let element of array) {
        let [company, employee] = element.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(employee);
    }
    Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => {
            let set = new Set(element[1]);
            console.log(`${element[0]}`);
            for (let num of set) {
                console.log(`-- ${num}`)
            }
        });
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])