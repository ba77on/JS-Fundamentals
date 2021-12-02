function race(arr) {
    let namesOfParticipants = arr.shift().split(", ");
    let racers = {};

    namesOfParticipants.forEach(names => {
        racers[names] = 0;
    });
    for (const line of arr) {
        let regexOfNames = /[A-Za-z]/g
        let matcherNames = line.match(regexOfNames)
        let name = matcherNames.join("");
        if (racers.hasOwnProperty(name)) {
            let regexRuned = /[0-9]/g
            let digits = line.match(regexRuned)
                .map(Number)
                .reduce((a, b) => a + b);
            racers[name] += digits;
        }

    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sorted[0]}`)
    console.log(`2nd place: ${sorted[1]}`)
    console.log(`3rd place: ${sorted[2]}`)
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])