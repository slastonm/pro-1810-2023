window.onload = function(){
    let switcherBtn = document.querySelector('button');
    switcherBtn.addEventListener('click', function(){
        let root = document.documentElement;
        let curentColorBody = getComputedStyle(root).getPropertyValue('--body-bg');
        let curetnColorText = getComputedStyle(root).getPropertyValue('--text-color');
        // console.log(curentColorBody);

        if(curentColorBody == 'purple' && curetnColorText == 'white'){
            root.style.setProperty('--body-bg', 'white');
            root.style.setProperty('--text-color', 'black');
        }
        else{
            root.style.setProperty('--body-bg', 'purple');
            root.style.setProperty('--text-color', 'white');
        }
    });
}