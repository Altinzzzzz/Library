let myLibrary = [];
var form = document.querySelector('#btnsubmit');
var showBtn = document.querySelector('.activeBtn');
var mainForm = document.querySelector('form');

showBtn.addEventListener('click', () => {
    mainForm.classList.toggle('hideClass');
    console.log(mainForm.classList);
});

function Book(author, title, numberOfPages){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

form.addEventListener('click', () => {
    console.log(document.querySelector('#author').value);
    console.log(document.querySelector('#title').value);
    console.log(document.querySelector('#numberOfPages').value);

    myLibrary.push(new Book(
        document.querySelector('#author').value,
        document.querySelector('#title').value,
        document.querySelector('#numberOfPages').value));
    console.log(myLibrary);
});

function addBookToLibrary(){

}
