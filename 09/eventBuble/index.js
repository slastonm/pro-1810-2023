window.onload = function(){
    let isTunel = false;
    let firstEl = document.querySelector('#first');
    let secondEl = document.querySelector('#second');
    let thirdEl = document.querySelector('#third');

    firstEl.addEventListener('click', function(){
        this.style.backgroundColor = 'darkblue';
        alert('1');
    }, isTunel);

    secondEl.addEventListener('click', function(){
        this.style.backgroundColor = 'orange';
        alert('2');

    }, isTunel);

    thirdEl.addEventListener('click', function(e){
        this.style.backgroundColor = 'green';
        e.stopPropagation();
        alert('3');
    }, isTunel);

    let listEl = document.querySelector('ul');
    listEl.onclick = function(e){
        console.log(e);
        if(e.target.tagName == 'LI'){
            e.target.style.backgroundColor = 'yellow';
            alert('111');
        }
    }

}