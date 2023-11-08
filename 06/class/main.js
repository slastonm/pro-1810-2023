function Person (fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    // this.userMethod = function(){

    // }
}
Person.prototype.userInfo = function(){
    return `User info ${this.fName} ${this.lName} has age ${this.age}`;
}

let stivPerson = new Person('Stiv', 'Jobs', 20);
console.log(stivPerson.userInfo());
console.log(stivPerson);

class PersonClass {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
    publicUserMethod(){
        return `${this.name} and ${this.year}`;
    }
    static staticData = 'Class info';
    static myStaticMethod(){
        console.log('This static');
    }
    get userInfo(){
        return `This get info about ${this.name} and ${this.year}`;
    }
    get modifyObj(){
        return {
            userName : this.name,
            userAge: this.year,
            textInfo:this.userInfo
        }
    }
    set setName(value){
        if(value.length < 3){
            alert('Short name');
        }
        else{
            this.name = value;
        }
    }
}

let personTom = new PersonClass('Tom', 23);
console.log(personTom);

// console.log(personTom.staticData);
// console.log(personTom.myStaticMethod());

PersonClass.myStaticMethod();
console.log(PersonClass.staticData);
// let getTomInfo = personTom.userInfo;
let getTomInfo = personTom.modifyObj;

console.log(getTomInfo);

personTom.setName='Rocky';

console.log(personTom);


class Employee extends PersonClass{
    constructor(name, year, postion){
        super(name, year);
        this.postion = postion;
    }
    set newPosition(value){
        this.postion = value;
    }
}

const developer = new Employee('TomDev', 1995, 'Developer');
console.log(developer.userInfo);
Employee.myStaticMethod();

developer.newPosition = 'PM';
developer.setName ='TomPM'
console.log(developer);


