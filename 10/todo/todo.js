window.onload = function(){
    let overlayEl = document.querySelector('.overlay');
    let modalEl = document.querySelector('.modal');
    let todoContainer = document.querySelector('.todo-list');
    let todoNameEl = document.querySelector('#todoName');
    let addButonEl = document.querySelector('.add');
    let closeModalEl = document.querySelector('.close');
    let applyEl = document.querySelector('.apply');
    function showModal(){
        overlayEl.classList.toggle('open');
        modalEl.classList.toggle('open');
        let windowWidth = window.innerWidth;
        console.log(windowWidth);
        let windowHeight = window.innerHeight;
        console.log(windowHeight);
        let modalStyle = getComputedStyle(modalEl);
        console.log(modalStyle.width);
    }
    function closeModal(){
        overlayEl.classList.toggle('open');
        modalEl.classList.toggle('open');
        todoNameEl.value = '';
    }
    function createElemntItem(value){
        let element = document.createElement('div');
        element.classList.add('todo-item');
        // Варіант 1
        // let editBtn = document.createElement('button');
        // editBtn.onclick = fn
        element.innerHTML = `
            <div><input type='checkbox'>${value}</div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        `;
        return element;

    }
    function addTodoEl(){
        if(todoNameEl.value.length>0){
            todoContainer.appendChild(createElemntItem(todoNameEl.value));
        }
        else{
            alert('Type todo');
        }
    }
    addButonEl.onclick = showModal;
    closeModalEl.onclick = closeModal;
    applyEl.onclick =function(){
        addTodoEl();
        closeModal();
    } 
    todoContainer.addEventListener('click', function(e){
        console.log(e.target);
        let parentEl = e.target.parentElement;
        console.log(parentEl);
        this.removeChild(parentEl.parentElement);
    })
}