// // let cat = { name: 'Timmy', age: 3, breed: 'Persian' };
// // let cat2 = { name: 'Gary', age: 2, breed: 'Angora' };
// // let cat = {
// //     cat['name'] = 'Nav';
// //     cat.age = 5;
// //     cat.breed = 'Persian';

// // function makeCatSound() {

// //     console.log('Meow')
// // }

// let cat = {
//     name: 'Navcho',
//     age: 5,
//     // makesound: makeCatSound() -- 1 nachin

//     // makeSound: () => {
//     //     console.log('Meow'); - 2 ri nachin za izvikvane
//     // }

//     breed: 'Persian',

//     // Поставя се задължителна запетайка след всяка функция!!!
// }

// for (let prop in cat) {
//     console.log(cat[prop])
// }
// // let catProperties = Object.keys(cat);
// // let catValues = Object.values(cat);
// // let catEntries = Object.entries(cat);

// // console.log(catProperties);
// // console.log(catValues);
// // console.log(catEntries);

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


