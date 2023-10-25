let userOne = 'Tom';
let userSecond = 'Bob';

let doWhileCounter = 1;

do{
    console.log(`Do while work ${doWhileCounter}`);
    doWhileCounter++;
}while(doWhileCounter<4);

let iterationCounter = 0;
while(iterationCounter<10){
    console.log(`While loop work ${iterationCounter}`);
    iterationCounter++;
}

for(let i = 0; i<50; i++){
    if(i===5){
        break
    }
    console.log(`For loop with break ${i}`);
}

for(let i = 0; i<4; i++){
    if(i===1 || i=== 2){
        continue
    }
    console.log(`For loop with Continue ${i}`);
}


for(let i=0; i<4; i++){
    // console.log('div open class row');
    document.write(`<div>`);
    for(let y=0; y<3; y++){
        // console.log(`div.product ${y}`);
        document.write(`<div class='poduct'>Product price ${y}</div>`)
    }
    document.write(`</div>`);
    // console.log('div close class row');
}