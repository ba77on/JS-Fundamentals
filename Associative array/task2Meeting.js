function meeting(arr) {

    let obj = {};
    arr.forEach(element => {
        let [day, name] = element.split(' ');

        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            obj[day] = name;
        }


    });

    for (let kvp in obj) {
        console.log(`${kvp} -> ${obj[kvp]}`)
    }
}

meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])