function matchFullName([input]) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

    let matches = input.match(regex);
    console.log(matches.join(' '))



}
matchFullName([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
])