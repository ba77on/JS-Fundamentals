function substringString(word, string) {
    word = word.toLowerCase();
    string = string.toLowerCase().split(' ');

    if (string.includes(word)) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }

}
substringString('javascript',
    'JavaScript is the best programming language')