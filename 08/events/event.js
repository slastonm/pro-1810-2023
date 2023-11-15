window.onload = function(){
    let title = document.querySelector('h1');
    let btnEl = document.querySelector('.test');
    function checkSize(){
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        console.log(`Window info ${windowHeight} and ${windowWidth}`);     
    }
    btnEl.onmouseenter = function(){
        title.classList.toggle('open');
        btnEl.classList.toggle('open');
        checkSize();
        console.log(`${btnEl.offsetTop} and ${btnEl.offsetLeft}`);
    }

    let showMessageBtn = document.querySelector('.showMessage');
    function displayAlert(){
        alert('Hello event');
    }
    showMessageBtn.addEventListener('click', displayAlert);
    let removeBtn = document.querySelector('.remove');
    removeBtn.addEventListener('click', function(){
        showMessageBtn.removeEventListener('click', displayAlert);
        alert('Done!');
    });
    let thisBtn = document.querySelector('.this');
    thisBtn.addEventListener('click', function(){
        console.log(this);
        this.innerHTML = 'Click';
        this.style.backgroundColor='red';
    });
    let [...liElements] = document.querySelectorAll('li');
    for( let i = 0; i<liElements.length; i++){
        liElements[i].onclick = function(){
            this.style.backgroundColor = 'yellow';
            this.style.padding = '10px';
        }
    }
    let eventBtn = document.querySelector('.event');
    eventBtn.addEventListener('click', function(event){
        console.log(event);
    });
    // eventBtn.onclick = function(e){
    //     console.log(e);
    // }
    let linkEl = document.querySelector('a');
    // linkEl.onclick = function(e){
    //     e.preventDefault();
    //     alert('Work');
    // }
    divElEvents = document.querySelector('.coupleEvents');
    divElEvents.addEventListener('mouseenter', function(){
        divElEvents.style.backgroundColor = 'black';
        // this.backgroundColor = 'black';
        this.innerHTML = 'Enter';
        console.log(11);
    });
    divElEvents.addEventListener('mouseleave', function(){
        // divElEvents.style.backgroundColor = 'red';
        this.style.backgroundColor = 'yellow';
        this.innerHTML = 'Leave';
    });
    divElEvents.addEventListener('click', function(){
        // divElEvents.style.backgroundColor = 'green';
        this.style.backgroundColor = 'yellow';
        this.innerHTML = 'Click';
    });
    divElEvents.addEventListener('mousemove', function(e){
        let infoPelement = document.querySelector('.info');
        infoPelement.innerHTML = `${e.clientX} and ${e.clientY} inside ${e.offsetX} and ${e.offsetY}`;
    });
    let inputEl = document.querySelector('input');
    inputEl.addEventListener('change', function(){
        console.log(this.value);
    });
    inputEl.addEventListener('blur', function(){
        this.style.backgroundColor = 'blue';
    })
    let getBtn = document.querySelector('.getData');
    getBtn.onclick = function(){
        console.log(inputEl.value);
        if(inputEl.value.length === 0){
            alert('Type answer');
        }
    }
}