window.onload = function(){
    let infoEl = document.querySelector('.info');
    let headerEl = document.querySelector('header');
    window.addEventListener('scroll', function(){
        let scrollInfo = window.scrollY;
        infoEl.innerHTML = scrollInfo;
        // console.log(window.);
        if(scrollInfo > 200 && scrollInfo<600){
            this.document.querySelector('body').style.backgroundColor = 'pink';
        }
        else if(scrollInfo > 600 && scrollInfo<800){
            this.document.querySelector('body').style.backgroundColor = 'red';
        }
        else{
            this.document.querySelector('body').style.backgroundColor = 'white';
        }
    });
    let pEl = document.querySelector('p');
    pEl.addEventListener('copy', (e)=>{
        e.preventDefault();
        alert('Копіювати текст заборонено');
    });
    let textEl = document.querySelector('textarea');
    textEl.addEventListener('paste', (e)=>{
        e.preventDefault();
        alert('Заборонена дія');
    });

    let btnInfo = document.querySelector('.info');
    let btnLink = document.querySelector('.link');
    btnInfo.onclick = function(){
        console.log(document.location);
    }
    btnLink.onclick = function(){
        document.location = "https://prog.kiev.ua/fe.html";
    }
}