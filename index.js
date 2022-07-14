const booksGrid = document.querySelector(".booksGrid");
const addBookBtn = document.querySelector(".addBookBtn");
const addBookModal = document.querySelector(".addBook");
const addBookForm = document.querySelector(".form");
const overlay = document.querySelector("#overlay");

let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;

  this.addBook = () => {
    myLibrary.push(this);
  };

  this.removeBook = () => {
    myLibrary = myLibrary.filter((book) => {
      return book.title !== this.title || book.author !== this.author;
    });
  };

  this.toggleReadStatus = () => {
    this.haveRead = this.haveRead ? false : true;
  };
}

function displayBooks() {
  booksGrid.innerHTML = "";
  myLibrary.forEach((book) => {
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

    haveRead.addEventListener("click", () => {
      book.toggleReadStatus();
      displayBooks();
    });

    remove.addEventListener("click", () => {
      book.removeBook();
      displayBooks();
    });

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(haveRead);
    bookDiv.appendChild(remove);

    booksGrid.appendChild(bookDiv);
  });
}

function formPopUp() {
  addBookModal.classList.add("active");
  overlay.classList.add("active");
}

function formGoAway() {
  addBookForm.reset();
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
}

addBookBtn.addEventListener("click", () => {
  formPopUp();
});

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBook = new Book(
    e.target.title.value,
    e.target.author.value,
    e.target.pages.value,
    e.target.haveRead.checked
  );
  newBook.addBook();
  displayBooks();
  formGoAway();
});
