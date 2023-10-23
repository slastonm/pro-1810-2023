let myName ='js';
let myAge = 28;
let spaceSymbol = '    ';

let result = myAge+spaceSymbol+myName;
console.log(result);

console.log(10%2);
console.log(9%2);
console.log(4%2);
console.log(9%3);

let firsValue = 10;

// firsValue = firsValue+3;
firsValue+=3;
console.log(firsValue);
// 10 + 3
firsValue=firsValue*2;
// firsValue*=2;
console.log(firsValue);

// += -= *= /=

let userOrder = 10;

// userOrder++;
// userOrder++;
// userOrder++;
// userOrder--;
// userOrder--;
// userOrder--;
console.log(userOrder);

let postfixIncrement = 1;

console.log('posfixIncrement', postfixIncrement);
postfixIncrement++;
console.log('posfixIncrement', postfixIncrement);
console.log('posfixIncrement', postfixIncrement++);
console.log('posfixIncrement', postfixIncrement);


let prefixIncrement = 1;

console.log('posfixIncrement', prefixIncrement);
++prefixIncrement;
console.log('posfixIncrement', prefixIncrement);
console.log('posfixIncrement', ++prefixIncrement);
console.log('posfixIncrement', prefixIncrement);


let postfixDecrement = 1;

console.log('posfixDecrement', postfixDecrement);
postfixDecrement--;
console.log('posfixDecrement', postfixDecrement);
console.log('posfixDecrement', postfixDecrement--);
console.log('posfixDecrement', postfixDecrement);

let operation = ((2*4)+(10/30))/100;