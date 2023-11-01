// 1)Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві. Функція повина повертати массив з парними номерами. 

function sortPairNumber(arr){
    let newNumbers = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            newNumbers.push(arr[i]);
        }
    }
    return newNumbers;
}

console.log(sortPairNumber([2,3,5,6]));

let testArr = [1,3,5,8,2,6];
console.log(sortPairNumber(testArr));
 // 2)Створити функцію яка перемножає всі значення массиву на 2 і записує їх в новий массив який повертає 

function multiply(arr, multiplyValue){
    let newUpvalue = [];
    for(let i=0; i<arr.length; i++){
        newUpvalue.push(arr[i]*multiplyValue);
    }
    return newUpvalue;
}

console.log(multiply([1,2,3,4], 2));
console.log(multiply([10,20,30,40], 1.5));

// const smile = [':)', '=)',':)', '=)',':)', '=)'];
// 3) створити функцію яка замінює в массиві =) на ;)

const smile = [':)', '=)',':)', '=)',':)', '=)'];
function changeSmile(smileArr, newSmile){
    let newSmileArr = [];
    for(let i=0; i<smileArr.length; i++){
        if(smileArr[i] == '=)'){
            newSmileArr.push(newSmile);
        }
        else{
            newSmileArr.push(smileArr[i])
        }
    }
    return newSmileArr;
}

console.log(changeSmile(smile, ';)'));
console.log(changeSmile(smile, '^_^'));
