function solve(arr) {
    let skill = arr.shift().split(' ').join(' ');
    let [command, index, letter, replacement] = arr.shift().split(' ');
    while (command !== "For" && index !== "Azeroth") {
        if (command === "GladiatorStance") {
            skill = skill.toUpperCase();
            console.log(skill)
        } else if (command === "DefensiveStance") {
            skill = skill.toLowerCase()
            console.log(skill)
        } else if (command === "Dispel") {
            index = Number(index)
            if (index < skill.length && index >= 0) {
                let element = skill[index]
                skill = skill.replace(element, letter)
                console.log("Success!")
            } else {
                console.log('Dispel too weak.')
            }
        } else if (command === "Target" && index === "Change") {
            while (skill.includes(letter)) {
                skill = skill.replace(letter, replacement)
            }
            console.log(skill)

        } else if (command === "Target" && index === "Remove") {
            let startingIndForSubstring = skill.indexOf(letter);
            let leng = letter.length;
            skill = skill.replace(letter, "")
            console.log(skill)
        } else {
            console.log("Command doesn't exist!")
        }
        [command, index, letter, replacement] = arr.shift().split(' ');
    }

}
solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
])