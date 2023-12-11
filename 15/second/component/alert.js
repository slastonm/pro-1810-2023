export function showAlert(element){
    let dataArr = ['books', 'sport', 'js'];
    element.addEventListener('click', ()=>{
        // alert('hello');
        dataArr.forEach(item=>{
             let pEl = document.createElement('p');
             pEl.innerHTML = item;
             element.after(pEl);
        })
       

    })
}