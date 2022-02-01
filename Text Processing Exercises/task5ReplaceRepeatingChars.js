function replaceRepChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str.charAt(i + 1)) {
            result += str.charAt(i)
        }
    }
    console.log(result)
}
replaceRepChars('aaaaabbbbbcdddeeeedssaa'
)