function jsonString(firstName, secondName, hairColor) {
    let person = {
        name: firstName,
        lastName: secondName,
        hairColor: hairColor,
    }

    let result = JSON.stringify(person)
    console.log(result)
}



jsonString('George', 'Jones', 'Brown')