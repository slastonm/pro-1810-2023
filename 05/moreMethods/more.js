let person ={
    userName:'Jonh',
    age:30,
    position:'Developer',
    info: function(){
        console.log(`${this.userName} work as ${this.position}`);
    }
}
console.log(person);

for(let key in person){
    console.log(`Key ${key} has value ${person[key]}`);
}

let numbers =[10, 22, 11, 33];

let newArr = [];
for(let value of numbers){
    newArr.push(value*2);
}
console.log(newArr);

function forEachInside(item, index, arr){
    console.log(`Info from forEach in function : ${item}, item index ${index}, in ${arr}`);
}

// newArr.forEach((item, index, arr)=>{
//     console.log(`Info from forEach ${item}, item index ${index}, in ${arr}`);
// });
newArr.forEach(forEachInside);

// person.forEach((item)=>{
//     console.log(item);
// })

console.log(newArr);

// let newNumbersColection = numbers.map((itemValue)=>itemValue*100);
let newNumbersColection = numbers.map((itemValue)=>{
    if(itemValue>50){
        return itemValue*100
    }{
        return 'less than 5';
    }
});


console.log(newNumbersColection);

let userAges = [15, 18, 23, 25, 27, 30];

function filterValue(itemValue){
    return itemValue>29;
};
// let filtredAges = userAges.filter((age)=>age>18);
let filtredAges = userAges.filter(filterValue);

console.log(filtredAges);

let userPoints = [1, 12, 22, 2, 33, 3,55, 4 , 13];

// userPoints.sort();
// userPoints.sort(function(a, b){return a-b});
userPoints.sort(function(a, b){return b-a});


console.log(userPoints);

const useKey = 'secretCode';
// useKey = 12345;

const usersConst = [];

usersConst.push('max');
usersConst.push('Vlad');
usersConst.pop();
usersConst.pop();

console.log(usersConst);

let userObj = {
    nikname: 'Nick'
}
userObj.email = 'nick@gmail.com';

console.log(userObj);


// console.log(a);
// var a = 1;
// let a = 1;

// var x = 10;
let x = 2;
if(x>1){
    // var x = 1000;
    let x = 1000;
    console.log(x);
}
console.log(x); // 10 -> 1000

// for(var i = 0; i<5; i++){
//     console.log(`var i ${i}`);
// }
for(let i = 0; i<5; i++){
    console.log(`var i ${i}`);
}
console.log(`outside loop ${i}`);