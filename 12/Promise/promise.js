let firstPromise = new Promise(function(resolve, reject){
    console.log('Promise work');
});

let x = 10;
let y = 2;
let myPromise = new Promise(function(resolve, reject){
    if(y=== 0){
        reject(alert('0 is bad value'));
    }
    else{
        let res = x/y;
        resolve(console.log(`Operation x/y = ${res}`));
    }
});