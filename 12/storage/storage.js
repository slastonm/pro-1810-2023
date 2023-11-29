document.cookie = "Tester=TestValue";
// document.cookie = "Tom= ! $ % ^^";
document.cookie = `specialUser = ${encodeURIComponent('!%*& # ')}`;
document.cookie ='modUser = Mod; path=/; expires=Tue, 31 Dec 2023 03:14:07 GMT';
document.cookie = 'shortLive = value; Max-Age=660000';
document.cookie = `Tom=; Max-Age=-999999`;
let ck = document.cookie;
console.log(document.cookie);
console.log(ck);

// let keyName = 'KeyCode';
// window.sessionStorage.myStorage = 'Hello my storage';
// window.sessionStorage.setItem('KeySesionstorage', 1234);
// window.sessionStorage[keyName] = '1qeewtrtr23';
// console.log(`Sesion storage data ${window.sessionStorage.length}`);
// console.log(`Session storage ${window.sessionStorage.getItem('myStorage')}`);
// console.log(`Session storage ${window.sessionStorage.KeySesionstorage}`);
// console.log(`Session storage ${window.sessionStorage[keyName]}`);

window.localStorage.keyValue ='First value';
window.localStorage.setItem('setKey', true);
window.localStorage['key22'] = 'Test value';
console.log(`Local storage ${window.localStorage.length}`);
console.log(`Local storage value: ${window.localStorage.key22}`);
console.log(`Local storage value: ${window.localStorage['keyValue']}`);
console.log(`Local storage value: ${window.localStorage.getItem('setKey')}`);

let filterValue = {
    maxValue:3000,
    minValue:1000
}
window.localStorage.filterStorage = JSON.stringify(filterValue);
let parseData = JSON.parse(window.localStorage.filterStorage);
console.log(parseData.maxValue);
console.log(window.localStorage.filterStorage);

window.localStorage.removeItem('filterStorage');
window.localStorage.clear();

let user = {
    id:111,
    userName:'developer',
    email:'test@gmail.com'
}