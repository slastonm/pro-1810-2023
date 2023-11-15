
let container = document.querySelector('.container');

// Додаткова робота:
// Створіть код який створює 50 дівів різного кольору з стилями які зкруглють кути а також додають різний рандомний бекграунд кожному діву
function randomColor(){
    let hue = Math.floor(Math.random()*360);
    let saturation = `${Math.floor(Math.random()*100)}%`;
    let linghtness = `${Math.floor(Math.random()*100)}%`;
    return `hsl(${hue}, ${saturation}, ${linghtness})`;
}

function createDiv(widht, height){
    let div = document.createElement('div');
    div.style.width = `${widht}px`;
    div.style.height = `${height}px`; 
    div.style.borderRadius = '100%';
    div.style.backgroundColor = randomColor();
    return div;
}

for(let i =0; i<50; i++){
    container.appendChild(createDiv(100, 100));
}



