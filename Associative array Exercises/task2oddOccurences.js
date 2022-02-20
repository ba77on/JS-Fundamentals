function oddOcc(str) {
    str = str.split(' ');

    let occurrences = new Map();

    for (let word of str) {
        word = word.toLowerCase();
        if (!occurrences.has(word)) {
            occurrences.set(word, 0)
        }

        occurrences.set(word, occurrences.get(word) + 1);
    }

    let keys = Array.from(occurrences.keys())
        .filter(x => occurrences.get(x) % 2 !== 0)
        .join(' ')
    console.log(keys);

}
oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')