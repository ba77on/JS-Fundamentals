function solve(catsAsString) {
    for (let catAsString of catsAsString) {
        let [name, age] = catAsString.split(' ');
        console.log(`${name}, age ${age} says Meow`);

    }
}

solve (['Mellow 2', 'Tom 5'])