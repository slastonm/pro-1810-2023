let text = 'User name';
console.log( text);
console.log(`String length ${text.length}`);

let newText = text.slice(3, 8);
console.log(newText);

let userSkill = 'User know Java Java';
let updateSkill = userSkill.replace('Java', 'Javascript');
console.log(updateSkill);

let helloUser = 'HELLO world';
// let newHello = helloUser.toUpperCase();
let newHello = helloUser.toLowerCase();

console.log(newHello);

let userName = 'AdmIn';

if(userName.toLowerCase() == 'admin'){
    // alert('Hello');
}

window.onload = function(){
    let btn = document.querySelector('button');
    let input = document.querySelector('input');

    btn.onclick = function(){
        console.log(input.value);

        if(input.value.toLowerCase() == 'admin'){
            alert('Hello admin');
        }
        
    }
}

let unTrimValue = '   admin user  ';
let trimValue = unTrimValue.trim();
// let trimValue = unTrimValue.trimStart();
// let trimValue = unTrimValue.trimEnd();
let transform =  trimValue.split('');
transform.reverse();
let backToString = transform.join('')
console.log(transform);
console.log(backToString);


let objArr = [
    {
        userage: 120
    },
    {
        userage:30
    }
]
objArr.sort(function(a, b){return a.userage-b.userage});
console.log(objArr);

