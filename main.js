let myLibrary = [];

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
    console.log(this.read);
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

checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
        radioState = "Read";
    } else if (!checkbox.checked) {
        radioState = "Not read";
    }
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
        readBtn.classList.add("fa-solid");
        readBtn.classList.add("fa-book");
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
    checkbox.checked = false;

    backDrop.style.visibility = "visible";
    form.style.display = "flex";
}
