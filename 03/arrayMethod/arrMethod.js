
let usersArr = ['Tom', 'Nika', 'Ros', 'Vlad', 'Tanja', 'Bob', 'John'];
let newUsers = ['Diana', 'Mari', 'Anna'];
// let bigUserList = usersArr.concat(newUsers);
let bigUserList = newUsers.concat(usersArr, 'Yuri', 'Alex');

let stringValue = bigUserList.toString();

// let joinString = bigUserList.join('*');
let joinString = bigUserList.join(' ');
let reverseUserList = bigUserList;
reverseUserList = reverseUserList.reverse();
let str = 'Hello user'
if(str.length>0){
    console.log('Is array');
}

console.log(`Is reverseUserLlist array ${Array.isArray(reverseUserList)}`);
console.log(`Is str array ${Array.isArray(str)}`);

// console.log(usersArr);
// console.log(bigUserList);
// console.log(stringValue);

// console.log(joinString);
// console.log(reverseUserList);

let newArr = [2, 3, 4, 5, 6];
let userName = 'Max'
// push додає значення в кінець массиву
newArr.push('push1 value');
newArr.push('push2 value');
newArr.push('push3 value');
newArr.push(userName);
newArr.push(30);
newArr.push(true);
newArr.push([1,2,3]);
console.log(newArr);
// pop видаляє значення з кінця массиву

newArr.pop();
newArr.pop();
newArr.pop();
newArr.pop();
newArr.pop();


console.log(newArr);

// unshift додає значення на початок 
newArr.unshift('Hello');
newArr.unshift(1,2,3,4);
newArr.unshift(true);
console.log(newArr);

// shift видаляє значення на початку

newArr.shift();
newArr.shift();
newArr.shift();
console.log(newArr);

// let sortMe = [2, 1, 3,4,5, 11, 31];
let sortMe = ['cow', 'cat', 'bird', 'duck', 'dog'];

sortMe.sort();
console.log(sortMe);







