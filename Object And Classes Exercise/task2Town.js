function towns(arr) {
    for (const line of arr) {
        let [name, latitude, longitude] = line.split(' | ');

        let townInfo = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(townInfo)
    }


}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])