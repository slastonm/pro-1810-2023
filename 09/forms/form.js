window.onload = function(){
    let formEl = document.querySelector('form');
    // console.log(formEl.elements);
    let [...formElements] = formEl.elements;
    console.log(formElements);
    let isValid = false;
    function checkValue(){
        formElements.forEach(element =>{
            console.log(element.value);
        });        
    }
    let firstName = document.querySelector('#firsName');
    // firstName.oninput = function(){
    //     console.log(this.value);
    // }
    firstName.addEventListener('input', function(){
        console.log(this.value);
    });
    firstName.addEventListener('focusin', function(){
        this.style.backgroundColor = 'blue';
    });
    firstName.addEventListener('focusout', function(){
        this.style.backgroundColor = 'green';
    });
    // firstName.
    formEl.onsubmit = function(e){
        alert('Form submited');
        e.preventDefault();
    }
}