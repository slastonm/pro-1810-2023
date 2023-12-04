
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
                const errorValue = true;
                if(!errorValue){
                    resolve();
                }
                else{
                    reject('Error in Promise');
                }
            }, 2000);
        });
    }
    getData();
    // createPost({id:3, text:'New post'}, getData);
    createPost({id:4, text:'New post promise'}).then(getData).catch(err=>console.log(err));
}