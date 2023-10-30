

let functionName = function(functionValue, ){
    console.log(`Hello user ${functionValue}`);
}
functionName('Test');


function printValue(value, printCount){
    for(let i = 0; i<printCount; i++){
        console.log(`Print ${value}  iteration ${i}`);
    }
}

printValue('Hello', 10);

function summOperation(a, b){
    if(a>2){
        return `a>2 summ ${a+b}`
    }
    else{
        return a+b;
    }
}

let testReturn = summOperation(1, 2);
console.log(testReturn);
let testConsole = functionName('Max');
console.log(testConsole);

function manyValues (...value){
    console.log(arguments);
    console.log(value);
}

manyValues(1,2,3,4,5,6);

let firstArr = [1,2,3];
let secondArr = [4,5,6];

function addTwo(array, callback){
    let newArr = []
    for(let i=0; i<array.length; i++){
        newArr.push(callback(array[i], 2));
    }
    return newArr;
}



let myNewValue = addTwo(firstArr, summOperation);
console.log(firstArr, 'first arr');
console.log(myNewValue, 'new arr from fun');


function multiplyItems(value, multipy){
    return value*multipy;
}

addTwo(secondArr, multiplyItems);
console.log(secondArr);


let simpleFn = function(a){
    return a*2;
}

// let arrowFn = (value)=>value*3;
let arrowFn = (value)=>{
    if(value>0){
        return value*3;
    }
};


console.log(`Simple result ${simpleFn(4)}`);
console.log(`Arrow result ${arrowFn(4)}`);


let global = 'global';

let fnScope = function(){
    // let local = 'local';
    global+=2;
    // local+=3;
    if(true){
        let local = 5;
        if(local>0){
            console.log(local);
        }
    }
    // console.log(`Variable value ${global}, ${local}`);
}


fnScope();
console.log(`global ${global}`);
// console.log(`fn local ${local}`);
