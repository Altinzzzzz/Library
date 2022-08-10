let myLibrary = [];
var section = document.querySelector('section');
var container = document.querySelector('.container');
var form = document.querySelector('#btnsubmit');
var showBtn = document.querySelector('.activeBtn');
var mainForm = document.querySelector('form');
var removeForm = document.querySelector('#removeForm');
var count = 0;


showBtn.addEventListener('click', () => {
    mainForm.classList.toggle('hideClass');
    
    if(mainForm.className != 'hideClass'){
        section.style.display = 'none';
    }
});

removeForm.addEventListener('click', () => {
    mainForm.classList.toggle('hideClass');
    section.style.display = 'block';
});


function Book(title, author, numberOfPages, read){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, numberOP, read){
    myLibrary.push(new Book(
        title,
        author,
        numberOP,
        read,
    ));

    updatePage(title, author, numberOP, read);
}

form.addEventListener('click', () => {

    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    const numberOP = document.querySelector('#numberOfPages').value;
    const read = document.querySelector('#checkBox').checked;

    let lowerT = title.toLowerCase();
    title = title.charAt(0).toUpperCase() + lowerT.slice(1);
    
    let lowerA = author.toLowerCase();
    author = author.charAt(0).toUpperCase() + lowerA.slice(1);

    if(!validate(title, author, numberOP)){
        return;
    }

    addBookToLibrary(title, author, numberOP, read);
});

// E kisha ba me prototip me ndrru ama masi qe se kom ktu me thirr me liber del ma e komplikuar 

function updatePage(title, author, numberOP, read){
    let mainCell = document.createElement('div');
    let titleChild = document.createElement('p');
    let authorChild = document.createElement('p');
    let numberOPChild = document.createElement('p');
    let readChild = document.createElement('button');
    let removeBtn = document.createElement('button');

    mainCell.appendChild(titleChild).textContent = `'${title}'`;
    mainCell.appendChild(authorChild).textContent = author;
    mainCell.appendChild(numberOPChild).textContent = numberOP;

    if(read === false){
        readChild.textContent = 'Not read';
        readChild.classList.add('removeButton');
    } else {
        readChild.textContent = 'Read';
        readChild.classList.add('readClass');
    }

    readChild.addEventListener('click', () => {

        if(readChild.classList == 'readClass'){
            readChild.classList.remove('readClass');
            readChild.classList.add('removeButton');
            readChild.textContent = 'Not read';
        } else {
            readChild.classList.remove('removeButton');
            readChild.classList.add('readClass');
            readChild.textContent = 'Read';
        }
        
        for(let number = 0; number < myLibrary.length; number++){
            if(myLibrary[number].title == title){
                if(myLibrary[number].read == false){
                    myLibrary[number].read = true;
                } else {
                    myLibrary[number].read = false;
                }
            }    
        }
    });

    mainCell.appendChild(readChild);

    removeBtn.addEventListener('click', function(){
        let number;

        loop:
        for(number = 1; number < myLibrary.length; number++){
            if(title == myLibrary[number].title){
                break loop;
            }
        }
        
        myLibrary.splice(number, 1);
        if(this.parentElement.firstElementChild.textContent !== 'Odin'){
            console.log('yo');
        } else {
            this.parentElement.remove();
        }
    });
    
    removeBtn.classList.add('removeButton');
    mainCell.appendChild(removeBtn).textContent = 'Remove';
    
    container.appendChild(mainCell);
}

function validate(title, author, numberOP){

    if(title.length < 2 || title.length > 50){
        console.log('false te titulli');
        return false;
    }

    if(author.length < 5 || author.length > 40){
        console.log('false te author');
        return false;
    }
    
    for(let number = 0; number < myLibrary.length; number++){
        
        if(title == myLibrary[number].title){
            console.log('false te loop author');
            return false;
        }
    }

    if(numberOP < 50 || numberOP > 50000){
        console.log('false te number');
        return false;
    }

    return true;
}

addBookToLibrary('Odin', 'Project', 90, false, count++);
