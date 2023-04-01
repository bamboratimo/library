let myLibrary = [];

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

function addBookToLibrary(e) {
    e.preventDefault();
    form.style.visibility = "hidden";
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    myLibrary.push(new Book(title, author, pages));
    loopMyLibrary();
}

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
        let deleteBtn = document.createElement("div");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        for (let key in book) {
            let p = document.createElement("p");
            p.textContent = key + ": " + book[key];
            div.appendChild(p);
        }
        div.classList.add("book-card");
        booksContainer.appendChild(div);
        div.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", deleteCard);
    });
}

function displayForm() {
    let fields = document.querySelectorAll(".input-field");
    fields.forEach((field) => {
        field.value = "";
    });
    form.style.visibility = "visible";
    let radioYes = document.querySelector(".radio-yes");
    radioYes.checked = true;
}
