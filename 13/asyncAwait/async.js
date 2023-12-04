
window.onload = function(){
    const posts = [
        {id:1, text:'Hello'},
        {id:2, text:'World'}
    ];
    function getData(){
        setTimeout(()=>{
            let dataItem = '';
            posts.forEach((post)=>{
                dataItem+=`<p>${post.text}</p>`
            })
            document.body.innerHTML = dataItem;
        }, 1000);
    }

    function createPost(data){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                posts.push(data);
                const errorValue = false;
                if(!errorValue){
                    resolve();
                }
                else{
                    reject('Error in Promise');
                }
            }, 2000);
        });
    }
    // getData();
    // createPost({id:4, text:'New post promise'}).then(getData).catch(err=>console.log(err));

    async function start(){
        await createPost({id:5, text:'New post promise'});
        getData();
    }
    // start();
    async function fetchData(){
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
        const resuslt = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await resuslt.json();
        console.log(data);
    }
    fetchData();
}