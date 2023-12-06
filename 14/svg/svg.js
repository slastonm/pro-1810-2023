window.onload = function(){
    let containerEl = document.querySelector('.container');
    function createRect(width, height){
        let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('style', 'border: 1px solid black');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        let rectEl = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rectEl.setAttribute('width', width/2);
        rectEl.setAttribute('height', height/2);
        rectEl.setAttribute('fill', 'yellow');
        svg.appendChild(rectEl);
        containerEl.appendChild(svg);
    }
    createRect(100, 100);
} 