// Following three quotation marks can be used to contain a string
var promise1 = "I promise I will always be a good boy";
var promise2 = 'I will always be a good boy';
var promise3 = `I will always be a good boy`;

//String Functions
console.log("lowercase");
console.log(promise1.toLowerCase());

console.log("UPPERCASE");
console.log(promise1.toUpperCase());

console.log("Finding index of word or letter");
console.log(promise1.indexOf('will'));
console.log(promise1.toUpperCase().indexOf('WILL')); //Functions after functions


console.log('Split');
console.log(promise1.split('I')); //' ' inside the function means splitting the entire string where there are spaces