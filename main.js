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

console.log(myLibrary[0].title);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + " pages, " + read;
    };
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function loopMyLibrary() {
    let booksContainer = document.querySelector(".books-cont");
    myLibrary.forEach((book) => {
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        p1.textContent = book.title;
        p2.textContent = book.author;
        p3.textContent = book.pages;
        p4.textContent = book.read;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.classList.add("book-card");
        booksContainer.appendChild(div);
    });
}

loopMyLibrary();
