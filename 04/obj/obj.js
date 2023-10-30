let students = [
    [
        'Max', ['html', 'css', 'js'], 'examle@test.com'
    ],
    [
        'Max2', ['html', 'css', 'js'], 'examle@test.com'
    ],
    [
        'Max3', ['html', 'css', 'js'], 'examle@test.com'
    ],
];

// let studentSkill = students[0][2][]

let obj = {
    userName: 'Max',
    skills: ['html', 'css', 'js'],
    email:'examle@test.com'
}

console.log(obj);

console.log(`Username ${obj.userName} has skills ${obj.skills} email: ${obj.email}`);

let student = {};
student.studentName = 'Ros';
student.skills = ['html', 'css', 'js'];
student.phone = '06212312';
student.isStudy = true;

console.log(student);

let dog = new Object(); // {}
dog.nickName = 'Rex';
dog.age = 3;
dog.voice = function(){
    return 'Gav gav';
}

console.log(dog);

console.log(`Dog info about ${dog.nickName} age: ${dog.age} make voice ${dog.voice()}`);


dog.callInfo = function(){
    // console.log(this);
    console.log(`Info ${this.nickName} and ${this.age}`);

}
// dog.callInfo = ()=>{
//     console.log(this);
// }
dog.callInfo();

dog['key']='Key value dog';
console.log(dog.key);

dog.parents = {
    father: 'Big dog',
    mother: 'Small dog'
}

console.log(`Parent info ${dog.parents.father} and ${dog.parents.mother}`);

delete dog.age;

console.log(dog);

delete dog.parents;

console.log(dog);
