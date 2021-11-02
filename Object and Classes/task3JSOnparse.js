function jsonParse(objectAsString) {
    let parsedObjects = JSON.parse(objectAsString);

    for (let key of Object.keys(parsedObjects)) {
        console.log(`${key}: ${parsedObjects[key]}`)
    }


}

let input = '{"name": "George", "age": 40, "town": "Sofia"}'

jsonParse(input)