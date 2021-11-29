function solve(word, text) {
    let result;
    while (result !== text) {
        result = text;
        text = text.replace(word, '')
    }
    console.log(text)
}
solve('ice', 'kicegiciceeb')