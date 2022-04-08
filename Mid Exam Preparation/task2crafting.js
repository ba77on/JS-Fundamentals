function crafting(arr) {
    let startingArr = arr.shift().split('|')

    let command = arr.shift().split(' ');

    let result = '';
    while (command != 'Done') {
        let commFirstWord = command.shift();
        let secondWord = command.shift();
        let commIndex = Number(command.shift());
        result = '';

        if (commFirstWord === "Move" && secondWord === 'Right') {
            if (commIndex > startingArr.length || commIndex < 0) {

            } else {
                let cuttedElement = startingArr[commIndex];
                let rightel = commIndex + 1
                startingArr.splice(commIndex, 1)
                startingArr.splice(rightel, 0, cuttedElement)

            }
        } else if (commFirstWord === 'Move' && secondWord === 'Left') {
            if (commIndex > startingArr.length || commIndex < 1) {

            } else {
                let cutedELe = startingArr[commIndex];
                let leftel = commIndex - 1;
                startingArr.splice(commIndex, 1);
                startingArr.splice(leftel, 0, cutedELe)
            }
        } else if (commFirstWord == 'Check' && secondWord === 'Odd') {
            for (let i = 0; i < startingArr.length; i++) {
                if (i % 2 === 1) {
                    result += startingArr[i] + ' ';

                }
            }
            console.log(result)
        } else if (commFirstWord === 'Check' && secondWord === "Even") {
            for (let j = 0; j < startingArr.length; j++) {
                if (j % 2 === 0) {
                    result += startingArr[j] + ' ';

                }
            }
            console.log(result)
        }
        command = arr.shift().split(' ')

    }
    console.log(`You crafted ${startingArr.join('')}!`)
}
crafting([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Even',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
])