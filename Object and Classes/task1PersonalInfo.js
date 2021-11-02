function personalInfo(firstName, lastName, age) {


    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person
}

    //     let person = {
    //         firstName: firstName
    //     };
    //     person.lastName = lastName;

    //     person['age'] = age;

    //     for (const key in person) {
    //         console.log(`${key}: ${person[key]}`)

    //     }
    // }

console.log(personalInfo("Peter", "Pan", "20"))