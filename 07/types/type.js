console.log(`Type this value ${typeof 'true'}`);
console.log(`Type this value ${typeof true}`);
console.log(`Type this value ${typeof 123}`);
console.log(`Type this value ${typeof null}`);
console.log(`Type this value array ${typeof [1,2,3]}`);
console.log(`Type this value "" ${typeof ""}`);
console.log(`Type this value "123" ${typeof "123"}`);
console.log(`Type this value new Date() ${typeof new Date()}`);
console.log(`Type this value {} ${typeof {a:3}}`);
console.log(`Type this value /regex/ ${typeof /regex/}`);
console.log(`Type this value function ${typeof function Hello(){}}`);
let myFn = ()=>2;
console.log(`Type this value function ${typeof myFn}`);
class PersonClass {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
}

console.log(`Type this value class ${typeof PersonClass}`);
console.log(`Type this value Nan ${typeof NaN}`);
console.log(`Type this value undefined ${typeof undefined}`);

const symValue = Symbol();
console.log(`Type this value Symbol ${typeof symValue}`);






let deepObj = {
    a:123,
    b:'String',
    c:[
        true
    ]
}
