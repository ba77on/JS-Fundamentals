// let pattern = new RegExp('[A-Z][a-z]+');
// let paternLiteral = /[A-Z][a-z]+/

// let text = 'Today is 2015-05-11';
// let regex = /\d{4}-\d{2}-\d{2}/g;

// // let result = regex.test(text);
// // console.log(result)

// let result = text.match(regex)
// console.log(result)

let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regex.exec(text);
let secondMatch = regex.exec(text);
console.log(firstMatch[0]) // Peter: 123 
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2])