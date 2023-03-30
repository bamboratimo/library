let myLibrary = [
    {
        title: "Taru sormusten herrasta",
        author: "J.R.R. Tolkien",
        pages: 2000,
        read: true,
    },
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 1000,
        read: false,
    },
];

let form = document.querySelector(".book-form");
form.style.visibility = "hidden";

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function loopMyLibrary() {
    let booksContainer = document.querySelector(".books-cont");
    myLibrary.forEach((book) => {
        let div = document.createElement("div");
        for (let key in book) {
            let p = document.createElement("p");
            p.textContent = key + ": " + book[key];
            div.appendChild(p);
            div.classList.add("book-card");
            booksContainer.appendChild(div);
        }
    });
}
addBookToLibrary(new Book("Arikka56", "Helitys", 10, true));
loopMyLibrary();

let newBook = document.querySelector(".new-book-btn");
let submitBtn = document.querySelector(".submit-btn");

function submitForm(e) {
    e.preventDefault();
    form.style.visibility = "hidden";
}
form.addEventListener("submit", submitForm);

function displayForm() {
    form.style.visibility = "visible";
}
newBook.addEventListener("click", displayForm);
