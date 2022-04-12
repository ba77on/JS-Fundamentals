function task3(arr) {
    let cards = arr.shift().split(`:`);
    let newDeck = [];
    let input = arr.shift();
    while (input != `Ready`) {
        input = input.split(` `);
        let action = input[0];
        switch (action) {
            case `Add`:
                let addedCard = input[1];
                if (!cards.includes(addedCard)) {
                    console.log(`Card not found.`);
                } else {
                    cards.splice(cards.indexOf(addedCard), 1);
                    newDeck.push(addedCard);
                }
                break;
            case `Insert`:
                let cardName = input[1];
                let insertedIndex = input[2];
                if (!cards.includes(cardName) || insertedIndex < 0 || insertedIndex >= newDeck.length) {
                    console.log(`Error!`);
                } else {
                    newDeck.splice(insertedIndex, 0, cardName);
                }
                break;
            case `Remove`:
                let cardRemoved = input[1];
                if (newDeck.includes(cardRemoved)) {
                    newDeck.splice(newDeck.indexOf(cardRemoved), 1);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case `Swap`:
                let first = input[1];
                let second = input[2];
                if (newDeck.indexOf(first) > newDeck.indexOf(second)) {
                    newDeck.splice(newDeck.indexOf(first), 1, second);
                    newDeck.splice(newDeck.indexOf(second), 1, first);
                } else {
                    newDeck.splice(newDeck.indexOf(second), 1, first);
                    newDeck.splice(newDeck.indexOf(first), 1, second);
                }
                break;
            case `Shuffle`:
                newDeck.reverse();
                break;
        }
        input = arr.shift();
    }
    console.log(newDeck.join(` `));
}
task3([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
]

);