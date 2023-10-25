// Спитати в користувача вік за допомогою propmpt, далі створити змінну і  використовуючи тернарний оператор ( це скорочений запис іf ) присвоїти  true якщо вік більше 18  i false якщо менше

let userAge = Number(prompt('type your age'));
// let result = false;
// if(userAge>18){
//     result = true;
// }
// else{
//     result = false;
// }
let result = userAge>18 ? true : false;

console.log(`User age test ${result}`);

// - отримайте від корисутвача 2 цифрових значення і математичний оператор (+, -, *, . )  і в залежності від оператора виведіть консоль лог з результатом математичної операції, також не забудьте за перевірку в операції ділення, бо на 0 ділити не можна

let firstValue = Number(prompt('Type number'));
let secondValue = Number(prompt('Type number'));
let operation = prompt('Type operation sign');

if(operation == '+'){
    console.log(`Operation + ${firstValue+secondValue}`);
}
else if(operation == '-'){
    console.log(`Operation - ${firstValue-secondValue}`);
}
else if(operation == '*'){
    console.log(`Operation - ${firstValue*secondValue}`);
}
else if(operation == '/'){
    if(secondValue === 0){
        console.log('Type new second value');
    }
    else{
        console.log(`Operation / ${firstValue/secondValue}`);
    }
}
else{
    console.log('Opps Error ');
}