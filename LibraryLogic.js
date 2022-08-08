let myLibrary = [];
var body = document.querySelector('body');
var main = document.querySelector('main');
var container = document.querySelector('.container');
var form = document.querySelector('#btnsubmit');
var showBtn = document.querySelector('.activeBtn');
var mainForm = document.querySelector('form');
var librarySection = document.querySelector('.container');

showBtn.addEventListener('click', () => {
    mainForm.classList.toggle('hideClass');
    
    if(mainForm.className == 'hideClass'){
        main.style.opacity = '1';
    } else {
        main.style.opacity = '0.5';
    }
});

function Book(author, title, numberOfPages){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

form.addEventListener('click', () => {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const numberOP = document.querySelector('#numberOfPages').value;

    addBookToLibrary(author, title, numberOP);
});

function addBookToLibrary(author, title, numberOP){

    myLibrary.push(new Book(
        author,
        title,
        numberOP
    ));

    updatePage(author, title, numberOP);
    
    console.log(myLibrary);
    console.log(document.querySelector('#author').value);
    console.log(document.querySelector('#title').value);
    console.log(document.querySelector('#numberOfPages').value);
}

function updatePage(author, title, numberOP){
    let mainCell = document.createElement('div');
    let authorChild = document.createElement('p');
    let titleChild = document.createElement('p');
    let numberOPChild = document.createElement('p');

    mainCell.appendChild(authorChild).textContent = author;
    mainCell.appendChild(titleChild).textContent = title;
    mainCell.appendChild(numberOPChild).textContent = numberOP;
    
    container.appendChild(mainCell);
}

addBookToLibrary('ALTIN', 'SYLEJMANI', '22');
