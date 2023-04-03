let myLibrary = [];

let radioState;

let form = document.querySelector(".book-form");
form.addEventListener("submit", addBookToLibrary);

let newBook = document.querySelector(".new-book-btn");
newBook.addEventListener("click", displayForm);

let submitBtn = document.querySelector(".submit-btn");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeRead = function () {
    if (this.read === "Read") {
        this.read = "Not read";
    } else if (this.read === "Not read") {
        this.read = "Read";
    }
    loopMyLibrary();
};

function addBookToLibrary(e) {
    e.preventDefault();
    form.style.visibility = "hidden";
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read = radioState;
    myLibrary.push(new Book(title, author, pages, read));
    loopMyLibrary();
}

let radioButtons = document.querySelectorAll(".radio");
radioButtons.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        if (e.target.value == "read") {
            radioState = "Read";
        } else if ((e.target.value = "not-read")) {
            radioState = "Not read";
        }
    });
});

function loopMyLibrary() {
    let cards = document.querySelectorAll(".book-card");
    cards.forEach((card) => {
        card.remove();
    });
    createCard();
}

function deleteCard(e) {
    let element = e.target.parentElement;
    let index = element.dataset.indeksi;
    myLibrary.splice(index, 1);
    loopMyLibrary();
}

function createCard() {
    let booksContainer = document.querySelector(".books-cont");
    myLibrary.forEach((book, index) => {
        let div = document.createElement("div");
        div.dataset.indeksi = index;
        let deleteBtn = document.createElement("i");
        let readBtn = document.createElement("i");
        //readBtn.classList.add("read-btn");
        readBtn.classList.add("fa-solid");
        readBtn.classList.add("fa-book");
        //readBtn.textContent = "Toggle";
        //deleteBtn.textContent = "X";
        deleteBtn.classList.add("fa-trash");
        deleteBtn.classList.add("fa-solid");
        for (let key in book) {
            if (book.hasOwnProperty(key)) {
                let p = document.createElement("p");
                p.textContent = book[key];
                div.appendChild(p);
            }
        }
        div.classList.add("book-card");
        booksContainer.appendChild(div);
        div.appendChild(deleteBtn);
        div.appendChild(readBtn);
        deleteBtn.addEventListener("click", deleteCard);
        readBtn.addEventListener("click", (e) => {
            let element = e.target.parentElement;
            let index = element.dataset.indeksi;
            myLibrary[index].changeRead();
        });
    });
}

function displayForm() {
    let fields = document.querySelectorAll(".input-field");
    fields.forEach((field) => {
        field.value = "";
    });
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    form.style.visibility = "visible";
}
