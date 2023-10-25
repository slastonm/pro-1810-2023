
let productMilk = 'milk';
let productOrange = 'Orange';
let wallet = '20$';


let firstArray = [productMilk, productOrange, wallet,,'userName', 100, true, [111,2,3,4,5], 'last array value in firstArray'];
let secondArray = new Array(100);
secondArray[10]= 'Hello';
secondArray[50] = 50; 



console.log(firstArray);
console.log(`user wallet: ${firstArray[2]}`);
console.log(`user name: ${firstArray[3]}`);
console.log(`user age: ${firstArray[4]}`);
console.log(`Iside array value by index 0: ${firstArray[6][0]}`);

console.log('second array');
console.log(secondArray);

console.log(`First array length ${firstArray.length}`);
console.log(`Last array value ${firstArray[firstArray.length-1]}`); // firstArray[7]


let usersArr = ['Tom', 'Nika', 'Ros', 'Vlad', 'Tanja', 'Bob', 'John'];
document.write(`<ul>`);
for(let i =0; i<usersArr.length; i++){
    console.log(`User name ${usersArr[i]}`);
    document.write(`<li>User name ${usersArr[i]}</li>`);
}
document.write(`</ul>`);
