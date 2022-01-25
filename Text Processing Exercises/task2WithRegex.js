function modernTimes(str) {

    let result = [];
    let regex = /#[A-Za-z]+/g
    let matcher = str.match(regex);
    for (const line of matcher) {
        result.push(line.substring(1,))
    }

    console.log(result.join('\n'))
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')