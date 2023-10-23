let userOrder = 10;
let userSale = 5;

console.log('User order '+userOrder+' user sale '+userSale );
console.log('User order'+' '+userOrder+' '+'user sale '+userSale );
let result = `User order ${userOrder/100} user sale ${(userOrder*userSale)/100}`;
console.log(result);

document.write(`<h1>User order ${userOrder}</h1> `);
