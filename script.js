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

    // Add Title to the book card
    const booktitle = document.createElement("p");
    booktitle.classList.add('title');
    booktitle.textContent = 'TITLE OF BOOK'; // TESTING TITLE
    newbook.appendChild(booktitle);

    // Add Author to the book card
    const bookauthor = document.createElement("p");
    bookauthor.classList.add('description');
    bookauthor.textContent = 'AUTHOR OF BOOK'; // TESTING AUTHOR
    newbook.appendChild(bookauthor);

    // Add Page Count to the book card
    const bookpages = document.createElement("p");
    bookpages.classList.add('description');
    bookpages.textContent = 'PAGES OF BOOK'; // TESTING PAGES
    newbook.appendChild(bookpages);

    // Add remove icon to the book card 
    const bookaction = document.createElement("div");
    bookaction.classList.add('actions');
    const removeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const removePath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    removeIcon.setAttribute('viewBox', '0 0 24 24');
    removePath.setAttribute(
      'd',
      'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
    );
    removeIcon.appendChild(removePath);
    bookaction.appendChild(removeIcon);
    newbook.appendChild(bookaction);
    layoutarea.appendChild(newbook); // Add card to the layout 

    // Remove function for card 
    bookaction.addEventListener("click", function () {
      console.log('Remove button pressed');
      newbook.remove();
    });

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
