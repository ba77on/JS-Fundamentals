function revealWords(word, str) {
    word = word.split(', ')
    for (const line of word) {
        singleWord = '*'.repeat(line.length);

        str = str.replace(singleWord, line)
    }

    console.log(str)

}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')