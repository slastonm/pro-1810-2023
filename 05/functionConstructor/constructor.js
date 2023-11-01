let emptyArr = new Array();
let emptyObj = new Object();

console.log(emptyArr);
console.log(emptyObj);

let pen = {
    color:'blue',
    material:'plastic',
    price:'1$',
    write: function(){
        console.log('Test pen');
    }
}

function PenConstructor(name, color, price, material){
    this.name = name;
    this.color = color;
    this.price = price;
    this.material = material;
    // this.penInfo = function(){
    //     console.log(`This ${this.name} with ${this.color} price ${this.price} for good ${this.material}`);
    // }
}
PenConstructor.prototype.penInfo = function(){
    console.log(`This ${this.name} with ${this.color} price ${this.price} for good ${this.material}`);
}
PenConstructor.prototype.convertPrice = function(){
    console.log(`Pen price in hrv ${this.price *37}`);
}


let plasticPen = new PenConstructor('firstPen', 'black', 1.2, 'wood');
let metalPen = new PenConstructor('secondPen', 'gray', 2.2, 'metal');


console.log(plasticPen);
plasticPen.penInfo();

console.log(metalPen);
metalPen.penInfo();

// for(let objKey in metalPen){
//     console.log(`Pen info about ${objKey} = ${metalPen[objKey]}`);
// }

metalPen.convertPrice();
plasticPen.convertPrice();
