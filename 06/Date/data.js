// new Date()
const nowDate = new Date();
console.log(nowDate);

// new Date(year, month, day, hours, minutes, second, mileseconds);

const pastData = new Date(2023, 11, 20, 6, 0, 30, 0);
console.log(pastData);

// const pastShortData = new Date(2020, 11, 31);
const pastShortData = new Date(2019, 11);

console.log(pastShortData);

console.log(`Data format ISO ${nowDate.toISOString()}`);
console.log(`Data format DateTimeString ${nowDate.toDateString()}`);
console.log(`Data format UTC ${nowDate.toUTCString()}`);

console.log(nowDate.getDay());
console.log(nowDate.getMonth());
console.log(nowDate.getFullYear());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());





