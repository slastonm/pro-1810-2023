let productBase = 10;
// let productOrder = 10;
let productOrder = '10';


// productBase = productOrder;


// == дорівнює

console.log(productBase == productOrder);
console.log(0 == false);
console.log(0 == null);

let jsLang = 'Javascript';
let JSlang = 'Javascript';

console.log(`Compare js and Js = ${jsLang == JSlang}`);
console.log(`Compare null and udefined = ${null == undefined}`);

// === сурове дорівнює
console.log(`Restrict compare ${5 === '5'}`);
console.log(`Restrict compare ${0 === false}`);


// != не дорівнює
console.log(`3 != 3 ${3 != '3'}`);

// !==  не ідентичні значення 

console.log(`false !== 3 ${3 !== false}`);

console.log(`order 10 base 12 ${14>12}`);

let minValue = 0.1;

console.log(`Mobile pay ${0.01>minValue}`);

// >=
console.log(`Compare 10 and 10 ${10>=10}`);

console.log(`Compare 10 and 9 ${10>=9}`);

// < and < =  

console.log(`Compare 1 and 2 ${1<2}`);
console.log(`Compare 2 and 2 ${2 <= 2}`);

let userNickname = 'Igor';
let userAge = 26;
console.log(`User is admin ${userNickname == 'admin'} and ${userAge > 18}`);

// && -> and -> логічне і

// true && false = false;
// false && false = false;
// false && true = false;
// true && true = true;
// true && true && false = false;

// || -> or -> или -> або 


// true || false = true;
// false || false = false;
// false || true = true;
// true || true = true;
// true || true || false = true;


