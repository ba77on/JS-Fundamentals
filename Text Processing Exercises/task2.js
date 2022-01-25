function modernTimes(str) {
    let arr = str.split(' ');


    arr.forEach(word => {

        if (word[0] == '#' && word.length > 1) {
            let isFlag = true;
            word = word.slice(1);
            for (const singleWord of word) {
                let specialWord = singleWord.charCodeAt()
                if (specialWord < 65 || specialWord > 90 && specialWord < 97 || specialWord > 122) {
                    isFlag = false;
                    break;
                }
            }
            if (isFlag) {
                console.log(word)
            }
        }

    });


}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia")