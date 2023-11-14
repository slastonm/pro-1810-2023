window.onload = function(){
    // let hTitle = document.getElementById('myId');
    // let hTitle = document.getElementsByTagName('h1');
    let newWaySelect = document.querySelector('h1')
    // console.log(hTitle[0].innerText);
    console.log(newWaySelect);

    let selectorExample = document.querySelector('footer .container h1');
    console.log(selectorExample);
    // let liElements = document.querySelector('li');
    // let liElements = document.querySelectorAll('li');
    // let liElements = Array.from(document.querySelectorAll('li'));
    let [...liElements] = document.querySelectorAll('li');
    liElements.forEach((item, index)=>{
        item.innerHTML = `<h3>New value for ${index}</h3>`;
    })

// let autoplay = document.querySelector('[autoplay]');
// let elements = document.querySelectorAll('div, p');
// let listItems = document.querySelectorAll('ul.nav > li');
// let listItem = document.querySelectorAll('li:nth-child(2)');
// console.log(autoplay);
    console.log(liElements);

    console.log(selectorExample.parentElement);
    let ulElement = document.querySelector('ul');
    console.log(ulElement.firstChild);
    console.log(ulElement.firstElementChild);
    ulElement.firstElementChild.innerHTML = 'First';
    console.log(ulElement.lastElementChild);
    ulElement.lastElementChild.innerHTML = 'Last';
    console.log(ulElement.children);
    let activeLi = document.querySelector('.active');
    console.log(activeLi.nextElementSibling);
    console.log(activeLi.previousElementSibling);

    let content =[
        {
            src:'../img/pic.png',
            title:'hello',
            price:100
        }
    ]
    let div = document.createElement('div');
    div.id = 'js-id';
    div.className = 'js-class';
    div.innerHTML = `<img src="${content[0].src}" alt="pic"><h3>${content[0].title}</h3>
    <h5>${content[0].price}</h5>`;
    let section = document.querySelector('section');
    section.appendChild(div);
    section.appendChild(div);
    section.appendChild(div);

    let navEl = document.querySelector('nav');
    let menuItems = ['Home', 'About', 'Sale'];
    function createLinkEl(value){
        let linkEl = document.createElement('a');
        linkEl.href = '#';
        linkEl.innerHTML = value;
        return linkEl;
    }
    menuItems.forEach((value)=>{
        navEl.appendChild(createLinkEl(value));
    });
    // menuItems.forEach
    // let lastItem = ulElement.lastElementChild;
    // let firstItem = ulElement.firstElementChild;
    // ulElement.removeChild(lastItem);
    // ulElement.removeChild(firstItem);
    let removeLastChild = ()=>{
        let lastItem = ulElement.lastElementChild;
        if(lastItem != null){
            ulElement.removeChild(lastItem);
        }
    }
    removeLastChild();
    removeLastChild();
    removeLastChild();
    removeLastChild();

    newWaySelect.remove();
    // navEl.remove();
    let firstLinkEl = document.querySelector('header nav a:first-child');
    firstLinkEl.setAttribute('href', 'https://prog.kiev.ua/');
    let inputEl = document.querySelector('input');
    inputEl.removeAttribute('disabled');
    let linkValue = firstLinkEl.getAttribute('href');
    console.log(`Link value in href ${linkValue}`);
    let btnEl = document.querySelector('button');
    btnEl.setAttribute('style', 'color:white; background-color:black;');
    btnEl.setAttribute('style', 'font-size:24px;');
    btnEl.style.cssText +='color:white; background-color:black;';
    let testTitle = document.querySelector('h3');
    testTitle.style.color = 'Yellow';
    testTitle.style.fontSize ='40px';
    testTitle.style.backgroundColor ='black';

    let usedStyle = getComputedStyle(testTitle);
    console.log(usedStyle.backgroundColor);
    console.log(usedStyle.color);
    console.log(usedStyle.fontSize);
    console.log(usedStyle.margin);
    testTitle.className = 'm-0';
    // testTitle.className +=' pt-3';
    testTitle.classList.add('add');
    testTitle.classList.add('new-class');
    testTitle.classList.add('pt-4', 'fs-4', 'bg-danger');
    testTitle.classList.remove('add');
    testTitle.classList.remove('new-class', 'fs-4');
    testTitle.classList.replace('bg-danger', 'bg-info');
    console.log(testTitle.classList.contains('test-bg'));
    console.log(testTitle.classList.contains('bg-info'));
    console.log(testTitle.classList);




};