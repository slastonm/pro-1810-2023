window.onload = function (){
    function showInfo(){
        alert('Ви на сайті вже більше 30 секунд час роботи покупку');
    }
    let timerInfo = setTimeout(showInfo, 5000);
    // setTimeout(()=>{
    //     alert('Second call after 20s');
    // }, 20000);
    let counter = 0;
    function countCall(){
        let infoSpan = document.querySelector('p span');
        counter++;
        infoSpan.innerHTML = counter;
    }
    // setInterval(countCall, 5000);
    function myTimer(){
        const date = new Date();
        let dateElInfo = document.querySelector('h3');
        dateElInfo.innerHTML = `Time info : ${date.toLocaleTimeString()}`;
    }
    let timerInterval = setInterval(myTimer, 3000);
    let btnStop = document.querySelector('button');
    btnStop.onclick = function(){
        // clearInterval(timerInterval);
        clearTimeout(timerInfo)
    }

}