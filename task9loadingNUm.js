function loadingNum(n) {
    let loading = n / 10;
    procentLoader = "..........";
    let loadingBar = procentLoader.split('');

    if (n === 100) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");



    } else {

        for (let i = 0; i < loading; i++) {
            loadingBar.pop();
            loadingBar.unshift("%");

        }

        console.log((`${n}% [${loadingBar.join("")}]`))
        console.log("Still loading...")



    }


}
loadingNum(30)