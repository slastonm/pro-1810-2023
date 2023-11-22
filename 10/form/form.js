window.onload = function(){
    let formEl = document.querySelector('form');
    function validateForm(e){
        [...formElements] = formEl.elements;
        for(let i = 0; i<formElements.length; i++){
            if(formElements[i].type !== 'submit' && formElements[i].value === ''){
                alert(
                    'Заповніть поля'
                );
                e.preventDefault();
                return;
            }
        }
        alert('форма відправлена успішно')
    }
    formEl.addEventListener('submit', function(e){
        validateForm(e);
    });
}