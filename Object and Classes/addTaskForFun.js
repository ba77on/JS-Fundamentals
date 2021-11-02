

let games = {
    firstGame: 'CounterStrike',
    secondGame: 'TheWitcher3',
    bestSound() {
        console.log('MultiKill')
    }
};

for (const line in games) {
    console.log(games[line]);
}


