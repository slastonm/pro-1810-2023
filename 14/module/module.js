export function hello(userName){
    alert(`Hello ${userName} from module js`);
}

function testValue(value){
    if(value>0){
        console.log(`${value} is positive number`);
    }
    else{
        console.log(`${value} is negative number`);
    }
}

function summValue(a,b){
    return a+b;
}

export {testValue, summValue}