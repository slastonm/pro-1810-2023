window.onload = function(){
    // fetch('url',[option])
    let containerEl = document.querySelector('.container');
    function drawData(data){
        let div =  document.createElement('div');
        div.innerHTML = `<ul>
            <li>
                ${data.id}
            </li>
            <li>
                ${data.title}
            </li>
            <li>
                ${data.completed}
            </li>            
        </ul>`;
        containerEl.appendChild(div);
    }
    let btnGet = document.querySelector('button');
    btnGet.onclick= function(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json =>{
                json.forEach(element => {
                    drawData(element);
                });
        });        
    }


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body: JSON.stringify({
            title:'Hello',
            body:'Body text',
            userId: 111
        }),
        headers:{
            'Contet-type':'application/json; charset=UTF-8'
        }
    }).then(response=>response.json()).then((data)=>console.log(data));
}