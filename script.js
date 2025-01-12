/* Script for Library */

const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
      if (this.read) {
        console.log(this.name + ' by ' + this.author + ', ' + this.pages + ' pages, already read');
        return;
      }
      console.log(this.name + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet');
      return;
    };
  }

  Book.prototype.testProto = function() {
    console.log("Proto test! " + this.name);
 };


// Create new book cards 
const createBook = document.querySelector('.createBook');
createBook.addEventListener("click", function () {
  console.log('new button pressed');
  addBookToLibrary();
});

function addBookToLibrary() {
    // Create dialogue box with form element 

    // Input Name

    // Input Author 

    // Input Pages

    // Input Read state 

    // Remove dialogue box when done

    // Create Book from form input 
    const layoutarea = document.querySelector('.layout');
    const newbook = document.createElement("div");
    newbook.classList.add('card');
    const booktitle = document.createElement("p");
    booktitle.classList.add('title');
    booktitle.textContent = 'TITLE OF BOOK'; // TESTING TITLE
    newbook.appendChild(booktitle);
    const bookauthor = document.createElement("p");
    bookauthor.classList.add('description');
    bookauthor.textContent = 'AUTHOR OF BOOK'; // TESTING AUTHOR
    newbook.appendChild(bookauthor);
    const bookpages = document.createElement("p");
    bookpages.classList.add('description');
    bookpages.textContent = 'PAGES OF BOOK'; // TESTING PAGES
    newbook.appendChild(bookpages);
    layoutarea.appendChild(newbook);

    // Create card from Book 

    // Add to page 

    // Remove function for card 

}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(Object.getPrototypeOf(book1) === Book.prototype); // returns true
book1.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, already read"
book1.testProto();
const book2 = new Book('Test Book', 'Big Boi', 321, false);
console.log(Object.getPrototypeOf(book2) === Book.prototype);
book2.info();
book2.testProto();
  
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype); // true
console.log(book1.valueOf()); // Output: Book {name: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: true, info: ƒ}
console.log(book1.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
