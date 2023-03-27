let myLibrary = [
  {
    title: "kakka",
    author: "minä",
    pages: 20,
    read: true,
  },
];

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

function loopMyLibrary() {}
