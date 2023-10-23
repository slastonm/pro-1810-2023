let thisYear = 2024;

if(thisYear == 2023){
    console.log(`This is 2023`);
}
else{
    console.log(`Another year`);
}

// let userData = Number(prompt('Type number'));


// if(userData===0){
//     console.log('This 0');
// }
// else if(userData>0){
//     console.log('Nice value');
// }
// else{
//     console.log('Sorry this value is not valid');
// }

// let userSay = prompt('Hello user');
// hello, hi, good morning 
// if(userSay == 'Hello' || userSay == 'hello' || userSay == 'hi' ){
//     console.log(`IF User say ${userSay}`);
// }
// else{
//     console.log(`Else User say ${userSay}`);
// }

// let userLogin = prompt('Type your login');
// let userPassword = prompt('Type your password');

// if(userLogin == 'Admin' && userPassword == '123456'){
//     alert('Hello admin');
// }else{
//     alert('Good bye');
// }

let maxValue = 0;
let firstValue = 255;
let secondValue = 305;

// if(firstValue>secondValue){
//     maxValue = firstValue;
// }
// else{
//     maxValue = secondValue;
// }

// firstValue>secondValue ? maxValue = firstValue : maxValue = secondValue;
maxValue = firstValue>secondValue ? firstValue : secondValue;

console.log(`Max valeu betwen ${firstValue} and ${secondValue} is ${maxValue}`);
let thisDay = 23;
let thisMonth = 10;
if(thisYear == 2023 ){
    if(thisDay == 31 && thisMonth == 12){
        console.log('Happy new year');

    }else{
        console.log('Go to work');
    }
}
else{
    console.log(`Another year`);
    if(thisYear == 2024){
         console.log('Next Year');
    }
    else{
        console.log('Past year');
    }
}