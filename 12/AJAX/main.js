window.onload = function(){
    // XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.open('GET', 'https://swapi.dev/api/people/1/', true);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let result = xhr.response;
            console.log(result);
            // for({name, phone, username} of result){
            //     document.write(`<h3>
            //         ${name}, ${phone}, ${username}
            //     </h3>`);
            // }
        }
    }
    xhr.responseType = 'json';
    xhr.send(null);

    let formData = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et "
    }
    function postData(data){
        let xhr = new XMLHttpRequest;
        let jsonData = JSON.stringify(data);
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(jsonData);
        xhr.onload = function(){
            console.log(`Ifon about post request ${xhr.response}`);
        }
    }
    let btnPost = document.querySelector('button');
    btnPost.onclick = function(){
        postData(formData);
    }

}