let numberValue = 1;
let thenPromise = new Promise(function(resolve, reject){
    if(numberValue>2){
        resolve('Hello');
    }
    else{
        reject(
            'Error reject'
        );
        throw 'Small numberValue';
    }
});
thenPromise.then(function(valueFromPromise){
    console.log(`Value from pormise resolve ${valueFromPromise}`);
}).catch(function(error){
    console.log(`Promise error ${error} error message`);
});

let firstP = new Promise(function(resolve){
    resolve('First promise value');
});
let secondP = firstP.then(function(value){
    return `${value} and Second Then`;
});
let thirdP = secondP.then(function(value){
    console.log(`${value} and third promise`);
});

new Promise(resolve => resolve('First promise'))
.then(value=>`${value} + second then`)
.then(value =>`${value} + third then`)
.then(finalValue =>{
    console.log(`Final:  ${finalValue}`);
})