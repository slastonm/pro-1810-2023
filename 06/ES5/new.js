function manyValue(knowValue, ...arg){
    console.log(knowValue);

    console.log(arg);
}
manyValue('Value 1',2,3,4,5, 'test');

let firstArr = [1,2,3];
let secondArr = [4, 5,6];
// firstArr = firstArr.concat(secondArr);
firstArr = [...firstArr, ...secondArr];

console.log(firstArr);

let usersName = [
    'Ros',
    'Max',
    'Vald',
    'Nick'
];
let usersObj = {...usersName};
console.log(usersObj);

let cars = ['Ford f-150', 'fiat tipo', 'toyota rav 4'];

//old way 
// const ford = cars[0];
// const fiat = cars[1];
// const toyota = cars[2];

const [ford, fiat, toyota] = cars;

console.log(ford);
console.log(toyota);

const hero = {
    heroName:'Bataman',
    realName:'Bruce',
    suitColor:'Red'
}
const {heroName, realName, suitColor='black'} = hero;
// console.log(hero.heroName);
console.log(realName);
console.log(`Hero info ${heroName} has suit color ${suitColor}`);


const heros =[
    {
        heroName:'Bataman',
        realName:'Bruce',
        suitColor:'Red',
        info:[]
    },
    {
        heroName:'Joker',
        realName:'unknow name',
        suitColor:'green'
    }
];

for (const {heroName, suitColor} of heros){
    console.log(`This is ${heroName} has color ${suitColor}`);
}

const heroesTextInfo = heros.map(function({heroName, realName}){
    return `Map info ${heroName} ${realName}`;
});
console.log(heroesTextInfo);