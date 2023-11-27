let simpleWay = /hi/gi;
let constReg = new RegExp('hi');

let simpleText =  'HI hello hi text 123 hi';
let firstTesIndex = simpleText.search(simpleWay);
console.log(firstTesIndex);
let replacedText = simpleText.replace(simpleWay, 'NEW');
console.log(replacedText);

let resultArr = simpleText.match(simpleWay);
console.log(resultArr);

let numberText = '3 плюс 2 дорівнює 5';
let numbersArr = numberText.match(/\d/g);
console.log(numbersArr);

let specialText = 'Test-111-Test2-222-Test3';
let divideRegExp = /-\d\d\d-/g;
let splietRes = specialText.split(divideRegExp);
console.log(splietRes);
let testValue = '!123-'
if(divideRegExp.test(testValue)){
    console.log(`Цей текст співпадає з вибраним патерном`);
}
else{
    console.log(`Нема співпадінь`);
}
let badScript = ':)';
console.log(document);

// \w  Всі [a-zA-Z0-9_]
// \W  Всі крім [^a-zA-Z0-9_]
// \s  Всі переноси тексту і контенту за допогою  [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// \S Вибор всього крім [\r\n\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// \d [0-9]
// \D Всі крім [0-9]

// \t - табуляція
// \r - перевод каретки
// \n - перевод рядка

// Набори регулярок
// [RrGgSs] набір букв і їх регістрів
// [a-z] вибір всіх літер від a-z  в малому регістрі
// [а-я] вибір всіх літер від a-я  в малому регістрі

// Діапазони 
// \d{1,2} діапазон вибору 1 або 2 цифрових значення
// \d{1,2} діапазон вибору 1 або 2 цифрових значення
// \d{3,} від 3 до безкінечності


//Якорні символи 
// ^ початок рядка
// \b границі слова
// $ кінець слова

let strTest = 'scss!';
let regTest = /^c/
console.log(`This string begin from c ${regTest.test(strTest)}`);
console.log(`This string end with ss ${/ss$/.test(strTest)}`);

let time = 'Opetn 7:00 and close 21:00'; // 5:10; d d : d d
let timeTest = /\d{1,2}:\d\d/igm;

console.log(`IN string ${time} find time ${timeTest.test(time)}`);
let selectReg = time.match(timeTest);
console.log(selectReg);

let hwString = '27-11-2023';

let borderWord = 'I know JS and JS!';
let bRegEx = /\bJS\b/g;
console.log(borderWord.match(bRegEx));

let animalsString = 'Animals: cats, rats, bats';
let animalRegEx = /[crb]ats/g;
let animalsArr = animalsString.match(animalRegEx);
console.log(animalsArr);

let userPhone ='+38(093)123-12-23';
let checkUserPhone = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;

let checkNumber = `User number is valid : ${checkUserPhone.test(userPhone)}`;
console.log(checkNumber);

let userEmail = 'My Test@gmail.com123' // [a-zA-z_.] @ [a-zA-z_.] 



