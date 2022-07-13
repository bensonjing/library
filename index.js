const library = document.querySelector(".library");

let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead) {
  const newBook = Book(title, author, pages, haveRead);
  myLibrary.push(newBook);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    console.log(myLibrary);
    console.log(book);
    const bookDiv = document.createElement("div");

    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const haveRead = document.createElement("button");
    const remove = document.createElement("button");

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    haveRead.textContent = book.haveRead ? "Read" : "Not Read";
    remove.textContent = "Remove";

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(haveRead);
    bookDiv.appendChild(remove);

    library.appendChild(bookDiv);
  });
}
