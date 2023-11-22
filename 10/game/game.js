window.onload = function(){
    let resultEl = document.querySelector('#result');
    let playBtn = document.querySelector('button');
    function playGame(){
        console.log(11);
        let userChoice = document.querySelector('#choice').value.toLowerCase();

        if(userChoice === 'камінь' || userChoice === 'папір' || userChoice === 'ножниці'){
            
            let randomChoice = computerChoice();
            if(userChoice === randomChoice){
                resultEl.innerHTML = 'Нічия';
            }
            else if(
                (userChoice === 'камінь' && randomChoice === 'ножниці') || (userChoice === 'ножниці' && randomChoice === 'папір') || (userChoice === 'папір' && randomChoice === 'камінь')
            ){
                resultEl.innerHTML = 'Перемога';
            }
            else{
                resultEl.innerHTML = 'Ви програли';
            }
        }
        else{
            alert('Напишіть коректну відповідь');
        }
    }
    function computerChoice(){
        let variants = ['камінь', 'ножниці', 'папір'];
        let randomIndex = Math.floor(Math.random()*3);
        return variants[randomIndex];
    }
    playBtn.onclick = playGame;
}