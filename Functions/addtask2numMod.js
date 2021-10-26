function numModifier(n) {
    let turnToString = (n).toString()
    let add = 0;
    let lengOfN = turnToString.length;
    for (let i = 0; i < lengOfN; i++) {
        add += Number(turnToString[i]);


    }

    let result = add / lengOfN;


    while (result < 5) {
        add += 9;
        n += "9";
        lengOfN += 1;
        result = add / lengOfN;
    }

    console.log(n)

}
numModifier(101)