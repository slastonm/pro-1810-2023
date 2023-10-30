// let arr = [1,2,3,'stringove', true];
let arr = [4, 5, 6,1, 0];
let newArr = arr.slice(0,3);

// newArr.sort();
console.log(arr);
console.log(newArr);

let copyArr = [].concat(arr);
copyArr.sort();
console.log(copyArr);

let numbersArr = [1,2,3, 5,'str',66, 77, 88, true];
console.log(numbersArr.indexOf(77));
console.log(numbersArr.indexOf('str'));
console.log(numbersArr.indexOf(true));
numbersArr[8] = 0;
console.log(numbersArr.indexOf('string'));
console.log(numbersArr);

let testArr = [1,2,3,4];
testArr.splice(2,2);
console.log(testArr);




