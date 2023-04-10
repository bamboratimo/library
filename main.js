let myLibrary = [];
let bookTitle;
let bookAuthor;
let bookPages;
let bookRead;

let booksCont = document.querySelector(".books-cont");

let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    form.style.display = "none";
    backDrop.style.visibility = "hidden";
});

let checkbox = document.querySelector(".read-book");

let backDrop = document.querySelector(".modal-backdrop");

let form = document.querySelector(".book-form");
form.addEventListener("submit", addBookToLibrary);

let newBook = document.querySelector(".new-book-btn");
newBook.addEventListener("click", displayForm);

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
    form.style.display = "none";
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read;
    if (checkbox.checked) {
        read = "Read";
    } else if (!checkbox.checked) {
        read = "Not read";
    }
    myLibrary.push(new Book(title, author, pages, read));
    backDrop.style.visibility = "hidden";
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

        bookTitle = document.createElement("p"); //
        bookTitle.textContent = book.title;
        div.appendChild(bookTitle);

        bookAuthor = document.createElement("p"); //
        bookAuthor.textContent = book.author;
        div.appendChild(bookAuthor);

        bookPages = document.createElement("p"); //
        bookPages.textContent = book.pages + " pages";
        div.appendChild(bookPages);

        bookRead = document.createElement("p"); //
        bookRead.textContent = book.read;
        bookRead.style.fontWeight = "bold";
        div.appendChild(bookRead);

        if (book.read == "Read") {
            bookRead.style.color = "#22c55e";
        } else if (book.read) {
            bookRead.style.color = "#ef4444";
        }

        div.dataset.indeksi = index;
        let deleteBtn = document.createElement("i");
        let readBtn = document.createElement("i");
        readBtn.classList.add("fa-solid");
        readBtn.classList.add("fa-book");
        deleteBtn.classList.add("fa-trash");
        deleteBtn.classList.add("fa-solid");

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
    checkbox.checked = false;

    backDrop.style.visibility = "visible";
    form.style.display = "flex";
}
