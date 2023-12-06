window.onload = function(){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 50);
    // canvas.addEventListener('click', function(e){
    //     let mouseX = e.clientX-canvas.offsetLeft;
    //     let mouseY = e.clientY - canvas.offsetTop;
    //     // alert(`${mouseX}, ${mouseY}`);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.fillStyle = 'green';
    //     ctx.fillRect(mouseX, mouseY, 50, 50);
    // });

    let  firstClick = true;
    let startX, startY;

    function drawLine(e){
        let mouseX = e.clientX-canvas.offsetLeft;
        let mouseY = e.clientY - canvas.offsetTop;
        if(firstClick){
            startX = mouseX;
            startY = mouseY;
            firstClick = false;
        }
        else{
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            firstClick = true;
            startX = undefined;
            startY = undefined;
        }
    }
    canvas.addEventListener('click', function(e){
        drawLine(e);
    })
}